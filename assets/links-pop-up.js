const showDropdown = (event) => {
  const dropdown = event.currentTarget.querySelector(".dropdown-menu");

  const hasLinks =
    dropdown && dropdown.querySelectorAll(".dropdown-menu__sublink").length > 0;

  if (dropdown && hasLinks) {
    dropdown.classList.add("active");
  }
};
const hideDropdown = (event) => {
  const dropdown = event.currentTarget.querySelector(".dropdown-menu");
  if (dropdown) {
    dropdown.classList.remove("active");
  }
};
