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
});


const openBtn = document.getElementById('openBtn')
openBtn.addEventListener(`click`, function(){
    document.getElementById("mySidepanel").style.width = "250px";
    document.getElementById("mySidepanel").style.border = "solid black 1px";

})
const closeBtn = document.getElementById('closeBtn')
closeBtn.addEventListener(`click`, function(){
    document.getElementById("mySidepanel").style.width = "0";
    document.getElementById("mySidepanel").style.border = "none";

})