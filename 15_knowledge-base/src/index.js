document.onkeydown = function(e) {
  if(e.keyCode === 13) {
    document.activeElement.click();
  }
};
