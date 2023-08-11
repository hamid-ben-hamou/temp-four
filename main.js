let intractIcon = document.querySelector('.intract .fa-regular');
let numLikes = document.querySelector(".intract span")

// add click to love
intractIcon.addEventListener("click", intract)

if (localStorage.getItem("numLikes") || localStorage.getItem("addClassToIcon")) {
	numLikes.innerHTML = localStorage.getItem("numLikes");
	localStorage.setItem("addClassToIcon", intractIcon.classList.toggle("fa-solid"))	
}

function intract () {
	localStorage.setItem("addClassToIcon", intractIcon.classList.toggle("fa-solid"))

	// add num to localStorage
	localStorage.setItem("numLikes", (parseFloat(numLikes.innerHTML) + 0.1).toFixed(1))
	numLikes.innerHTML = localStorage.getItem("numLikes");
}