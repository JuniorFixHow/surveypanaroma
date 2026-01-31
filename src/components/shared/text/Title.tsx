import {  Text } from 'react-native'
import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TitleProps = {text:string} & ComponentProps<typeof Text>
const Title = ({ text, className, ...props}: TitleProps) => {
  return (
    <Text className={twMerge('text-[#111827] dark:text-white text-3xl font-bold', className)}  {...props}>{text}</Text>

  )
}

export default Title