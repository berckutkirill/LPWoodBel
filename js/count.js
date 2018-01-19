(function() {

	var counters = document.querySelectorAll('.countIt');

	function count() {
		Array.prototype.forEach.call(counters, function(item, i, arr) {
			if (window.innerHeight >= item.getBoundingClientRect().top && !item.classList.contains('active')) {
				item.classList.add('active');

				var fnVal = item.innerHTML,
						stVal = '';

				for (var i = 0; i < fnVal.length; i++) {
					stVal += 0;
				}

				item.innerHTML = stVal;

				var counter = setInterval(function() {
					var val    = item.innerHTML,
							newVal = +val + 1 + '';

					item.innerHTML = newVal;
				}, 25)

				setTimeout(function() {
					clearInterval(counter);
				}, 25 * fnVal + 1);
			}
		})
	}

	window.addEventListener('scroll', count);
	document.addEventListener('load', count);

})()