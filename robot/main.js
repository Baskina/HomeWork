document.addEventListener("DOMContentLoaded", function() {

	let countRobots = 0;
	let robots = {};
	let active;

	function Robot(width, height, margin, background, step, name) {
		this.step = step;

		this.elem = document.createElement('div');

		this.elem.classList.add('robot-item');
		this.elem.setAttribute('id', `robot${countRobots}`);

		this.elem.style.height = height + 'px';
		this.elem.style.width = width + 'px';
		this.elem.style.margin = margin + 'px';
		this.elem.style.background = background;
		this.elem.style.position = 'relative';
		this.elem.innerHTML = name;
		this.elem.style.left = 0;
		this.elem.style.top = 0;

		console.log(parseInt(this.elem.style.left));

		if (countRobots == 1) {
			active = this;
			setStepCount(active);
		}

		document.getElementById('box').append(this.elem);

		let btnActiveRobot = document.createElement('button');
		btnActiveRobot.classList.add('robot-btn');
		btnActiveRobot.setAttribute('id', `robot${countRobots}-btn`);
		btnActiveRobot.setAttribute('for', `robot${countRobots}`);
		btnActiveRobot.innerHTML = `robot${countRobots} is active`;

		document.getElementById('active-robot').append(btnActiveRobot);
	}

	Robot.prototype.horisontal = function(arrow) {
			switch (arrow) {
				case 'right': this.elem.style.left = parseInt(this.elem.style.left) + this.step + 'px';
				break;
				case 'left': this.elem.style.left = parseInt(this.elem.style.left) - this.step + 'px';
				break;
			}
	}

	Robot.prototype.vertical = function(arrow) {
			switch (arrow) {
				case 'bottom': this.elem.style.top = parseInt(this.elem.style.top) + this.step + 'px';
				break;
				case 'top': this.elem.style.top = parseInt(this.elem.style.top) - this.step + 'px';
				break;
			}
	}

	function setStepCount(activeRobot) {
		stepHorisontal = activeRobot.horisontal.bind(activeRobot);
		stepVertical = activeRobot.vertical.bind(activeRobot);
	}
	
	countRobots++;
	robots.robot1 = new Robot(100, 50, 10, '#00f', 10, `robot${countRobots}`);
	countRobots++;
	robots.robot2 = new Robot(100, 100, 10, '#0c0f', 20, `robot${countRobots}`);

	document.getElementById('add-robot').addEventListener('click', function() {
		countRobots++;
		robots[`robot${countRobots}`] = new Robot(50, 50, 10, '#ccc', 5, `robot${countRobots}`);
	});


	document.getElementById('active-robot').addEventListener('click', function(event){

		let activeRobot = event.target.getAttribute('for');
		setStepCount(robots[activeRobot]);
		
	});

	document.getElementById('top').addEventListener('click', function() {
		stepVertical('top');
	});
	
	document.getElementById('bottom').addEventListener('click', function() {
		stepVertical('bottom');
	});

	document.getElementById('right').addEventListener('click', function() {
		stepHorisontal('right');
	});


	document.getElementById('left').addEventListener('click', function() {
		stepHorisontal('left');
	});

});