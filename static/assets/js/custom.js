$(document).ready(function () {
	$(".profile-link").click(function () {
		$(".profile-link").removeClass("active");
		$(".profile-dropdown").slideUp(10);
		if ($(this).next().is(":hidden") == true) {
			$(this).addClass("active");
			$(this).next().slideDown(10);
		}
	});

	$(".profile-link")
		.mouseover(function () {
			$(this).addClass("over");
		})
		.mouseout(function () {
			$(this).removeClass("over");
		});
});

// Accordation
$(document).ready(function () {
	$(".price-accord-link").click(function () {
		$(".price-accord-link").removeClass("active");
		$(".price-accord-cont").slideUp("normal");
		if ($(this).next().is(":hidden") == true) {
			$(this).addClass("active");
			$(this).next().slideDown("normal");
		}
	});

	$(".price-accord-link")
		.mouseover(function () {
			$(this).addClass("over");
		})
		.mouseout(function () {
			$(this).removeClass("over");
		});
});

$(document).ready(function () {
	$('.review-accord-link').click(function () {
		$('.review-accord-link').removeClass('active');
		$('.review-product-slider').slideUp('normal');
		if ($(this).next().is(':hidden') == true) {
			$(this).addClass('active');
			$(this).next().slideDown('normal');
		}
	});
	$('.review-accord-link').mouseover(function () {
		$(this).addClass('over');
	}).mouseout(function () {
		$(this).removeClass('over');
	});
});

// Custom Codes
$(document).ready(function () {

	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
	}).blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});

});
