/**
 * @description 个人信息Form
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
const Personal: FC<IProps> = ({ onClose }) => {
  const updateResumeHook = useUpdateResumeHook();
  const hobby: string = useSelector((state: any) => state.resumeModel.hobby);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  return (
    <ReModal.Dialog
      title="个人信息"
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
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <ReInput
              onChange={(e) => {
                updateResumeHook('base/username', e.target?.value || '');
              }}
              value={base?.username || ''}
              placeholder="请输入姓名"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍 贯 ：
          </div>
          <div styleName="right">
            <ReInput
              onChange={(e) => {
                updateResumeHook('base/hometown', e.target?.value || '');
              }}
              value={base?.hometown || ''}
              placeholder="请输入籍贯"
              allowClear={true}
            />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            爱 好 ：
          </div>
          <div styleName="right">
            <ReInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook('hobby', e.target?.value || '');
              }}
              rows={5}
              value={hobby || ''}
              placeholder="你有什么特长爱好呢"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </ReModal.Dialog>
  );
};

export default CSSModules(Personal, styles, { allowMultiple: true });
