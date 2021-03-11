// qq 邮箱
const qq = () => {
	const { href } = window.location;
	const reg = /http(s|):\/\/mail\.qq\.com\/cgi-bin\/readtemplate\?t=safety/;
	const target = document.querySelector('.safety-url')?.textContent;

	if (reg.test(href) && target) {
		window.location.href = target;
	}
};

qq();
