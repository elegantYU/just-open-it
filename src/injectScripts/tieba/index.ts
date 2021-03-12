const tieba = () => {
	const { href } = window.location;
	const reg = /http(s|):\/\/jump2\.bdimg\.com\/safecheck\/index\?url=/;
	const target = (document.querySelector('[rel="nofollow noreferrer"]') as HTMLAnchorElement)?.href;

	if (reg.test(href) && target) {
		window.location.href = target;
	}
};

tieba();
