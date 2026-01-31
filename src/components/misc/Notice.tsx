import { Entypo } from '@expo/vector-icons';
import { ComponentProps, ReactNode } from 'react';
import { View, Text, OpaqueColorValue } from 'react-native'
import { twMerge } from 'tailwind-merge';

type NoticeProps = {
    title: string;
    text: string;
    icon?:ReactNode;
    iconColor?:string | OpaqueColorValue | undefined;
    titleStyle?: string;
    textStyle?: string;
} & ComponentProps<typeof View>

const Notice = ({title, text, icon, iconColor, titleStyle, textStyle, className, ...props}: NoticeProps) => {
  return (
    <View className={twMerge('p-2 rounded-lg gap-4 w-full flex flex-row border border-[#FEF08A] min-w-0', className)} {...props}>
    {
        icon ? icon : <Entypo name="info-with-circle" size={24} color={iconColor || "#CA8A04"} />
    }
      <View className='flex flex-col gap-0.5 flex-1' >
        <Text className={twMerge(titleStyle, 'text-sm text-[#854D0E] tracking-wide font-semibold')} >{title}</Text>
        <Text className={twMerge(textStyle, 'text-sm text-[#A16207] tracking-wide')} >{text}</Text>
      </View>
    </View>
  )
}

export default Notice