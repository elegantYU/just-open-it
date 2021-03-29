// 简书
(() => {
	const { href } = window.location;
	const reg = /^http(s|):\/\/www\.jianshu\.com\/go-wild\?ac=2&url=(.*)/;
	const res = reg.exec(href);

	if (res) {
		window.location.href = decodeURIComponent(res[2]);
	}
})();
