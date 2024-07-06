document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  const texts = document.querySelectorAll(".text");
  const images = document.querySelectorAll(".image");
  const textColumn = document.querySelector(".text-column");
  const imageColumn = document.querySelector(".image-column");
  let currentIndex = 0;

  function showContent(index) {
    texts.forEach((text, idx) => {
      if (idx === index) {
        gsap.to(text, {
          opacity: 1,
          duration: 1,
          onStart: () => text.classList.add("active"),
        });
        gsap.to(textColumn, {
          backgroundColor: text.getAttribute("data-color"),
          duration: 1,
        });
      } else {
        gsap.to(text, {
          opacity: 0,
          duration: 1,
          onComplete: () => text.classList.remove("active"),
        });
      }
    });

    images.forEach((image, idx) => {
      if (idx === index) {
        gsap.to(image, {
          opacity: 1,
          duration: 1,
          onStart: () => image.classList.add("active"),
        });
        gsap.to(imageColumn, {
          backgroundColor: image.getAttribute("data-color"),
          duration: 1,
        });
      } else {
        gsap.to(image, {
          opacity: 0,
          duration: 1,
          onComplete: () => image.classList.remove("active"),
        });
      }
    });
  }

  function scrollHandler(event) {
    if (event.deltaY > 0) {
      if (currentIndex < texts.length - 1) {
        currentIndex++;
        showContent(currentIndex);
      }
    } else {
      if (currentIndex > 0) {
        currentIndex--;
        showContent(currentIndex);
      }
    }
  }

  window.addEventListener("wheel", scrollHandler);
  showContent(currentIndex); // Initialize first view
});
