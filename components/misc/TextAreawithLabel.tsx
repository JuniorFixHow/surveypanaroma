import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type TextAreawithLabelProps = {
    label: string;
    containerClassName?: string;
} & ComponentProps<'textarea'>

const TextAreawithLabel = ({ label, containerClassName, className, ...props }: TextAreawithLabelProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", containerClassName)} >
        <span className="text-[#374151] text-xs md:text-sm" >{label}</span>
        <textarea rows={3} className={twMerge("input", className)}  {...props} />
    </div>
  )
}

export default TextAreawithLabel