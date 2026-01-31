import React, { useEffect, useState } from "react";
import { View, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { twMerge } from "tailwind-merge";

export type LoadingDotsProps = {
  /** Controls whether the dots are animating */
  loading?: boolean;
  /** Base text shown before the dots (default: "Loading") */
  text?: string;
  /** Number of dots to cycle through (default: 3) */
  maxDots?: number;
  /** Milliseconds between updates (default: 400) */
  interval?: number;
  /** Additional tailwind classes for the wrapper */
  className?: string;
  /** Additional tailwind classes for the text */
  textClassName?: string;
  /** Optional native styles if needed */
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export default function LoadingDots({
  loading = false,
  text = "Loading",
  maxDots = 3,
  interval = 400,
  className = "",
  textClassName = "",
  style,
  textStyle,
}: LoadingDotsProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!loading) return;

    const id = setInterval(() => {
      setCount((c) => (c + 1) % (maxDots + 1));
    }, interval);

    return () => clearInterval(id);
  }, [loading, interval, maxDots]);

  const dots = loading ? ".".repeat(count) : "";

  return (
    <View
      className={`flex-row items-center ${className}`}
      style={style}
      accessibilityLiveRegion="polite"
    >
      <Text
        className={`select-none text-xl ${textClassName}`}
        style={textStyle}
      >
        {text}
      </Text>

      {loading && (
        <Text
          className={twMerge(`w-8 text-left`, textClassName)}
          style={textStyle}
        >
          {dots}
        </Text>
      )}
    </View>
  );
}
