import { HoverEffect } from "../components/ui/card-hover-effect";

export function Testimonials() {
  return (
    <div className="max-w-5xl mx-auto px-8 pt-[60rem] md:pt-36 pb-20">
      <div className="text-center flex flex-col gap-5 z-10">
        <h1 className="text-[#76b900] text-4xl md:text-5xl font-semibold">
          What Our Clients Say?
        </h1>
        <h2 className="text-[#858585] text-xl font-medium">
        Real stories from real founders. See how entrepreneurs like you transformed their businesses with our solution. 
        </h2>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id: 1,
    title: "Sarah Chen",
    description:
      "Thanks to this platform, we secured our Series A funding in just 3 months. The matching algorithm connected us with investors who truly understood our vision in the AI space.",
    link: "/testimonial/sarah-chen",
  },
  {
    id: 2,
    title: "Mark Roberts",
    description:
      "As an angel investor reviewing hundreds of pitches monthly, this platform's filtering and matching system saves me countless hours. I've found three promising startups that perfectly aligned with my investment thesis.",
    link: "/testimonial/mark-roberts",
  },
  {
    id: 3,
    title: "Emma Wong",
    description:
      "The platform's data-driven approach to matching investors with startups is revolutionary. We've closed deals 40% faster than through traditional channels.",
    link: "/testimonial/emma-wong",
  },
  {
    id: 4,
    title: "David Park",
    description:
      "Our fintech startup struggled to reach the right investors until we joined this platform. The targeted matching and integrated due diligence tools streamlined our entire fundraising process.",
    link: "/testimonial/david-park",
  },
  {
    id: 5,
    title: "Rachel Martinez",
    description:
      "The quality of startups on this platform is exceptional. The detailed screening process and comprehensive pitch decks help me make informed decisions quickly. I've already backed five promising ventures.",
    link: "/testimonial/rachel-martinez",
  },
  {
    id: 6,
    title: "Alex Thompson",
    description:
      "From pitch deck feedback to investor matching, this platform provided everything we needed. We connected with investors who shared our passion for sustainable technology and secured $2M in seed funding.",
    link: "/testimonial/alex-thompson",
  },
];