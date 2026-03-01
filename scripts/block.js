const block = document.querySelector(".block");

gsap.fromTo( block, { x :-20 },{ x: 20, duration: 1.5, ease: "sine.inOut", yoyo: true, repeat: -1 });