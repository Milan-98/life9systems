class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header
      id="header"
      class="padding bg-opacity-2 fixed top-0 z-50 grid w-full grid-flow-col items-center justify-between border-[1px] border-[#ffffff1a] bg-[#ffffff05] py-4  backdrop-blur-md duration-500 lg:h-[112px] lg:py-0"
    >
      <!-- Logo -->
      <a href="./index.html" aria-label="go to homepage">
        <svg
          id="logo"
          class="w-40  duration-500 lg:h-[32px] lg:w-[200px]"
          viewBox="0 0 200 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3003 1.1656e-07L23.1227 0L7.11469 16L16.7417 25.6222H11.9193C10.4516 25.6222 9.04402 25.0395 8.00621 24.0022L0 16L14.3872 1.62003C15.425 0.582743 16.8326 0 18.3003 1.1656e-07Z"
            fill="red"
          />
          <path
            d="M39.1308 16L24.7436 30.38C23.7058 31.4173 22.2982 32 20.8305 32L16.008 32L32.0161 16L25.7907 9.77778L19.5654 16L23.1227 19.5556L19.5654 23.1111L16.3638 19.9111C14.2026 17.7511 14.2026 14.2489 16.3638 12.0889L22.2334 6.22222H27.0558C28.5235 6.22222 29.9311 6.80497 30.9689 7.84226L39.1308 16Z"
            fill="red"
          />
          <path d="M49.504 25V7.08H53.3203V21.8512H59.6979V25H49.504Z" />
          <path d="M60.8097 25V7.08H64.5491V25H60.8097Z" />
          <path
            d="M66.0873 25V7.08H76.2812V10.2288H69.9036V14.1968H76.2812V17.0896H69.9036V25H66.0873Z"
          />
          <path
            d="M77.5681 25V7.08H87.762V10.2288H81.3844V14.1968H87.762V17.0896H81.3844V21.8512H87.762V25H77.5681Z"
          />
          <path
            d="M95.1447 20.136C91.0979 20.136 88.6647 17.2176 88.6647 13.5312C88.6647 9.8448 91.4308 6.824 95.785 6.824C100.037 6.824 103.085 9.64 103.085 13.8896C103.136 18.6768 99.6014 23.208 96.9632 25H92.2248C94.1458 23.72 96.2973 21.8 97.8084 19.5216C97.0657 19.9056 96.1692 20.136 95.1447 20.136ZM92.1992 13.6336C92.1992 15.7584 93.6079 17.1664 95.7338 17.1664C97.9365 17.1664 99.3708 15.7584 99.3708 13.6336C99.3708 11.5344 97.9365 10.152 95.785 10.152C93.6336 10.152 92.1992 11.5344 92.1992 13.6336Z"
          />
          <path
            d="M108.659 11.4832C108.659 8.6672 111.066 6.824 114.191 6.824C115.6 6.824 117.213 7.1568 118.187 7.7968V9.9984C117.265 9.256 115.856 8.6416 114.447 8.6416C112.373 8.6416 110.964 9.896 110.964 11.688C110.964 15.3744 119.134 15.7584 119.134 20.6992C119.134 23.5152 117.008 25.256 113.807 25.256C111.246 25.256 109.325 24.36 108.505 23.8224V21.6208C109.478 22.3632 111.502 23.4384 113.525 23.4384C115.6 23.4384 116.829 22.44 116.829 20.648C116.829 16.808 108.659 16.424 108.659 11.4832Z"
          />
          <path
            d="M125.464 25L125.49 19.24L119.932 7.08H122.109L126.463 16.9872L130.817 7.08H132.994L127.462 19.1888L127.436 25H125.464Z"
          />
          <path
            d="M133.896 11.4832C133.896 8.6672 136.304 6.824 139.429 6.824C140.837 6.824 142.451 7.1568 143.424 7.7968V9.9984C142.502 9.256 141.094 8.6416 139.685 8.6416C137.61 8.6416 136.202 9.896 136.202 11.688C136.202 15.3744 144.372 15.7584 144.372 20.6992C144.372 23.5152 142.246 25.256 139.045 25.256C136.483 25.256 134.562 24.36 133.743 23.8224V21.6208C134.716 22.3632 136.739 23.4384 138.763 23.4384C140.837 23.4384 142.067 22.44 142.067 20.648C142.067 16.808 133.896 16.424 133.896 11.4832Z"
          />
          <path
            d="M150.344 25V8.8208H145.145V7.08H157.593V8.8208H152.393V25H150.344Z"
          />
          <path
            d="M159.267 25V7.08H168.744V8.8208H161.342V14.4272H168.744V16.0656H161.342V23.2592H168.744V25H159.267Z"
          />
          <path
            d="M170.595 25L172.464 7.08H175.102L179.175 21.8768L183.222 7.08H185.86L187.755 25H185.809L184.323 10.0752L184.298 9.7424H184.272L183.888 11.3552L180.148 25H178.202L174.129 10.0752L174.027 9.7424H174.001L173.899 11.4064L172.541 25H170.595Z"
          />
          <path
            d="M189.524 11.4832C189.524 8.6672 191.932 6.824 195.057 6.824C196.465 6.824 198.079 7.1568 199.052 7.7968V9.9984C198.13 9.256 196.722 8.6416 195.313 8.6416C193.238 8.6416 191.829 9.896 191.829 11.688C191.829 15.3744 200 15.7584 200 20.6992C200 23.5152 197.874 25.256 194.673 25.256C192.111 25.256 190.19 24.36 189.371 23.8224V21.6208C190.344 22.3632 192.367 23.4384 194.391 23.4384C196.465 23.4384 197.695 22.44 197.695 20.648C197.695 16.808 189.524 16.424 189.524 11.4832Z"
          />
        </svg>
      </a>
      <div class="hamburger-menu place-self-end md:hidden">
      <span id="ham1" class="bg-red"></span>
      <span id="ham2" class="bg-red"></span>
      <span id="ham3" class="bg-red"></span>
    </div>
      <!-- nav -->
      <ul
        class="hidden grid-flow-col gap-5 text-xs font-medium md:grid lg:-my-[47px] lg:gap-[40px] lg:py-[47px] lg:text-sm lg:font-semibold"
      >
        <li
          id="companyDropdownActivator"
          class="grid cursor-pointer grid-flow-col items-center gap-1 lg:-my-[47px] lg:gap-2 lg:py-[47px]"
        >
          Company
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="companyDropdownActivatorSvg"
            class="w-3 rotate-90 fill-red stroke-red stroke-2 lg:w-[10px] duration-300"
            viewBox="0 0 24 24"
          >
            <path
              d="m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.313 12z"
            />
          </svg>
        </li>
        <li
        id="productsDropdownActivator"
          class="grid  grid-flow-col cursor-pointer  items-center lg:-my-[47px] lg:py-[47px] gap-1 lg:gap-2 "
        >
          Products<svg
          id="productsDropdownActivatorSvg"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 rotate-90  fill-red stroke-red duration-300  stroke-2 lg:w-[10px]"
            viewBox="0 0 24 24"
          >
            <path
              d="m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.313 12z"
            />
          </svg>
        </li>
        <li
        id="solutionsDropdownActivator"
          class="grid  grid-flow-col cursor-pointer items-center lg:-my-[47px] lg:py-[47px] gap-1 lg:gap-2 "
        >
          Solutions<svg
          id="solutionsDropdownActivatorSvg"
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 rotate-90  fill-red stroke-red stroke-2 duration-300 lg:w-[10px]"
            viewBox="0 0 24 24"
          >
            <path
              d="m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.313 12z"
            />
          </svg>
        </li>
        <li
          class="grid cursor-default grid-flow-col items-center gap-1 lg:gap-2 opacity-60"
        >
          Case Studies<svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-3 rotate-90 fill-[#cccc4f] stroke-[#cccc4f] opacity-50 stroke-2 lg:w-[10px]"
            viewBox="0 0 24 24"
          >
            <path
              d="m8.006 21.308l-1.064-1.064L15.187 12L6.942 3.756l1.064-1.064L17.313 12z"
            />
          </svg>
        </li>
        
      </ul>
      <button
      onclick="window.location.href = 'contactus.html';"
        class="hidden rounded-full bg-red hover:bg-white   hover:text-red duration-200 px-3 py-2 text-xs font-semibold text-white md:block lg:h-[48px] lg:w-[131px] lg:rounded-[24px] lg:px-0 lg:py-0 lg:text-sm"
      >
        Get In Touch
      </button>
    </header>`;
  }
}
customElements.define("header-component", HeaderComponent);
