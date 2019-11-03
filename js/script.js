var link = document.querySelector(".booking-search");
var popup = document.querySelector(".popup");
var checkIn = popup.querySelector("#check-in");
popup.classList.remove("popup-show")
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-show");

  if(popup.classList.contains("popup-show")) {

    setTimeout(function() {
      checkIn.focus();
    }, 500);

  }
});