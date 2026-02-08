import ContentIcon from "@/components/misc/ContentIcon";
import { ICourses } from "@/types/Types";
import { FaCompass, FaDraftingCompass, FaMap } from "react-icons/fa";

export const CoursesData: ICourses[] = [
    {
        module: 'Module 1',
        level: 'Beginner Level',
        title: 'Introduction & Orientation to Surveying',
        description: 'Build a strong foundation in surveying principles and AutoCAD basics.',
        features: ['Fundamentals of Surveying', 'Introduction to AutoCAD'],
        duration: '1 Week',
        bg: 'bg-linear-to-r from-[#3282B8] to-[#0F4C75]',
        icon:<ContentIcon icon={<FaCompass color="white" />} className="bg-white/20 h-10 w-10" />,
        price: 'Free'
    },
    {
        module: 'Module 2',
        level: 'Intermediate Level',
        title: 'Drafting & Field Data Processing',
        description: 'Turn field data into accurate, professional drawings.',
        features: [
            'AutoCAD Drafting Essesntials',
            'Plotting Survey Data',
            'Parcel Boundary Retracement',
            'Topographic & Contour Mapping'
        ],
        duration: '1 Week',
        bg: 'bg-linear-to-r from-[#A855F7] to-[#9333EA]',
        icon:<ContentIcon icon={<FaDraftingCompass color="white" />} className="bg-white/20 h-10 w-10" />,
        price: 'GH₵ 400'
    },
    {
        module: 'Module 3',
        level: 'Advanced Level',
        title: 'Advanced Mapping & Practice',
        description: 'Work like a professional surveyor with advanced techniques',
        features: [
            'Plan Reproduction & Scaling',
            'Georeferencing Techniques',
            'Subdivision & Layout Design',
            'Composite & Key Plans',
            'Smartphone-Based Surveying',
            'Client Communication & Collaboration'
        ],
        duration: '2 Weeks',
        bg: 'bg-linear-to-r from-[#F59E0B] to-[#D97706]',
        icon:<ContentIcon icon={<FaMap color="white" />} className="bg-white/20 h-10 w-10" />,
        price: 'GH₵ 900'
    }
]