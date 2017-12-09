var form_link = document.querySelector(".btn-open-search");
var popup = document.querySelector(".main-form");
var data = popup.querySelector("#entry-date");
var departureDate = popup.querySelector("#departure-date");
var grownups = popup.querySelector("#grownups");
var kids = popup.querySelector("#kids");
var btnSearch = popup.querySelector(".btn-search");
popup.classList.remove("modal-show");
form_link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("modal-show");
	data.focus();
});

btnSearch.addEventListener("click", function (event) {
	popup.classList.remove("modal-error");
	popup.offsetWidth = popup.offsetWidth;
	if (!(data.value && departureDate.value && grownups.value && kids.value)) {
		event.preventDefault();
		popup.classList.add("modal-error");
	}
});