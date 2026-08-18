(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Hero: scroll-scrubbed fold video ---------- */

  const heroSection = document.getElementById('hero');
  const landscapeVideo = document.querySelector('.hero__video--landscape');
  const portraitVideo = document.querySelector('.hero__video--portrait');
  const heroContent = document.querySelector('.hero__content');
  const heroScrollcue = document.querySelector('.hero__scrollcue');
  const mobileQuery = window.matchMedia('(max-width: 640px)');

  if (heroSection && landscapeVideo && portraitVideo) {
    let activeVideo = null;
    let ready = false;
    let ticking = false;
    let duration = 0;

    const onLoadedMeta = () => {
      ready = true;
      duration = activeVideo.duration || 0;
    };

    const scrub = () => {
      ticking = false;
      if (!ready || !duration) return;

      const rect = heroSection.getBoundingClientRect();
      const total = heroSection.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const progress = total > 0 ? scrolled / total : 0;

      const t = progress * duration;
      if (Math.abs(activeVideo.currentTime - t) > 0.03) {
        try { activeVideo.currentTime = t; } catch (e) {}
      }

      // The copy slides and fades away early in the pin, so the fold keeps
      // reading as the page's own motion instead of a static slide behind fixed text.
      if (heroContent) {
        const driftDone = 0.6;
        const driftProgress = Math.min(progress / driftDone, 1);
        const eased = driftProgress * driftProgress * (3 - 2 * driftProgress); // smoothstep
        heroContent.style.transform = `translateY(${-eased * 90}px)`;
        heroContent.style.opacity = String(1 - eased);
        heroContent.style.pointerEvents = eased > 0.85 ? 'none' : 'auto';
      }
      if (heroScrollcue) {
        const cueProgress = Math.min(progress / 0.15, 1);
        heroScrollcue.style.opacity = String(1 - cueProgress);
      }
    };

    const requestScrub = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(scrub);
      }
    };

    // Only the video actually shown for this viewport downloads and plays;
    // the other keeps preload="none" so mobile never fetches the desktop cut, or vice versa.
    const setActiveVideo = (video) => {
      if (video === activeVideo) return;
      if (activeVideo) {
        activeVideo.removeEventListener('loadedmetadata', onLoadedMeta);
        activeVideo.pause();
        activeVideo.preload = 'none';
      }
      activeVideo = video;
      ready = false;
      duration = 0;
      activeVideo.preload = 'auto';
      activeVideo.addEventListener('loadedmetadata', onLoadedMeta);
      activeVideo.load();

      if (reduceMotion) {
        activeVideo.loop = false;
        activeVideo.play().catch(() => {});
      } else {
        try { activeVideo.currentTime = 0; } catch (e) {}
        requestScrub();
      }
    };

    setActiveVideo(mobileQuery.matches ? portraitVideo : landscapeVideo);
    mobileQuery.addEventListener('change', (e) => {
      setActiveVideo(e.matches ? portraitVideo : landscapeVideo);
    });

    if (!reduceMotion) {
      window.addEventListener('scroll', requestScrub, { passive: true });
      window.addEventListener('resize', requestScrub);
    }
  }

  /* ---------- Reveal on scroll ---------- */

  const revealTargets = document.querySelectorAll(
    '.intro__text, .servicio-card, .proceso__step, .porque__quote, .fundador__grid, .contacto__content'
  );

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  } else {
    revealTargets.forEach((el) => el.classList.add('reveal'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    revealTargets.forEach((el) => io.observe(el));
  }
})();
