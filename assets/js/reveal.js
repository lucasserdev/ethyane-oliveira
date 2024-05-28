window.revelar = ScrollReveal({reset:false})

revelar.reveal('.efeito-header', 
{
    duration: 1000,
    distance: '300px',
    delay: 500
})

revelar.reveal('.efeito-info', 
{
    duration: 500,
    distance: '10px',
    delay: 100
})

revelar.reveal('.efeito-about', 
{
    duration: 1000,
    distance: '800px',
    delay: 500,
    origin: 'left'
})

revelar.reveal('.efeito-choose', 
{
    duration: 1000,
    distance: '300px',
    delay: 500,
    origin: 'bottom',
    easing: 'cubic-bezier(0.5, 2, 0, 0.5)'
})