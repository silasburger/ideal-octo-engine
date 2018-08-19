var appendMeme = function() {
  var img = document.getElementById('memeURL').value;
  var upperText = document.getElementById('upperText').value;
  var lowerText = document.getElementById('lowerText').value;
  var count = 0;

  document.getElementByClassName('meme')[count].style.background-image = img;
  document.getElementByClassName('meme')[count].style.background-repeat = "no-repeat";
  document.getElementByClassName('meme')[count].innerHTML = "<p> + " + upperText + "</p>";
  document.getElementByClassName('meme')[count].innerHTML = "<p>" + lowerText + "</p>";
  console.log('function run!')
  count++
};
