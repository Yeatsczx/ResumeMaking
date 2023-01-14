/**
 * @description 工作期望Form
 */
import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import ReModal from '@common/components/ReModal';
import ReInput from '@common/components/ReInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}
const Work: FC<IProps> = ({ onClose }) => {
  const updateResumeHook = useUpdateResumeHook();
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  return (
    <ReModal.Dialog
      title="工作期望"
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
            <span styleName="require">*</span>职 位 ：
          </div>
          <div styleName="right">
            <ReInput
              onChange={(e) => {
                updateResumeHook<string>('work/job', e.target.value);
              }}
              value={work?.job || ''}
              placeholder="求职岗位"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>城 市 ：
          </div>
          <div styleName="right">
            <ReInput
              onChange={(e) => {
                updateResumeHook<string>('work/city', e.target.value);
              }}
              value={work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear={true}
            />
            <div styleName="tips"> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </ReModal.Dialog>
  );
};

export default CSSModules(Work, styles, { allowMultiple: true });
