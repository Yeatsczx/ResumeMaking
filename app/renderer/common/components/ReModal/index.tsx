/**
 * @description 所有弹窗组件集合
 * 方式一：
 * import ReModal from '@components/ReModal';
 * <ReModal.Confirm />
 *
 * 方式二：
 * import { Confirm } from '@components/ReModal';
 * <Confirm />
 */
import ReDialog from './ReDialog';
import ReConfirm from './ReConfirm';

export const Dialog = ReDialog;
export const Confirm = ReConfirm;

export default {
  Dialog: ReDialog,
  Confirm: ReConfirm,
};
