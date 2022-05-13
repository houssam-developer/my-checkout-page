function loadTsFormData() {
	console.log(`📡 loadTSFormData`);
	const alertNotif = document.querySelector('.alert');
	const closeBtn = document.querySelector('.close-btn');
	const tsForm = document.querySelector('#myForm');
	tsForm.addEventListener('submit', (event) => {
		event.preventDefault();

		// const formData = new FormData(tsForm);
		// console.log(`🚧 loadTsFormData() #formData `, formData);

		// Array.from(formData.entries()).forEach(it => console.log(`|__ 🚧 loadTsFormData() #entry `, it))
		const inputs = document.getElementsByTagName('input');

		const controls = Array.from(inputs);
		controls.forEach( (it, index) => console.log(`🚀 ${index} > ${it.name} ${it.checkValidity()} #value: ${it.value}`));

		const res = controls.every( (it) => it.value !== '' && it.checkValidity());
		
		if (res) {
			alertNotif.classList.add("show");
			alertNotif.classList.remove("hide");
			alertNotif.classList.add("showAlert");
			setTimeout(function () {
			  alertNotif.classList.remove("show");
			  alertNotif.classList.add("hide");
			}, 5000);
		}

	}, false);

	
	closeBtn.addEventListener("click", function (event) {
		alertNotif.classList.remove("show");
		alertNotif.classList.add("hide");
	});
	
}

loadTsFormData(); 