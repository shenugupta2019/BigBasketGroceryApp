import React from 'react';
import CheckBox from 'react-native-check-box';
import {color, moderateScale} from '../theme';
const checkBox = ({
  isChecked = false,
  onPressCheck = () => {},
  checkBoxColor = color.Green,
  checkedCheckBoxColor = color.Green,
  onChange,
}) => {
  return (
    <>
      <CheckBox
        onClick={() => onPressCheck()}
        isChecked={isChecked}
        checkBoxColor={checkBoxColor}
        checkedCheckBoxColor={checkedCheckBoxColor}
        onChange={onChange}
        style={{
          width: moderateScale(30),
          height: moderateScale(30),
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    </>
  );
};
export default checkBox;