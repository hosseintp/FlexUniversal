///// Revealing 3 Boxes ////////
const boxes = document.querySelectorAll(".reveal");
const boxParrent = document.querySelector(".boxy");
boxes.forEach((box) => {
  box.classList.add("box__hidden");
});
const boxOptions = {
  root: null,
  threshold: 0.3,
};
const boxObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("box__hidden");
    boxObserver.unobserve(entry.target);
  });
}, boxOptions);
Array.prototype.forEach.call(boxes, (box) => {
  boxObserver.observe(box);
});
/////end of Revealing 3 Boxes ////////

/////start of revealing Site Preview ////////
// const sites = document.querySelectorAll(".preview-box");
// sites.forEach((site) => {
//   site.classList.add("box__hidden");
// });
// siteOptions = {
//   root: null,
//   threshold: 0.3,
// };
// const siteObserver = new IntersectionObserver((entries, observer) => {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) return;
//     entry.target.classList.remove("box__hidden");
//     siteObserver.unobserve(entry.target);
//   });
// }, siteOptions);
// Array.prototype.forEach.call(sites, (site) => {
//   siteObserver.observe(site);
// });
/////end of revealing Site Preview ////////

//////// Reveal from left & Right //////////
const sides = document.querySelectorAll(".side");
const sidesOptions = {
  root: null,
  threshold: 0.3,
};
const sidesObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (entry.target.classList.contains("hidden-left")) {
      entry.target.classList.remove("hidden-left");
      entry.target.style.left = 0;
      entry.target.classList.add("left-anime");
    } else if (entry.target.classList.contains("hidden-right")) {
      entry.target.classList.remove("hidden-right");
      entry.target.classList.add("right-anime");
    }
    observer.unobserve(entry.target);
  });
}, sidesOptions);
Array.prototype.forEach.call(sides, (side) => {
  sidesObserver.observe(side);
});

//////// Reveal from left & Right //////////

//////// Start Back To Top Btn///////////////
const backBtn = document.querySelector(".back-to-top");
const topy = document.querySelector(".header-top");
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    backBtn.classList.remove("hidden");
  } else {
    backBtn.classList.add("hidden");
  }
});

backBtn.addEventListener("click", () => {
  topy.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
});
/////////////counter/////////////

const counters = document.querySelectorAll(".count");
const speed = 10;
const counOptions = {
  root: null,
  threshold: 1,
};
const countObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = parseInt(counter.getAttribute("data-target"));
        const count = parseInt(counter.innerText);
        const increment = 1;

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
      observer.unobserve(entry.target);
    });
  });
}, counOptions);
Array.prototype.forEach.call(counters, (count) => {
  countObserver.observe(count);
});

/////////////counter/////////////
