// for company dropdown
const companyDropdownActivator = document.getElementById(
  "companyDropdownActivator",
);
const companyDropdownActivatorSvg = document.getElementById(
  "companyDropdownActivatorSvg",
);
const companyDropdown = document.getElementById("companyDropdown");
const dropdownAbout = document.getElementById("dropdownAbout");
const dropdownCareers = document.getElementById("dropdownCareers");
const dropdownContactus = document.getElementById("dropdownContactus");
const dropdownImage = document.getElementById("dropdownImage");
// for products
const productsDropdownActivator = document.getElementById(
  "productsDropdownActivator",
);
const productsDropdownActivatorSvg = document.getElementById(
  "productsDropdownActivatorSvg",
);
const productsDropdown = document.getElementById("productsDropdown");
// for solutions
const solutionsDropdownActivator = document.getElementById(
  "solutionsDropdownActivator",
);
const solutionsDropdownActivatorSvg = document.getElementById(
  "solutionsDropdownActivatorSvg",
);
const solutionsDropdown = document.getElementById("solutionsDropdown");
// ---- Company ----
let clickCounterForCompany = 0;
companyDropdownActivator.addEventListener("click", () => {
  clickCounterForCompany++;
  companyDropdown.classList.toggle("-translate-y-[200%]");
  companyDropdown.classList.toggle("translate-y-0");
  companyDropdownActivator.classList.toggle("text-red");
  companyDropdownActivatorSvg.classList.toggle("rotate-90");
  companyDropdownActivatorSvg.classList.toggle("-rotate-90");
  // deactivating products dropdown
  productsDropdown.classList.add("-translate-y-[200%]");
  productsDropdown.classList.remove("translate-y-0");
  productsDropdownActivator.classList.remove("text-red");
  productsDropdownActivator.classList.add("text-black");
  productsDropdownActivatorSvg.classList.add("rotate-90");
  productsDropdownActivatorSvg.classList.remove("-rotate-90");
    // deactivating solutions dropdown
    solutionsDropdown.classList.add("-translate-y-[200%]");
    solutionsDropdown.classList.remove("translate-y-0");
    solutionsDropdownActivator.classList.remove("text-red");
    solutionsDropdownActivator.classList.add("text-black");
    solutionsDropdownActivatorSvg.classList.add("rotate-90");
    solutionsDropdownActivatorSvg.classList.remove("-rotate-90");
  dropdownImage.setAttribute("src", "./images/aboutLargeImage.webp");
  if (clickCounterForCompany % 2 == 0) {
    if (pageYOffset > 700) {
      header.classList.remove("bg-[#ffffff05]");
      header.classList.add("bg-white");
    } else {
      header.classList.add("bg-[#ffffff05]");
      header.classList.remove("bg-white");
    }
  } else {
    header.classList.remove("bg-[#ffffff05]");
    header.classList.add("bg-white");
  }
});

dropdownAbout.addEventListener("mouseenter", () => {
  dropdownImage.setAttribute("src", "./images/aboutLargeImage.webp");
});
dropdownCareers.addEventListener("mouseenter", () => {
  dropdownImage.setAttribute("src", "./images/career.webp");
});
dropdownContactus.addEventListener("mouseenter", () => {
  dropdownImage.setAttribute("src", "./images/contactUsHero.webp");
});

// for products

let clickCounterForProducts = 0;

productsDropdownActivator.addEventListener("click", () => {
  clickCounterForProducts++;
  productsDropdown.classList.toggle("-translate-y-[200%]");
  productsDropdown.classList.toggle("translate-y-0");
  productsDropdownActivator.classList.toggle("text-red");
  productsDropdownActivatorSvg.classList.toggle("rotate-90");
  productsDropdownActivatorSvg.classList.toggle("-rotate-90");
// deactivating company dropdown
companyDropdown.classList.add("-translate-y-[200%]");
companyDropdown.classList.remove("translate-y-0");
companyDropdownActivator.classList.remove("text-red");
companyDropdownActivator.classList.add("text-black");
companyDropdownActivatorSvg.classList.add("rotate-90");
companyDropdownActivatorSvg.classList.remove("-rotate-90");
  // deactivating solutions dropdown
  solutionsDropdown.classList.add("-translate-y-[200%]");
  solutionsDropdown.classList.remove("translate-y-0");
  solutionsDropdownActivator.classList.remove("text-red");
  solutionsDropdownActivator.classList.add("text-black");
  solutionsDropdownActivatorSvg.classList.add("rotate-90");
  solutionsDropdownActivatorSvg.classList.remove("-rotate-90");
  if (clickCounterForProducts % 2 == 0) {
    if (pageYOffset > 700) {
      header.classList.remove("bg-[#ffffff05]");
      header.classList.add("bg-white");
    } else {
      header.classList.add("bg-[#ffffff05]");
      header.classList.remove("bg-white");
    }
  } else {
    header.classList.remove("bg-[#ffffff05]");
    header.classList.add("bg-white");
  }
});
// for solutions

let clickCounterForSolutions = 0;

solutionsDropdownActivator.addEventListener("click", () => {
  clickCounterForSolutions++;
  solutionsDropdown.classList.toggle("-translate-y-[200%]");
  solutionsDropdown.classList.toggle("translate-y-0");
  solutionsDropdownActivator.classList.toggle("text-red");
  solutionsDropdownActivatorSvg.classList.toggle("rotate-90");
  solutionsDropdownActivatorSvg.classList.toggle("-rotate-90");
// deactivating company dropdown
companyDropdown.classList.add("-translate-y-[200%]");
companyDropdown.classList.remove("translate-y-0");
companyDropdownActivator.classList.remove("text-red");
companyDropdownActivator.classList.add("text-black");
companyDropdownActivatorSvg.classList.add("rotate-90");
companyDropdownActivatorSvg.classList.remove("-rotate-90");
  // deactivating products dropdown
  productsDropdown.classList.add("-translate-y-[200%]");
  productsDropdown.classList.remove("translate-y-0");
  productsDropdownActivator.classList.remove("text-red");
  productsDropdownActivator.classList.add("text-black");
  productsDropdownActivatorSvg.classList.add("rotate-90");
  productsDropdownActivatorSvg.classList.remove("-rotate-90");
  if (clickCounterForSolutions % 2 == 0) {
    if (pageYOffset > 700) {
      header.classList.remove("bg-[#ffffff05]");
      header.classList.add("bg-white");
    } else {
      header.classList.add("bg-[#ffffff05]");
      header.classList.remove("bg-white");
    }
  } else {
    header.classList.remove("bg-[#ffffff05]");
    header.classList.add("bg-white");
  }
});
