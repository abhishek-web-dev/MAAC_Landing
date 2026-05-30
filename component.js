const MAAC_TOPBAR = `
<div id="topBar" role="banner" aria-label="Contact information">
  <div class="container-xl">
    <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
      <div class="d-flex align-items-center gap-4">
        <span><i class="bi bi-geo-alt-fill me-1" style="color:var(--gold);"></i>RDC Rajnagar, Ghaziabad, UP 201002</span>
        <span class="d-none d-md-inline"><i class="bi bi-envelope-fill me-1" style="color:var(--gold);"></i>maacrdcghaziabad@gmail.com</span>
      </div>
      <div class="d-flex align-items-center gap-3">
        <a href="tel:+917840002724" style="color:var(--gold);text-decoration:none;font-size:.72rem;font-weight:600;">
          <i class="bi bi-telephone-fill me-1"></i>+91 784 000 2724
        </a>
        <a href="tel:+917840002725" style="color:var(--gold);text-decoration:none;font-size:.72rem;font-weight:600;">
          <i class="bi bi-telephone-fill me-1"></i>+91 784 000 2725
        </a>
        <a href="#about" style="color:rgba(255,255,255,.6);text-decoration:none;font-size:.72rem;" class="d-none d-sm-inline">FAQs</a>
        <a href="#featured-courses" style="color:rgba(255,255,255,.6);text-decoration:none;font-size:.72rem;" class="d-none d-sm-inline">All Courses</a>
      </div>
    </div>
  </div>
</div>
`;

