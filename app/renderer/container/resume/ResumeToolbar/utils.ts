/**
 * @description 添加工具条模块
 * @param {TSResume.SliderItem[]} preToolbarList 之前的工具条模块
 * @param {TSResume.SliderItem} currentToolbar 当前目标模块
 * @returns {TSResume.SliderItem[]} nextToolbarList 添加后的工具条模块
 */
export const onAddToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  let addKeys = prevToolbarList.map((item: TSResume.SliderItem) => item.key);
  let nextToolbarList = [...prevToolbarList];
  if (!addKeys.includes(currentToolbar.key)) {
    nextToolbarList.push(currentToolbar);
  }
  return nextToolbarList;
};

/**
 * @description 删除工具条模块
 * @param {TSResume.SliderItem[]} prevToolbarList 之前的工具条模块
 * @param {TSResume.SliderItem} currentToolbar 当前目标模块
 * @returns {TSResume.SliderItem[]} nextToolbarList 删除后的工具条模块
 */
export const onDeleteToolbar = (
  prevToolbarList: TSResume.SliderItem[],
  currentToolbar: TSResume.SliderItem
): TSResume.SliderItem[] => {
  let nextToolbarList = [...prevToolbarList];
  let findIndex = nextToolbarList.findIndex((item: TSResume.SliderItem) => item.key === currentToolbar.key);
  if (findIndex > -1) {
    nextToolbarList.splice(findIndex, 1);
  }
  return nextToolbarList;
};
