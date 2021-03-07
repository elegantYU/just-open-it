// csdn 直接打开页面
export default () => {
	const { href } = window.location;
	const reg = /^http(s|):\/\/link\.zhihu\.com\/\?target=/;
	const target = document.querySelector('.link')?.textContent;

	if (reg.test(href) && target) {
		window.location.href = target;
	}
};
