//Side Navigation Bar
document.addEventListener('DOMContentLoaded', (event) => {
  closeNav(); // Ensure sidenav is closed on initial load
});

function openNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");

  if (window.innerWidth <= 991) {
    sidenav.style.width = "100%";
    main.style.marginLeft = "0"; // Adjust as needed for smaller screens
  } else {
    sidenav.style.width = "500px";
    main.style.marginLeft = "250px"; // Adjust as needed for larger screens
  }

  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  
  sidenav.style.width = "0";
  main.style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

//Portfolio Toggle
function togglePort(portNumber, action) {
  const port = document.getElementById(`myPort${portNumber}`);
  const main = document.getElementById("main");

  if (action === 'open') {
    port.style.width = "100%";
    main.style.marginLeft = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  } else if (action === 'close') {
    port.style.width = "0";
    main.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }
}

function openPort1() { togglePort(1, 'open'); }
function closePort1() { togglePort(1, 'close'); }
function openPort2() { togglePort(2, 'open'); }
function closePort2() { togglePort(2, 'close'); }
function openPort3() { togglePort(3, 'open'); }
function closePort3() { togglePort(3, 'close'); }
function openPort4() { togglePort(4, 'open'); }
function closePort4() { togglePort(4, 'close'); }
function openPort5() { togglePort(5, 'open'); }
function closePort5() { togglePort(5, 'close'); }
function openPort6() { togglePort(6, 'open'); }
function closePort6() { togglePort(6, 'close'); }
function openPort7() { togglePort(7, 'open'); }
function closePort7() { togglePort(7, 'close'); }


//Background Color Change
window.onscroll = function(){
  fromTop_onscroll();
};

function fromTop_onscroll(){
  const scrollAltElement = document.getElementById("scrollAlt");

  if (!scrollAltElement) {
    console.error("Element with ID 'scrollAlt' not found.");
    return;
}

  if(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
    scrollAltElement.classList.add("bg-switch");
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    scrollAltElement.classList.remove("bg-switch");
  }

}




