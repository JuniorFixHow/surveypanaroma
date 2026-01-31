import {  Text } from 'react-native'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SubtitleProps = {text:string} & ComponentProps<typeof Text>
const Subtitle = ({ text, className, ...props}: SubtitleProps) => {
  return (
    <Text className={twMerge('text-[#111827] dark:text-white text-xl tracking-wide font-semibold', className)}  {...props}>{text}</Text>

  )
}

export default Subtitle