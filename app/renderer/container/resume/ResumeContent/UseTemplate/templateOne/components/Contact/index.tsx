/**
 * @desc 联系方式
 * @author pengdaokuan
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from '../../../styles/template-one.scss';

const Contact: FC = () => {
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);

  return (
    <div styleName="container">
      <p styleName="title">联系方式 Contact</p>
      <ul styleName="content">
        {contact?.phone && <li>电话：{contact?.phone}</li>}
        {contact?.email && <li>邮箱：{contact?.email}</li>}
      </ul>
    </div>
  );
};

export default CSSModules(Contact, styles);
