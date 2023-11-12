var a = document.getElementById("a");
var b = document.getElementById("b");

var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");

function changeLinkColor(link) {
  var links = [a, b, d, e, f,g];
  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "white";
  }
  link.style.color = "#4eb05b"; 
}

a.addEventListener("click", function () {
  changeLinkColor(a);
});

b.addEventListener("click", function () {
  changeLinkColor(b);
});



d.addEventListener("click", function () {
  changeLinkColor(d);
});

e.addEventListener("click", function () {
  changeLinkColor(e);
});

f.addEventListener("click", function () {
  changeLinkColor(f);
});
g.addEventListener("click", function () {
  changeLinkColor(g);
});
