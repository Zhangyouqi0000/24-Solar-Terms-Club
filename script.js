// Loading Screen
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen")

  // Hide loading screen after 2 seconds
  setTimeout(() => {
    loadingScreen.classList.add("hidden")
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }, 2000)
})

// Scroll Reveal Animation
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0
        setTimeout(() => {
          entry.target.classList.add("revealed")
        }, delay)
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".scroll-reveal").forEach((el) => {
    observer.observe(el)
  })
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Parallax Effect for Hero Background
function initParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroBackground = document.querySelector(".hero-background")
    if (heroBackground) {
      heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`
    }
  })
}

// Button Hover Effects
function initButtonEffects() {
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px) scale(1.05)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector(".header")
  let lastScrollY = window.scrollY

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY

    if (currentScrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)"
    }

    lastScrollY = currentScrollY
  })
}

// Animated Counter for Stats
function initCounters() {
  const counters = document.querySelectorAll(".stat-number")

  const observerOptions = {
    threshold: 0.5,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target
        const target = counter.textContent

        if (!isNaN(target)) {
          animateCounter(counter, 0, Number.parseInt(target), 2000)
        }

        observer.unobserve(counter)
      }
    })
  }, observerOptions)

  counters.forEach((counter) => {
    observer.observe(counter)
  })
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now()

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const current = Math.floor(start + (end - start) * easeOutCubic(progress))
    element.textContent = current + (end > 100 ? "+" : "")

    if (progress < 1) {
      requestAnimationFrame(updateCounter)
    }
  }

  requestAnimationFrame(updateCounter)
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

// Particle Animation Enhancement
function enhanceParticles() {
  const particles = document.querySelectorAll(".particle")

  particles.forEach((particle, index) => {
    // Random positioning
    particle.style.left = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 5 + "s"
    particle.style.animationDuration = 8 + Math.random() * 4 + "s"

    // Random colors
    const colors = ["var(--primary)", "var(--secondary)", "var(--accent)"]
    particle.style.background = colors[Math.floor(Math.random() * colors.length)]
  })
}

// Initialize all functions
document.addEventListener("DOMContentLoaded", () => {
  initScrollReveal()
  initSmoothScrolling()
  initParallax()
  initButtonEffects()
  initHeaderScroll()
  initCounters()
  enhanceParticles()
})

// Add resize handler for responsive adjustments
window.addEventListener("resize", () => {
  // Recalculate any size-dependent animations
  enhanceParticles()
})

// Performance optimization: throttle scroll events
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments
    
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Apply throttling to scroll-heavy functions
window.addEventListener(
  "scroll",
  throttle(() => {
    // Throttled scroll functions can be added here
  }, 16),
) // ~60fps
