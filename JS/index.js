const dataHeader = [
    {
      img: "./../IMG/V_face.png",
      img2: "./../IMG/anh-ha-noi",
      a1: "HOME",
      a2: "ABOUT US",
      a3: "DISTRICTS",
      a4: "Sth",
    },
  
  ];
  
let headerHTML = "";
let idHeader = document.getElementById("header");

for (content of dataHeader) {
    headerHTML += `
    <div class="top_header">
        <div class="top_left_header"> 
            <img class="top_left_header_img" src=${content.img} alt />
        </div>
        <div class="top_mid_header">
            <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a1} </a></div>
            <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a2} </a></div>
            <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a3} </a></div>
            <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a4} </a></div>
        </div>
        <div class="top_right_header"></div>
    </div>
  `;
}

idHeader.innerHTML = headerHTML;