import { FaBell, FaDraftingCompass, FaMap, FaTools } from 'react-icons/fa';
import { IBlogCat, IBlogs } from "@/types/Types";
import { FaHouse } from 'react-icons/fa6';

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
    date: new Date().toLocaleDateString(),
    title: "Why Land Surveys Are the Foundation of Property Ownership",
    image: "/images/b1.png",
    category: "Surveying",
    excerpt:
      "Land ownership begins with certainty. Professional land surveys define boundaries, rights, and responsibilities that protect property owners.",
    content: `
## Ownership Starts With Definition

Property ownership is not just about possession — it is about **definition**. Without clearly defined boundaries, ownership becomes ambiguous, and ambiguity creates risk. This is where professional land surveying plays a foundational role.

A land survey establishes the **legal extent of a property**, translating written descriptions in deeds into measurable, physical reality on the ground. Surveyors analyze historical records, plats, deeds, and physical monuments to determine where ownership begins and ends.

## Why Boundaries Are Not Obvious

Many property owners assume boundaries are visible through fences, tree lines, or roads. In reality, these features are often placed for convenience rather than accuracy. Over time, markers shift, natural features change, and informal agreements are forgotten.

Surveying replaces assumption with evidence.

## Legal Weight of a Survey

A professional survey is not merely informational — it carries legal authority. Courts, municipalities, lenders, and title companies rely on surveys to resolve disputes, approve developments, and insure property transactions.

Only licensed surveyors are qualified to render boundary opinions that hold legal standing.

## Risk Without a Survey

Without a current survey, property owners may unknowingly:
- Build structures across boundary lines
- Encroach on neighboring land
- Violate zoning setbacks
- Lose access rights

These issues often surface only when a property is sold, developed, or disputed — when resolution is most expensive.

## Long-Term Protection

A survey protects not just today’s owner, but future owners as well. It provides a documented, defensible record of land ownership that endures over time.

## Final Thought

Land surveys are not an optional formality. They are the framework that turns land into property and ownership into certainty.
`,
  },
  {
    id: "b21d6f09-9d42-48a3-8b5c-1e9cbb34fa77-102",
    date: new Date().toLocaleDateString(),
    title: "Understanding Boundary Surveys and Why They Matter",
    image: "/images/b2.png",
    category: "Surveying",
    excerpt:
      "Boundary surveys define legal property limits and prevent disputes before they begin.",
    content: `
## What Is a Boundary Survey?

A boundary survey determines the **exact legal limits of a property**. It identifies property corners, boundary lines, and relationships to neighboring parcels. This type of survey is one of the most critical services a land surveyor provides.

Unlike maps or GIS data, a boundary survey is grounded in legal research and professional judgment.

## How Boundary Surveys Are Created

Surveyors begin by researching:
- Deeds and title records
- Subdivision plats
- Prior surveys
- Legal descriptions

They then locate or reestablish boundary monuments in the field using precise measurement equipment. When conflicts arise between records and physical evidence, surveyors apply boundary law principles to resolve them.

## When You Need a Boundary Survey

Boundary surveys are essential when:
- Buying or selling property
- Constructing near property lines
- Installing fences or driveways
- Subdividing land
- Resolving disputes with neighbors

Many lenders and title insurers require them before closing.

## Preventing Costly Disputes

Boundary disputes are often emotional and expensive. A professional survey provides a neutral, defensible answer that helps resolve issues before they escalate.

## Legal and Financial Security

A boundary survey protects investments by ensuring improvements are built within owned land and comply with zoning and setback requirements.

## Final Takeaway

If knowing exactly what you own matters — and it should — a boundary survey is indispensable.
`,
  },
  {
    id: "c4e8a921-6a1f-41c4-a54f-0f0a12dd9981-103",
    date: new Date().toLocaleDateString(),
    title: "Topographic Surveys: Mapping the Land Before You Build",
    image: "/images/b3.png",
    category: "Site Planning",
    excerpt:
      "Topographic surveys provide the elevation and terrain data required for smart design and safe construction.",
    content: `
## Why Elevation Data Matters

Before any design or construction begins, it is essential to understand how the land behaves. A **topographic survey** captures the three-dimensional shape of a site, documenting elevations, slopes, and surface features.

This information drives nearly every design decision that follows.

## What a Topographic Survey Includes

A typical topographic survey records:
- Ground elevations and contour lines
- Slopes and drainage patterns
- Existing structures
- Trees, utilities, and surface features

Engineers and architects rely on this data to design foundations, drainage systems, and access routes.

## Reducing Design Risk

Designing without accurate topography is guesswork. Minor elevation errors can result in:
- Drainage failures
- Flooding
- Excessive grading costs
- Redesigns and delays

Accurate surveys minimize uncertainty and reduce project risk.

## Required for Approvals

Most municipalities require topographic data for site plans, grading permits, and stormwater approvals. Inaccurate or incomplete surveys often lead to costly resubmissions.

## Modern Survey Technology

Today’s topographic surveys may incorporate GNSS, total stations, drones, and LiDAR. These tools allow surveyors to capture dense, accurate data efficiently.

## Bottom Line

Topographic surveys turn land into actionable information. If you plan to build, design, or develop, they are non-negotiable.
`,
  },
  {
    id: "d9b12f66-4a98-4bb1-9dc1-8e3c2a5d1e44-104",
    date: new Date().toLocaleDateString(),
    title: "How Surveying Protects Buyers During Land Purchases",
    image: "/images/b4.png",
    category: "Land Buying",
    excerpt:
      "Surveys reveal hidden risks that listings and deeds often overlook.",
    content: `
## Buying Land Without a Survey Is a Gamble

Land purchases are often driven by location and price, but the most critical information is rarely visible. A professional survey protects buyers by revealing what documents and listings may not show.

## What Surveys Uncover

During land purchases, surveys can identify:
- Boundary inconsistencies
- Encroachments
- Easements and rights-of-way
- Access limitations
- Floodplain constraints

These factors directly affect usability and value.

## Avoiding Post-Purchase Surprises

Many disputes arise after closing, when buyers discover they cannot build, access, or use land as expected. Surveys surface these issues early, when negotiation is still possible.

## Supporting Financing and Title Insurance

Lenders and title companies rely on surveys to reduce risk. Accurate survey data supports smoother closings and fewer title exceptions.

## Negotiation Power

Survey findings can justify price adjustments or corrective actions before purchase, protecting buyers financially.

## Final Advice

If you are investing in land, a survey is not an added cost — it is essential due diligence.
`,
  },
  {
    id: "e3a7c8b0-7f6e-43a6-8d4a-1c2c44b81255-105",
    date: new Date().toLocaleDateString(),
    title: "Construction Surveys: Turning Design Into Reality",
    image: "/images/b5.png",
    category: "Site Planning",
    excerpt:
      "Construction surveys ensure buildings and infrastructure are placed exactly as designed.",
    content: `
## From Paper to the Ground

Construction surveys transform design drawings into physical reality. Surveyors establish reference points, alignments, and elevations that guide construction crews throughout a project.

## What Construction Surveying Involves

Surveyors provide:
- Building layout
- Foundation staking
- Grade verification
- As-built surveys

Accuracy at this stage is critical — small errors can have major consequences.

## Cost of Inaccuracy

Construction errors caused by poor layout can result in:
- Failed inspections
- Structural conflicts
- Demolition and rework
- Legal liability

Surveying reduces these risks by ensuring precision.

## Ongoing Verification

Surveyors return throughout construction to verify progress and ensure compliance with plans and regulations.

## Collaboration Across Disciplines

Successful projects depend on coordination between surveyors, engineers, architects, and contractors.

## Final Takeaway

Construction surveys protect budgets, schedules, and safety. They are the backbone of successful building projects.
`,
  },
  {
    id: "f1c29a8e-0f1a-4d47-9e34-5a61b2d80b90-106",
    date: new Date().toLocaleDateString(),
    title: "Why Old Surveys Can Create Modern Problems",
    image: "/images/b6.png",
    category: "Surveying",
    excerpt:
      "Outdated surveys often fail to reflect current conditions, regulations, and legal realities.",
    content: `
## Old Does Not Mean Accurate

An older survey may appear official, but land conditions change over time. Monuments are disturbed, roads shift, utilities are added, and zoning laws evolve.

## Common Issues With Old Surveys

Relying on outdated surveys can result in:
- Missing boundary markers
- Inaccurate measurements
- Non-compliant building placement
- Invalid permits

## Technology Has Advanced

Modern surveys use improved equipment, higher accuracy standards, and digital records that older surveys cannot match.

## Legal Exposure

Municipalities and lenders often reject outdated surveys, delaying projects and transactions.

## Recommendation

If a survey is more than a few years old — or predates development — updating it is a wise investment.

## Bottom Line

Old surveys document history. New surveys provide certainty.
`,
  },
  {
    id: "a8b6e4e1-3d91-4f44-b12e-9d9bcb3c6611-107",
    date: new Date().toLocaleDateString(),
    title: "How Technology Is Reshaping Modern Surveying",
    image: "/images/b7.png",
    category: "Tools & Tech",
    excerpt:
      "Advanced tools have transformed surveying workflows while reinforcing the need for professional judgment.",
    content: `
## A Technological Evolution

Surveying has evolved dramatically over the past decades. GNSS, drones, LiDAR, and digital processing have increased efficiency and data density.

## Tools of the Modern Surveyor

Modern surveyors use:
- Satellite positioning systems
- Total stations
- Aerial photogrammetry
- Point cloud processing

These tools allow faster data collection and improved accuracy.

## Technology Requires Expertise

Technology alone does not guarantee correctness. Proper setup, calibration, and interpretation remain essential.

## Legal Responsibility Remains Human

Despite automation, surveyors remain legally responsible for their work. Judgment and experience cannot be replaced.

## Final Perspective

Technology strengthens surveying — it does not diminish the profession’s importance.
`,
  },
  {
    id: "b0f2a441-5c97-4b25-bd92-6f94d4c1b901-108",
    date: new Date().toLocaleDateString(),
    title: "The Role of Surveying in Long-Term Land Development",
    image: "/images/b8.png",
    category: "Updates",
    excerpt:
      "Successful land development depends on accurate, forward-looking survey data.",
    content: `
## Development Is a Long Game

Land development unfolds over years, sometimes decades. Surveying provides the consistent framework that supports every phase.

## From Concept to Completion

Surveyors support:
- Feasibility studies
- Subdivision design
- Infrastructure layout
- Final as-built documentation

## Reducing Long-Term Risk

Accurate surveys prevent conflicts, delays, and redesigns as projects evolve.

## Supporting Sustainable Growth

Survey data helps planners manage growth responsibly by understanding terrain, access, and environmental constraints.

## Final Thought

Long-term development succeeds when it is built on precise, reliable survey information.
`,
  },
];
