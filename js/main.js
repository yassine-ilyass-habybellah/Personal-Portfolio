
let about = document.getElementById("about")
let resume = document.getElementById("resume")
let works = document.getElementById("works")
let contact = document.getElementById("contact")
let variables = {
  cardabout: document.querySelector(".about-content-container"),
  cardresume: document.querySelector(".resume-content-container"),
  cardworks: document.querySelector(".works-content-container"),
  cardcontact: document.querySelector(".contact-content-container")
};

function activateIt(clicked_id) {
  // Make the active section colored
  let activeNav = document.querySelector(".nav-bar ul .active") // check for the previous active navù
  activeNav.classList.remove("active") // remove the class
  clicked_id.classList.add("active") // add it to the active currently
  let Currentcard = variables["card" + `${clicked_id.id}`]
  let Previouscard = variables["card" + `${activeNav.id}`]
  console.log(Currentcard, Previouscard)
  Currentcard.classList.remove("fade-out-up")
  Currentcard.classList.remove("fade-in-down")
  Currentcard.classList.remove("hidden")
  if (Currentcard === Previouscard) {
    return
  } else {
    Currentcard.classList.add("fade-in-down")
    Previouscard.classList.remove("fade-in-down")
    Previouscard.classList.add("fade-out-up")
    Previouscard.classList.add("hidden")
  }
}