const MAAC_NAVBAR = `
<nav id="mainNav" class="navbar-shared" role="navigation" aria-label="Main navigation">
  <div class="container-xl">
    <div class="d-flex align-items-center justify-content-between gap-3">
      <a href="index.html" aria-label="MAAC Ghaziabad RDC Home">
        <img src="Images/logo_white.png"
             alt="MAAC Ghaziabad RDC Logo"
             class="nav-logo-img"
             id="navLogo"
             onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'160\\' height=\\'50\\' viewBox=\\'0 0 160 50\\'%3E%3Crect width=\\'160\\' height=\\'50\\' fill=\\'%230F0F0F\\'/%3E%3Ctext x=\\'10\\' y=\\'32\\' font-family=\\'Georgia\\' font-size=\\'22\\' font-weight=\\'bold\\' fill=\\'%23D4AF37\\'%3EMAAC%3C/text%3E%3Ctext x=\\'60\\' y=\\'32\\' font-family=\\'Georgia\\' font-size=\\'22\\' font-weight=\\'bold\\' fill=\\'%23D2232A\\'%3E%3E%3E%3C/text%3E%3C/svg%3E'"/>
      </a>

      <ul class="d-none d-lg-flex align-items-center gap-4 list-unstyled mb-0">
        <li><a href="index.html" class="nav-link-custom" data-nav="home">Home</a></li>
        <li><a href="index.html#about" class="nav-link-custom" data-nav="about">About</a></li>
        <li class="nav-dropdown">
          <a href="index.html#featured-courses" class="nav-link-custom" data-nav="courses">Courses <i class="bi bi-chevron-down ms-1" style="font-size: .7rem;"></i></a>
          <ul class="dropdown-menu">
            <li><a href="course-3d-animation.html" class="dropdown-item"><i class="bi bi-box"></i> Animation courses</a></li>
            <li><a href="digital-content-creation.html" class="dropdown-item"><i class="bi bi-palette"></i>Digital Content Creation</a></li>
            <li><a href="course-vfx.html" class="dropdown-item"><i class="bi bi-stars"></i> VFX</a></li>
            <li><a href="course-filmmaking.html" class="dropdown-item"><i class="bi bi-camera-reels"></i> Filmmaking</a></li>
            <li><a href="course-game-design.html" class="dropdown-item"><i class="bi bi-controller"></i> Game Design</a></li>
          </ul>
        </li>
        <li><a href="index.html#placements" class="nav-link-custom" data-nav="placements">Placements</a></li>
        <li><a href="index.html#gallery" class="nav-link-custom" data-nav="gallery">Gallery</a></li>
        <li><a href="index.html#contact-details" class="nav-link-custom" data-nav="contact">Contact</a></li>
      </ul>

      <div class="d-flex align-items-center gap-3">
        <a href="#enquiryModal" data-bs-toggle="modal" data-bs-target="#enquiryModal" class="btn-brand-red d-none d-md-inline-flex">
          <i class="bi bi-send"></i> Enquire Now
        </a>
        <button class="btn d-lg-none border-0 p-1 mobile-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu" aria-label="Open navigation menu" style="background:none;font-size:1.4rem;">
          <i class="bi bi-list"></i>
        </button>
      </div>
    </div>
  </div>
</nav>

<div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
  <div class="offcanvas-header">
    <img src="Images/logo_black.png" alt="MAAC Ghaziabad RDC" height="42" id="mobileMenuLogo"
         onerror="this.onerror=null; this.style.display='none'; document.getElementById('mobileMenuFallback').style.display='block'"/>
    <span id="mobileMenuFallback" style="display:none;font-family:'Bebas Neue';font-size:1.4rem;color:var(--red);">MAAC Ghaziabad</span>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close menu"></button>
  </div>
  <div class="offcanvas-body p-0">
    <a href="index.html" class="mobile-nav-link" data-nav="home">Home</a>
    <a href="index.html#about" class="mobile-nav-link" data-nav="about">About Us</a>
    <a href="index.html#featured-courses" class="mobile-nav-link" data-nav="courses">Courses</a>
    <div class="mobile-nav-sub">
      <a href="course-3d-animation.html" class="mobile-sub-link">Animation courses</a>
      <a href="digital-content-creation.html" class="mobile-sub-link">Graphic designing</a>
      <a href="course-vfx.html" class="mobile-sub-link">VFX</a>
      <a href="course-filmmaking.html" class="mobile-sub-link">Video Content Creation</a>
      <a href="course-game-design.html" class="mobile-sub-link">Game Design</a>
    </div>
    <a href="index.html#placements" class="mobile-nav-link" data-nav="placements">Placements</a>
    <a href="index.html#gallery" class="mobile-nav-link" data-nav="gallery">Gallery</a>
    <a href="index.html#contact-details" class="mobile-nav-link" data-nav="contact">Contact</a>
    <div style="padding:1.5rem;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:.8rem;">
      <a href="#enquiryModal" data-bs-toggle="modal" data-bs-target="#enquiryModal" data-bs-dismiss="offcanvas" class="btn-brand-red justify-content-center">
        <i class="bi bi-send"></i> Enquire Now
      </a>
  <a href="tel:+917840002725" class="btn-outline-dark justify-content-center">
        <i class="bi bi-telephone"></i> Call Us
      </a>
    </div>
  </div>
</div>
`;

