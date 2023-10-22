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
  // Make the active section colored
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
  } else if (currentWidth < maxWidth) {
    aboutButton.setAttribute('href', '#about-section');
    resumeButton.setAttribute('href', '#resume-section');
    worksButton.setAttribute('href', '#works-section');
    contactButton.setAttribute('href', '#works-section');
    // for the problem in which all the the other cards (resume, works, contact) disseppear when you change to the phone screen:
    // you should remove the hidden attribute and also add any necessary attribute for the cards to appears
  }
}