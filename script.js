document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const mobileMenuClose = document.querySelector(".mobile-menu-close")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active")
  })

  mobileMenuClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
  })

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
    })
  })

  // Scroll animation
  const fadeElements = document.querySelectorAll(".fade-in")

  function checkFade() {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("active")
      }
    })
  }

  window.addEventListener("scroll", checkFade)
  checkFade() // Check on load

  // Progress bars animation
  const progressBars = document.querySelectorAll(".progress-fill")

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const width = bar.getAttribute("data-width")
      setTimeout(() => {
        bar.style.width = width + "%"
      }, 500)
    })
  }

  window.addEventListener("scroll", () => {
    const skillsSection = document.getElementById("skills")
    if (skillsSection.getBoundingClientRect().top < window.innerHeight - 100) {
      animateProgressBars()
    }
  })

  // Contact form submission
  const contactForm = document.getElementById("contactForm")
  const submitBtn = document.getElementById("submitBtn")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Disable submit button and show loading state
      submitBtn.disabled = true
      submitBtn.textContent = "Sending..."

      // Simulate form submission (replace with actual form submission)
      setTimeout(() => {
        // Show success message
        alert(`Thank you ${name}! Your message has been sent successfully.`)

        // Reset form
        contactForm.reset()

        // Reset button
        submitBtn.disabled = false
        submitBtn.textContent = "Send Message"
      }, 1500)
    })
  }

  // Initialize particles.js
  if (typeof particlesJS !== "undefined") {
    window.particlesJS = particlesJS // Make particlesJS available globally
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: ["#00f3ff", "#9d4edd", "#ff00ff"],
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.3,
          random: true,
        },
        size: {
          value: 3,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce",
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      retina_detect: true,
    })
  }
})
