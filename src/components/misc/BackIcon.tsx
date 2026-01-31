import { MaterialIcons } from "@expo/vector-icons"
import { colors } from "../../utils/colors"
import { TouchableOpacity } from "react-native"
import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
import { useRouter } from "expo-router"

type BackIconProps = {
    customPress?: () => void
} & ComponentProps<typeof TouchableOpacity>

const BackIcon = ({customPress, className, ...props}: BackIconProps) => {
    const router = useRouter()
    const handlePress = () => {
        if(customPress) customPress()
        else router.back()
    }
  return (
    <TouchableOpacity onPress={handlePress} {...props} className={twMerge("bg-white absolute left-0 items-center justify-center flex dark:bg-slate-200 w-12 h-12 rounded-full shadow-lg", className)} >
        <MaterialIcons name="keyboard-backspace" size={18} color={colors.primary} />
    </TouchableOpacity>
  )
}

export default BackIcon