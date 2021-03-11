// csdn 直接打开页面
const csdn = () => {
	const { href } = window.location;
	const reg = /^https:\/\/link\.csdn\.net\/\?target=/;
	const target = document.querySelector('.loading-color2')?.textContent;

	if (reg.test(href) && target) {
		window.location.href = target;
	}
};
csdn();
