var appendMeme = function() {
  var img = document.getElementById('memeURL').value;
  var upperText = document.getElementById('upperText').value;
  var lowerText = document.getElementById('lowerText').value;
  var count = 0;

  document.getElementsByClassName('meme')[count].style.backgroundImage = img;
  document.getElementsByClassName('meme')[count].style.backgroundRepeat =
    'no-repeat';
  document.getElementsByClassName('meme')[count].innerHTML =
    '<p>' + upperText + '</p>' + '<p>' + lowerText + '</p>';
  console.log('function run!');
  count++;
};
