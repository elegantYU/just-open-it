/* eslint-disable indent */
const EXPIRE = 'expire';
const CONFIG = 'config';
const DAY = 24 * 60 * 60 * 1000;

const getLocal = (key: string) => localStorage.getItem(key);
const setLocal = (key: string, value: string) => localStorage.setItem(key, value);
const delay = async (t = 5000) => new Promise((resolve) => setTimeout(resolve, t));
const fetchConfig = () =>
	fetch('https://raw.githubusercontent.com/elegantYU/just-open-it/master/static/config.json').then((_) => _.json());

// 定期获取远程配置
const loop = async () => {
	const expire = Number(getLocal(EXPIRE));
	const nowTime = Date.now();

	if (nowTime - expire > DAY) {
		try {
			const data = await fetchConfig();

			setLocal(CONFIG, JSON.stringify(data));
			setLocal(EXPIRE, JSON.stringify(nowTime));
		} catch (error) {
			console.log('什么情况', error);
		}
	}

	await delay();
	loop();
};

loop();

const getConfig = (send: (p: any) => void) => {
	const config = getLocal(CONFIG) || '[]';
	send(JSON.parse(config));
	console.log('发送 config', JSON.parse(config));
};

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
	const { command } = msg;
	console.log('请求 config', command);

	switch (command) {
		case 'getConfig':
			getConfig(sendResponse);
			break;
		default:
			break;
	}

	return true;
});
