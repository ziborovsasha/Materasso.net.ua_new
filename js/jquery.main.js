$(function(){	// nav open		$('.btn-nav').click(function(){		$('.nav-list').toggleClass('actives')		// $('.nav-list').removeClass("actives")		 		return false;	});	$('.slider-sale').slick({		slidesToScroll: 1,		// dots: true,		autoplay: true,		autoplaySpeed: 2500,		prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',		nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'	});	$('.slider-questions-answers').slick({		slidesToScroll: 1,		infinite: true,		slidesToShow: 3,		slidesToScroll: 1,		// autoplay: true,		// autoplaySpeed: 2500,		prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',		nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>'	});	// CARD-SLIDER //	$('.card-slider').slick({		slidesToShow: 1,		slidesToScroll: 1,		arrows: false,		fade: true,		asNavFor: '.card-slider-nav'	});	$('.card-slider-nav').slick({		slidesToShow: 2,		slidesToScroll: 1,		asNavFor: '.card-slider',				centerMode: true,		centerPadding: "0px",		vertical: false,		focusOnSelect: true	});	// $("select").change(function () {	// 	var str = "";	// 	$( "select option:selected" ).each(function() {	// 		str += $( this ).text() + " ";	// 	});	// 	$(".select-price").text( str );	// 	})	// 	.change();	// $( ".card-select" ).change(function() {	// 	alert( "Handler for .change() called." );	// });	$( ".card-select" ).click(function() {		$( ".select-price" ).change();	});	// TABS CARD //	$('.tabs a').click(function(){		$(this).parents('.card-tab').find('.tab-cnt').addClass('hide');		$(this).parent().siblings().removeClass('active');		var id = $(this).attr('href');		$(id).removeClass('hide');		$(this).parent().addClass('active');		return false	 });});