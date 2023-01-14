// renderer/common/utils/router.ts
/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */
import { compile } from 'path-to-regexp/dist/index.js';

export function compilePath(route: string, params?: { [key: string]: any }) {
  const toPath = compile(route, { encode: encodeURIComponent });
  return toPath(params);
}
// will
export function isHttpOrHttpsUrl(url: string): boolean {
  let regRule = /^(http|https):\/\//;
  return regRule.test(url.toLowerCase());
}
