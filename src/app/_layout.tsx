import "../global.css";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {ToastProvider} from '@juniorfixhow/react-native-toast'
// Surveygh@2026


export default function Layout() {
  return(
    <GestureHandlerRootView style={{flex:1}}>
      <ToastProvider>
        <Slot />
      </ToastProvider>
    </GestureHandlerRootView>
  )
}
