import { View, Text } from 'react-native'

type NumberBoxProps = {
    number: string;
    smallText: string;
}

const NumberBox = ({number, smallText}: NumberBoxProps) => {
  return (
    <View className='flex flex-col gap-0.5 items-center justify-center'>
      <View className='w-14 h-12 bg-white/20 flex items-center justify-center rounded-lg' >
        <Text className='text-white font-bold text-2xl' >{number}</Text>
      </View>
      <Text className='text-xs text-white tracking-wider'>{smallText}</Text>
    </View>
  )
}

export default NumberBox