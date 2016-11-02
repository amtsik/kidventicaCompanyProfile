var mySwiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 75,
    nextButton: '.arrow__r',
    prevButton: '.arrow__l',
    breakpoints: {
        1200: {
        	slidesPerView: 3,
            spaceBetween: 40
        },
        1100: {
        	slidesPerView: 3,
            spaceBetween: 20
        },
        980: {
            slidesPerView: 2,
            spaceBetween: 75
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        650: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        400: {
            slidesPerView: 1,
            spaceBetween: 20
        }
    }
});


var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 0
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 13,
    centeredSlides: true,
    slidesPerView: 10,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    // virtualTranslate: true,
    virtualTranslate: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
        1200: {
            slidesPerView: 6,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 5,
        }
    }
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;

var swipercontainer = new Swiper('.side__unit__slaider__container', {
    spaceBetween: 10,
    slidesPerView: 1,
    pagination: '.side__unit__slaider__pagination',
    paginationClickable: true,
    breakpoints: {
        1100: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2
        },
        480: {
            slidesPerView: 1
        }
    }
});

new	Vue ({
    el: document.querySelector('.main__company__subscribers__photo'),
    data: {
        subscribers: [
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            },
            {
                src : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                alt : 'описание'
            }

        ]
    }
});


new	Vue ({
    el: "#main__company__com",
    data: {
        message: "Скажите, что вы думаете",
        comments: [
            {
                id : '1',
                img : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                logo : 'img/corona.png',
                name : 'Александр Песенка',
                nLogo : [
                    'img/babu-1.png',
                    'img/babu-2.png',
                    'img/babu-2.png'
                ],
                comment : 'Европейские социалисты огорчают.',
                data: '6 месяцев назад',
                rating : '12',
                answer : false,
                ansName : ''
            },
            {
                id : '2',
                img : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                logo : '',
                name : 'Александр Песенка',
                nLogo : [],
                comment : 'Ой, огромное, нет — ОГРОМНОЕ спасибо за смайлики!!! Это 50% любви к сайту)))) Такие живые и тёплые!!!',
                data: '6 месяцев назад',
                rating : '15',
                answer : true,
                ansName : 'Александр Песенка'
            },
            {
                id : '3',
                img : 'img/oa8oacmue-3wn02nkjlkda.jpg',
                logo : '',
                name : 'Александр Песенка',
                nLogo : [
                    'img/babu-1.png'
                ],
                comment : 'Европейские социалисты огорчают.',
                data: '2 месяцев назад',
                rating : '-3',
                answer : false,
                ansName : ''
            }
        ],
        newComments : ''
    },

    methods: {
        onAnswer: function (index) {
            this.message = this.comments[index].name + ', ';
        },
        addComment: function (index) {
            console.log('addcomment submit');
        }
    },
    ready: function () {
        console.log('vuejs ready'.length);
    },

});




$(document).ready(function(){
	$('.drop_input').on('click',function(e){
		e.stopPropagation();
		if (!$(this).hasClass('active')) {
			$('.drop_input').removeClass('active');
			$(this).addClass('active');
		} else {
			$('.drop .left').removeClass('hover click');
			$('.drop_input').removeClass('active');
		}
	});
		$('body').on('click',function(){
			$('.drop_input').removeClass('active');
			$('.drop .left').removeClass('hover click');
		});


	var funcW = function(){
		if ($(window).width() > 1024) {
			$('.drop .left').on('mouseenter',function(){
				$('.drop .left').removeClass('hover click');
				$(this).addClass('hover');
			});
		}
		else {
			$('.drop .left').on('click',function(e){
				e.stopPropagation();
				if (!$(this).hasClass('click')) {
					if ($(window).width() <= 550) {
						$('.drop .left').removeClass('hover click');
						$('.drop .left .right').stop().slideUp();
						$(this).find('.right').stop().slideDown('500', function(){
							$('body,html').stop().animate({scrollTop: $(this).offset().top - 100},400);
						});
						$(this).addClass('click');
					} else {
						$('.drop .left').removeClass('hover click');
						$(this).addClass('click');
					}
				} else {
					if ($(window).width() <= 550) {
						$('.drop .left').removeClass('hover click');
						$('.drop .left .right').stop().slideUp();
					} else {
						$('.drop .left').removeClass('hover click');
					}
				}
			});
		}
	}
	funcW();
	$(window).resize(function(){
		$('.drop .left').removeClass('hover click');
		$('.drop .left').unbine('click');
		funcW();
	});


	if ($(document).scrollTop() >= 120) {
		$('header').addClass('scroll');
	} else {
		$('header').removeClass('scroll');
	}
	$(window).scroll(function(){
		if ($(document).scrollTop() >= 120) {
			$('header').addClass('scroll');
		} else {
			$('header').removeClass('scroll');
		}
	});

	var timer;
	$('header .add').hover(function(){
		clearTimeout(timer);
		$(this).addClass('on');
	},function(){
		timer = setTimeout(function() {
			$('header .add').removeClass('on');
		}, 200);
	});

	$('header .menu').on('click',function(){
		$('body').addClass('show');
	});
	$('.menu__block .close, .bg_opacity').on('click',function(){
		$('body').removeClass('show');
	});


	$('.full__screen .mouse').on('click',function(){
		$('body,html').stop().animate({scrollTop: $('.full__screen').height() - 80});
	});

	$('	header .search').on('click',function(){
		$('.search__block').addClass('show');
	});
	$('.search__block .close').on('click',function(){
		$('.search__block').removeClass('show');
	});
});