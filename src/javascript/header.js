const header = document.getElementById("header");
const ham1 = document.getElementById("ham1");
const ham2 = document.getElementById("ham2");
const ham3 = document.getElementById("ham3");
document.addEventListener("scroll", () => {
  if (window.pageYOffset > 700) {
    header.classList.remove("bg-[#ffffff05]");
    header.classList.add("bg-white");
    ham1.classList.remove("bg-red");
    ham1.classList.add("bg-black");
    ham2.classList.remove("bg-red");
    ham2.classList.add("bg-black");
    ham3.classList.remove("bg-red");
    ham3.classList.add("bg-black");
    header.style.transition = "background-color .5s ease, color .5s ease";
  } else {
    header.classList.add("bg-[#ffffff05]");
    header.classList.remove("bg-white");
    ham1.classList.add("bg-red");
    ham1.classList.remove("bg-black");
    ham2.classList.add("bg-red");
    ham2.classList.remove("bg-black");
    ham3.classList.add("bg-red");
    ham3.classList.remove("bg-black");
    header.style.transition = "background-color .5s ease, color .5s ease";
  }
});
