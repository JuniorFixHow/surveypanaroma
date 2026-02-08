import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

type ContentIconProps = {
    icon: React.ReactNode
} & ComponentProps<"div">

const ContentIcon = ({ icon, className, ...props }: ContentIconProps) => {
  return (
    <div className={twMerge("h-12 w-12 rounded-lg flex-center", className)} {...props} >
        {icon}
    </div>
  )
}

export default ContentIcon