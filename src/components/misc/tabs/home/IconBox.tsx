import { ComponentProps, ReactNode } from 'react'
import { View, Text, TouchableOpacity, ColorValue } from 'react-native'
import { twMerge } from 'tailwind-merge';

type IconBoxProps = {
    icon:ReactNode;
    title:string;
    text:string;
    iconbgColor:ColorValue;
} & ComponentProps<typeof TouchableOpacity>

const IconBox = ({icon, title, text, iconbgColor, className, ...props}: IconBoxProps) => {
  return (
    <TouchableOpacity className={twMerge('flex w-[49%] rounded-2xl flex-col gap-1 p-3 bg-white border border-[#F3F4F6]', className)} {...props} >
      <View style={{backgroundColor:iconbgColor}}  className='flex rounded-lg h-12 w-12 items-center justify-center' >
        {icon}
      </View>
      <Text className='font-semibold tracking-wide' >{title}</Text>
      <Text className='font-semibold tracking-wider text-xs text-[#6B7280]' >{text}</Text>
    </TouchableOpacity>
  )
}

export default IconBox