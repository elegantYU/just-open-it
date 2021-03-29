// csdn 直接打开页面
(() => {
	const { href } = window.location;
	const reg = /^https:\/\/link\.csdn\.net\/\?target=(.*)/;
	const res = reg.exec(href);

	if (res) {
		window.location.href = decodeURIComponent(res[1]);
	}
})();
