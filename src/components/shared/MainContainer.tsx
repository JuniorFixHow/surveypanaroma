import { ScrollView } from "react-native";
import { styles } from "../../utils/styles";
import { StatusBar } from "expo-status-bar";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


type MainContainerProps = {
  children: React.ReactNode;
  showStatusBar?: boolean;
} & ComponentProps<typeof ScrollView>;

export default function MainContainer({ children, showStatusBar=true, className, ...props }: MainContainerProps) {
  return (
    <ScrollView className={twMerge(styles.main, className)} {...props}>
      {
        showStatusBar && <StatusBar style="auto" />
      }
        {children}
    </ScrollView>
  )
}