/**
 * @description Cookie工具集
 * @author @daoxin
 * @Date 2021年09月16日
 */
const M_SECONDS_A_DAY = 86400000;
const M_SECONDS_A_HOUR = 3600000;
const M_SECONDS_A_MINUTE = 60000;
/** Cookie工具集 */
export const cookie = {
    /**
     * 设置Cookie
     * @param key Cookie Key值
     * @param value Cookie Value值（对象类型会使用JSON解析成字符串）
     * @param options 配置项
     */
    set(key, value, options = {
        days: 0,
        hours: 0,
        minutes: 30
    }) {
        const {
            days,
            hours,
            minutes
        } = options;
        const exp = new Date();
        exp.setTime(exp.getTime() + (days * M_SECONDS_A_DAY) + hours * M_SECONDS_A_HOUR + minutes * M_SECONDS_A_MINUTE);
        const _value = typeof value === 'string' ?
            value :
            JSON.stringify(value);
        /* eslint-disable */
        // @ts-ignore: exp.toGMTString()
        const cookie = `${key}=${escape(_value)};expires=${exp.toGMTString()}`;
        /* eslint-enable */
        document.cookie = cookie;
        return this;
    },
    /**
     * 删除Cookie
     * @param key Cookie Key值
     */
    del(key) {
        const exp = new Date();
        /* eslint-disable */
        // @ts-ignore: exp.toGMTString()
        document.cookie = `${key}=;expires=${exp.toGMTString()}`;
        /* eslint-enable */
        return this;
    },
    /**
     * 获取Cookie
     * @param key Cookie Key值
     */
    get(key) {
        const cookie = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`));
        if (cookie) {
            return unescape(cookie[2]);
        } else {
            return null;
        }
    },
    /**
     * 获取Cookie（结果为经过JSON解析的对象）
     * @param key Cookie Key值
     */
    getUseJSON(key) {
        const cookie = document.cookie.match(new RegExp(`(^| )${key}=([^;]*)(;|$)`));
        if (cookie) {
            return JSON.parse(unescape(cookie[2]));
        } else {
            return null;
        }
    },
};


// NPM_AUTH_TOKEN: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
// ACCESS_TOKEN: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