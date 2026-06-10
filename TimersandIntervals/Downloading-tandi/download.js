let count = 0;
let sec = 5;
let proogressbar = document.querySelector(".progress-bar");
let progress = document.querySelector(".progress");
let progressText = document.querySelector(".percent");
let button = document.querySelector("button");

function downloadsim() {
  let interv = setInterval(
    function () {
      if (count < 100) {
        count++;
        progress.style.width = `${count}%`;
        progressText.textContent = `${count}%`;
        document.querySelector(".status").textContent = "Please wait...";
      } else {
        clearInterval(interv);
        document.querySelector("h2").textContent = "Downloaded";
        document.querySelector(".status").textContent = "Done";
      }
    },
    (sec * 1000) / 100,
  );
}

button.addEventListener("click", downloadsim);
