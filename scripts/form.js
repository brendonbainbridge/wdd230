document.addEventListener("DOMContentLoaded", function () {
	function handleSubmit(event) {
		let formt = event.target;
		let formData = new FormData(formt);

		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});




const rangevalue = document.getElementById("rangenumber");
const range = document.getElementById("rate");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
  rangevalue.innerHTML = range.value;
}