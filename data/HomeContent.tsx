import ContentIcon from "@/components/misc/ContentIcon";
import { IContentItems } from "@/types/Types";
import { FaHandshake, FaMapMarkedAlt, FaMountain, FaRulerCombined } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { PiDroneBold } from "react-icons/pi";

export const HomeContent: IContentItems[] = [
    {
        name: 'Cadestral Surveying',
        description: 'Accurate boundary definition to secure land ownership and prevent disputes.',
        icon: <ContentIcon className="bg-[#0F4C75]" icon={<FaMapMarkedAlt size={22} color="white" />} />
    },
    {
        name: 'Land Documentation Support',
        description: 'Guidance through site plans, documentation, and land registration processes.',
        icon: <ContentIcon className="bg-[#3282B8]" icon={<IoDocumentText size={22} color="white" />} />
    },
    {
        name: 'Land Acquisition Advisory',
        description: 'Professional advice before you buy land and avoid costly mistakes.',
        icon: <ContentIcon className="bg-[#16A34A]" icon={<FaHandshake size={22} color="white" />} />
    },
    {
        name: 'Site Planning & Setting Out',
        description: 'Precise layout and setting out for construction accuracy.',
        icon: <ContentIcon className="bg-[#EA580C]" icon={<FaRulerCombined size={22} color="white" />} />
    },
    {
        name: 'Topographic & Engineering Surveys',
        description: 'Detailed terrain and elevation data for development projects.',
        icon: <ContentIcon className="bg-[#9333EA]" icon={<FaMountain size={22} color="white" />} />
    },
    {
        name: 'Drone & GIS Services',
        description: 'Advanced mapping and spatial analysis using modern technology.',
        icon: <ContentIcon className="bg-[#62aee1]" icon={<PiDroneBold size={22} color="white" />} />
    }
]