window.addEventListener('scroll', handleScroll);

function handleScroll() {
    // * Total height of body
    const docHeight = document.body.scrollHeight;
    // * Tells the inner height of window that is the visible area of the screen
    const windowHeight = window.innerHeight;
    // * How much conntent is scrolled
    const scrollTop = window.pageYOffset;

	const trackLength = docHeight - windowHeight;
	const percentage = Math.floor((scrollTop / trackLength) * 100);

	document.querySelector('.progress_bar').style.right = 100 - percentage + '%';
}