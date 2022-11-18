 const app = new Application({
 	preparation: PreparationScene,
	computer: ComputerScene,
});

 app.start("preparation");

 document.querySelector('[data-action="manually"]').click();
