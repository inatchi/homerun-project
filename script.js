$(document).ready(function(){
    $('.main__container-slider').slick({
        arrows:true, //видимость/невидимость стрелок(false)
        dots:true, //видны/не видны точки
        slidesToShow:1, //сколько слайдов видно в слайдере
        slidesToScroll:1, //по сколько слайдов скроллить
    }); 
});


let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}


$(document).ready(function() {
	$('.footer__head-li').click(function(event) {
		if($('.footer__container-menu').hasClass('one')){
			$('.footer__head-li').not($(this)).removeClass('active');
			$('.footer__usual-li-container').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


        $(document).ready(function() {
	    $('.navigation__burger').click(function(event) {
		    $('.navigation__burger, .navigation__menu').toggleClass('active');
            $('body').toggleClass('lock');
        });
});

