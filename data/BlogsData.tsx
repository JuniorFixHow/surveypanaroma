import { FaBell, FaDraftingCompass, FaMap, FaTools } from 'react-icons/fa';
import { BlogCategory, IBlogCat, IBlogs } from "@/types/Types";
import { FaHouse } from 'react-icons/fa6';

 export const Blogcolors: Record<BlogCategory, string> = {
        'Surveying':'#D97706',
        'Site Planning':'#3B82F6',
        'Land Buying':'#0F4C75',
        'Updates': '#A855F7',
        'Tools & Tech': '#EA580C'
}

export const BlogCats:IBlogCat[] = [
    {
        name: "Surveying",
        bg: 'bg-linear-to-r from-[#F59E0B] to-[#D97706]',
        icon: <FaMap color="white" />
    },
    {
        name: "Site Planning",
        bg: 'bg-linear-to-r from-[#3B82F6] to-[#2563EB]',
        icon: <FaDraftingCompass color="white" />
    },
    {
        name: "Land Buying",
        bg: 'bg-linear-to-r from-[#0F4C75] to-[#3282B8]',
        icon: <FaHouse color="white" />
    },
    {
        name: "Updates",
        bg: 'bg-linear-to-r from-[#A855F7] to-[#9333EA]',
        icon: <FaBell color="white" />
      },
      {
        name: "Tools & Tech",
        bg: 'bg-linear-to-r from-[#F97316] to-[#EA580C]',
        icon: <FaTools color="white" />
       }
]

