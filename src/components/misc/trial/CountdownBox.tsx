import { View, Text } from 'react-native'
import { twMerge } from 'tailwind-merge'
import { styles } from '../../../utils/styles'
import NumberBox from './NumberBox'

const CountdownBox = () => {
  return (
    <View className='w-full h-38 bg-linear-to-r from-[#2563EB] to-[#122C5C] rounded-xl flex items-center justify-center gap-2.5' >
      <Text className={twMerge(styles.greytext, 'text-white')} >Trial ends in</Text>
      <View className='flex flex-row gap-2 justify-center items-center w-full' >
        <NumberBox number='29' smallText='days' />
        <NumberBox number='23' smallText='Hours' />
        <NumberBox number='59' smallText='Min' />
        <NumberBox number='45' smallText='Sec' />
      </View>
    </View>
  )
}

export default CountdownBox