// Theme Script
function loadTheme() {

  const themetoggler = document.querySelector("#theme-toggle");
  

  let darkModeState = false;

  // Sets localStorage state
  function setDarkModeLocalStorage(state) {
    localStorage.setItem("dark-mode", state);
  }

  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
    darkModeState = state;
    if(state) {
        overlayCreated("latest-news");
        overlayCreated("our-projects");
        overlayCreated("single-list");
        overlayCreated("related");
        overlayCreated("featured-properties");
        overlayCreated("developers");
        overlayCreated("single-news");
        overlayCreated("about");
        overlayCreated("contact-page");
      if(document.querySelector("#logo")){
        document.querySelector("#logo").removeAttribute('src');
        document.querySelector("#logo").setAttribute("src","img/footer.png");
      }
    }else{
      if (document.querySelector("#logo")) {
        document.querySelector("#logo").removeAttribute("src");
        document.querySelector("#logo").setAttribute("src", "img/IMG-20230115-WA32.png");
      }
      if (!document.querySelector(".overlay-section")) return;
      let overlays = document.querySelectorAll(".overlay-section");
      overlays.forEach((item)=>{
        item.remove();
      })
    }
  }

  // Initial setting
  toggleDarkMode(
    JSON.parse(localStorage.getItem("dark-mode")) || darkModeState
  );

  function switchListener() {
    darkModeState = !darkModeState;
    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
  }

  themetoggler.addEventListener("click", switchListener);
  if (document.querySelector(".menu-theme")){
    document
      .querySelector(".menu-theme")
      .addEventListener("click", switchListener);
  }
}

loadTheme();


function overlayCreated(className) {
  if (!document.querySelector(`.${className}`)) return;
    let overlay = document.createElement("div");
    overlay.className = "overlay-section";
    document.querySelector(`.${className}`).appendChild(overlay);
}

