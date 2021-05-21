const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

//헤더 메뉴 
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const videos = document.querySelectorAll(".video-slide");
// 슬라이더 버튼 활성화 및 비활성화
let sliderNav = function(button) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  })

  videos.forEach((video) => {
    video.classList.remove("active");
  })

  btns[button].classList.add("active");
  videos[button].classList.add("active");
  
}

btns.forEach((btn, index) => {
  btn.addEventListener("click" , () => {
    sliderNav(index);
  })
})
