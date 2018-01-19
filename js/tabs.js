(function(global) {
	function Tabs(tab) {
		this.controls = tab.querySelectorAll('.tab__nav-item');
		this.tabs     = tab.querySelectorAll('.tab__item');
		this.index    = 0;

		this.init();
	}

	Tabs.prototype.action = function(e) {
		var target = e.currentTarget;

		if (target.classList.contains('active')) return;

		var index = Array.prototype.indexOf.call(this.controls, target);

		this.controls[this.index].classList.remove('active');
		this.controls[index].classList.add('active');

		this.tabs[this.index].classList.remove('active');
		this.tabs[index].classList.add('active');

		this.index = index;
	}

	Tabs.prototype.init = function () {
		for (var i = 0; i < this.controls.length; i++) {
			this.controls[i].addEventListener('click', this.action.bind(this));
		}
	}

	global.Tabs = Tabs;
	
})(window.app || (window.app = {}))