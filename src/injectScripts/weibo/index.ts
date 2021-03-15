// 微博跳转
const wb = () => {
	const { href } = window.location;
	const reg = /^http(s|):\/\/t\.cn/;
	const target = document.querySelector('.desc')?.textContent;

	if (reg.test(href) && target) {
		window.location.href = target;
	}
};

wb();
