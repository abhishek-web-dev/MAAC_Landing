(function () {
  const page = window.location.pathname.split("/").pop() || "index.html";

  const pageMap = {
    "index.html": "home",
    "about.html": "about",
    "courses.html": "courses",
    "digital-content-creation.html": "courses",
    "course-filmmaking.html": "courses",
    "course-game-design.html": "courses",
    "course-ar-vr.html": "courses",
    "course-broadcast.html": "courses",
    "course-3d-animation.html": "courses",
    "course-vfx.html": "courses",
    "course-digital-design.html": "courses",
    "course-short-term.html": "courses",
    "placements.html": "placements",
    "gallery.html": "gallery",
    "contact.html": "contact"
  };

  const setActiveNav = (key) => {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      const isActive = link.getAttribute("data-nav") === key;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const activeKey = pageMap[page];
  if (activeKey) setActiveNav(activeKey);

  // Global scroll handler for sticky nav effects
  const handleGlobalScroll = () => {
    const nav = document.getElementById("mainNav");
    const topBar = document.getElementById("topBar");
    const navLogo = document.getElementById("navLogo");
    const isScrolled = window.scrollY > 60;

    if (nav) nav.classList.toggle("scrolled", isScrolled);
    if (topBar) topBar.classList.toggle("scrolled", isScrolled);
    
    // Update header height variables for CSS
    const topBarHeight = topBar ? topBar.offsetHeight : 0;
    const navHeight = nav ? nav.offsetHeight : 0;
    document.documentElement.style.setProperty('--top-bar-height', `${topBarHeight}px`);
    document.documentElement.style.setProperty('--nav-height', `${navHeight}px`);
    document.documentElement.style.setProperty('--header-height', `${topBarHeight + navHeight}px`);

    if (navLogo) {
      navLogo.src = isScrolled ? "Images/logo_black.png" : "Images/logo_white.png";
    }

    // Back to top button visibility
    const btt = document.getElementById("backToTop");
    if (btt) {
      if (window.scrollY > 400) btt.classList.add("visible");
      else btt.classList.remove("visible");
    }
  };
  window.addEventListener("scroll", handleGlobalScroll, { passive: true });
  handleGlobalScroll();

  // Smooth link offset for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === "#" || href === "#enquiryModal") return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const nav = document.getElementById('mainNav');
        const navHeight = nav ? nav.offsetHeight + 36 : 100;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
        
        // Close mobile menu if open
        const offcanvas = document.getElementById('mobileMenu');
        if (offcanvas && offcanvas.classList.contains('show')) {
          const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(offcanvas);
          if (bsOffcanvas) bsOffcanvas.hide();
        }
      }
    });
  });

  if (page === "index.html" || page === "") {
    const sectionToNav = [
      { id: "home", key: "home" },
      { id: "about", key: "about" },
      { id: "featured-courses", key: "courses" },
      { id: "placements", key: "placements" },
      { id: "gallery", key: "gallery" },
      { id: "contact-details", key: "contact" },
      { id: "contact-map", key: "contact" }
    ];

    const updateNavByScroll = () => {
      const scrollPos = window.scrollY + 170;
      let currentKey = "home";
      sectionToNav.forEach(({ id, key }) => {
        const section = document.getElementById(id);
        if (!section) return;
        if (scrollPos >= section.offsetTop) currentKey = key;
      });
      setActiveNav(currentKey);
    };

    window.addEventListener("scroll", updateNavByScroll, { passive: true });
    updateNavByScroll();
  }

  const footerYear = document.getElementById("footerYear");
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  const enquiryForm = document.getElementById("enquiryForm");
  const enquirySuccess = document.getElementById("enquirySuccess");
  if (enquiryForm && !enquiryForm.dataset.bound) {
    enquiryForm.dataset.bound = "true";
    enquiryForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      let isValid = true;
      enquiryForm.querySelectorAll("[required]").forEach((field) => {
        if (!field.value.trim()) {
          field.style.borderColor = "var(--red)";
          isValid = false;
          setTimeout(() => {
            field.style.borderColor = "";
          }, 2000);
        }
      });

      if (!isValid) return;

      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Sending...';

      try {
        const formData = new FormData(enquiryForm);
        const response = await fetch(enquiryForm.action, {
          method: enquiryForm.method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          enquiryForm.style.opacity = "0";
          setTimeout(() => {
            enquiryForm.style.display = "none";
            if (enquirySuccess) {
              enquirySuccess.style.display = "block";
            }
          }, 400);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        alert('Oops! There was a problem submitting your form. Please try again or call us.');
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }

  const setupAutoEnquiryModal = () => {
    const modalEl = document.getElementById("enquiryModal");
    if (!modalEl || typeof window.bootstrap === "undefined") return;

    const enquiryModal = new window.bootstrap.Modal(modalEl);
    const rootEl = document.documentElement;
    const autoPopupSessionKey = "maacEnquiryAutoShown";

    modalEl.addEventListener("show.bs.modal", () => {
      document.body.style.overflow = "hidden";
      rootEl.style.overflow = "hidden";
    });
    modalEl.addEventListener("hidden.bs.modal", () => {
      document.body.style.overflow = "";
      rootEl.style.overflow = "";
    });

    try {
      if (window.sessionStorage.getItem(autoPopupSessionKey) === "true") {
        return;
      }
    } catch (error) {
      // Ignore storage issues and continue with one-page fallback behavior.
    }

    window.setTimeout(() => {
      if (!modalEl.classList.contains("show")) {
        try {
          window.sessionStorage.setItem(autoPopupSessionKey, "true");
        } catch (error) {
          // Ignore storage issues and still show the popup once on this page.
        }
        enquiryModal.show();
      }
    }, 10000);
  };

  if (document.getElementById("enquiryModal")) {
    if (typeof window.bootstrap !== "undefined") {
      setupAutoEnquiryModal();
    } else {
      window.addEventListener("load", () => {
        setupAutoEnquiryModal();
      }, { once: true });
    }
  }
})();
