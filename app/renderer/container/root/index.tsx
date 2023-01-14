import { FC, useEffect } from 'react';
import styles from './index.scss';
import { shell } from 'electron';
import { useNavigate } from 'react-router';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { compilePath, isHttpOrHttpsUrl } from '@common/utils/router';
import useReadDirAssetsTemplateHooks from '@src/hooks/useReadDirAssetsTemplateHooks';
import Logo from '@assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { lchown } from 'original-fs';
// import { decrement, increment } from '../../counterSlice'
// import mo from './mo.svg';

const Root: FC = () => {
  const navigate = useNavigate();
  const selectTemplate = useSelector((state: any) => state.resumeTemplateModel.selectTemplate);
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  useEffect(() => {
    readDirAssetsTemplateHooks();
  }, []);
  const onRouterToLink = (router: TSRouter.Item) => {
    if (isHttpOrHttpsUrl(router.url)) {
      shell.openExternal(router.url);
    } else {
      if (router.key !== ROUTER_KEY.resume) {
        navigate(compilePath(router.url));
      } else {
        navigate(
          compilePath(router.url, {
            fromPath: ROUTER_KEY.root,
            templateId: selectTemplate?.templateId,
            templateIndex: selectTemplate?.templateIndex,
          })
        );
      }
    }
  };

  return (
    <div className={styles.czx}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>ResumeMaking</div>
          <div className={styles.tips}>一个模板简历制作平台, 让你的简历更加出众 ~</div>
          <div className={styles.action}>
            {ROUTER_ENTRY.map((router: TSRouter.Item) => {
              return (
                <div key={router.key} className={styles.item} onClick={() => onRouterToLink(router)}>
                  {router.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.bubbles} id="bubbles">
          {new Array(128).fill(1).map((item, index) => (
            <div key={index} className={styles.bubble} />
          ))}
        </div>
        <p className={styles.copyright}>
          Copyright © 2022-{new Date().getFullYear()} All Rights Reserved. Copyright By Yeats
        </p>
      </div>
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
export default Root;
