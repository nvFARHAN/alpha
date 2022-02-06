// document.addEventListener("DOMContentLoaded", () => { // Same as document.addEventListener("DOMContentLoaded"...

//   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
//   const navBtn = document.querySelector("#toggleBtn");
//     navBtn.addEventListener("blur", () => {
//     let screenWidth = window.innerWidth;
//     console.log("Focus Lost");
//     if (screenWidth < 768) {
//       var myCollapse = document.getElementById('navbarNavAltMarkup')
//       var bsCollapse = new bootstrap.Collapse(myCollapse, {
//         toggle: false
//       })
//       // let alpha = document.querySelector("#navbarNavAltMarkup");
//       //   alpha.classList.replace
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function(){
  var btn = document.getElementById("toggleBtn");
  var element = document.getElementById("navbarNavAltMarkup");

  // Create a collapse instance, toggles the collapse element on invocation
  var myCollapse = new bootstrap.Collapse(element, {
    toggle:false
  });

  btn.addEventListener("blur", function(){
      myCollapse.hide();
  });
});