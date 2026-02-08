import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PrimaryBtnProps = {
    text: string;
    icon?: ReactNode,
    reversed?: boolean;
} & ComponentProps<"button">;

const PrimaryBtn = ({ text, icon, reversed=false, className, ...props }: PrimaryBtnProps) => {
  return (
    <button className={twMerge(`bg-[#0F4C75] px-6 py-2 flex-center ${reversed ? 'flex-row-reverse':'flex-row' } rounded-lg text-white text-xs md:text-sm font-medium cursor-pointer hover:bg-[#0F4C75]/80`,className)} {...props}>{icon && <span className={`${reversed ? 'ml-2':'mr-2'}`}>{icon}</span>}{text}</button>
  )
}

export default PrimaryBtn