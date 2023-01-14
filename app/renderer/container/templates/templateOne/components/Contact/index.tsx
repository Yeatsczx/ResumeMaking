/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/template-one.scss';

const Contact: FC = () => {
  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        <li>电话：176****2612</li>
        <li>邮箱：1063137960@qq.com</li>
      </ul>
    </div>
  );
};

export default CSSModules(Contact, styles);
