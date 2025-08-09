// script.js

// 检查GSAP是否已加载
if (typeof gsap !== 'undefined') {
    gsap.from(".title", { duration: 2, y: -50, opacity: 0, ease: "bounce" });
    gsap.from(".fade-in", { duration: 2, x: -50, opacity: 0, stagger: 0.5 });
    gsap.from(".icon", { duration: 1, scale: 0, delay: 1, stagger: 0.2, ease: "back" });
}
