// theme selector positions
var arr = [...document.getElementsByClassName("button")];

// stylesheet links
var defaultTheme = document.querySelector('[title="default"]');
var lightTheme = document.querySelector('[title="light"]');
var purpleTheme = document.querySelector('[title="purple"]');

// sets default theme
defaultTheme.disabled = false;
lightTheme.disabled = true;
purpleTheme.disabled = true;

arr.forEach((element, index) => {
  element.addEventListener("click", () => {

    // handles theme selector location
    element.style.opacity = "1";
    arr
      .filter((item) => {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });

    // handles the theme switch
    switch (element.id) {
      case "one":
        defaultTheme.disabled = false;
        lightTheme.disabled = true;
        purpleTheme.disabled = true;
        break;
      case "two":
        defaultTheme.disabled = true;
        lightTheme.disabled = false;
        purpleTheme.disabled = true;
        break;
      case "three":
        defaultTheme.disabled = true;
        lightTheme.disabled = true;
        purpleTheme.disabled = false;
        break;
      default:
        return;
    }
  });
});
