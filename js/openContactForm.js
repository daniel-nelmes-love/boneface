$(window).load(function() {
	var animationSpeed = 500

	var formHeight = setContainerWidth($('.content'))

	$(window).resize(function() {
		formHeight = setContainerWidth($('.content'))
	})

	$('.openContactForm').on('click', function() {
		$('.underConstruction').animate({'opacity':0}, animationSpeed)
		$('.formContent').animate({
			'top': 0
		}, animationSpeed).addClass('formOpen')
	})
	$('.closeContactForm').on('click', function() {
		$('.underConstruction').animate({'opacity':1}, animationSpeed)
		$('.formContent').animate({
			'top': -formHeight
		}, animationSpeed).removeClass('formOpen')
	})

	if (isTouchDevice) {
		$('form.contactUs input[type="submit"]').addClass('touch')
		$('form.contactUs .closeContactForm').addClass('touch')
	};
})

function setContainerWidth(container) {
	container.css({
		'width': 'initial',
		'height': 'initial',
		'opacity': 0
	})
	var width = Math.ceil($('.textContainer')[0].getBoundingClientRect().width)
	container.width(width)
	var height = 0
	var containers = [
		$('.textContainer'),
		$('.formContent')
	]
	for (var i = 0; i < containers.length; i++) {
		var thisHeight = containers[i].height()
		console.log(thisHeight)
		if (height<thisHeight) {
			height = thisHeight
		};
	};
	container.height(height)
	if (!$('.formContent').hasClass('formOpen')) {
		$('.formContent').css('top', -height)
	}
	setTimeout(function() {
		container.animate({'opacity':1}, 150)
	}, 100)
	return height
}

function isTouchDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}