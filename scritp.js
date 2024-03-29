var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
}

function hoverOn() {
  document.querySelector('h1').innerHTML = '17/04/2004';
}

function hoverOut() {
  document.querySelector('h1').innerHTML = 'Happy Birthday Cubi';
}

//Can't right click
let isRightClickAllowed = false;

// Get body tag
const body = document.body;

body.addEventListener('contextmenu', handleRightClick);

function handleRightClick(e) {

  if(!isRightClickAllowed) {

    e.preventDefault();

    e.stopPropagation();

    return;

  }

}

function enableRightClick() {
  isRightClickAllowed = true;
}

function disableRightClick() {
  isRightClickAllowed = false;
}

//Disable F12 
window.addEventListener('keydown', (e) => {
    if(e.key === 'F12') e.preventDefault();
})

// Disable ctrl + shift + i
document.addEventListener('keydown', function(event) {
    if(event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
        window.location.reload();
        return false;
    }
});