const MAAC_FOOTER = `
<footer id="mainFooter" role="contentinfo" aria-labelledby="footerHeading">
  <h2 id="footerHeading" class="visually-hidden">Footer Site Information</h2>
  <div class="container-xl">
    <div class="row g-5">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand">
          <img src="Images/logo_white.png"
               alt="MAAC Ghaziabad RDC Maya Academy of Advanced Creativity"
               class="f-logo"
               onerror="this.onerror=null;this.style.display='none';document.getElementById('footerLogoFb').style.display='block'"/>
          <div id="footerLogoFb" style="display:none;font-family:'Bebas Neue';font-size:2rem;color:var(--gold);margin-bottom:1rem;">MAAC Ghaziabad</div>
          <p class="footer-tagline">
            Maya Academy of Advanced Creativity - India's premier institute
            for Animation, VFX, Gaming & Design. Ghaziabad RDC centre.
          </p>
          <div class="footer-socials" style="margin-top:20px" aria-label="Social media links">
            <a href="https://www.facebook.com/profile.php?id=61588161250891" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-fb" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/maacrdc/" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-insta" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="mailto:maacrdcghaziabad@gmail.com" class="fsoc fsoc-mail" aria-label="Email">
              <i class="bi bi-envelope-fill"></i>
            </a>
            <a href="https://www.youtube.com/@MAACRDC" target="_blank" rel="noopener noreferrer" class="fsoc fsoc-yt" aria-label="YouTube">
              <i class="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-6 col-md-3 col-lg-2">
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links" role="list">
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#about">About Us</a></li>
          <li><a href="index.html#featured-courses">All Courses</a></li>
          <li><a href="index.html#placements">Placements</a></li>
          <li><a href="index.html#gallery">Gallery</a></li>
          <li><a href="index.html#blogHeading">Blogs</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 col-lg-2">
        <h3 class="footer-heading">Courses</h3>
        <ul class="footer-links" role="list">
          <li><a href="course-vfx.html">ADVFX Plus</a></li>
          <li><a href="course-3d-animation.html">AD3D Edge Plus</a></li>
          <li><a href="course-game-design.html">Game Design</a></li>
          <li><a href="digital-content-creation.html">Graphic Design</a></li>
          <li><a href="course-filmmaking.html">Filmmaking</a></li>
          <li><a href="index.html#course-short-term">Short Term Pro</a></li>
        </ul>
      </div>

      <div class="col-md-6 col-lg-4">
        <h3 class="footer-heading">Get in Touch</h3>
        <address style="font-style:normal;">
          <div class="footer-contact-item">
            <i class="bi bi-geo-alt-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">RDC Rajnagar, Ghaziabad,<br/>Uttar Pradesh - 201002</div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-telephone-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">
             <a href="tel:+917840002724">+91 784 000 2724</a> /
             <a href="tel:+917840002725">+91 784 000 2725</a>
            </div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-envelope-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">
              <a href="mailto:maacrdcghaziabad@gmail.com">maacrdcghaziabad@gmail.com</a>
            </div>
          </div>
          <div class="footer-contact-item">
            <i class="bi bi-clock-fill footer-contact-icon" aria-hidden="true"></i>
            <div class="footer-contact-text">Mon-Sat: 9:00 AM - 7:00 PM</div>
          </div>
        </address>
        
      </div>
    </div>

    <div class="footer-disclaimer">
      <div class="footer-disclaimer-label">Disclaimer</div>
      <p>
        This website (<a href="https://maacghaziabad.in/" target="_blank" rel="noopener">https://rajnagar.maacghaziabad.in/</a>) is not the official website of MAAC India. It is owned and operated by an authorized franchisee/business partner of MAAC (Maya Academy of Advanced Creativity), a registered trademark of MEL Training and Assessments Limited, a subsidiary of Aptech Ltd.
      </p>
      <p>
        All course content, curriculum, and related materials are the exclusive property of MEL Training and Assessments Limited. While every effort is made to ensure that the information provided on this website is accurate and up to date, inadvertent errors or outdated information may occasionally occur.
      </p>
      <p>
        The information presented is provided without any guarantee of completeness or absolute accuracy. Placement assistance may be offered as per the applicable program guidelines; however, employment or job placement is not guaranteed.
      </p>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-text">
        &copy; <span id="footerYear"></span> MAAC Ghaziabad RDC. All rights reserved. |
        NSDC &amp; MESC Affiliated.
      </div>
      
      <nav class="footer-bottom-links" aria-label="Footer legal links">
       <a href="index.html">Privacy Policy</a>
    <a href="index.html">Terms of Use</a>
       <a href="index.html">Sitemap</a>
      </nav>
    </div>
  </div>
</footer>
`;

