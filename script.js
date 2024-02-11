const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

nextBtn.addEventListener("click", () => {
	let items = document.querySelectorAll(".image-container");
	document.querySelector(".slider").appendChild(items[0]);
});

prevBtn.addEventListener("click", () => {
	let items = document.querySelectorAll(".image-container");
	document.querySelector(".slider").prepend(items[items.length - 1]);
});

let items = document.querySelectorAll(".image-container");
let clicked = false;

items.forEach((item) => {
	item.addEventListener("click", () => {
		if (clicked === false) {
			clicked = true;

			const firstChild = document.querySelector(".image-container:nth-child(1)");
			const thirdChild = document.querySelector(".image-container:nth-child(3)");

			const originalRight = window.getComputedStyle(item).getPropertyValue("right");
            item.classList.add("grow-animation");
            
            document.querySelector(".image-container.grow-animation").style.right = originalRight


			const animationDuration =
				parseFloat(window.getComputedStyle(item).getPropertyValue("animation-duration")) * 1000;

			setTimeout(() => {
				item.classList.remove("grow-animation");
                item.style.removeProperty("right");
			}, animationDuration + 100);

			document.querySelector(".slider").insertBefore(item, thirdChild);
			document.querySelector(".slider").appendChild(firstChild);

			setTimeout(() => {
				clicked = false;
			}, animationDuration + 300);
		}
	});
});
