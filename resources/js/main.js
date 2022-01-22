// mixitup

var mixer = mixitup('.work-grid');

// wow

wow = new WOW({
    mobile: false
})
wow.init();

// HAMBURGER MENU

function openMenu(){
    document.getElementById('navber').style.width = "100%";
}
function closeMenu(){
    document.getElementById('navber').style.width = "0%";
}

// scroll

$('.hamburger-menu ul li a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false
});
