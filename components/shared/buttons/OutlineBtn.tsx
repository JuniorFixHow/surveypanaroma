import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type OutlineBtnProps = {
    text: string;
    icon?: ReactNode
} & ComponentProps<"button">;

const OutlineBtn = ({ text, icon, className, ...props }: OutlineBtnProps) => {
  return (
    <button className={twMerge('bg-white px-6 py-2 flex-center rounded-lg text-[#0F4C75] text-xs md:text-sm font-medium cursor-pointer hover:bg-slate-200',className)} {...props}>{icon && <span className="mr-2">{icon}</span>}{text}</button>
  )
}

export default OutlineBtn