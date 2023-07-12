import "./styles.scss";

import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // プラグイン登録

// gsap.set(".c-box", {
//   x: 0,
//   y: 0
// });

// gsap.to(".c-box", {
//   x: 500, // x軸方向に500px移動する
//   rotation: 180, // 180度回転する
//   duration: 10, // 3秒間アニメーションする
//   delay: 3, // 3秒後にアニメーションする
//   ease: Power4.easeOut // アニメーションの変化率をPower4.easeOutにする
// });

// gsap.from(".c-box", {
//   x: 500,
//   rotation: 180,
//   duration: 3,
//   delay: 3,
//   ease: Power4.easeOut
// });

// gsap.fromTo(
//   ".c-box",
//   { x: 0, rotation: 0 },
//   { x: 500, rotation: 180, duration: 3, delay: 3, ease: Power4.easeOut }
// );

// const tl = gsap.timeline();
// tl.to(".c-box", { x: 300, rotation: 180, duration: 3, ease: Power4.easeOut })
//   .to(".c-box", { y: 300, rotation: 360, duration: 3, ease: Power4.easeOut })
//   .to(".c-box", { x: 0, rotation: 540, duration: 3, ease: Power4.easeOut })
//   .to(".c-box", { y: 0, rotation: 720, duration: 3, ease: Power4.easeOut });

ScrollTrigger.batch(".c-box", {
  onEnter: (batch) =>
    gsap.to(batch, {
      rotation: 180,
      x: 500,
      duration: 3,
      ease: Power4.easeOut
    }),
  start: "top 50%"
});
