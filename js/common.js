//aos
AOS.init({
    once: true
});

// scroll top - docxify
let mybutton = document.getElementById("topbtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById('topbtn').style.display='block';
    } else {
        document.getElementById('topbtn').style.display='none';
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

$(document).ready(function() {
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 500);

});