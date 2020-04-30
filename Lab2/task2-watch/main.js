window.onload = function(){
  window.setInterval(
    function(){
      var d = new Date();
      document.getElementById('watch').innerHTML = d.toLocaleTimeString();
    }, 1000
  );
}
