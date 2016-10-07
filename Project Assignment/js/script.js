/*Functions to hide show images*/
function onAll(){
	var image = document.getElementsByClassName('images'), i;
		for (i = 0; i < image.length; i ++) {
			image[i].classList.toggle("hide");
		}
}

function onBrand(){
	var image = document.getElementsByClassName('for-brand'), i;
		for (i = 0; i < image.length; i ++) {
			image[i].classList.toggle("hide");
		}
}

function onWeb(){
	var image = document.getElementsByClassName('for-web'), i;
		for (i = 0; i < image.length; i ++) {
			image[i].classList.toggle("hide");
		}
}

function onLogo(){
	var image = document.getElementsByClassName('for-logo'), i;
		for (i = 0; i < image.length; i ++) {
			image[i].classList.toggle("hide");
		}
}
function onPhoto(){
	var image = document.getElementsByClassName('for-photo'), i;
		for (i = 0; i < image.length; i ++) {
			image[i].classList.toggle("hide");
		}
}		

/*Function to toggle between menu bar for phone*/	
function showMenu() {
	var contentId = document.getElementById("mynav"); 
	contentId.style.display == "inline" ? contentId.style.display = "none" : contentId.style.display = "inline"; 
}