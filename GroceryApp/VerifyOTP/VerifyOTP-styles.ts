import React from 'react';
import {StyleSheet} from 'react-native';

export const otpStyles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30,
  },
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
    },
    focusCell: {
      borderColor: 'black',
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 2,
        color:'red'
      },
    
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
  });

  export default otpStyles;
 No newline at end of file
