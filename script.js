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
const MainBox1 = document.getElementById('page5-img-5-6');
const button1 = document.getElementById('browseAll');
MainBox1.style.height = "0px"
let visible1 = false;

MainBox1.style.opacity = 0;
MainBox1.style.visibility = "hidden";  
MainBox1.style.transition = "opacity 1s ease-in-out, visibility 0s 1s"; 

button1.addEventListener('click', function (event) {
    event.preventDefault();

    setTimeout(() => {
        if (visible1) {
            MainBox1.style.opacity = 0; 
            MainBox1.style.visibility = "hidden";  
            setTimeout(() => {
                MainBox1.style.display = "none"; 
                MainBox1.style.height = "0px"
            }, 1000); 
        } else {
            MainBox1.style.display = "flex";  
            setTimeout(() => {
                MainBox1.style.height = "auto"
                MainBox1.style.opacity = 1; 
                MainBox1.style.visibility = "visible";  
            }, 10);  
        }
        MainBox1.scrollIntoView({ behavior: 'smooth', block: 'start' });
        visible1 = !visible1;
    }, 500);  
});
// const MainBox1 = document.getElementById('page5-img-5-6')
// const button1 = document.getElementById('browseAll')

// MainBox1.style.display = "none"

// let visible1 = false

// button1.addEventListener('click',function(event){
//     event.preventDefault();
    
//     setTimeout(() => {
//         if (visible1) {
//             MainBox1.style.display = "none"

//         } else {
//             MainBox1.style.display = "flex"
//         }
//         visible1 = !visible1
//     }, 500);
// });

const MainBoxes = document.getElementById('mainboxes')
const button = document.getElementById('browse')

MainBoxes.style.display = "none"
let visible = false
MainBox1.style.opacity = 0;
MainBox1.style.visibility = "hidden";  
MainBox1.style.transition = "opacity 1s ease-in-out, visibility 0s 1s"; 
button.addEventListener('click', function (event) {
    event.preventDefault();
    setTimeout(() => {
        if (visible) {
            MainBoxes.style.opacity = 0; 
            MainBoxes.style.visibility = "hidden";  
            setTimeout(() => {
                MainBoxes.style.display = "none"; 
                MainBoxes.style.height = "0px"
            }, 500); 
        } else {
            MainBoxes.style.display = "flex";  
            setTimeout(() => {
                MainBoxes.style.height = "auto"
                MainBoxes.style.opacity = 1; 
                MainBoxes.style.visibility = "visible";  
            }, 100);  
        }
        MainBoxes.scrollIntoView({ behavior: 'smooth', block: 'start' });
        visible = !visible;
    }, 500);  
});


const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sidepanel = document.getElementById('mySidepanel');
const menuLinks = document.querySelectorAll('.sidepanel a');

const closeMenu = () => sidepanel.style.right = "-100%";

openBtn.addEventListener('click', () => sidepanel.style.right = "0");

closeBtn.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: "smooth" });
        closeMenu();
    });
});