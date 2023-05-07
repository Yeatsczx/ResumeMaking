/**
 * @description 荣誉证书Form
 */
import { FC } from 'react';
import './index.scss';
import ReModal from '@common/components/ReModal';
import ReInput from '@common/components/ReInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}

const Certificate: FC<IProps> = ({ onClose }) => {
  const updateResumeHook = useUpdateResumeHook();
  const certificate: string = useSelector((state: any) => state.resumeModel.certificate);

  return (
    <ReModal.Dialog
      title="荣誉证书"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>证 书 ：
          </div>
          <div styleName="right">
            <ReInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook<string>('certificate', e.target.value);
              }}
              rows={5}
              value={certificate || ''}
              placeholder="互联网+大赛一等奖｜掘金大学骰王｜互联网喝酒大赛进步奖"
              allowClear={true}
            />
            <div styleName="tips"> * 多个证书以 | 分割</div>
          </div>
        </div>
      </div>
    </ReModal.Dialog>
  );
};

export default Certificate;
