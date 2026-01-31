import { ReactNode } from 'react';
import { View, ColorValue } from 'react-native'

type CirleIconProps = {
    icon:ReactNode;
    iconBgColor:ColorValue;
}

const CirleIcon = ({icon, iconBgColor}: CirleIconProps) => {
  return (
    <View style={{backgroundColor:iconBgColor}} className='flex rounded-3xl items-center justify-center h-12 w-12 ' >
      {icon}
    </View>
  )
}

export default CirleIcon