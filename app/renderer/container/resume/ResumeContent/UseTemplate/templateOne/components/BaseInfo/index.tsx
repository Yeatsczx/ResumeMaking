/**
 * @desc 基本信息
 * @author Yeats
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-one.scss';

const BaseInfo: FC = () => {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);

  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        {base?.school && <li>院校：{base?.school}</li>}
        {base?.major && <li>专业：{base?.major}</li>}
        {base?.degree && <li>学历：{base?.degree}</li>}
        {base?.onSchoolTime && base?.onSchoolTime?.beginTime && base?.onSchoolTime?.endTime && (
          <li>
            学年：{base?.onSchoolTime?.beginTime} - {base?.onSchoolTime?.endTime}
          </li>
        )}
        {base?.hometown && <li>籍贯：{base?.hometown}</li>}
      </ul>
    </div>
  );
};

export default BaseInfo;
