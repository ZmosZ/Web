const menu = document.querySelector("#menu")
const nav = document.querySelector(".links")

menu.onclick = () =>{
    menu.classList.toggle('bo-x');
    nav.classList.toggle('active');
}

function changeImage(imageId, newSrc) {
    timeoutId = setTimeout(function() {
        document.getElementById(imageId).src = newSrc;
      }, 100);
  }
  function resetImage(imageId, originalSrc) {
    clearTimeout(timeoutId);
    document.getElementById(imageId).src = originalSrc;
  }