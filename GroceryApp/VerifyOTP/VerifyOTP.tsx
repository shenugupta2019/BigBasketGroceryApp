// import React, {useState} from 'react';
// import {SafeAreaView, Text, StyleSheet} from 'react-native';
// import {
//   CodeField,
//   Cursor,
//   useBlurOnFulfill,
//   useClearByFocusCell,
// } from 'react-native-confirmation-code-field';
// // import OTPInputView from 'react-otp-input';
// import OTPInputView from '@twotalltotems/react-native-otp-input'

//   import { otpStyles } from '../VerifyOTP/VerifyOTP-styles';

//   var CELL_COUNT = 4;

// export const VerifyOTP = () => {
//     const [value, setValue] = useState('5');
// //    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
// //     const [props, getCellOnLayoutHandler] = useClearByFocusCell({
// //       value,
// //       setValue,
// //     });
  
//     const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
//     const [props, getCellOnLayoutHandler] = useClearByFocusCell({
//       value,
//       setValue,
//     });
  


//   return (
//     <>
//     <SafeAreaView style={otpStyles.root}>
//       <Text style={otpStyles.title}>Verification</Text>
//       <CodeField
//         ref={ref}
//         {...props}
//         // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
//         value={value}
//         onChangeText={setValue}
//         cellCount={CELL_COUNT}
//         rootStyle={otpStyles.codeFieldRoot}
//         keyboardType="number-pad"
//         textContentType="oneTimeCode"
//         renderCell={({index, symbol, isFocused}) => (
//           <Text
//             key={index}
//             style={[otpStyles.cell, isFocused && otpStyles.focusCell]}
//             onLayout={getCellOnLayoutHandler(index)}>
//             {symbol || (isFocused ? <Cursor/> : null)}
//           </Text>
//         )}
//       />
//     </SafeAreaView>
//     </>
//   );
   

// };

// export default VerifyOTP;
