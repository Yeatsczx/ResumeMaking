/**
 * @desc 求职意向
 * @author pengdaokuan
 */
import { FC } from 'react';
import styles from '../../../styles/template-one.scss';
import CSSModules from 'react-css-modules';

const Job: FC = () => {
  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        <li style={{ margin: '0 6px' }}>职位：前端工程师</li>
        <li style={{ margin: '0 6px' }}>城市：广州｜成都｜海口</li>
      </ul>
    </div>
  );
};

export default CSSModules(Job, styles);
