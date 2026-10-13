const lenis = new Lenis({ autoRaf: true });
// Start of changing for Lenis
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 5,
  // debug:true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.9, range: [-1, 1] },
    zindex: { value: "9996999", range: [-9999999, 9999999] },
    aspect: { value: 1 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.3, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 0 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },

  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    const storageKey = `faq-open-${index}`;

    if (localStorage.getItem(storageKey) === "true") {
      item.classList.add("active");
      icon.textContent = "✕";
    } else {
      item.classList.remove("active");
      icon.textContent = "+";
    }

    question.addEventListener("click", function () {
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        icon.textContent = "✕";
        localStorage.setItem(storageKey, "true");
      } else {
        icon.textContent = "+";
        localStorage.setItem(storageKey, "false");
      }
    });
  });

  // EASTER EGG: Type "itachi" to activate Akatsuki Mode
  let secretCode = "itachi";
  let inputBuffer = "";

  window.addEventListener("keydown", (e) => {
    // Ignore modifier keys
    if (e.ctrlKey || e.altKey || e.metaKey || e.key.length > 1) return;

    inputBuffer += e.key.toLowerCase();

    // Keep the buffer strictly the length of our secret word
    if (inputBuffer.length > secretCode.length) {
      inputBuffer = inputBuffer.slice(1);
    }

    // If the word matches, toggle the class and reset the buffer
    if (inputBuffer === secretCode) {
      document.body.classList.toggle("akatsuki-mode");
      inputBuffer = "";
    }
  });

  // MOBILE EASTER EGG: Tap the screen 4 times quickly
  let tapCount = 0;
  let tapTimer;

  window.addEventListener("touchstart", () => {
    tapCount++;
    
    // Clear the reset timer on every new tap
    clearTimeout(tapTimer);

    // If they reach 4 quick taps, trigger the theme
    if (tapCount === 4) {
      document.body.classList.toggle("akatsuki-mode");
      tapCount = 0; // Reset for next time
    }

    // If they stop tapping for half a second (500ms), reset the count
    tapTimer = setTimeout(() => {
      tapCount = 0;
    }, 500);
  });
});
