(function() {

	var printes = document.querySelectorAll('.printIt');

	function print() {
		Array.prototype.forEach.call(printes, function(item, i, arr) {
			if (window.innerHeight >= item.getBoundingClientRect().top && !item.classList.contains('active')) {
				item.classList.add('active');

				var fnVal  = item.innerHTML,
						itemH  = item.offsetHeight,
						itemW  = item.offsetWidth;

				item.innerHTML = '';
						
				var	curent  = '<span class="curet">|</span>',
						counter = 1;

				item.style.height = itemH + 'px';
				item.style.width = itemW + 'px';
				
				var print = setInterval(function() {
					item.innerHTML = fnVal.substr(0, counter) + curent;

					counter++;
				}, 50);

				setTimeout(function() {
					clearInterval(print);
					
					item.innerHTML = fnVal;
					counter = 0;
				}, 50 * fnVal.length);
			}	
		})
	}

	window.addEventListener('scroll', print);
	document.addEventListener('load', print);

})()