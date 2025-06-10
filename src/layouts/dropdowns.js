class AllDropdownsComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <!-- ! Company dropdown -->
      <aside
        id="companyDropdown"
        class="fixed md:top-16 lg:top-28 z-40 grid h-[25rem] w-full -translate-y-[200%] grid-cols-2 gap-4 bg-white md:padding xl:px-28 2xl:px-[356px] duration-[380ms]"
      >
        <ul
          class="grid auto-rows-min gap-1  border-r-[2px] border-[#1A05161A] py-[24px] text-black"
        >
          <li class="mb-3 text-xs font-semibold tracking-widest">COMPANY</li>
          <li id="dropdownAbout" class="">
            <a
              href="./about.html"
              class="group grid grid-flow-col py-2 items-center justify-start overflow-hidden duration-300 hover:text-red"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="-ml-10 mr-4 w-5 rotate-180 fill-red stroke-red stroke-1 duration-300 group-hover:ml-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.904 17.308L4.596 12l5.308-5.308l.708.72L6.523 11.5h12.88v1H6.524l4.089 4.088z"
                />
              </svg>
  
              About Life9 Systems
            </a>
          </li>
         
          <li id="dropdownCareers">
            <a
              href="./careers.html"
              class="group grid grid-flow-col py-2 items-center justify-start overflow-hidden duration-300 hover:text-red"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="-ml-10 mr-4 w-5 rotate-180 fill-red stroke-red stroke-1 duration-300 group-hover:ml-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.904 17.308L4.596 12l5.308-5.308l.708.72L6.523 11.5h12.88v1H6.524l4.089 4.088z"
                />
              </svg>
              Careers
            </a>
          </li>
          <li id="dropdownContactus">
            <a
              href="./contactus.html"
              class="group grid grid-flow-col py-2 items-center justify-start overflow-hidden duration-300 hover:text-red"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="-ml-10 mr-4 w-5 rotate-180 fill-red stroke-red stroke-1 duration-300 group-hover:ml-0"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.904 17.308L4.596 12l5.308-5.308l.708.72L6.523 11.5h12.88v1H6.524l4.089 4.088z"
                />
              </svg>
              Contact Us
            </a>
          </li>
        </ul>
        <img id="dropdownImage" src="./images/aboutLargeImage.webp" class="py-[24px]   2xl:w-[39rem] " alt="" />
      </aside>
      <!-- ! products dropdown  -->
      <aside
      id="productsDropdown"
      class="fixed md:top-16 lg:top-28 z-40 grid h-[25rem] w-full -translate-y-[200%] grid-cols-2 gap-4 bg-white md:padding xl:px-28 2xl:px-[356px] duration-[380ms]"
    >
      <ul
        class="grid auto-rows-min gap-1  border-r-[2px] border-[#1A05161A] py-[24px] text-black"
      >
        <li class="mb-3 text-xs font-semibold tracking-widest">PRODUCTS</li>
        <li class="text-[#877c88]">
          
            Coming Soon
          
        </li>
      </ul>
      <img  src="./images/productsDropdownImage.webp" class="py-[24px]   2xl:w-[39rem] " alt="" />
    </aside>
    <!-- ! solutions dropdown  -->
      <aside
      id="solutionsDropdown"
      class="fixed md:top-16 lg:top-28 z-40 grid h-[25rem] w-full -translate-y-[200%] grid-cols-2 gap-4 bg-white md:padding xl:px-28 2xl:px-[356px] duration-[380ms]"
    >
      <ul
        class="grid auto-rows-min gap-1  border-r-[2px] border-[#1A05161A] py-[24px] text-black"
      >
        <li class="mb-3 text-xs font-semibold tracking-widest">SOLUTIONS</li>
        <li class="text-[#877c88]">
          
            Coming Soon
          
        </li>
      </ul>
      <img  src="./images/productsDropdownImage.webp" class="py-[24px]   2xl:w-[39rem] " alt="" />
    </aside>
      `;
  }
}
customElements.define("dropdowns-component", AllDropdownsComponent);
