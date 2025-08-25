import React, { useEffect, useRef } from 'react'

function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursorEl = document.createElement('div')
    cursorEl.setAttribute('aria-hidden', 'true')
    cursorEl.style.position = 'fixed'
    cursorEl.style.zIndex = '9999'
    cursorEl.style.width = '14px'
    cursorEl.style.height = '14px'
    cursorEl.style.borderRadius = '50%'
    cursorEl.style.pointerEvents = 'none'
    cursorEl.style.transform = 'translate(-50%, -50%)'
    cursorEl.style.transition = 'opacity 150ms ease, background-color 120ms ease, box-shadow 120ms ease, border-color 120ms ease'
    cursorEl.style.opacity = '0'
    cursorEl.style.border = '1px solid rgba(255,255,255,0.35)'
    document.body.appendChild(cursorEl)
    cursorRef.current = cursorEl

    // Inject ripple animation styles once
    const styleId = 'custom-cursor-ripple-style'
    if (!document.getElementById(styleId)) {
      const styleTag = document.createElement('style')
      styleTag.id = styleId
      styleTag.textContent = `
        @keyframes cursor-ripple-wave { 
          0% { transform: translate(-50%, -50%) scale(0.2); opacity: 0.35; } 
          70% { opacity: 0.18; } 
          100% { transform: translate(-50%, -50%) scale(6); opacity: 0; } 
        }
        .cursor-ripple { 
          position: fixed; 
          pointer-events: none; 
          border-radius: 50%; 
          width: 18px; 
          height: 18px; 
          left: 0; 
          top: 0; 
          z-index: 9998; 
          animation: cursor-ripple-wave 800ms ease-out forwards; 
        }
      `
      document.head.appendChild(styleTag)
    }

    const parseColor = (color) => {
      // Supports rgb/rgba strings. Fallback to the app background rgb(2,21,49)
      if (!color || color === 'transparent') return { r: 2, g: 21, b: 49, a: 1 }
      const m = color.match(/rgba?\(([^)]+)\)/i)
      if (!m) return { r: 2, g: 21, b: 49, a: 1 }
      const parts = m[1].split(',').map((v) => v.trim())
      const r = parseInt(parts[0], 10)
      const g = parseInt(parts[1], 10)
      const b = parseInt(parts[2], 10)
      const a = parts[3] !== undefined ? parseFloat(parts[3]) : 1
      return { r: isNaN(r) ? 2 : r, g: isNaN(g) ? 21 : g, b: isNaN(b) ? 49 : b, a: isNaN(a) ? 1 : a }
    }

    const rgbToHsl = ({ r, g, b }) => {
      const rn = r / 255, gn = g / 255, bn = b / 255
      const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn)
      let h = 0, s = 0
      const l = (max + min) / 2
      if (max !== min) {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
          case rn: h = (gn - bn) / d + (gn < bn ? 6 : 0); break
          case gn: h = (bn - rn) / d + 2; break
          case bn: h = (rn - gn) / d + 4; break
        }
        h /= 6
      }
      return { h, s, l }
    }

    const hslToRgb = ({ h, s, l }) => {
      let r, g, b
      if (s === 0) {
        r = g = b = l
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1
          if (t > 1) t -= 1
          if (t < 1 / 6) return p + (q - p) * 6 * t
          if (t < 1 / 2) return q
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
          return p
        }
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s
        const p = 2 * l - q
        r = hue2rgb(p, q, h + 1 / 3)
        g = hue2rgb(p, q, h)
        b = hue2rgb(p, q, h - 1 / 3)
      }
      return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) }
    }

    const brighten = (rgb) => {
      const hsl = rgbToHsl(rgb)
      // Slightly increase lightness and saturation for "same but brighter" look
      const l = Math.min(0.92, hsl.l + 0.18)
      const s = Math.min(1, hsl.s + 0.1)
      const { r, g, b } = hslToRgb({ h: hsl.h, s, l })
      return { r, g, b }
    }

    const effectiveBgAtPoint = (x, y) => {
      let el = document.elementFromPoint(x, y)
      let iterations = 0
      while (el && iterations < 10) {
        const cs = window.getComputedStyle(el)
        const bgc = cs.backgroundColor
        const parsed = parseColor(bgc)
        // If alpha is not zero and not transparent, use it
        if (parsed.a > 0 && bgc !== 'transparent') return parsed
        el = el.parentElement
        iterations += 1
      }
      return { r: 2, g: 21, b: 49, a: 1 }
    }

    let pending = null
    let lastX = 0, lastY = 0
    let lastBase = { r: 2, g: 21, b: 49 }
    let lastBright = { r: 255, g: 255, b: 255 }

    const move = (e) => {
      lastX = e.clientX
      lastY = e.clientY
      if (pending) return
      pending = requestAnimationFrame(() => {
        pending = null
        if (!cursorRef.current) return
        const base = effectiveBgAtPoint(lastX, lastY)
        const bright = brighten(base)
        lastBase = base
        lastBright = bright
        cursorRef.current.style.left = `${lastX}px`
        cursorRef.current.style.top = `${lastY}px`
        cursorRef.current.style.backgroundColor = `rgba(${bright.r}, ${bright.g}, ${bright.b}, 0.9)`
        cursorRef.current.style.boxShadow = `0 0 12px rgba(${bright.r}, ${bright.g}, ${bright.b}, 0.6)`
        // Subtle border for contrast
        cursorRef.current.style.borderColor = `rgba(${base.r}, ${base.g}, ${base.b}, 0.35)`
      })
    }

    const show = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
    }
    const hide = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
    }

    const spawnRipple = (x, y) => {
      const ripple = document.createElement('div')
      ripple.className = 'cursor-ripple'
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      ripple.style.border = `2px solid rgba(${lastBright.r}, ${lastBright.g}, ${lastBright.b}, 0.6)`
      ripple.style.boxShadow = `0 0 10px rgba(${lastBright.r}, ${lastBright.g}, ${lastBright.b}, 0.35)`
      document.body.appendChild(ripple)
      const remove = () => {
        ripple.removeEventListener('animationend', remove)
        if (ripple.parentElement) ripple.parentElement.removeChild(ripple)
      }
      ripple.addEventListener('animationend', remove)
    }

    const click = (e) => {
      // Primary ripple
      spawnRipple(e.clientX, e.clientY)
      // Secondary, slightly delayed smaller ripple for layered wave feel
      setTimeout(() => spawnRipple(e.clientX, e.clientY), 90)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseenter', show)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mousedown', click)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseenter', show)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mousedown', click)
      if (pending) cancelAnimationFrame(pending)
      if (cursorRef.current) {
        document.body.removeChild(cursorRef.current)
        cursorRef.current = null
      }
    }
  }, [])

  return null
}

export default CustomCursor


