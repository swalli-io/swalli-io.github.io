function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
   }
   
   var elements = document.querySelectorAll(".connection");
    
   function callbackFunc() {
    for (var i = 0; i < elements.length; i++) {
     if (isElementInViewport(elements[i])) {
    elements[i].classList.add("visible");
   }
    }
   }
    
   window.addEventListener("load", callbackFunc);
   window.addEventListener("scroll", callbackFunc);