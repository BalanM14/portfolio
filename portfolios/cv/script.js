
function navbarToggle() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  let upBtn = document.getElementById("upBtn");
  onscroll=function scrollFunction() {
              if (document.documentElement.scrollTop > 100) {
                 upBtn.style.display = "block";
              } else {
                 upBtn.style.display = "none";
              }
          }

function topFunction() {
  document.documentElement.scrollTop = 0;
}

