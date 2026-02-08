import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type StoreButtonProps = {
    text: string;
    icon?:ReactNode
} & ComponentProps<"div">;

const StoreButton = ({ text, icon, className, ...props }: StoreButtonProps) => {
  return (
    <div className={twMerge('flex items-center gap-1.5 bg-[#374151] hover:bg-[#3b414a] cursor-pointer px-4 py-1 rounded-lg', className)} {...props}>
        {icon && icon }
        <span className="text-white/50 text-sm">{text}</span>
    </div>
  )
}

export default StoreButton