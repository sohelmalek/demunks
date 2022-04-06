window.onload = function () {
  gsap.to(".first", {
    duration: 2,
    delay: 1.5,
    // display: 'none',
    top: "-100vh",
    ease: "expo.out",
  });
  gsap.to("#main-content", {
    duration: 2,
    opacity: "1",
    delay: 1.5,
    ease: "power1.inOut",
  });
};
