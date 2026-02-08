import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge";

type DropwithLabelProps = {
    label: string;
    options:string[];
    containerClassName?: string;
} & ComponentProps<'select'>

const DropwithLabel = ({ label, options, containerClassName, className, ...props }: DropwithLabelProps) => {
  return (
    <div className={twMerge("flex flex-col gap-1", containerClassName)} >
        <span className="text-[#374151] text-xs md:text-sm" >{label}</span>
        <select className={twMerge("input", className)}  {...props} >
          {
            options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))
          }
        </select>
    </div>
  )
}

export default DropwithLabel