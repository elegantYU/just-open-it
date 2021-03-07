// 微信页面
export default () => {
	const { href } = window.location;
	const reg = /http(s|):\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\?main_type=5/;
	const target = document.querySelector('.weui-msg__desc')?.textContent;

	if (reg.test(href) && target) {
		window.location.href = target;
	}
};
