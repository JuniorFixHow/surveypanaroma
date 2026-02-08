import ContentIcon from "@/components/misc/ContentIcon";
import { IServices } from "@/types/Types";
import { FaHandshake, FaMapMarkedAlt, FaMountain, FaRulerCombined } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { PiDroneBold } from "react-icons/pi";


export const ServiceData: IServices[] = [
    {
        name: 'Cadestral Surveying',
        description: 'We provide accurate boundary surveys to clearly define land ownership and prevent disputes.',
        icon: <ContentIcon className="bg-[#0F766E1A]/90" icon={<FaMapMarkedAlt size={22} color="#0F4C75" />} />,
        purpose: ['Landowners', 'Developers', 'Institutions'],
        image: '/images/OurServices1.png'
    },
    {
        name: 'Land Documentation Support',
        description: 'Complete assistance with land registration, title processing, and all legal documentation requirements.',
        icon: <ContentIcon className="bg-[#0F766E1A]/90" icon={<IoDocumentText size={22} color="#0F4C75" />} />,
        purpose: ['Property Buyers', 'Legal Firms', 'Real Estate Agents'],
        image: '/images/OurServices2.png'
    },
    {
        name: 'Land Acquisition Advisory',
        description: 'Expert guidance through the land acquisition process, from site selection to transaction completion.',
        icon: <ContentIcon className="bg-[#0F766E1A]/90" icon={<FaHandshake size={22} color="#0F4C75" />} />,
        purpose: ['Investors', 'Developers', 'Institutions'],
        image: '/images/OurServices3.png'
    },
    {
        name: 'Site Planning & Setting Out',
        description: 'Precise site layout and setting out services for construction projects, ensuring accurate positioning of structures.',
        icon: <ContentIcon className="bg-[#0F766E1A]/90" icon={<FaRulerCombined size={22} color="#0F4C75" />} />,
        purpose: ['Contractors', 'Architects', 'Engeneers'],
        image: '/images/OurServices4.png'
    },
    {
        name: 'Topographic & Engineering Surveys',
        description: 'Detailed terrain mapping and elevation data collection for infrastructure and development projects.',
        icon: <ContentIcon className="bg-[#0F766E1A]/90" icon={<FaMountain size={22} color="#0F4C75" />} />,
        purpose: ['Engineers', 'Planners', 'Infrastructure Developers'],
        image: '/images/OurServices5.png'
    },
    {
        name: 'Drone & GIS Services',
        description: 'Advanced aerial surveying and geographic information system mapping for comprehensive land analysis.',
        icon: <ContentIcon className="bg-[#0F766E1A]/90" icon={<PiDroneBold size={22} color="#0F4C75" />} />,
        purpose: ['Large Projects', 'Government Agencies', 'Research Institutions'],
        image: '/images/OurServices6.png'
    },
]