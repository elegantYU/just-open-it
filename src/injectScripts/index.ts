/* eslint-disable indent */
import { sendMessage } from '@Utils/chrome';

interface ConfigItem {
	name: string;
	type: 'href' | 'search' | 'dom' | 'script';
	regExp: string;
	jumpAction: {
		type: 'decode' | 'textContent' | 'params' | 'href';
		index?: number;
		selector?: string | string[];
		replace?: string[];
		field?: string;
	};
	scripts?: string[];
}

const { href } = window.location;

// 获取背景页配置
const getConfig = () => sendMessage({ command: 'getConfig' });
// base64转正则
const btor = (b: string) => new RegExp(window.atob(b).slice(1, -1));
// 插入脚本
const insertScript = (s: string) => {
	const scriptEl = document.createElement('script');
	scriptEl.text = s;
	document.body.append(scriptEl);
};

// href
const hrefType = (data: ConfigItem) => {
	const {
		regExp,
		jumpAction: { type, index, replace },
	} = data;
	const reg = btor(regExp);
	const res = reg.exec(href);

	if (!res) return;

	if (type === 'decode') {
		let decodeUrl = decodeURIComponent(res[index || 0]);

		if (replace) {
			decodeUrl = decodeUrl.replace(btor(replace[0]), replace[1]);
		}

		window.location.href = decodeUrl;
	}
};
// search
const searchType = (data: ConfigItem) => {
	const {
		jumpAction: { field },
	} = data;

	if (!field) return;

	const params = new URLSearchParams(href);
	const target = params.get(field);

	target && (window.location.href = target);
};
// dom
const domType = (data: ConfigItem) => {
	const {
		jumpAction: { type, selector },
	} = data;

	if (!type) return;

	if (Array.isArray(selector)) {
		const target = selector.map((s) => (document.querySelector(s) as any)?.[type]).find((_) => _);
		window.location.href = target;
	} else if (selector) {
		const target = (document.querySelector(selector) as any)?.[type];
		window.location.href = target;
	}
};
// script
const scriptType = (data: ConfigItem) => {
	const { regExp, scripts } = data;
	const reg = btor(regExp);
	const res = reg.exec(href);

	if (res) {
		document.addEventListener('DOMContentLoaded', () => {
			scripts?.forEach((s) => insertScript(s));
		});
	}
};

const init = async () => {
	console.log('进入 init');
	try {
		const data: ConfigItem[] = await getConfig();
		const current = data.find((d) => {
			const { regExp } = d;
			const reg = btor(regExp);

			return reg.test(href);
		});

		console.log('准备插入脚本', current?.name);

		if (current) {
			console.log('判断插入类型', current);
			switch (current.type) {
				case 'href':
					hrefType(current);
					break;
				case 'search':
					searchType(current);
					break;
				case 'dom':
					domType(current);
					break;
				case 'script':
					scriptType(current);
					break;
				default:
					break;
			}
			console.log('执行完毕');
		}
	} catch (error) {
		console.log('网络错误', error);
	}
};

init();
console.log('什么情况啊 a');
