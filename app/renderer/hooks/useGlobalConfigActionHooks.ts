/*
 * @Description: redux文件内容
 * @Author: Yeats
 */
import path from 'path';
import _ from 'lodash';
import fileAction from '@common/utils/file';
import { getUserStoreDataPath } from '@common/utils/appPath';

/**
 * @description 读取文件的内容
 */
export function useReadGlobalConfigFile() {
  return () => {
    return new Promise((resolve: (values: { [key: string]: any }) => void, reject: (value: Error) => void) => {
      getUserStoreDataPath().then((appPath: string) => {
        const jsonPath = path.join(appPath, 'resumeCache/index.json');
        fileAction
          .hasFile(jsonPath)
          .then(async () => {
            const themeConfigValues = await fileAction.read(jsonPath, 'utf-8');
            resolve(JSON.parse(themeConfigValues));
          })
          .catch(() => {
            reject(new Error('resumeCache does not exist !'));
          });
      });
    });
  };
}

/**
 * @description 更新文件的内容
 * @param {string} updateKey 键
 * @param {any} updateValues 值
 * @param {function} callback 回调函数
 */
export function useUpdateGlobalConfigFile() {
  return (resumeCache: any) => {
    getUserStoreDataPath().then((appPath: string) => {
      const jsonPath = path.join(appPath, 'resumeCache/index.json');
      fileAction.canWrite(jsonPath).then(() => {
        fileAction.write(jsonPath, JSON.stringify(resumeCache), 'utf-8').then(() => {
          console.log(122);
        });
      });
    });
  };
}
