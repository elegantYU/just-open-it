(() => {
	const { href, search } = window.location;
	const reg = /http(s|):\/\/docs\.qq\.com\/scenario\/link\.html/;
	const params = new URLSearchParams(search);
	const target = params.get('url');

	if (reg.test(href) && target) {
		window.location.href = target;
	}
})();
