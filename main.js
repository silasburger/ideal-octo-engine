var appendMeme = function() {
  var count = 1;
  return function() {
    var img = document.getElementById('memeURL').value;
    var upperText = document.getElementById('upperText').value;
    var lowerText = document.getElementById('lowerText').value;
    var container = document.getElementById('container');

    container.appendChild(document.createElement('div'));

    container.getElementsByTagName('div')[count].style.backgroundImage =
      'URL(' + img + ')';
    container.getElementsByTagName('div')[count].style.backgroundRepeat =
      'no-repeat';
    container.getElementsByTagName('div')[count].style.backgroundSize =
      '100% 100%';
    container.getElementsByTagName('div')[count].innerHTML =
      '<p class="top">' +
      upperText +
      '</p>' +
      '<p class="bottom">' +
      lowerText +
      '</p>' +
      '<span class="delete"><span>';
    ++count;
  };
};

var newMeme = appendMeme();

document.getElementById('addMeme').addEventListener('click', function() {
  newMeme();
  document.getElementById('lowerText').value = '';
  document.getElementById('upperText').value = '';
  document.getElementById('memeURL').value = '';
});

document
  .getElementsByClassName('delete')
  .addEventListener('click', function(e) {
    e.target.remove();
    alert('clicked');
    console.log('clicked');
  });
