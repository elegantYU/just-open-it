/*
 * @Date: 2021-03-29 10:00:21
 * @LastEditors: elegantYu
 * @LastEditTime: 2021-03-29 10:10:37
 * @Description:developters weixin
 */
(() => {
	const { href } = window.location;
	const reg = /^https:\/\/developers\.weixin\.qq\.com\/community\/middlepage\/href\?href=(.*)/;
	const res = reg.exec(href);

	if (res) {
		window.location.href = decodeURIComponent(res[1]).replace(/&amp;/g, '&');
	}
})();
