import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Rowdy Low Ostrich</title>
        <meta property="og:title" content="Rowdy Low Ostrich" />
        <link
          rel="canonical"
          href="https://rowdy-low-ostrich-6bfwq6.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <main className="page-container">
        <section className="hero-section">
          <div className="hero-media-wrapper">
            <video
              src="https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/2792370/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-container">
            <div className="hero-text-block">
              <h1 id="typing-name" className="home-hero-title hero-title"></h1>
              <p
                id="typing-about"
                className="home-hero-subtitle hero-subtitle"
              ></p>
              <div className="hero-actions">
                <a href="#projects">
                  <div className="btn-primary btn-lg btn">
                    <span>View My Systems</span>
                  </div>
                </a>
                <a href="#skills">
                  <div className="btn-outline btn-lg btn">
                    <span>Technical Stack</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="hero-scroll-indicator">
            <div className="mouse-icon"></div>
          </div>
        </section>
        <section id="skills" className="skills-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Technical Proficiency</h2>
              <p className="section-subtitle">
                Engineering high-performance hardware and low-latency firmware.
              </p>
            </div>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon-wrapper">
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
                <h3 className="skill-category">Hardware Design</h3>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span>FPGA/Verilog</span>
                  </li>
                  <li className="skill-item">
                    <span>PCB Layout (Altium)</span>
                  </li>
                  <li className="skill-item">
                    <span>VLSI Principles</span>
                  </li>
                </ul>
              </div>
              <div className="skill-card">
                <div className="skill-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="skill-category">Firmware &amp; OS</h3>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span>Embedded C/C++</span>
                  </li>
                  <li className="skill-item">
                    <span>RTOS Integration</span>
                  </li>
                  <li className="skill-item">
                    <span>Bare Metal Development</span>
                  </li>
                </ul>
              </div>
              <div className="skill-card">
                <div className="skill-icon-wrapper">
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
                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                      <circle r="3" cx="12" cy="12"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="skill-category">Tools &amp; Sim</h3>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span>ModelSim / Vivado</span>
                  </li>
                  <li className="skill-item">
                    <span>MATLAB / Simulink</span>
                  </li>
                  <li className="skill-item">
                    <span>LTSpice Analysis</span>
                  </li>
                </ul>
              </div>
              <div className="skill-card">
                <div className="skill-icon-wrapper">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 19h8M4 17l6-6l-6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="skill-category">Languages</h3>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span>SystemVerilog</span>
                  </li>
                  <li className="skill-item">
                    <span>Assembly (ARM/x86)</span>
                  </li>
                  <li className="skill-item">
                    <span>Python (Automation)</span>
                  </li>
                </ul>
              </div>
              <div className="skill-card">
                <div className="skill-icon-wrapper">
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
                      <path d="M5 6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"></path>
                      <path d="M9 9h6v6H9zm-6 1h2m-2 4h2m5-11v2m4-2v2m7 5h-2m2 4h-2m-5 7v-2m-4 2v-2"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="skill-category">Verification</h3>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span>UVM Methodology</span>
                  </li>
                  <li className="skill-item">
                    <span>Functional Coverage</span>
                  </li>
                  <li className="skill-item">
                    <span>Boundary Scan</span>
                  </li>
                </ul>
              </div>
              <div className="skill-card">
                <div className="skill-icon-wrapper">
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
                      <path d="m13 13.5l2-2.5l-2-2.5M21 21l-4.3-4.3M9 8.5L7 11l2 2.5"></path>
                      <circle r="8" cx="11" cy="11"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="skill-category">Protocols</h3>
                <ul className="skill-list">
                  <li className="skill-item">
                    <span>PCIe Gen 4/5</span>
                  </li>
                  <li className="skill-item">
                    <span>DDR4/5 Memory</span>
                  </li>
                  <li className="skill-item">
                    <span>I2C / SPI / UART</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">Ready for Impact</h2>
                <p className="section-content">
                  Currently seeking Summer 2026 internships in Silicon Design,
                  Hardware Engineering, or Aerospace Systems. Let&apos;s discuss
                  how my UBC engineering background can contribute to your next
                  breakthrough.
                </p>
                <div className="cta-actions">
                  <a href="#">
                    <div className="btn-lg btn-accent btn">
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
                          <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <path d="m7 10l5 5l5-5"></path>
                        </g>
                      </svg>
                      <span>
                        {' '}
                        Download Resume
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                  <a href="mailto:contact@ubc.edu?subject=">
                    <div className="btn-outline btn-lg btn">
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
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                      <span>
                        {' '}
                        Quick Contact
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="portfolio-section">
          <div className="section-header-full">
            <h2 className="section-title">Engineering Portfolio</h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img
                alt="RISC-V Processor Core"
                src="https://images.pexels.com/photos/1448561/pexels-photo-1448561.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-name">RISC-V Core</h3>
                <p className="portfolio-desc">
                  5-stage pipelined processor in SystemVerilog.
                </p>
                <a href="#">
                  <div className="btn-sm btn-accent btn">
                    <span>View Project</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="High-Speed PCB Design"
                src="https://images.pexels.com/photos/6755087/pexels-photo-6755087.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-name">Signal Integrity Lab</h3>
                <p className="portfolio-desc">
                  6-layer PCB optimized for 10Gbps signal paths.
                </p>
                <a href="#">
                  <div className="btn-sm btn-accent btn">
                    <span>View Project</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="Memory Controller"
                src="https://images.pexels.com/photos/4732936/pexels-photo-4732936.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-name">DDR4 Controller</h3>
                <p className="portfolio-desc">
                  Custom memory management unit for FPGA systems.
                </p>
                <a href="#">
                  <div className="btn-sm btn-accent btn">
                    <span>View Project</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="Avionics Integration"
                src="https://images.pexels.com/photos/6755065/pexels-photo-6755065.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-name">UAV Flight Controller</h3>
                <p className="portfolio-desc">
                  Embedded firmware for real-time sensor fusion.
                </p>
                <a href="#">
                  <div className="btn-sm btn-accent btn">
                    <span>View Project</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="Analog Filter Design"
                src="https://images.pexels.com/photos/6385894/pexels-photo-6385894.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-name">DSP Audio Engine</h3>
                <p className="portfolio-desc">
                  Real-time digital signal processing on ARM Cortex-M4.
                </p>
                <a href="#">
                  <div className="btn-sm btn-accent btn">
                    <span>View Project</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <img
                alt="GPU Architecture Study"
                src="https://images.pexels.com/photos/8108712/pexels-photo-8108712.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <h3 className="portfolio-name">Parallel Compute</h3>
                <p className="portfolio-desc">
                  CUDA-based simulation of neural network accelerators.
                </p>
                <a href="#">
                  <div className="btn-sm btn-accent btn">
                    <span>View Project</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="showcase-section">
          <div className="showcase-carousel">
            <div className="showcase-slide active">
              <div className="showcase-media">
                <video
                  src="https://videos.pexels.com/video-files/6466100/6466100-hd_1920_1080_30fps.mp4"
                  loop="true"
                  muted="true"
                  autoPlay="true"
                  playsInline="true"
                  className="showcase-video"
                ></video>
                <div className="showcase-scrim"></div>
              </div>
              <div className="showcase-content">
                <span className="showcase-tag">Flagship Project</span>
                <h2 className="home-hero-title hero-title">
                  Custom Silicon RISC-V
                </h2>
                <p className="section-content">
                  Designed and simulated a custom 32-bit RISC-V core with
                  hardware-accelerated matrix multiplication units. Achieved 25%
                  power reduction compared to baseline designs in TSMC 28nm
                  simulation.
                </p>
                <a href="#">
                  <div className="btn-primary btn-lg btn">
                    <span>Deep Dive Analysis</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline-section">
          <div className="container">
            <h2 className="centered section-title">Engineering Roadmap</h2>
            <div className="timeline-vertical">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">2023 - Present</span>
                  <h3 className="section-subtitle">
                    Electrical Engineering, UBC
                  </h3>
                  <p className="section-content">
                    Specializing in Nanotechnology and Microsystems. Dean&apos;s
                    Honor List recipient. Active member of UBC Rocketry Avionics
                    team.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Summer 2024</span>
                  <h3 className="section-subtitle">
                    Hardware Engineering Intern
                  </h3>
                  <p className="section-content">
                    Developed automated PCB testing rigs using Python and
                    LabVIEW. Reduced testing cycle time by 40% for power
                    management modules.
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Winter 2023</span>
                  <h3 className="section-subtitle">IEEE Design Competition</h3>
                  <p className="section-content">
                    1st Place Regional Winner. Built an autonomous grid-mapping
                    robot using FPGA-based vision processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-section">
          <div className="section-header-full">
            <h2 className="section-title">Technical Artifacts</h2>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img
                alt="Microscope view of silicon"
                src="https://images.pexels.com/photos/6755146/pexels-photo-6755146.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="PCB Trace Layout"
                src="https://images.pexels.com/photos/6755081/pexels-photo-6755081.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="Hardware Prototype"
                src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="Solder Points Close-up"
                src="https://images.pexels.com/photos/6755059/pexels-photo-6755059.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="Schematic Diagram"
                src="https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
            </div>
            <div className="gallery-item">
              <img
                alt="Chipset Array"
                src="https://images.pexels.com/photos/785418/pexels-photo-785418.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-img"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<style>
        @keyframes scrollMouse {0% {opacity: 1;
transform: translate(-50%, 0);}
100% {opacity: 0;
transform: translate(-50%, 15px);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="home-container4">
        <div className="home-container5">
          <Script
            html={`<script defer data-name="portfolio-enhancements">
(function(){
  const nameTarget = document.getElementById("typing-name")
  const aboutTarget = document.getElementById("typing-about")

  const nameText = "LockHeed Martin"
  const aboutText = "Second-year Electrical Engineering student at UBC. Architecting the future of high-performance silicon and aerospace electronics through precision engineering and low-level optimization."

  function typeWriter(text, target, speed, callback) {
    let i = 0
    function type() {
      if (i < text.length) {
        target.textContent += text.charAt(i)
        i++
        setTimeout(type, speed)
      } else if (callback) {
        setTimeout(callback, 500)
      }
    }
    type()
  }

  // Start sequence
  typeWriter(nameText, nameTarget, 80, () => {
    typeWriter(aboutText, aboutTarget, 30)
  })

  // Parallax Effect for Hero
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroVideo = document.querySelector(".hero-video")
    const heroContent = document.querySelector(".hero-content-container")

    if (heroVideo) {
      heroVideo.style.transform = \`translateY(\${scrolled * 0.4}px)\`
    }
    if (heroContent) {
      heroContent.style.transform = \`translateY(\${scrolled * -0.1}px)\`
      heroContent.style.opacity = 1 - scrolled / 700
    }
  })

  // Intersection Observer for Skill Cards Reveal
  const skillCards = document.querySelectorAll(".skill-card")
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
        skillObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  skillCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease-out"
    skillObserver.observe(card)
  })

  // Portfolio Hover Parallax (Subtle)
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  portfolioItems.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
      const img = item.querySelector(".portfolio-img")
      const rect = item.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      img.style.transform = \`scale(1.1) translate(\${x * 20}px, \${y * 20}px)\`
    })

    item.addEventListener("mouseleave", () => {
      const img = item.querySelector(".portfolio-img")
      img.style.transform = \`scale(1) translate(0, 0)\`
    })
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon39"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text39">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
