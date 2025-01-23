const email = document.getElementById('email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let isValid = true;

    if (!emailPattern.test(email.value)) {
        alert("There is something wrong in your email")
        isValid = false;
    } else {
        isValid = true
    }

    if (isValid) {
        alert("Successfully submitted");
        email.value = " "
    }
});

const MainBoxes = document.getElementById('mainboxes')
const button = document.getElementById('browse')

MainBoxes.style.display = "none"
let visible = false

button.addEventListener('click',function(event){
    event.preventDefault();
    setTimeout(() => {
        if (visible) {
            MainBoxes.style.display = "none"
        } else {
            MainBoxes.style.display = "flex"
            MainBoxes.scrollIntoView({behavior:'smooth',block:'start'})
        }
        visible = !visible
    }, 500);
})


// Initialize Swiper
var swiper = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".pg9-btn-next",
      prevEl: ".pg9-btn-prev",
    },
  });

  // Get the custom buttons
  const nextButton = document.querySelector(".pg9-btn-next");
  const prevButton = document.querySelector(".pg9-btn-prev");

  // Update button state on Swiper events
  swiper.on("reachEnd", function () {
    nextButton.classList.add("disabled"); // Add disabled styles
  });

  swiper.on("reachBeginning", function () {
    prevButton.classList.add("disabled"); // Add disabled styles
  });

  swiper.on("fromEdge", function () {
    // Remove the disabled styles when leaving the edge
    nextButton.classList.remove("disabled");
    prevButton.classList.remove("disabled");
  });