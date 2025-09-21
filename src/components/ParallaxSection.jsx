import { useState, useEffect, useRef } from 'react'

const ParallaxSection = ({ 
  children, 
  backgroundImage, 
  speed = 0.5, 
  className = '',
  overlay = true 
}) => {
  const [offsetY, setOffsetY] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        
        // Only apply parallax when element is in viewport
        if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
          setOffsetY(rate)
        }
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll)
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [speed])

  return (
    <section 
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transform: `translateY(${offsetY}px)`,
            transformStyle: 'preserve-3d'
          }}
        />
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-800/50 to-transparent" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

export default ParallaxSection
