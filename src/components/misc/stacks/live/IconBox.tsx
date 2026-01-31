import { View,  ColorValue } from 'react-native'
import React, { ReactNode } from 'react'

type IconBoxProps = {
    icon:ReactNode;
    iconbgColor:ColorValue;
}

const IconBox = ({icon, iconbgColor}: IconBoxProps) => {
  return (
    <View style={{backgroundColor:iconbgColor}}  className='flex rounded-lg h-12 w-12 items-center justify-center' >
        {icon}
    </View>
  )
}

export default IconBox