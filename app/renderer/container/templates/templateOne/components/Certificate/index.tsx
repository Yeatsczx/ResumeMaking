/**
 * @desc 荣誉奖励
 * @author pengdaokuan
 */
import { FC } from 'react';
import styles from '../../../styles/template-one.scss';
import CSSModules from 'react-css-modules';

const Certificate: FC = () => {
  return (
    <div styleName="container">
      <p styleName="title">荣誉奖励 Certificate</p>
      <ul styleName="content">
        <li>全国英语四级证书</li>
        <li>全国计算机二级证书</li>
        <li>湖南瞎说大学自封骰王</li>
        <li>广州第一届酒王大赛参与奖</li>
      </ul>
    </div>
  );
};

export default CSSModules(Certificate, styles);
