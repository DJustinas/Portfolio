const navToggle = document.querySelector('.nav-toggle');/*pasirenku visus elementus is html su tokia clase*/

navToggle.addEventListener('click', () => { /*kiekvienas kart paspaudus isijungia arba issijungia */
    document.body.classList.toggle('nav-open')      /*sukuria nauja clase kurioj galima daryti CSS*/
})

const navLinks = document.querySelectorAll('.nav__link')

navLinks.forEach(link =>{
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})