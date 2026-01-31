import { ComponentProps, ReactNode } from 'react';
import { View, Text } from 'react-native'
import { twMerge } from 'tailwind-merge';

type ColumnIconProps = {
    icon:ReactNode;
    text:string;
    value:string;
} & ComponentProps<typeof View>

const ColumnIcon = ({icon, text, value, className, ...props}: ColumnIconProps) => {
  return (
    <View className={twMerge('flex flex-col w-[30%] bg-white items-center justify-center py-6 gap-2 border border-[#F3F4F6] rounded-lg', className)} {...props} >
        {icon}
        <View className='flex flex-col items-center justify-center' >
            <Text className='text-xs tracking-wide' >{text}</Text>
            <Text className='text-[#1F2937] font-bold tracking-wide truncate' >{value}</Text>
        </View>
    </View>
  )
}

export default ColumnIcon