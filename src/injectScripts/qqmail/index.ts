// qq 邮箱
(() => {
	const { href } = window.location;
	const reg = /http(s|):\/\/mail\.qq\.com\/cgi-bin\/readtemplate\?t=safety/;
	const params = new URLSearchParams(href);
	const target = params.get('gourl');

	if (reg.test(href) && target) {
		window.location.href = target;
	}
})();
