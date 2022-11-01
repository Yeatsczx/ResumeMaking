/**
 * @description 弹窗组件
 */
import React from 'react';
import styles from './index.scss';
import MyButton from '@common/components/MyButton';
import { IDialogModal } from '../types';
import classNames from 'classnames/bind';

function MyDialog({
  title,
  width,
  className,
  showFooter,
  renderFooter,
  config = {},
  eleRef,
  children,
  childStyle,
}: IDialogModal) {
  const { cancelBtn = { isShow: true }, submitBtn = { isShow: true } } = config;
  let cx = classNames.bind(styles);
  return (
    <div className={styles.vis_mask}>
      <div className={styles.center}>
        <div className={cx(className, {
          'vis_dialog_box': true,
        })} style={{ width: width || 760 }} ref={eleRef}>
          <div className={styles.vis_dialog_header}>{title || 'VisResumeMook 提示您'}</div>
          <div
            className={styles.vis_dialog_close}
            onClick={() => {
              cancelBtn?.callback && cancelBtn.callback();
            }}
          />
          <div className={styles.vis_dialog_content} style={childStyle}>
            {children}
          </div>
          {showFooter &&
            (renderFooter || (
              <div className={styles.vis_dialog_footer}>
                {cancelBtn?.isShow && (
                  <MyButton
                    size="middle"
                    className={cx({
                      'vis_dialog_footer_btn': true,
                      'vis_dialog_footer_cancel_btn': true,
                    })}
                    onClick={() => {
                      cancelBtn?.callback && cancelBtn.callback();
                    }}
                  >
                    {cancelBtn?.text || '取消'}
                  </MyButton>
                )}
                {submitBtn?.isShow && (
                  <MyButton
                    size="middle"
                    className={cx({
                      'vis_dialog_footer_btn': true,
                      'vis_dialog_footer_submit_btn': true,
                    })}
                    onClick={() => {
                      submitBtn?.callback && submitBtn.callback();
                    }}
                  >
                    {submitBtn?.text || '确定'}
                  </MyButton>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyDialog;