export const blogs: IBlogs[] = [
  {
    id: "a94f1e2d-7c3b-4c6a-9b31-0c9d3f6a8123-101",
    date: "2026-02-09",
    title: "Why Land Surveys Are the Foundation of Property Ownership",
    image: "/images/b1.png",
    category: "Surveying",
    excerpt:
      "Land ownership begins with certainty. Professional land surveys define boundaries, rights, and responsibilities that protect property owners.",
    content:
      "Property ownership is not just about possession. It is about definition. Without clearly defined boundaries, ownership becomes ambiguous, and ambiguity creates risk. This is where professional land surveying plays a foundational role. A land survey establishes the legal extent of a property by translating written descriptions in deeds into measurable, physical reality on the ground. Surveyors analyze historical records, plats, deeds, and physical monuments to determine where ownership begins and ends. Many property owners assume boundaries are visible through fences, tree lines, or roads. In reality, these features are often placed for convenience rather than accuracy. Over time, markers shift, natural features change, and informal agreements are forgotten. Surveying replaces assumption with evidence. A professional survey carries legal authority and is relied upon by courts, municipalities, lenders, and title companies to resolve disputes, approve developments, and insure property transactions. Only licensed surveyors are qualified to render boundary opinions with legal standing. Without a current survey, property owners may unknowingly build across boundary lines, encroach on neighboring land, violate zoning setbacks, or lose access rights. These issues often surface during sales, development, or disputes when resolution is most expensive. A survey protects both current and future owners by providing a documented and defensible record of land ownership that endures over time. Land surveys are not an optional formality. They are the framework that turns land into property and ownership into certainty.",
  },
  {
    id: "b21d6f09-9d42-48a3-8b5c-1e9cbb34fa77-102",
    date: "2026-02-08",
    title: "Understanding Boundary Surveys and Why They Matter",
    image: "/images/b2.png",
    category: "Surveying",
    excerpt:
      "Boundary surveys define legal property limits and prevent disputes before they begin.",
    content:
      "A boundary survey determines the exact legal limits of a property. It identifies property corners, boundary lines, and relationships to neighboring parcels. Unlike maps or GIS data, a boundary survey is grounded in legal research and professional judgment. Surveyors begin by researching deeds, title records, subdivision plats, prior surveys, and legal descriptions. They then locate or reestablish boundary monuments in the field using precise measurement equipment. When conflicts arise between records and physical evidence, surveyors apply boundary law principles to resolve them. Boundary surveys are essential when buying or selling property, constructing near property lines, installing fences or driveways, subdividing land, or resolving disputes with neighbors. Many lenders and title insurers require them before closing. Boundary disputes are often emotional and expensive, but a professional survey provides a neutral and defensible resolution before issues escalate. A boundary survey protects investments by ensuring improvements are built within owned land and comply with zoning and setback requirements. If knowing exactly what you own matters, a boundary survey is indispensable.",
  },
  {
    id: "c4e8a921-6a1f-41c4-a54f-0f0a12dd9981-103",
    date: "2023-02-07",
    title: "Topographic Surveys: Mapping the Land Before You Build",
    image: "/images/b3.png",
    category: "Site Planning",
    excerpt:
      "Topographic surveys provide the elevation and terrain data required for smart design and safe construction.",
    content:
      "Before any design or construction begins, it is essential to understand how the land behaves. A topographic survey captures the three-dimensional shape of a site, documenting elevations, slopes, and surface features. This information drives nearly every design decision that follows. A typical topographic survey records ground elevations, contour lines, slopes, drainage patterns, existing structures, trees, utilities, and surface features. Engineers and architects rely on this data to design foundations, drainage systems, and access routes. Designing without accurate topography introduces guesswork and can lead to drainage failures, flooding, excessive grading costs, redesigns, and delays. Accurate surveys minimize uncertainty and reduce project risk. Most municipalities require topographic data for site plans, grading permits, and stormwater approvals, and inaccurate surveys often lead to costly resubmissions. Modern topographic surveys may incorporate GNSS, total stations, drones, and LiDAR to capture dense and accurate data efficiently. Topographic surveys turn land into actionable information and are essential for building, design, and development.",
  },
  {
    id: "d9b12f66-4a98-4bb1-9dc1-8e3c2a5d1e44-104",
    date: "2026-02-06",
    title: "How Surveying Protects Buyers During Land Purchases",
    image: "/images/b4.png",
    category: "Land Buying",
    excerpt:
      "Surveys reveal hidden risks that listings and deeds often overlook.",
    content:
      "Land purchases are often driven by location and price, but the most critical information is rarely visible. A professional survey protects buyers by revealing issues that documents and listings may not show. Surveys can identify boundary inconsistencies, encroachments, easements, rights-of-way, access limitations, and floodplain constraints. These factors directly affect land usability and value. Many disputes arise after closing when buyers discover they cannot build, access, or use land as expected. Surveys surface these issues early when negotiation is still possible. Lenders and title companies rely on surveys to reduce risk and support smoother closings with fewer title exceptions. Survey findings can also justify price adjustments or corrective actions before purchase. A survey is not an added cost but essential due diligence for anyone investing in land.",
  },
  {
    id: "e3a7c8b0-7f6e-43a6-8d4a-1c2c44b81255-105",
    date: "2026-02-06",
    title: "Construction Surveys: Turning Design Into Reality",
    image: "/images/b5.png",
    category: "Site Planning",
    excerpt:
      "Construction surveys ensure buildings and infrastructure are placed exactly as designed.",
    content:
      "Construction surveys transform design drawings into physical reality. Surveyors establish reference points, alignments, and elevations that guide construction crews throughout a project. Surveying services include building layout, foundation staking, grade verification, and as-built surveys. Accuracy at this stage is critical because small errors can have major consequences. Construction errors may lead to failed inspections, structural conflicts, demolition, rework, and legal liability. Surveying reduces these risks by ensuring precision. Surveyors return throughout construction to verify progress and ensure compliance with plans and regulations. Successful projects depend on close coordination between surveyors, engineers, architects, and contractors. Construction surveys protect budgets, schedules, and safety and are the backbone of successful building projects.",
  },
  {
    id: "f1c29a8e-0f1a-4d47-9e34-5a61b2d80b90-106",
    date: "2026-02-07",
    title: "Why Old Surveys Can Create Modern Problems",
    image: "/images/b6.png",
    category: "Surveying",
    excerpt:
      "Outdated surveys often fail to reflect current conditions, regulations, and legal realities.",
    content:
      "An older survey may appear official, but land conditions change over time. Boundary monuments are disturbed, roads shift, utilities are added, and zoning laws evolve. Relying on outdated surveys can result in missing boundary markers, inaccurate measurements, non-compliant building placement, and invalid permits. Modern surveys use advanced equipment, higher accuracy standards, and digital records that older surveys cannot match. Municipalities and lenders often reject outdated surveys, delaying projects and transactions. If a survey is more than a few years old or predates development, updating it is a wise investment. Old surveys document history, while new surveys provide certainty.",
  },
  {
    id: "a8b6e4e1-3d91-4f44-b12e-9d9bcb3c6611-107",
    date: "2026-02-08",
    title: "How Technology Is Reshaping Modern Surveying",
    image: "/images/b7.png",
    category: "Tools & Tech",
    excerpt:
      "Advanced tools have transformed surveying workflows while reinforcing the need for professional judgment.",
    content:
      "Surveying has evolved dramatically over recent decades. GNSS, drones, LiDAR, and digital processing have increased efficiency and data density. Modern surveyors use satellite positioning systems, total stations, aerial photogrammetry, and point cloud processing to collect data faster and more accurately. Technology alone does not guarantee correctness, as proper setup, calibration, and interpretation remain essential. Despite automation, surveyors remain legally responsible for their work. Professional judgment and experience cannot be replaced. Technology strengthens surveying and reinforces the profession’s importance.",
  },
  {
    id: "b0f2a441-5c97-4b25-bd92-6f94d4c1b901-108",
    date: "2026-02-09",
    title: "The Role of Surveying in Long-Term Land Development",
    image: "/images/b8.png",
    category: "Updates",
    excerpt:
      "Successful land development depends on accurate, forward-looking survey data.",
    content:
      "Land development unfolds over many years and sometimes decades. Surveying provides a consistent framework that supports every phase of development. Surveyors assist with feasibility studies, subdivision design, infrastructure layout, and final as-built documentation. Accurate surveys prevent conflicts, delays, and redesigns as projects evolve. Survey data also helps planners manage growth responsibly by understanding terrain, access, and environmental constraints. Long-term development succeeds when it is built on precise and reliable survey information.",
  },
];