const MAAC_LOCATION_SECTION = `
<section class="maac-location-section" id="contact-map" aria-labelledby="maacLocationHeading">
  <div class="container-xl">
    <div class="text-center mb-5">
      <span class="sec-eyebrow">Find Us</span>
      <h2 class="sec-title sec-title-sm" id="maacLocationHeading">
        Visit <span style="color:var(--red);font-style:italic;">MAAC Ghaziabad RDC</span>
      </h2>
      <div class="divider-gold centered"></div>
    </div>
  </div>

  <div class="maac-location-wrap">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2682.0157295681743!2d77.43820905755561!3d28.676618715455938!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1de7da8713d%3A0xeb9b2c5fad0a4aa7!2sMAAC%20Ghaziabad%20RDC%20Raj%20Nagar%20%7C%20Best%203D%20Animation%20%26%202D%20Animation%2C%20Graphic%20Designing%2C%20VFX%2C%20Video%20Editing%20Institute%20in%20Ghaziabad!5e1!3m2!1sen!2sin!4v1776686001967!5m2!1sen!2sin" width="100%" height="500" style="border:0; display:block;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</section>
`;

const MAAC_ENQUIRY_MODAL = `
<div class="modal fade enquiry-modal" id="enquiryModal" tabindex="-1" role="dialog" aria-labelledby="enquiryModalLabel" aria-modal="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header d-flex flex-column align-items-center text-center">
        <button type="button" class="btn-close btn-close-white position-absolute" style="top:1.5rem;right:1.5rem;" data-bs-dismiss="modal" aria-label="Close"></button>
        <img src="Images/logo_white.png" alt="MAAC Ghaziabad RDC" height="36" onerror="this.style.display='none'"/>
        <div class="maac-enquiry-title">Request a Free Counselling</div>
      </div>
      <div class="modal-body">
        <div class="row g-4">
          <div class="col-lg-4 d-none d-lg-flex flex-column justify-content-center maac-enquiry-aside">
            <span class="sec-eyebrow" style="margin-bottom:.8rem;">Why Enquire?</span>
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:700;margin-bottom:1rem;">Get personalised guidance - <span style="color:var(--red);font-style:italic;">free.</span></h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.7rem;">
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Free demo class booking</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Course selection guidance</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Fee structure & EMI info</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Scholarship information</li>
              <li style="font-size:.84rem;color:var(--muted);display:flex;align-items:center;gap:.6rem;"><i class="bi bi-check-circle-fill" style="color:var(--gold);"></i> Callback within 24 hours</li>
            </ul>
          </div>
          <div class="col-lg-8">
            <form id="enquiryForm" action="https://formsubmit.co/ajax/maacrdcghaziabad@gmail.com" method="POST" novalidate>
              <div class="row g-3">
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqFirstName">First Name *</label>
                  <input type="text" name="first_name" id="enqFirstName" class="form-control-custom" placeholder="First Name" required autocomplete="given-name"/>
                </div>
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqLastName">Last Name *</label>
                  <input type="text" name="last_name" id="enqLastName" class="form-control-custom" placeholder="Last Name" required autocomplete="family-name"/>
                </div>
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqPhone">Phone Number *</label>
                  <input type="tel" name="phone" id="enqPhone" class="form-control-custom" placeholder="Phone Number" required autocomplete="tel"/>
                </div>
                <div class="col-sm-6">
                  <label class="form-label-custom" for="enqEmail">Email Address</label>
                  <input type="email" name="email" id="enqEmail" class="form-control-custom" placeholder="Email Address" autocomplete="email"/>
                </div>
                <div class="col-12">
                  <label class="form-label-custom" for="enqCourse">Course of Interest *</label>
                  <select name="course" id="enqCourse" class="form-control-custom" required style="cursor:pointer;">
                    <option value="">Select a programme...</option>
                    <option>VFX - ADVFX Plus</option>
                    <option>3D Animation - AD3DIGHP</option>
                    <option>3D Animation - D3D</option>
                    <option>Film Making - DAFM</option>
                    <option>Game Design</option>
                    <option>Digital Content Creation</option>
                    <option>Filmmaking</option>
                    <option>APMG</option>
                    <option>Broadcast Plus</option>
                    <option>Digital Design</option>
                    <option>Not Sure - Need Guidance</option>
                  </select>
                </div>
                <div class="col-12">
                  <label class="form-label-custom" for="enqMessage">Message (Optional)</label>
                  <textarea name="message" id="enqMessage" class="form-control-custom" rows="3" placeholder="Message" style="resize:none;"></textarea>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn-brand-red w-100 justify-content-center maac-enquiry-submit">
                    <i class="bi bi-send-fill"></i> Submit Enquiry - Get Free Callback
                  </button>
                  <div style="font-size:.72rem;color:var(--muted-2);text-align:center;margin-top:.7rem;">We respect your privacy. No spam. Callback within 24 hours.</div>
                </div>
              </div>
            </form>
            <div id="enquirySuccess" class="text-center" style="display:none;padding:3rem 1rem;">
              <i class="bi bi-check-circle-fill" style="font-size:3.5rem;color:var(--gold);display:block;margin-bottom:1rem;"></i>
              <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.8rem;font-weight:700;margin-bottom:.5rem;">Enquiry Received!</h3>
              <p style="color:var(--muted);font-size:.9rem;">Our counsellor will call you within 24 hours.<br/>Check your email for a confirmation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const MAAC_FLOATING_BUTTONS = `
