function page1Animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-30,
    opacity:0,
    delay:0.7,
    duration:0.5,
    stagger: 0.15
})

tl.from(".center-part1 h1",{
    x:-50,
    opacity:0,
    duration:0.6
},"-=0.5")
tl.from(".center-part1 p",{
    x:-50,
    opacity:0,
    duration:0.6
})
tl.from(".center-part1 button",{
    opacity:0,
    duration:0.3
})
tl.from(".center-part2 img",{
    duration: 0.4,
    opacity:0
},"-=1.3")
gsap.from(".section1bottom img",{
    y:10,
    stagger:0.12,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".section1bottom img",
        scroller:"body",
        start:"top 75%",
    }
})


}

function section2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            sccroller:"body",
            trigger:".section2",
            start:"top 70%",
            end:"top 25%",
            scrub: 2
        }
    })
    
    tl2.from(".services",{
        y:30,
        opacity:0,
    
    })
}

function containerAnimation(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            sccroller:"body",
            trigger:".container",
            start:"top 90%",
            end:"top 20%",
            scrub: 2
        }
    })
    
    tl3.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1,
    },"anim1")
    tl3.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1,
    },"anim1")
    
    tl3.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1,
    },"anim2")
    tl3.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1,
    },"anim2")
}


containerAnimation()
section2Animation()
page1Animation()

