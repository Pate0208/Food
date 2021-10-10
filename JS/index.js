// const dataHeader = [
//     {
//       img: "./../IMG/V_face.png",
//       img2: "./../IMG/anh-ha-noi",
//       a1: "HOME",
//       a2: "ABOUT US",
//       a3: "FAVOURITE FOOD",
//     },
  
//   ];
  
// let headerHTML = "";
// let idHeader = document.getElementById("header");

// for (content of dataHeader) {
//     headerHTML += `
//     <div class="top_header">
//         <div class="top_left_header"> 
//             <img class="top_left_header_img" src=${content.img} alt />
//         </div>
//         <div class="top_mid_header">
//             <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a1} </a></div>
//             <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a2} </a></div>
//             <div class="top_mid_header_tag"><a href="favourite_food.html" class="top_mid_header_tag_deco"> ${content.a3} </a></div>
//         </div>
//         <div class="top_right_header"></div>
//     </div>
//   `;
// }

// idHeader.innerHTML = headerHTML;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}