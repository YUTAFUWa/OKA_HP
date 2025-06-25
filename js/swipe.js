// const swiper = new Swiper(".swiper",{});


const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "bullets",
  //   clickable: "clickable",
  // },
  loop: true, //繰り返し指定
  spaceBetween: 10, //スライド感の余白
  slidesPerView: 1.5, //一度に表示するスライド枚数
  centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
  centeredSlidesBounds: true, //アクティブなスライドを中央に配置
});
