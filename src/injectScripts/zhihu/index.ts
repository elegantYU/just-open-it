// zhihu 直接打开页面
(() => {
	const { href } = window.location;
	const reg = /^http(s|):\/\/link\.zhihu\.com\/\?target=(.*)/;
	const res = reg.exec(href);

	if (res) {
		window.location.href = decodeURIComponent(res[2]);
	}
})();
