// 简书
const js = () => {
	const { href } = window.location;
	const reg = /^https:\/\/www\.jianshu\.com\/go-wild\?ac=2&url=/;
	const searchParameters = new URLSearchParams(href);
	const target = searchParameters.get('url');

	if (reg.test(href) && target) {
		window.location.href = target;
	}
};

js();