<div class="floating-cta" role="complementary" aria-label="Quick contact">
  <a href="https://wa.me/917840002725" target="_blank" rel="noopener" class="floating-btn floating-wa" title="Chat on WhatsApp">
    <i class="bi bi-whatsapp"></i>
  </a>
  <a href="tel:+917840002725" class="floating-btn floating-call" title="Call Us">
    <i class="bi bi-telephone-fill"></i>
  </a>
</div>
<button id="backToTop" aria-label="Back to top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
  <i class="bi bi-chevron-up"></i>
</button>
`;

(function () {
  const topbarPlaceholder = document.getElementById("topbar-placeholder");
  const navbarPlaceholder = document.getElementById("navbar-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");
  const page = window.location.pathname.split("/").pop() || "index.html";

  if (topbarPlaceholder) {
    topbarPlaceholder.innerHTML = MAAC_TOPBAR;
  } else {
    const oldTopbar = document.getElementById("topBar");
    if (oldTopbar) oldTopbar.outerHTML = MAAC_TOPBAR;
  }

  if (navbarPlaceholder) {
    navbarPlaceholder.innerHTML = MAAC_NAVBAR;
  } else {
    const oldNav = document.getElementById("mainNav");
    const oldMenu = document.getElementById("mobileMenu");
    if (oldNav) oldNav.outerHTML = MAAC_NAVBAR;
    if (oldMenu) oldMenu.remove();
  }

  if (footerPlaceholder) {
    if (page !== "contact.html" && !document.getElementById("maacSharedLocation")) {
      footerPlaceholder.insertAdjacentHTML("beforebegin", `<div id="maacSharedLocation">${MAAC_LOCATION_SECTION}</div>`);
    }
    footerPlaceholder.innerHTML = MAAC_FOOTER;
  } else {
    const oldFooter = document.getElementById("mainFooter");
    if (oldFooter) oldFooter.outerHTML = MAAC_FOOTER;
  }

  const existingEnquiryModal = document.getElementById("enquiryModal");
  if (existingEnquiryModal) {
    existingEnquiryModal.outerHTML = MAAC_ENQUIRY_MODAL;
  } else {
    document.body.insertAdjacentHTML("beforeend", MAAC_ENQUIRY_MODAL);
  }

  // Inject Floating Buttons
  const oldFloating = document.querySelector(".floating-cta");
  const oldBtt = document.getElementById("backToTop") || document.getElementById("btt");
  if (oldFloating) oldFloating.remove();
  if (oldBtt) oldBtt.remove();
  document.body.insertAdjacentHTML("beforeend", MAAC_FLOATING_BUTTONS);

})();
