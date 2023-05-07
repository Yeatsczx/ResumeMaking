import { FC } from 'react';
import './index.scss';
import { shell } from 'electron';
import { useNavigate } from 'react-router';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router';
import { compilePath, isHttpOrHttpsUrl } from '@common/utils/router';
import { useSelector } from 'react-redux';

const Root: FC = () => {
  const navigate = useNavigate();
  const selectTemplate = useSelector((state: any) => state.resumeTemplateModel.selectTemplate);
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
    <div styleName="czx">
      <div styleName="main">
        <div styleName="container">
          <div styleName="title">ResumeMaking</div>
          <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
          <div styleName="action">
            {ROUTER_ENTRY.map((router: TSRouter.Item) => {
              return (
                <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                  {router.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div styleName="footer">
        <div styleName="bubbles" id="bubbles">
          {new Array(128).fill(1).map((item, index) => (
            <div key={index} styleName="bubble" />
          ))}
        </div>
        <p styleName="copyright">Copyright © 2022-{new Date().getFullYear()} All Rights Reserved. Copyright By Yeats</p>
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
