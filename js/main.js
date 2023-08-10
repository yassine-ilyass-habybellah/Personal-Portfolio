let about = document.getElementById("about")
let resume = document.getElementById("resume")
let works = document.getElementById("works")
let contact = document.getElementById("contact")

// Make the active section colored
function activateIt(clicked_id) {
  let activeNav = document.querySelector(".nav-bar ul .active")
  activeNav.classList.remove("active")
  clicked_id.classList.add("active")
  console.log("satadgaldh")
}

