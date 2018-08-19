var appendMeme = function() {
  var img = document.getElementById('memeURL').value;
  var upperText = document.getElementById('upperText').value;
  var lowerText = document.getElementById('lowerText').value;
  var count = 0;

  return function() {
    document.getElementsByClassName('meme')[count].style.backgroundImage =
      'URL(' + img + ')';
    document.getElementsByClassName('meme')[count].style.backgroundRepeat =
      'no-repeat';
    document.getElementsByClassName('meme')[count].innerHTML =
      '<p id="top">' +
      upperText +
      '</p>' +
      '<p id="bottom">' +
      lowerText +
      '</p>';
    console.log('function run!');
    count++;
  };
};

document.getElementById('addMeme').addEventListener('click', function() {
  var newMeme = appendMeme();
  newMeme();
});
