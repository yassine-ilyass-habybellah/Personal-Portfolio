
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
let order = document.querySelector(".order1")

function activateIt(clicked_id) {
  // Make the active section colored
    let activeNav = document.querySelector(".nav-bar ul .active") // check for the previous active nav
    activeNav.classList.remove("active") // remove the class
    clicked_id.classList.add("active") // add it to the active currently
    let Currentcard = variables["card" + `${clicked_id.id}`]
    let Previouscard = variables["card" + `${activeNav.id}`]
    Currentcard.classList.remove("fade-in-down")
    Currentcard.classList.remove("fade-out-up")
    if (Currentcard === Previouscard) {
      return
    } else {
      console.log("Current:",Currentcard)
      console.log("Previous:", Previouscard)
      console.log("###############")
      Currentcard.classList.remove("hidden")
      Previouscard.classList.remove("current")
      Currentcard.classList.add("fade-in-down")
      Previouscard.classList.add("fade-out-up")
      Currentcard.classList.add("current")
      Previouscard.classList.add("hidden")
  }
  const activeElements = document.querySelectorAll(".nav-bar ul .active");
  if (activeElements.length === 0) {
    contact.classList.add("active")
  } else {
    return
  }
}