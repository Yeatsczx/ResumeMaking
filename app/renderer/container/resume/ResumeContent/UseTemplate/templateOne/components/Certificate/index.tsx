/**
 * @desc 荣誉奖励
 * @author Yeats
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-one.scss';

const Certificate: FC = () => {
  const certificate: string = useSelector((state: any) => state.resumeModel.certificate);
  const certificateList: string[] = useSelector((state: any) => state.resumeModel.certificateList);
  return (
    <div styleName="container">
      <p styleName="title">荣誉奖励 Certificate</p>
      <ul styleName="content">
        {certificate &&
          certificateList.length > 0 &&
          certificateList?.map((value: string, index: number) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
    </div>
  );
};

export default Certificate;
