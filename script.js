(function () {
  const root = document.querySelector('[data-carousel]');
  if (!root) return;
  const slides = Array.from(root.querySelectorAll('.carousel-slide'));
  const dots = Array.from(root.querySelectorAll('[data-carousel-dot]'));
  const counter = root.querySelector('[data-carousel-counter]');
  const prevBtn = root.querySelector('[data-carousel-prev]');
  const nextBtn = root.querySelector('[data-carousel-next]');
  const total = slides.length;
  let current = 0;
  let timer = null;
  let userPaused = false;
  const INTERVAL = 5000;

  function isVideoSlide(idx) {
    return slides[idx] && slides[idx].dataset.slideType === 'video';
  }

  function render() {
    slides.forEach((s, i) => s.classList.toggle('is-active', i === current));
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === current);
      d.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });
    if (counter) counter.textContent = (current + 1) + ' / ' + total;
  }

  function go(idx) {
    current = (idx + total) % total;
    render();
    if (isVideoSlide(current)) stopAuto();
  }

  function next() { go(current + 1); }
  function prev() { go(current - 1); }

  function startAuto() {
    if (userPaused) return;
    if (isVideoSlide(current)) return;
    stopAuto();
    timer = setInterval(() => {
      if (isVideoSlide(current)) {
        stopAuto();
        return;
      }
      go(current + 1);
    }, INTERVAL);
  }

  function stopAuto() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function userStop() {
    userPaused = true;
    stopAuto();
  }

  prevBtn && prevBtn.addEventListener('click', () => {
    userStop();
    prev();
  });
  nextBtn && nextBtn.addEventListener('click', () => {
    userStop();
    next();
  });
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      userStop();
      go(parseInt(dot.dataset.carouselDot, 10) || 0);
    });
  });

  render();
  startAuto();
})();
