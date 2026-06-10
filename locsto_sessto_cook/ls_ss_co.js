localStorage.setItem(
  "friends",
  JSON.stringify(["hunny", "chirag", "rudra", "yuvraj"]),
); // Since you cannot store arrays in the localStorage you can use JSON.stringify to convert the normal array into a string

let chidiyaghar = JSON.parse(localStorage.getItem("friends")); //Now you don't want that the array you want to save should be displayed in string
console.log(chidiyaghar);

// function setDarkOrLight() {
//   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//   } else {
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
//   }
// }
// setDarkOrLight();

// if (localStorage.getItem("theme")) {
//   document.body.classList.add(localStorage.getItem("theme"));
// } else {
//   setDarkOrLight();
// }

// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", function () {
//     if (!localStorage.getItem("theme")) {
//       setDarkOrLight;
//     }
//     setDarkOrLight();
//   });

// let btn = document.querySelector("button");

// document.body.classList.add(localStorage.getItem("theme"));

// btn.addEventListener("click", function () {
//   if (document.body.classList.contains("dark")) {
//     document.body.classList.add("light");
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   } else {
//     document.body.classList.add("dark");
//     document.body.classList.remove("light");
//     localStorage.setItem("theme", "dark");
//   }
// });

//Below is optimized version of above code

const body = document.body;
const btn = document.querySelector("button");
const media = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  body.classList.toggle("light", theme === "light");
}

// Initial load
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme || (media.matches ? "dark" : "light"));

// Listen to system changes (only if user hasn't overridden)
media.addEventListener("change", () => {
  if (!localStorage.getItem("theme")) {
    applyTheme(media.matches ? "dark" : "light");
  }
});

// Toggle button
btn.addEventListener("click", () => {
  const isDark = body.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
