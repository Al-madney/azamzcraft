// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close menu when link is clicked
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth Scrolling
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

// Project Filter
const filterButtons = document.querySelectorAll(".filter-btn")
const projectCards = document.querySelectorAll(".project-card")

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    // Add active class to clicked button
    button.classList.add("active")

    const filterValue = button.getAttribute("data-filter")

    // Filter projects
    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category")

      if (filterValue === "all" || filterValue === category) {
        card.style.display = "block"
        card.style.animation = "fadeInUp 0.5s ease-out"
      } else {
        card.style.display = "none"
      }
    })
  })
})

const profileImageInput = document.getElementById("profileImageInput")
const profileImageContainer = document.querySelector(".profile-image-container")

if (profileImageInput) {
  profileImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const placeholder = profileImageContainer.querySelector(".profile-image-placeholder")
        let profileImage = profileImageContainer.querySelector("#profileImage")

        if (!profileImage) {
          profileImage = document.createElement("img")
          profileImage.id = "profileImage"
          profileImage.alt = "Profile"
          profileImage.className = "profile-image"
          profileImageContainer.appendChild(profileImage)
        }

        profileImage.src = event.target.result
        profileImage.style.display = "block"
        if (placeholder) placeholder.style.display = "none"
      }
    }
  })
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()

    // Get form values
    const name = this.querySelector('input[type="text"]').value
    const email = this.querySelector('input[type="email"]').value
    const message = this.querySelector("textarea").value

    // Show success message
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon!`)

    // Reset form
    this.reset()
  })
}

// Add scroll animation to elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease-out"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe service cards and project cards
document.querySelectorAll(".service-card, .project-card, .about-content").forEach((el) => {
  observer.observe(el)
})
