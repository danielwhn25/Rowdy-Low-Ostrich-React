import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-root">
        <div className="navigation-container">
          <div className="navigation-inner">
            <a href="Homepage">
              <div
                aria-label="LockHeed Martin Home"
                className="navigation-logo"
              >
                <div className="navigation-logo-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                      <rect x="4" y="4" rx="2" width="16" height="16"></rect>
                      <rect x="8" y="8" rx="1" width="8" height="8"></rect>
                    </g>
                  </svg>
                </div>
                <span className="section-subtitle">LockHeed Martin</span>
              </div>
            </a>
            <div className="navigation-desktop-links">
              <a href="#projects">
                <div className="navigation-link">
                  <span>Projects</span>
                </div>
              </a>
              <a href="#skills">
                <div className="navigation-link">
                  <span>Skills</span>
                </div>
              </a>
              <a href="#about">
                <div className="navigation-link">
                  <span>About</span>
                </div>
              </a>
              <a href="#contact">
                <div className="btn-sm btn-primary btn">
                  <span>Contact Me</span>
                </div>
              </a>
            </div>
            <button
              id="nav-toggle"
              aria-label="Toggle navigation"
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 5h16M4 12h16M4 19h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        id="mobile-menu"
        aria-hidden="true"
        className="navigation-mobile-overlay"
      >
        <div className="navigation-mobile-header">
          <a href="Homepage">
            <div className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                    <rect x="4" y="4" rx="2" width="16" height="16"></rect>
                    <rect x="8" y="8" rx="1" width="8" height="8"></rect>
                  </g>
                </svg>
              </div>
              <span className="section-subtitle">LockHeed Martin</span>
            </div>
          </a>
          <button
            id="nav-close"
            aria-label="Close navigation"
            className="navigation-mobile-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                <path d="M3 9h18M9 16l3-3l3 3"></path>
              </g>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <div className="navigation-mobile-links">
            <a href="#projects">
              <div className="navigation-mobile-link">
                <span>Projects</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
            <a href="#skills">
              <div className="navigation-mobile-link">
                <span>Skills</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
            <a href="#about">
              <div className="navigation-mobile-link">
                <span>About</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
            <a href="#contact">
              <div className="navigation-mobile-link">
                <span>Contact</span>
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m9 18l6-6l-6-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="navigation-mobile-footer">
            <p className="section-content">
              UBC Electrical Engineering &apos;27
            </p>
            <div className="navigation-status-badge">
              <span className="status-dot"></span>
              <span className="section-content">Available for Internships</span>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.2);
opacity: 0.7;}
100% {transform: scale(1);
opacity: 1;}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("nav-toggle")
  const closeBtn = document.getElementById("nav-close")
  const mobileMenu = document.getElementById("mobile-menu")
  const body = document.body

  function openMenu() {
    mobileMenu.style.display = "flex"
    setTimeout(() => {
      mobileMenu.classList.add("is-active")
      toggleBtn.setAttribute("aria-expanded", "true")
      mobileMenu.setAttribute("aria-hidden", "false")
      body.style.overflow = "hidden"
    }, 10)
  }

  function closeMenu() {
    mobileMenu.classList.remove("is-active")
    toggleBtn.setAttribute("aria-expanded", "false")
    mobileMenu.setAttribute("aria-hidden", "true")
    body.style.overflow = ""

    setTimeout(() => {
      if (!mobileMenu.classList.contains("is-active")) {
        mobileMenu.style.display = "none"
      }
    }, 400)
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  const mobileLinks = mobileMenu.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu.classList.contains("is-active")) {
      closeMenu()
    }
  })

  let lastScroll = 0
  const navRoot = document.querySelector(".navigation-root")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navRoot.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
      navRoot.style.transform = "translateY(-100%)"
    } else {
      navRoot.style.transform = "translateY(0)"
    }

    lastScroll = currentScroll
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
