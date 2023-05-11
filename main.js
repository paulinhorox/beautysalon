const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')



for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}


const headershadow = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll () {
    
    if (scrollY >= navHeight) {
        headershadow.classList.add('scroll')
    } else { 
        headershadow.classList.remove('scroll')
    }

}

const backToTopButton = document.querySelector('.backtotop')


function backToTop() {

    if (scrollY >= 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}




const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1200: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }

}) 


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

const sections = document.querySelectorAll('main section[id]')

function activeMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if (checkpointStart && checkpointEnd) {

            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')

        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

scrollReveal.reveal(
`
#home .text, #home .image,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,

{delay: 100})

window.addEventListener('scroll', () => {
    changeHeaderWhenScroll()
    backToTop()
    activeMenuAtCurrentSection()
})
// Parei em 1h 23 min da aula 05

