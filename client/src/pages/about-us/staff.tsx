import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Briefcase } from "lucide-react";

export default function Staff() {
  const staff = [
    {
      name: "Ragnar Alstrom",
      title: "Executive Director",
      email: "ragnaraydf@aol.com"
    },
    {
      name: "Ryan Giliam",
      title: "Finance Director",
      email: "rgiliam@ydfda.org"
    },
    {
      name: "Ivan Demientieff",
      title: "Operations Manager, Yukon River Towing",
      email: "ivan.demientieff@outlook.com",
      link: "www.yukonrivertowing.com"
    },
    {
      name: "Gerry Davis",
      title: "General Counsel",
      email: "Gerry@davispartners.net"
    },
    {
      name: "Robert Andrews",
      title: "Manager, Yukon Marine Manufacturing",
      email: "robert@ydfda.org"
    },
    {
      name: "Landry Price",
      title: "Quota Manager",
      email: "landry@ydfda.org"
    },
    {
      name: "Jennifer Williams",
      title: "Government Affairs",
      email: "jwilliams@ydfda.org"
    },
    {
      name: "Linnell Bush",
      title: "Scholarship Coordinator / Youth Mentor",
      email: "lbush@ydfda.org"
    },
    {
      name: "Gordon Westlock Jr",
      title: "Fisheries Manager, Kwik'pak Fisheries",
      email: "gwestlockjr@ydfda.org"
    },
    {
      name: "Douglas Redfox",
      title: "Employment and Training Coordinator",
      email: "dougredfox@gci.net"
    },
    {
      name: "Courtney Weiss",
      title: "Grant Coordinator / Fisheries Biologist",
      email: "cweiss@ydfda.org"
    },
    {
      name: "Jodi Sibson",
      title: "Controller",
      email: "jsibson@ydfda.org"
    }
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/aboutUs-Hero3.jpg"
        title="Our Staff"
        subtitle="The dedicated team working for the future of the Yukon Delta."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((person, index) => (
              <Card key={index} className="h-full border border-[#dddddd] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#333333]">{person.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-[#4e7f76] shrink-0 mt-0.5" />
                    <span className="text-[#555555] font-medium">{person.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#d16103] shrink-0" />
                    <a href={`mailto:${person.email}`} className="text-[#428bca] hover:underline break-all">
                      {person.email}
                    </a>
                  </div>
                  {person.link && (
                     <div className="pl-8 text-sm">
                       <a href={`https://${person.link}`} target="_blank" rel="noopener noreferrer" className="text-[#428bca] hover:underline">
                         {person.link}
                       </a>
                     </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
