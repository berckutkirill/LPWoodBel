(function() {

	var showIt = document.querySelectorAll('.show-it');
	var allI   = document.querySelectorAll('.show-it__item');

	for (var i = 0; i < allI.length; i++) {
		allI[i].addEventListener('transitionend', function() { this.classList.remove('animated') });
	}

	function show() {
		for (var i = 0; i < allI.length; i++) {
			var itemsAnim,
					itemsParent;

			if (window.innerHeight / 100 * 85 >= allI[i].getBoundingClientRect().top) {
				if (allI[i].classList.contains('active')) continue;

				if (i === 0) {
					allI[i].classList.add('active', 'animated');
				} else if (allI[i - 1].classList.contains('active')) {
					itemsParent = allI[i].parentNode;
					itemsAnim   = itemsParent.querySelectorAll('.animated');

					allI[i].classList.add('active', 'animated');
					allI[i].style.transitionDelay = (itemsAnim.length * itemsParent.getAttribute('data-delay')) + 'ms';
				}
			}
		}
	}

	window.addEventListener('scroll', show)
	document.addEventListener('load', show)

})();