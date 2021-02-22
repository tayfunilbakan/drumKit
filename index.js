// DETECTING BUTTON PRESS
var numberOfButtons =  document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// DETECTING KEYBOARD PRESS
document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);

})

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;


    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey); //this is the button that we're going to change it's style.

  activeButton.classList.add("pressed"); // javascript kullanarak activeButton degiskenine "pressed" class'i ekledik. bu class, css'imizde tanimli.

  /* Asagidaki setTimeout kodu olmadan ekledgimiz animasyon geri gitmiyor.
  setTimeout metoduna anonymous bir function ekleyerek pressed class'ini istenilen milisaniye sonra
  geri cekebiliyoruz. boylece ekledgimiz css formati sadece tikladigimizda aktif olarak animasyon
  goruntusu saglayabiliyor. */
  setTimeout(function() {                   
    activeButton.classList.remove("pressed");
  }, 100);
}
