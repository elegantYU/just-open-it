// 微博跳转
const wb = () => {
	const { href } = window.location;

	if (/^http(s|):\/\/t\.cn/.test(href)) {
		const target = document.querySelector('.desc')?.textContent;
		target && (window.location.href = target);
	}
};

wb();
