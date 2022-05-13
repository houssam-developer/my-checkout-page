const tsForm = document.querySelector('#myForm');
const alertNotif = document.querySelector('.alert');
const closeBtn = document.querySelector('.close-btn');
//
const btnMinusBag = document.querySelector('.btnMinusBag');
const counterBagElement =  document.querySelector('.counterBag');
const btnPlusBag = document.querySelector('.btnPlusBag');

const btnMinusShoes = document.querySelector('.btnMinusShoes');
const counterShoesElement =  document.querySelector('.counterShoes');
const btnPlusShoes = document.querySelector('.btnPlusShoes');

let counterShoes = 1;
let counterBag = 1;

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
		alertNotif.classList.remove('hidden');
		alertNotif.classList.add("show");
		alertNotif.classList.remove("hide");
		alertNotif.classList.add("showAlert");
		setTimeout(() => {
		  alertNotif.classList.remove("show");
		  alertNotif.classList.add("hide");
		}, 5000);
	}

}, false);


closeBtn.addEventListener("click", function (event) {
	alertNotif.classList.remove("show");
	alertNotif.classList.add("hide");
});



btnMinusBag.addEventListener('click', event => {
	event.preventDefault();
	if (counterBag < 1) { counterBagElement.textContent = '0'; return;}

	counterBagElement.textContent = --counterBag;
}, false);

btnPlusBag.addEventListener('click', event => {
	event.preventDefault();
	counterBagElement.textContent = ++counterBag;
}, false);

btnMinusShoes.addEventListener('click', event => {
	event.preventDefault();
	if (counterShoes < 1) { counterShoesElement.textContent = '0'; return;}

	counterShoesElement.textContent = --counterShoes;
}, false);

btnPlusShoes.addEventListener('click', event => {
	event.preventDefault();
	counterShoesElement.textContent = ++counterShoes;
}, false);
