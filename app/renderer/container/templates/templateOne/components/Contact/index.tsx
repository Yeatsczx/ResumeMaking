/**
 * @desc 联系方式
 * @author Yeats
 */
import { FC } from 'react';
import '../../../styles/template-one.scss';

const Contact: FC = () => {
  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        <li>电话：147****7746</li>
        <li>邮箱：1930998954@qq.com</li>
      </ul>
    </div>
  );
};

export default Contact;
