document.addEventListener('DOMContentLoaded', () => {

    let tl = new TimelineMax();

    tl.fromTo('.bg-loader', 2, 
    {width: '100%'},
    {width: '0%',delay: 3, ease: Expo.easeInOut})

    .fromTo('.bg-video', 5,    
    {width:'50%', opacity: 0},
    {width: "100%", opacity: 1, ease: Expo.easeInOut})

    .fromTo('.navbar', 1,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.mockup', 2,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut})

    .fromTo('.description', 1,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut}, '-=3')
    
    .fromTo('.buttom', 1,
    {y:-50, opacity: 0},
    {y:0, opacity: 1, ease: Expo.easeInOut}, '-=2')
    
})
