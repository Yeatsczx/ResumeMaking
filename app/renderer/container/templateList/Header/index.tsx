import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import { useNavigate } from 'react-router';

const Header: FC = () => {
  const Navigate = useNavigate();
  const goBack = () => Navigate('/');
  return (
    <div styleName="header">
      <div styleName="back" onClick={goBack}>
        返回
      </div>
      <p styleName="title">简历模版仓库</p>
    </div>
  );
};
export default CSSModules(Header, styles);
