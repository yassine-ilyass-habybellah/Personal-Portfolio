let about = document.getElementById("about-section")
let resume = document.getElementById("resume-section")
let works = document.getElementById("works-section")
let contact = document.getElementById("contact-section")
let variables = {
  cardabout: document.querySelector(".about-content-container"),
  cardresume: document.querySelector(".resume-content-container"),
  cardworks: document.querySelector(".works-content-container"),
  cardcontact: document.querySelector(".contact-content-container")
};
let order = document.querySelector(".order1")
let aboutButton = document.getElementById('about-button');
let resumeButton = document.getElementById('resume-button');
let worksButton = document.getElementById('works-button');
let contactButton = document.getElementById('contact-button');

function activateIt(clicked_id) {
  const currentWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const maxWidth = 1107
  let exceptionName = clicked_id.className
  if (exceptionName == "order1" || exceptionName == "order2") {
    console.log("working")
  }
  else if (currentWidth >= maxWidth) {
    aboutButton.setAttribute('href', '#');
    resumeButton.setAttribute('href', '#');
    worksButton.setAttribute('href', '#');
    contactButton.setAttribute('href', '#');
    // Make the active section colored
      let activeNav = document.querySelector(".nav-bar ul .active") // check for the previous active nav
      activeNav.classList.remove("active") // remove the class
      clicked_id.classList.add("active") // add it to the active currently
      let CurrentCard = variables["card" + `${clicked_id.id}`]
      let PreviousCard = variables["card" + `${activeNav.id}`]
      CurrentCard.classList.remove("fade-in-down")
      CurrentCard.classList.remove("fade-out-up")
      if (CurrentCard === PreviousCard) {
        return
      } else {
        console.log("Current:",CurrentCard)
        console.log("Previous:", PreviousCard)
        console.log("###############")
        CurrentCard.classList.remove("hidden")
        PreviousCard.classList.remove("current")
        CurrentCard.classList.add("fade-in-down")
        PreviousCard.classList.add("fade-out-up")
        CurrentCard.classList.add("current")
        PreviousCard.classList.add("hidden")
    }
    const activeElements = document.querySelectorAll(".nav-bar ul .active");
    if (activeElements.length === 0) {
      contact.classList.add("active")
    } else {
      return
    }
  } else if (currentWidth < maxWidth) {
    aboutButton.setAttribute('href', '#about-section');
    resumeButton.setAttribute('href', '#resume-section');
    worksButton.setAttribute('href', '#works-section');
    contactButton.setAttribute('href', '#contact-section');
    let activeNav = document.querySelector(".nav-bar ul .active") // check for the previous active nav
    activeNav.classList.remove("active") // remove the class
    clicked_id.classList.add("active") // add it to the active currently
    let CurrentCard = variables["card" + `${clicked_id.id}`]
    CurrentCard.classList.remove("fade-out-up")
  }
}