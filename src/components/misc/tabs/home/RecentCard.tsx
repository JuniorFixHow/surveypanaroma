import { ComponentProps, ReactNode } from 'react';
import { View, Text, ColorValue, TouchableOpacity } from 'react-native'
import CirleIcon from './CirleIcon';
import { twMerge } from 'tailwind-merge';

type RecentCardProps = {
    icon: ReactNode;
    iconBgColor: ColorValue;
    title: string;
    text: string;
} & ComponentProps<typeof TouchableOpacity>

const RecentCard = ({icon, iconBgColor, title, text, className, ...props}: RecentCardProps) => {
  return (
    <TouchableOpacity {...props} className={twMerge('flex flex-row items-center gap-2 p-2 border border-[#F3F4F6] rounded-lg bg-white', className)} >
      <CirleIcon icon={icon} iconBgColor={iconBgColor} />
      <View className='flex flex-col gap-0.5 flex-1' >
        <Text className='text-sm text-[#111827] tracking-wider font-bold'>{title}</Text>
        <Text className='text-xs tracking-wider text-[#111827] font-semibold' >{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RecentCard