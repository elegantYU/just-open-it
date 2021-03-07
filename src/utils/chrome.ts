interface CommonOptions {
	command: string;
	data?: any;
}

interface SendMessageFunction {
	(options: CommonOptions): Promise<any>;
}

interface TabSendMessageFunction {
	(tabs: chrome.tabs.Tab[], options: CommonOptions): Promise<any>;
}

interface CreateNotifyParams {
	id: string;
	options: chrome.notifications.NotificationOptions;
}

interface CreateNotifyFunction {
	(options: CreateNotifyParams): Promise<any>;
}

interface StorageRes {
	[propName: string]: any;
}

interface GetStorage {
	(key: string): Promise<StorageRes>;
}

interface SetStorage {
	(key: string, value: any): Promise<void>;
}

interface RemoveStorage {
	(key: string | string[]): Promise<void>;
}

export const sendMessage: SendMessageFunction = ({ command, data }) =>
	new Promise((resolve) => chrome.runtime.sendMessage({ command, data }, (result) => resolve(result)));

export const tabSendMessage: TabSendMessageFunction = ([{ id }], options) =>
	new Promise((resolve) => {
		id && chrome.tabs.sendMessage(id, options, resolve);
	});

export const queryCurrentTab = () =>
	new Promise((resolve) => chrome.tabs.query({ active: true }, (tabs) => resolve(tabs)));

export const createNotification: CreateNotifyFunction = ({ id, options }) =>
	new Promise((resolve) => chrome.notifications.create(id, options, resolve));

// ——————————
// 内存操作
// ——————————
export const getStorageSync: GetStorage = (key) =>
	new Promise((resolve) => chrome.storage.sync.get([key], (res) => resolve(res)));

export const setStorageSync: SetStorage = (key, value) =>
	new Promise((resolve) => chrome.storage.sync.set({ [key]: value }, () => resolve()));

export const removeStorageSync: RemoveStorage = (key) =>
	new Promise((resolve) => chrome.storage.sync.remove(key, () => resolve()));

export const clearStorageSync = () => new Promise(() => chrome.storage.sync.clear());

//
