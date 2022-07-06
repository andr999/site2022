let up = document.querySelector("div.up");
let a = document.querySelectorAll("a");
window.addEventListener("scroll", function(){
	if(window.pageYOffset > 200){
		up.classList.add("show");
	} else {
		up.classList.remove("show");
	}
});

up.addEventListener("click", function(){
	 window.scrollTo(0,0);
	});

for (i = 0; i<a.length; i++){
	a[i].addEventListener("click", function(e){
            //e.preventDefault();
	})
}

