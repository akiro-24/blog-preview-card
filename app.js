let tl = gsap
  .timeline({
    default: {
      duration: 2,
    },
  })
  .from("main", {
    scale: 0,
  })
  .from(".header-image", {
    scale: 0,
  })
  .from(".card-tag", {
    scale: 0,
  })
  .from(".published-date", {
    scale: 0,
  })
  .from(".content-title", {
    scale: 0,
  })
  .from(".content-text", {
    scale: 0,
  })
  .from(".author", {
    scale: 0,
  });
