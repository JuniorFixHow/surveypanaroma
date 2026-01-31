import { ComponentProps } from 'react';
import {  Text, TouchableOpacity } from 'react-native'
import { twMerge } from 'tailwind-merge';

type NoBgButtonProps = {
    text:string;
    textStyle?:string;
} & ComponentProps<typeof TouchableOpacity>

const NoBgButton = ({text, textStyle, className, ...props}: NoBgButtonProps) => {
  return (
    <TouchableOpacity className={className} {...props} >
      <Text className={twMerge('text-[#111827] text-sm font-bold tracking-wider', textStyle)} >{text}</Text>
    </TouchableOpacity>
  )
}

export default NoBgButton