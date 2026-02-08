import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type InputwithLabelProps = {
    label: string;
    containerClassName?: string;
} & ComponentProps<'input'>

const InputwithLabel = ({ label, containerClassName, className, ...props }: InputwithLabelProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", containerClassName)} >
        <span className="text-[#374151] text-xs md:text-sm" >{label}</span>
        <input className={twMerge("input", className)}  {...props} />
    </div>
  )
}

export default InputwithLabel