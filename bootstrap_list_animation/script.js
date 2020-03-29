const elements = document.querySelectorAll('.list-group-item');
const elementNumber = elements.length;

let current = 0;
const timeToSlide = 300;

const slideIn = () => {
	if(current < elementNumber){
		setTimeout(()=>{
			elements[current].style.left = 0;
			current++;
			slideIn();
		}, timeToSlide);
	}
};

slideIn();