import "./reset.css";
import "./style.css";

let dropdownName = document.querySelector(".dropdown-name");
let dropDownOptions = document.querySelectorAll(".option");

dropdownName.addEventListener("click", () => {
  let dropdownContent = document.querySelector(".dropdown-content");
  if (dropdownContent.classList.contains("displaying")) {
    dropdownName.textContent = "Dropdown \u2191";
    dropdownContent.classList.remove("displaying");
  } else {
    dropdownName.textContent = "Dropdown \u2193";
    displayDropdownContent();
  }
});

dropDownOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    let dropdownSection = document.querySelector(".dropdown-section");
    let bgColor = getColor(index);
    dropdownSection.style.backgroundColor = bgColor;
  });
});

function displayDropdownContent() {
  let dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.add("displaying");
}

function getColor(index) {
  switch (index) {
    case 0:
      return "lightblue";
    case 1:
      return "#ff6f6f";
    case 2:
      return "lightgreen";
    case 3:
      return "grey";
  }
}

displayImage(1);
let slideDisplayedNow = 1;
let nextSlide = document.querySelector('.next-slide');
let previousSlide = document.querySelector('.previous-slide');
let slideNavigators = document.querySelectorAll('.slide-navigator');

slideNavigators.forEach((slideNavigator, index) => {
    slideNavigator.addEventListener('click', () => {
        if (slideNavigator.classList.contains('displaying') == false) {
            removeSlide();
            slideDisplayedNow = (index+1);
            displayImage(slideDisplayedNow);
        }
    })
})

nextSlide.addEventListener('click', () => {
    let totalSlides = document.querySelectorAll('.image');
    if (slideDisplayedNow < totalSlides.length) {
        slideDisplayedNow++;
        removeSlide();
        displayImage(slideDisplayedNow);
    }
})

previousSlide.addEventListener('click', () => {
    if (slideDisplayedNow != 1) {
        slideDisplayedNow--;
        removeSlide();
        displayImage(slideDisplayedNow);
    }
})

function displayImage(imageNumber) {
    let imageContainers = document.querySelectorAll(".image");
    let imageContainer = imageContainers[imageNumber-1];
    imageContainer.classList.add('displaying-slide');
    let slideNavigators = document.querySelectorAll('.slide-navigator');
    let slideNavigator = slideNavigators[imageNumber-1];
    slideNavigator.classList.add('displaying');
}

function removeSlide() {
    let imageContainers = document.querySelectorAll('.image');
    let slideNavigators = document.querySelectorAll('.slide-navigator');
    slideNavigators.forEach((slideNavigator) => {
        if (slideNavigator.classList.contains('displaying')) {
            slideNavigator.classList.remove('displaying');
        }
    })
    imageContainers.forEach((imageContainer) => {
        if (imageContainer.classList.contains('displaying-slide')) {
            imageContainer.classList.remove('displaying-slide');
        }
    });
}
