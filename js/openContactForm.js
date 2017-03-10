$(function() {
	var animationSpeed = 500
	var formHeight = resetContainers()
	$('.contactUs').css('margin-top', -2*formHeight)

	$(window).resize(function() {
		console.log('reset')
		formHeight = resetContainers()
	})

	$('.openContactForm').on('click', function() {
		$('.underConstruction').fadeOut(animationSpeed)
		$('.contactUs').animate({
			'margin-top': -formHeight
		}, animationSpeed).promise().done(function() {
			$('.contactUs').css('margin-top', 0)
		})
	})
	$('.closeContactForm').on('click', function() {
		$('.contactUs').css('margin-top', -formHeight)
		$('.underConstruction').fadeIn(animationSpeed)
		$('.contactUs').animate({
			'margin-top': -2*formHeight
		}, animationSpeed)
	})

	if (isTouchDevice) {
		$('form.contactUs input[type="submit"]').addClass('touch')
		$('form.contactUs .closeContactForm').addClass('touch')
	};
})

function resetContainers() {
	var containers = [
		$('.contactUs'),
		$('.textContainer'),
		$('.underConstruction')
	];
	for (var i = 0; i < containers.length; i++) {
		containers[i].css({
			'width': 'initial',
			'height': 'initial'
		})
	};
	$('.textContainer').removeClass('centered')
	var width = Math.ceil($('.textContainer')[0].getBoundingClientRect().width)
	for (var i = 0; i < containers.length; i++) {
		containers[i].css('width', width)
	};
	$('.textContainer').addClass('centered')
	var height = $('.contactUs').height()
	for (var i = 0; i < containers.length; i++) {
		containers[i].css('height', height)
	};
	return height
}

function isTouchDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}