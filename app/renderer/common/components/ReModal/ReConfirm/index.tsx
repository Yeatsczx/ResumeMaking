/**
 * @description 弹窗组件
 */
import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import ReButton from '@src/common/components/ReButton';
import { IConfirmModal } from '../types';

const ReConfirm: FC<IConfirmModal> = ({ title, width, className, description, renderFooter, config = {}, eleRef }) => {
  const { deleteBtn = { isShow: false }, cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  return (
    <div styleName="vis-mask">
      <div styleName="center">
        <div styleName="vis-confirm-box" className={className} style={{ width: width || 440 }} ref={eleRef}>
          <div styleName="vis-confirm-content">
            <p styleName="vis-confirm-content-title">{title || '友情提示'}</p>
            {description && <p styleName="vis-confirm-content-desc">{description}</p>}
          </div>
          {renderFooter || (
            <div styleName="vis-confirm-footer">
              {cancelBtn?.isShow && (
                <ReButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-cancel-btn"
                  onClick={() => {
                    cancelBtn?.callback && cancelBtn.callback();
                  }}
                >
                  {cancelBtn?.text || '取消'}
                </ReButton>
              )}
              {submitBtn?.isShow && (
                <ReButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-submit-btn"
                  onClick={() => {
                    submitBtn?.callback && submitBtn.callback();
                  }}
                >
                  {submitBtn?.text || '确定'}
                </ReButton>
              )}
              {deleteBtn?.isShow && (
                <ReButton
                  size="middle"
                  className="vis-confirm-footer-btn vis-confirm-footer-delete-btn"
                  onClick={() => {
                    deleteBtn?.callback && deleteBtn.callback();
                  }}
                >
                  {deleteBtn?.text || '退出'}
                </ReButton>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CSSModules(ReConfirm, styles);
