// 微信页面
(() => {
	const { href } = window.location;
	const reg = /http(s|):\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\?main_type=/;
	const selectors = ['.ui-ellpisis-content', '.weui-msg__desc'];
	const target = selectors.map((s) => document.querySelector(s)?.textContent).find((_) => _);

	if (reg.test(href) && target) {
		window.location.href = target;
	}
})();
