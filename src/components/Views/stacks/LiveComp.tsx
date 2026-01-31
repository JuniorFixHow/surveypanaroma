
import { View } from 'react-native'
import Wrapper from '../../shared/Wrapper'
import CurrentPosition from '../../misc/stacks/live/CurrentPosition'
import ColumnIcon from '../../misc/stacks/live/ColumnIcon'
import { Entypo, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'
import LiveAddress from '../../misc/stacks/live/LiveAddress'
import GradientButton from '../../shared/buttons/GradientButton'
import OutlineButton from '../../shared/buttons/OutlineButton'
import { ToastComponent } from '@juniorfixhow/react-native-toast'
import LiveLocationMap from '../../maps/LiveLocationMap'

const LiveComp = () => {
  return (
    <Wrapper header='Live Location' contentContainerStyle={{paddingBottom:20}} compStyle='p-0 gap-4' >
      <ToastComponent />
      <LiveLocationMap/>
      <View className='px-4 flex flex-col gap-5' >
        <CurrentPosition />
        <View className='flex flex-row items-center justify-between' >
          <ColumnIcon 
            icon={<Ionicons name="warning" size={24} color="#F97316" />}
            text='Altitude' value='76m'
          />
          <ColumnIcon 
            icon={<FontAwesome6 name="gauge-high" size={24} color="#A855F7" />}
            text='Accuracy' value='±3m'
          />
          <ColumnIcon 
            icon={<FontAwesome6 name="gauge" size={24} color="#122C5C" />}
            text=' Speed ' value='0 km/h'
          />
        </View>
        <LiveAddress/>
        <GradientButton className='shadow-[#BFDBFE]' text='Save Location' 
          icon={<Entypo name="save" size={20} color="white" />}
        />
        <View className='flex flex-row items-center justify-between' >
          <OutlineButton text='Share' className='w-[48%] bg-white border border-[#E5E7EB] rounded-lg' textStyle='text-[1rem] font-semibold'
            icon={<Entypo name="share" size={20} color="#122C5C" />}
          />
          <OutlineButton text='Navigate' className='w-[48%] bg-white border border-[#E5E7EB] rounded-lg' textStyle='text-[1rem] font-semibold'
            icon={<FontAwesome5 name="directions" size={20} color="#16A34A" />}
          />
        </View>
      </View>
    </Wrapper>
  )
}

export default LiveComp