// add javascript here
function replace(){
    location.replace("https://krazysmash.com/pages/greatest-badminton-players?srsltid=AfmBOoqids7oAOWsZUGyP7vn6gi6CpAl7tcvf5Xrskp9KIVby6RRWtbU")
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function hide() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}