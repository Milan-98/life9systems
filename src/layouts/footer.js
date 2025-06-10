class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = ` <footer class=" bg-white py-10 lg:pt-[67px] lg:pb-[75px]">
      <!-- ? subscribe -->
      <!-- ? instead of hidden use grid -->
      <section class="hidden gap-5 sm:grid-flow-col lg:pb-[80px]">
        <h3 class="">
          Industry expertise, news & research.

          <div class="text-red">In your inbox.</div>
        </h3>
        <form
          action=""
          class="mr-3 grid w-fit grid-flow-col items-center justify-start rounded-full border-[1px] border-[#1A051619] p-2 text-xs sm:mr-0 sm:place-self-end lg:w-[432px]"
        >
          <input
            type="email"
            required
            class="rounded-full px-2 py-2 placeholder-[#1A051699] outline outline-transparent md:px-4 lg:w-[295px]"
            placeholder="Enter your work email"
          />
          <input
            type="submit"
            value="Subscribe"
            class="rounded-full bg-red px-4 py-2 font-semibold text-white md:py-4 lg:w-[120px]"
          />
        </form>
      </section>
      <!-- ? navs -->
      <!-- i have removed border top please add it when you add subscribe section add this border-y-[1px] -->
      <nav
        class="my-8 padding grid grid-cols-2 gap-x-2 gap-y-6 border-y-[1px]  border-[#1A051619] py-10 text-sm text-purple sm:grid-cols-3 md:grid-cols-5 md:gap-x-5 md:gap-y-0 lg:my-0 lg:gap-10 lg:pt-[80px] lg:pb-[180px]"
      >
        <!-- 1 -->
        <ul class="grid auto-rows-min gap-1 lg:gap-2">
          <li class="mb-1 font-semibold text-black lg:mb-4">Products</li>
          <li class="group ">
            <a
              href="https://lifelabz.in" target="_blank"
              class=" grid w-fit grid-flow-col items-center break-all group-hover:border-b-[1px] group-hover:border-purple"
            >
              LifeLabz
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 rotate-180 fill-purple"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9.904 17.308L4.596 12l5.308-5.308l.708.72L6.523 11.5h12.88v1H6.524l4.089 4.088z"
                /></svg
              >The Dispenser
            </a>
          </li>
          
        </ul>
        <!-- 2 -->
        <ul class="grid auto-rows-min gap-1 lg:gap-2">
          <li class="mb-1 font-semibold text-black lg:mb-1 ">
            Case Studies 
            <div class="font-light text-xs tracking-wide text-red">(coming soon)</div>
          </li>
          <li class="hover:underline cursor-pointer w-fit">
            Marine Intelligence
          </li>
          <li class="hover:underline cursor-pointer w-fit">Farm Connect</li>
          <li class="hover:underline cursor-pointer w-fit">Water Metering System</li>
         
        </ul>
        <!-- 3 -->
        <ul class="grid auto-rows-min gap-1 lg:gap-2">
          <li class="mb-1 font-semibold text-black lg:mb-1">Solutions
            <div class="font-light text-xs tracking-wide text-red">(coming soon)</div>
          </li>
          <li class="hover:underline cursor-pointer w-fit">Healthcare</li>
          <li class="hover:underline cursor-pointer w-fit">Dairy Farming</li>
          <li class="hover:underline cursor-pointer w-fit">Energy (EV)</li>
         
        </ul>
        <!-- 4 -->
        <ul class="grid auto-rows-min gap-1  lg:gap-2">
          <li class="mb-1 font-semibold text-black lg:mb-4">Company</li>
          <li class="  hover:underline w-fit">
            <a href="./about.html">About</a>
          </li>
      
          <li class="hover:underline w-fit"><a href="./careers.html">Careers</a></li>
          <li class="hover:underline w-fit"> <a href="./contactus.html">Contact Us</a></li>
        </ul>
        <!-- 5 -->
        <ul class="grid auto-rows-min gap-1 lg:gap-2">
          <li class="mb-1 font-semibold text-black lg:mb-4">Social</li>
      
          <li class=" hover:underline w-fit"> <a class="" target="_blank" href="https://in.linkedin.com/company/life9-systems">Linkedin</a></li>
          
        </ul>
      </nav>
      <!-- ? copyright -->
      <section
        class="grid padding gap-4 text-xs text-[#877c88] sm:grid-flow-col md:justify-between lg:pt-[80px]"
      >
        <h4>© 2023 Life9 Systems Pvt Ltd. All rights reserved.</h4>
        <ul class="grid grid-flow-col gap-2 md:gap-5 lg:gap-[32px]">
          <li class="text-[#412742] cursor-pointer">Terms & Conditions</li>
          <li class="text-[#412742] cursor-pointer">Privacy Policy</li>
          <li class="hover:text-red duration-300"> <a target="_blank" href="http://bornbasic.com">Crafted by BornBasic</a> </li>
        </ul>
      </section>
    </footer> `;
  }
}
customElements.define("footer-component", FooterComponent);
