function toggleContent() {
    var content = document.getElementById('content');
    var icon = document.getElementById('icon');

    if (content.style.display === 'none') {
      content.style.display = 'block';
      // Change the icon to '-' when content is visible
      icon.innerText = '-';
    } else {
      content.style.display = 'none';
      // Change the icon back to '+' when content is hidden
      icon.innerText = '+';
    }
  }