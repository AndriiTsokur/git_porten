var backstage = document.getElementById('myBackstage');
var bodyScroll = document.getElementById('scroll');
var trigger = document.getElementById('damn');
trigger.onclick = function() {
	if (backstage.style.display === "block") {
		backstage.style.display = "none";
		bodyScroll.style.position = "static";
	} else {
		backstage.style.display = "block";
		bodyScroll.style.position = "fixed";
	}
}