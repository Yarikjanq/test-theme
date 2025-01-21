const Hamburger = () => {
  const drawerIcon = document.querySelector(".header__icon");
  const headerDrawerBar = document.querySelector(".header_drawer-bar");
  const iconHamburger = document.querySelector(".icon-hamburger");
  const iconClose = document.querySelector(".icon-close");
  const overlay = document.querySelector(".overlay");
  drawerIcon.onclick = () => {
    headerDrawerBar.classList.add("transformed");
    iconHamburger.classList.add("hidden");
    iconClose.classList.remove("hidden");
    iconClose.classList.add("visible");
    document.body.style.overflow = "hidden";
    overlay.classList.remove("hidden");
    overlay.classList.add("transformed");
  };
  iconClose.onclick = (event) => {
    event.stopPropagation();
    iconClose.classList.add("hidden");
    iconClose.classList.remove("visible");
    iconHamburger.classList.remove("hidden");
    headerDrawerBar.classList.remove("transformed");
    document.body.style.removeProperty("overflow");
    overlay.classList.add("hidden");
  };

  document.onclick = (event) => {
    if (
      !headerDrawerBar.contains(event.target) &&
      !iconHamburger.contains(event.target)
    ) {
        iconClose.classList.add("hidden");
        iconHamburger.classList.remove("hidden");
        iconClose.classList.remove("visible");
        headerDrawerBar.classList.remove("transformed");
        overlay.classList.remove("transformed")
    }
  };

  headerDrawerBar.onclick = (event) => {
    event.stopPropagation();
  };
};

Hamburger();
