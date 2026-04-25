/* ============================================
   SHIHAO LAI — Portfolio Interactive Functionality
   main.js
   ============================================ */

(function () {
  'use strict';

  /* ---- DOM Ready ---- */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    initPortfolioFilters();
    initPhaseTabs();
    initLightbox();
    initMobileMenu();
    initParallax();
    initActiveNavHighlight();
  }

  /* ============================================
     NAVBAR — Transparent → Solid on Scroll
     ============================================ */
  function initNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ============================================
     SMOOTH SCROLLING
     ============================================ */
  function initSmoothScroll() {
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        var navHeight = document.querySelector('.navbar')
          ? document.querySelector('.navbar').offsetHeight
          : 0;
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      });
    });
  }

  /* ============================================
     SCROLL-TRIGGERED ANIMATIONS (Intersection Observer)
     ============================================ */
  function initScrollAnimations() {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      /* Make all elements visible immediately */
      document.querySelectorAll('.fade-in').forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            /* Stagger animations for sibling elements */
            var delay = entry.target.dataset.delay || 0;
            setTimeout(function () {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach(function (el, i) {
      /* Add stagger delay for grouped items */
      var parent = el.parentElement;
      if (parent) {
        var siblings = parent.querySelectorAll(':scope > .fade-in');
        siblings.forEach(function (sib, j) {
          if (!sib.dataset.delay) {
            sib.dataset.delay = j * 100;
          }
        });
      }
      observer.observe(el);
    });
  }

  /* ============================================
     PORTFOLIO FILTER TABS
     ============================================ */
  function initPortfolioFilters() {
    var tabs = document.querySelectorAll('.filter-tab');
    var projects = document.querySelectorAll('.project-card');

    if (!tabs.length || !projects.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        /* Update active tab */
        tabs.forEach(function (t) { t.classList.remove('active'); });
        this.classList.add('active');

        var filter = this.dataset.filter;

        projects.forEach(function (project) {
          if (filter === 'all' || project.dataset.category === filter) {
            project.classList.remove('hidden');
            project.style.opacity = '0';
            project.style.transform = 'translateY(20px)';
            setTimeout(function () {
              project.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              project.style.opacity = '1';
              project.style.transform = 'translateY(0)';
            }, 50);
          } else {
            project.classList.add('hidden');
          }
        });
      });
    });
  }

  /* ============================================
     ENGINEERING VEHICLE PHASE TABS
     ============================================ */
  function initPhaseTabs() {
    var phaseTabs = document.querySelectorAll('.phase-tab');
    if (!phaseTabs.length) return;

    phaseTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var parent = this.closest('.project-card');
        if (!parent) return;

        /* Update active tab */
        parent.querySelectorAll('.phase-tab').forEach(function (t) {
          t.classList.remove('active');
        });
        this.classList.add('active');

        /* Show corresponding phase content */
        var phaseId = this.dataset.phase;
        parent.querySelectorAll('.phase-content').forEach(function (content) {
          content.classList.remove('active');
        });
        var target = parent.querySelector('#' + phaseId);
        if (target) {
          target.classList.add('active');
        }
      });
    });
  }

  /* ============================================
     LIGHTBOX
     ============================================ */
  var lightboxState = {
    images: [],
    currentIndex: 0
  };

  function initLightbox() {
    var lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    var closeBtn = lightbox.querySelector('.lightbox-close');
    var prevBtn = lightbox.querySelector('.lightbox-prev');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    var imgEl = lightbox.querySelector('.lightbox-img-container img');
    var captionEl = lightbox.querySelector('.lightbox-caption');

    /* Attach click handlers to all lightbox-triggering images */
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        var group = this.dataset.lightbox;
        var allInGroup = document.querySelectorAll('[data-lightbox="' + group + '"]');
        lightboxState.images = [];
        allInGroup.forEach(function (item) {
          lightboxState.images.push({
            src: item.dataset.src || item.querySelector('img').src,
            caption: item.dataset.caption || ''
          });
        });

        /* Find current index */
        var clickedSrc = this.dataset.src || this.querySelector('img').src;
        lightboxState.currentIndex = 0;
        for (var i = 0; i < lightboxState.images.length; i++) {
          if (lightboxState.images[i].src === clickedSrc) {
            lightboxState.currentIndex = i;
            break;
          }
        }

        openLightbox();
      });
    });

    function openLightbox() {
      updateLightboxImage();
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    function updateLightboxImage() {
      var data = lightboxState.images[lightboxState.currentIndex];
      if (!data) return;
      imgEl.src = data.src;
      imgEl.alt = data.caption || 'Portfolio image';
      captionEl.textContent = data.caption || '';

      /* Show/hide nav arrows */
      if (lightboxState.images.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
      }
    }

    function showPrev() {
      lightboxState.currentIndex =
        (lightboxState.currentIndex - 1 + lightboxState.images.length) %
        lightboxState.images.length;
      updateLightboxImage();
    }

    function showNext() {
      lightboxState.currentIndex =
        (lightboxState.currentIndex + 1) % lightboxState.images.length;
      updateLightboxImage();
    }

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    /* Close on background click */
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target === lightbox.querySelector('.lightbox-img-container')) {
        closeLightbox();
      }
    });

    /* Keyboard navigation */
    document.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    });
  }

  /* ============================================
     MOBILE MENU
     ============================================ */
  function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });

    /* Close menu on link click */
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ============================================
     PARALLAX — Hero Background
     ============================================ */
  function initParallax() {
    var heroBg = document.querySelector('.hero-bg');
    if (!heroBg) return;

    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    window.addEventListener('scroll', function () {
      var scrolled = window.pageYOffset;
      var heroHeight = document.querySelector('.hero').offsetHeight;
      if (scrolled <= heroHeight) {
        heroBg.style.transform = 'translateY(' + scrolled * 0.4 + 'px)';
      }
    }, { passive: true });
  }

  /* ============================================
     ACTIVE NAV HIGHLIGHT ON SCROLL
     ============================================ */
  function initActiveNavHighlight() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    function onScroll() {
      var scrollPos = window.pageYOffset + 120;

      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

})();
