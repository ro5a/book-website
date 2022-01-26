const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("progress-next");
const progressPrev = document.getElementById("progress-prev");
const steps = document.querySelectorAll(".step");
let active = 1;
progressNext.addEventListener("click", () => {
    active++;
    if (active > steps.length) {
      active = steps.length;
    }
    updateProgress();
  });
  
  progressPrev.addEventListener("click", () => {
    active--;
    if (active < 1) {
      active = 1;
    }
    updateProgress();
  });
  function updateProgress () {
    // toggle active class on list items
    steps.forEach((step, i) => {
      if (i < active) {
        step.classList.add("active");
      } else {
        step.classList.remove("active");
      }
    });
    // set progress bar width  
    progressBar.style.width = 
      ((active - 1) / (steps.length - 1)) * 100 + "%";
    // enable disable prev and next buttons
    if (active === 1) {
      progressPrev.disabled = true;
    } else if (active === steps.length) {
      progressNext.disabled = true;
    } else {
      progressPrev.disabled = false;
      progressNext.disabled = false;
    }
  };

  const activeSteps = document.querySelectorAll(".active");
  line.style.width =
    ((activeSteps.length - 1) / (steps.length - 1)) * 100 + "%";

  // call pages to iframe
  const pages = document.getElementById("pages");
  const modelContainer = document.getElementById("model");

  if (index == 0 || index == 1) {
    pages.setAttribute("src", "stepOne.html");
  } else if (index == 2) {
    pages.setAttribute("src", "stepTwo.html");
  } else if (index == 3) {
    pages.setAttribute("src", "stepThree.html");
  } else {
    modelContainer.style.visibility = "visible";
  }
  const btn = document.getElementById("btn");

  modelContainer.addEventListener("click", () => {
    modelContainer.style.visibility = "hidden";
  });
