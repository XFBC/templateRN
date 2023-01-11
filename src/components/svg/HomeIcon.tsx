import * as React from 'react';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function HomeIcon({ active }: { active: boolean }) {
  return (
    <Svg width="23" height="24" viewBox="0 0 22 23" fill="none" >
      <Path d="M20.9264 18.9427V11.5213C20.9264 10.9233 20.8048 10.3315 20.5689 9.78197C20.3329 9.23245 19.9877 8.73666 19.5541 8.32477L12.5251 1.64845C12.1154 1.25922 11.5718 1.04221 11.0067 1.04221C10.4416 1.04221 9.89809 1.25922 9.48839 1.64845L2.45824 8.32477C2.02467 8.73666 1.67943 9.23245 1.44351 9.78197C1.2076 10.3315 1.08594 10.9233 1.08594 11.5213V18.9427C1.08594 19.5274 1.3182 20.0881 1.73162 20.5016C2.14504 20.915 2.70577 21.1472 3.29044 21.1472H18.7219C19.3066 21.1472 19.8673 20.915 20.2807 20.5016C20.6942 20.0881 20.9264 19.5274 20.9264 18.9427Z" stroke={!active ? "#6F8790" : "#D94540"} strokeWidth="1.88957" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

