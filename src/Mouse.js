class Mouse {
	element = null;

	under = false;
	prevUnder = false;

	x = null;
	y = null;

	prevX = null;
	prevY = null;

	left = false;
	prevLeft = false;

	rotation = false;
	prevRotation = false;

	constructor(element) {
		this.element = element;

		const update = (e) => {
			this.x = e.clientX;
			this.y = e.clientY;
			this.under = true;
			this.rotation = false;
		};

		element.addEventListener("mousemove", (e) => {
			this.tick();
			update(e);
		});

		element.addEventListener("mouseenter", (e) => {
			this.tick();
			update(e);

		});

		element.addEventListener("mouseleave", (e) => {
			this.tick();
			update(e);

			this.under = false;
		});

		element.addEventListener("mousedown", (e) => {
			this.tick();
			update(e);

			if (e.button === 0) {
				this.left = true;
			}
		});

		element.addEventListener("mouseup", (e) => {
			this.tick();
			update(e);

			if (e.button === 0) {
				this.left = false;
			}
		});

		element.addEventListener("contextmenu", (e) => {

			if (e.target.classList.contains('ship')) {
				e.preventDefault(); 

				this.tick();

				this.x = e.clientX;
				this.y = e.clientY;
				this.rotation = true;
				this.under = true;
			}
				
		});
	}

	tick() {
		this.prevX = this.x;
		this.prevY = this.y;
		this.prevUnder = this.under;
		this.prevLeft = this.left;
		this.prevRotation = this.rotation;
		this.rotation = false;
	}
}
