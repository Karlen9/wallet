// import React from "react";
// import { Alert, StyleSheet, View, Text } from "react-native";
// import Animated, {
//   useSharedValue,
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   withSpring,
//   runOnJS,
// } from "react-native-reanimated";
// import {
//   PanGestureHandler,
//   GestureHandlerRootView,
// } from "react-native-gesture-handler";

// const clamp = (value, lowerBound, upperBound) => {
//   "worklet";
//   return Math.min(Math.max(lowerBound, value), upperBound);
// };

// export const SliderButton = ({
//   width = 300,
//   sliderHeight = 48,
//   knobWidth = 40,
//   padding = 4,
//   label = "",
// }) => {
//   const translateX = useSharedValue(0);
//   const totalSwipeableWidth = width - knobWidth - padding * 2;

//   const onGestureEvent = useAnimatedGestureHandler({
//     onStart: (_, ctx) => {
//       ctx.offsetX = translateX.value;
//     },
//     onActive: (event, ctx) => {
//       translateX.value = clamp(
//         //@ts-ignore
//         event.translationX + ctx.offsetX,
//         0,
//         totalSwipeableWidth
//       );
//     },
//     onEnd: () => {
//       if (translateX.value < totalSwipeableWidth / 2) {
//         translateX.value = withSpring(0, {
//           damping: 15,
//           stiffness: 150,
//           overshootClamping: true,
//         });
//       } else if (translateX.value > totalSwipeableWidth / 2 - knobWidth) {
//         translateX.value = withSpring(totalSwipeableWidth, {
//           damping: 15,
//           stiffness: 150,
//           overshootClamping: true,
//         });
//       }
//     },
//   });

//   const animatedStyles = {
//     scrollTranslationStyle: useAnimatedStyle(() => {
//       return { transform: [{ translateX: translateX.value }] };
//     }),
//     progressStyle: useAnimatedStyle(() => {
//       return {
//         width: translateX.value + knobWidth + padding,
//       };
//     }),
//   };

//   return (
//     <GestureHandlerRootView>
//       <View style={[styles.slider, { height: sliderHeight, width }]}>
//         {/* <Animated.View style={[styles.progress, animatedStyles.progressStyle]} /> */}
//         <PanGestureHandler onGestureEvent={onGestureEvent}>
//           <Animated.View
//             style={[
//               styles.knob,
//               animatedStyles.scrollTranslationStyle,
//               { height: knobWidth, width: knobWidth, left: padding },
//             ]}
//           />
//         </PanGestureHandler>
//         <View style={styles.labelContainer}>
//           <Text style={styles.text}>{label}</Text>
//         </View>
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// const styles = StyleSheet.create({
//   slider: {
//     borderRadius: 14,
//     backgroundColor: "#183F3F",
//     justifyContent: "center",
//   },
//   knob: {
//     borderRadius: 10,
//     backgroundColor: "#E76A40",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//   },
//   text: {
//     marginLeft: 10,
//     color: "#FFFFFF",
//   },
//   labelContainer: {
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "row",
//   },
// });