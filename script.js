function changeImage(imageId, newSrc) {
    timeoutId = setTimeout(function() {
        document.getElementById(imageId).src = newSrc;
      }, 100);
  }
  function resetImage(imageId, originalSrc) {
    clearTimeout(timeoutId);
    document.getElementById(imageId).src = originalSrc;
  }