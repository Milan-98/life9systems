const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  sidebar.classList.remove("-translate-x-full");
  sidebar.classList.add("translate-x-0");
});
closeSidebar.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  sidebar.classList.remove("translate-x-0");
  sidebar.classList.add("-translate-x-full");
});
// company
const sidebarCompanyDropdown = document.getElementById(
  "sidebarCompanyDropdown",
);
const sidebarCompanyDropdownActivator = document.getElementById(
  "sidebarCompanyDropdownActivator",
);
const sidebarCompanyDropdownSvg = document.getElementById(
  "sidebarCompanyDropdownSvg",
);

sidebarCompanyDropdownActivator.addEventListener("click", () => {
  sidebarCompanyDropdownSvg.classList.toggle("rotate-90");
  sidebarCompanyDropdownSvg.classList.toggle("-rotate-90");
  sidebarCompanyDropdown.classList.toggle("h-10");
  sidebarCompanyDropdown.classList.toggle("h-40");
  // closing products
  sidebarProductsDropdown.classList.remove("h-20");
  sidebarProductsDropdownSvg.classList.remove("-rotate-90");
  sidebarProductsDropdown.classList.add("h-10");
  sidebarProductsDropdownSvg.classList.add("rotate-90");
  // closing solutions
  sidebarSolutionsDropdown.classList.remove("h-20");
  sidebarSolutionsDropdownSvg.classList.remove("-rotate-90");
  sidebarSolutionsDropdown.classList.add("h-10");
  sidebarSolutionsDropdownSvg.classList.add("rotate-90");
});
// products
const sidebarProductsDropdown = document.getElementById(
  "sidebarProductsDropdown",
);
const sidebarProductsDropdownActivator = document.getElementById(
  "sidebarProductsDropdownActivator",
);
const sidebarProductsDropdownSvg = document.getElementById(
  "sidebarProductsDropdownSvg",
);

sidebarProductsDropdownActivator.addEventListener("click", () => {
  sidebarProductsDropdownSvg.classList.toggle("rotate-90");
  sidebarProductsDropdownSvg.classList.toggle("-rotate-90");
  sidebarProductsDropdown.classList.toggle("h-10");
  sidebarProductsDropdown.classList.toggle("h-20");
  // closing company
  sidebarCompanyDropdown.classList.remove("h-40");
  sidebarCompanyDropdownSvg.classList.remove("-rotate-90");
  sidebarCompanyDropdown.classList.add("h-10");
  sidebarCompanyDropdownSvg.classList.add("rotate-90");
  // closing solutions
  sidebarSolutionsDropdown.classList.remove("h-20");
  sidebarSolutionsDropdownSvg.classList.remove("-rotate-90");
  sidebarSolutionsDropdown.classList.add("h-10");
  sidebarSolutionsDropdownSvg.classList.add("rotate-90");
});
// Solutions
const sidebarSolutionsDropdown = document.getElementById(
  "sidebarSolutionsDropdown",
);
const sidebarSolutionsDropdownActivator = document.getElementById(
  "sidebarSolutionsDropdownActivator",
);
const sidebarSolutionsDropdownSvg = document.getElementById(
  "sidebarSolutionsDropdownSvg",
);

sidebarSolutionsDropdownActivator.addEventListener("click", () => {
  sidebarSolutionsDropdownSvg.classList.toggle("rotate-90");
  sidebarSolutionsDropdownSvg.classList.toggle("-rotate-90");
  sidebarSolutionsDropdown.classList.toggle("h-10");
  sidebarSolutionsDropdown.classList.toggle("h-20");
  // closing company
  sidebarCompanyDropdown.classList.remove("h-40");
  sidebarCompanyDropdownSvg.classList.remove("-rotate-90");
  sidebarCompanyDropdown.classList.add("h-10");
  sidebarCompanyDropdownSvg.classList.add("rotate-90");
  // closing products
  sidebarProductsDropdown.classList.remove("h-20");
  sidebarProductsDropdownSvg.classList.remove("-rotate-90");
  sidebarProductsDropdown.classList.add("h-10");
  sidebarProductsDropdownSvg.classList.add("rotate-90");
});
