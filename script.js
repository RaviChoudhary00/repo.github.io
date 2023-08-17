let crsr =  document.querySelector("#cursor")
let crsrBlur =  document.querySelector("#cursor-blur")

document.addEventListener('mousemove',(dets)=>{
    crsr.style.left  = dets.x-15 + "px"
    crsr.style.top  = dets.y-15 + "px"
    crsrBlur.style.left  = dets.x-200 + "px"
    crsrBlur.style.top  = dets.y-200 + "px"
})

gsap.to('#nav',{
    backgroundColor:'black',
    height:'100px',
    duration:0.3,
    scrollTrigger:{
        trigger:"#nav",
        scroll:'body',
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroll:"body",
        markers:false,
        start:"top -25%",
        end:"top -70%",
        scrub:3
    }
})

var mover = document.querySelectorAll(".circle-and-pointer")
mover.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        crsr.style.scale = 3
        crsr.style.border = "0.1pt solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",()=>{
        crsr.style.scale = 1
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor = "#95C11E"
    })
})

gsap.from("#middle-about",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#middle-about",
        scroller:"body",
        markers:false,
        start:"top 90%",
        end:"top 80%",
        scrub:1
    }
})

