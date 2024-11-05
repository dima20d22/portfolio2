// let root = document.querySelector(":root");
// let button = document.querySelector(":#themetoggle");

// button.addEventListener("click", () => {
//   event.preventDefault();
//   root.classList.toggle("dark");
//   if (themeToggle.textContent === "Theme Light") {
//     themeToggle.textContent = "Theme Dark";
//   } else {
//     themeToggle.textContent = "theme Light";
//   }
// });

let root = document.querySelector(":root"); // Access the root element
let button = document.querySelector("#themetoggle"); // Correct selector for the button

button.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default action (if any)

  // Toggle the dark mode class on the root element
  root.classList.toggle("light");

  // Toggle button text content based on the current state
  if (button.textContent === "Theme Light") {
    button.textContent = "Theme Dark";
  } else {
    button.textContent = "Theme Light";
  }
});
