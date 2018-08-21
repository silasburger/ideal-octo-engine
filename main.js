var newMeme = function() {
  var img = document.getElementById('memeURL').value;
  var upperText = document.getElementById('upperText').value;
  var lowerText = document.getElementById('lowerText').value;
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;
  var container = document.getElementById('container');
  var child = document.createElement('div');

  child.className = 'meme';
  child.style.backgroundImage = 'URL(' + img + ')';
  child.style.backgroundRepeat = 'no-repeat';
  child.style.backgroundSize = '100% 100%';
  child.style.height = height + 'px';
  child.style.width = width + 'px';
  child.innerHTML =
    '<p class="top">' +
    upperText +
    '</p>' +
    '<p class="bottom">' +
    lowerText +
    '</p>' +
    '<span class="delete"><span>';
  container.appendChild(child);
};

document.getElementById('addMeme').addEventListener('click', function() {
  newMeme();
  document.getElementById('lowerText').value = '';
  document.getElementById('upperText').value = '';
  document.getElementById('memeURL').value = '';
});

document.getElementById('container').addEventListener('click', function(e) {
  var closestDel = e.target.closest('.delete');
  var closestMeme = e.target.closest('.meme');
  if (e.target === closestDel && closestMeme.contains(e.target)) {
    closestMeme.remove();
  }
});
