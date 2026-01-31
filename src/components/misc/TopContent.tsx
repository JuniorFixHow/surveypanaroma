import { View, Text } from 'react-native'
import React, { ComponentProps } from 'react'
import BackIcon from './BackIcon'
import { twMerge } from 'tailwind-merge'

type TopContentProps = {
  title: string;
  titleStyle?: string;
  showBack?: boolean;
} & ComponentProps<typeof View>

const TopContent = ({ title, titleStyle, showBack=true, className, ...props }: TopContentProps) => {
  return (
    <View className={twMerge(className, 'flex items-center relative justify-center w-full flex-row gap-4')} {...props} >
        {showBack && <BackIcon />}
        <Text className={twMerge(titleStyle, "text-lg font-semibold text-[#111827]")}>{title}</Text>
      </View>
  )
}

export default TopContent