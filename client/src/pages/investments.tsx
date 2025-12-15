import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Anchor, Fish } from "lucide-react";

export default function Investments() {
  const vessels = [
    {
      name: "C/P Baranof",
      type: "182-foot crab/cod catcher processor",
      ownership: "41% Ownership",
      operations: "Harvests and processes king crab, Bairdi crab, Opilio crab, Pacific cod, and sablefish.",
      employment: "Year-round crew positions available for Yukon Delta residents."
    },
    {
      name: "C/P Courageous",
      type: "180-foot crab/longline catcher processor",
      ownership: "85% Ownership",
      operations: "Harvests and processes Opilio crab, brown king crab, red king crab, Pacific cod, and sablefish.",
      employment: "Year-round employment opportunities for regional residents."
    },
    {
      name: "F/V Kiska Sea",
      type: "125-foot crab catcher vessel",
      ownership: "45% Ownership via YDFI",
      operations: "Harvests king, tanner, and Opilio crab.",
      employment: "Crew positions available."
    },
    {
      name: "F/V Ocean Leader",
      type: "120-foot trawler",
      ownership: "76% Ownership via YDFI",
      operations: "Harvests mothership & CDQ pollock quota for M/V Golden Alaska.",
      employment: "Crew positions available."
    },
    {
      name: "F/V American Beauty",
      type: "123-foot trawler",
      ownership: "75% Ownership via YDFI",
      operations: "Harvests mothership & CDQ pollock quota for M/V Golden Alaska.",
      employment: "Crew positions available."
    }
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/Screenshot-at-Sep-25-17-28-12.jpg"
        title="Offshore Investments"
        subtitle="Creating employment opportunities and generating revenue for our communities through strategic offshore investments."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-heading font-bold mb-6 text-[#333333]">Investment Strategy</h2>
            <p className="text-lg text-[#555555] leading-relaxed">
              YDFDA has made strategic investments in the Bering Sea and Aleutian Islands through the Community Development Quota (CDQ) program, which began in 1992. These offshore investments create employment opportunities and generate revenue that flows back to Yukon Delta communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vessels.map((vessel, index) => (
              <Card key={index} className="h-full border-t-4 border-t-[#4e7f76] hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-[#4e7f76]/10 flex items-center justify-center text-[#4e7f76] mb-4">
                    <Ship className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-[#333333]">{vessel.name}</CardTitle>
                  <div className="text-sm font-semibold text-[#d16103] mt-1">{vessel.ownership}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-[#777777] block uppercase tracking-wide">Vessel Type</span>
                    <span className="text-[#333333]">{vessel.type}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#777777] block uppercase tracking-wide">Operations</span>
                    <span className="text-[#555555] text-sm">{vessel.operations}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[#777777] block uppercase tracking-wide">Opportunities</span>
                    <span className="text-[#555555] text-sm">{vessel.employment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
