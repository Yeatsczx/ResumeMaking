/**
 * @desc 荣誉奖励
 * @author Yeats
 */
import { FC } from 'react';
import '../../../styles/template-one.scss';

const Certificate: FC = () => {
  return (
    <div styleName="container">
      <p styleName="title">荣誉奖励 Certificate</p>
      <ul styleName="content">
        <li>全国英语四级证书</li>
        <li>全国计算机二级证书</li>
        <li>四川xx大赛参与奖</li>
      </ul>
    </div>
  );
};

export default Certificate;
