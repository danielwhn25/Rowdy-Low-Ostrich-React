import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand-column">
              <div className="footer-logo-wrapper">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="var(--color-accent)"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="footer-logo-icon"
                >
                  <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path>
                  <rect x="4" y="4" rx="2" width="16" height="16"></rect>
                  <rect x="8" y="8" rx="1" width="8" height="8"></rect>
                </svg>
                <span className="footer-brand-name">LockHeed Martin</span>
              </div>
              <p className="footer-brand-description section-content">
                Electrical Engineering Student at UBC. Focused on VLSI design,
                hardware acceleration, and the future of silicon architecture.
              </p>
              <div className="footer-social-links">
                <a href="https://linkedin.com">
                  <div aria-label="LinkedIn" className="footer-social-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                      <circle r="2" cx="4" cy="4"></circle>
                    </svg>
                  </div>
                </a>
                <a href="https://github.com">
                  <div aria-label="GitHub" className="footer-social-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </div>
                </a>
                <a href="mailto:contact@example.com?subject=">
                  <div aria-label="Email" className="footer-social-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                      <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-links-grid">
              <div className="footer-column">
                <h3 className="section-subtitle footer-column-title">
                  Navigation
                </h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="index.html">
                      <div className="footer-nav-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#projects">
                      <div className="footer-nav-link">
                        <span>Projects</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#skills">
                      <div className="footer-nav-link">
                        <span>Skills</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#about">
                      <div className="footer-nav-link">
                        <span>About Me</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="section-subtitle footer-column-title">
                  Project Showcase
                </h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>FPGA Hardware Accel</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>RISC-V Core Design</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Analog IC Layout</span>
                      </div>
                    </a>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="footer-nav-link">
                        <span>Embedded Systems</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h3 className="section-subtitle footer-column-title">
                  Connect
                </h3>
                <ul className="footer-nav-list">
                  <li className="footer-nav-item">
                    <span className="footer-info-label">Location</span>
                    <span className="footer-info-value">Vancouver, BC</span>
                  </li>
                  <li className="footer-nav-item">
                    <span className="footer-info-label">University</span>
                    <span className="footer-info-value">UBC Engineering</span>
                  </li>
                  <li className="footer-nav-item">
                    <a href="#">
                      <div className="btn-outline btn-sm footer-cta btn">
                        <span>Download Resume</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">
                &amp;copy; 2026 LockHeed Martin. Silicon-first Engineering.
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Use</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-parallax">
(function(){
  /* Parallax effect for the footer background gradient */
  window.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer-root")
    if (!footer) return

    const rect = footer.getBoundingClientRect()
    const viewportHeight = window.innerHeight

    if (rect.top < viewportHeight) {
      const scrollPercent = (viewportHeight - rect.top) / (viewportHeight + rect.height)
      const moveY = scrollPercent * 40 /* Subtle movement */

      footer.style.setProperty("--footer-parallax-y", \`\${moveY}px\`)
      /* We update the background position via style property if needed, 
       but for this level we keep it simple with CSS transitions */
    }
  })

  /* Staggered reveal for footer links on scroll */
  const observerOptions = {
    threshold: 0.1,
  }

  const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const links = entry.target.querySelectorAll(".footer-nav-item")
        links.forEach((link, index) => {
          link.style.opacity = "0"
          link.style.transform = "translateY(10px)"
          link.style.transition = \`all 0.4s ease \${index * 0.1}s\`

          requestAnimationFrame(() => {
            link.style.opacity = "1"
            link.style.transform = "translateY(0)"
          })
        })
        footerObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const footerGrid = document.querySelector(".footer-links-grid")
  if (footerGrid) {
    footerObserver.observe(footerGrid)
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
