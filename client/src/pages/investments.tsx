import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ship, Anchor } from "lucide-react";

export default function Investments() {
  const vessels = [
    {
      name: "Kotlik Challenger",
      type: "116’ Pollock/Cod Trawler",
      ownership: "100% Ownership via YDFI",
      operations: "Bering Sea pollock fishery, Pacific Cod fishery, West Coast hake fishery.",
      employment: "Purchased April 2022.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2024-05/image004.jpg?itok=XjSCtZT6"
    },
    {
      name: "Nunam Iqua Harvester",
      type: "99’ Trawler",
      ownership: "100% Ownership via YDFI",
      operations: "Bering Sea and Aleutian Islands Pollock, Pacific Cod, Yellow Fin Sole.",
      employment: "Purchased December 2022.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2024-05/image005.png?itok=Kvl_sVJv"
    },
    {
      name: "M/V Golden Alaska",
      type: "305-foot Pollock Mothership",
      ownership: "58% Ownership via YDFI",
      operations: "Pollock mothership processing.",
      employment: "Provides processing positions for Yukon Delta residents.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2020-08/Golden-Alaska.jpg?itok=uaLZMwag"
    },
    {
      name: "C/P Baranof",
      type: "182-foot Crab/Cod Catcher Processor",
      ownership: "41% Ownership via YDFDA",
      operations: "Harvests and processes king crab, Bairdi crab, Opilio crab, Pacific cod, and sablefish.",
      employment: "Year-round crew positions available for Yukon Delta residents.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2020-08/Romanzof-Baranof.jpg?itok=nB2ZAX7A"
    },
    {
      name: "C/P Courageous",
      type: "180-foot Crab/Longline Catcher Processor",
      ownership: "85% Ownership via YDFDA",
      operations: "Harvests and processes Opilio crab, brown king crab, red king crab, Pacific cod, and sablefish.",
      employment: "Year-round employment opportunities for regional residents.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2020-08/Cosurageous.jpg?itok=okE5qgwP"
    },
    {
      name: "F/V Kiska Sea",
      type: "125-foot Crab Catcher Vessel",
      ownership: "45% Ownership via YDFI",
      operations: "Harvests king, tanner, and Opilio crab.",
      employment: "Year-round crew positions available for Yukon Delta residents.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2020-08/Kiska-Sea.jpg?itok=-N_qSO-z"
    },
    {
      name: "F/V Ocean Leader",
      type: "120-foot Trawler",
      ownership: "76% Ownership via YDFI",
      operations: "Harvests mothership & CDQ pollock quota for M/V Golden Alaska.",
      employment: "Provides apprenticeship opportunities for Yukon Delta residents.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2020-08/emmonak-Ocean-Leader.jpg?itok=yeOpfELU"
    },
    {
      name: "F/V American Beauty",
      type: "123-foot Trawler",
      ownership: "75% Ownership via YDFI",
      operations: "Harvests mothership & CDQ pollock quota for M/V Golden Alaska.",
      employment: "Offers apprenticeship opportunities for Yukon Delta residents.",
      image: "https://ydfda.org/sites/default/files/styles/investments_image_480x480_/public/2020-08/Alakanuk-American-Beauty.jpg?itok=20EuSD_N"
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
              <Card key={index} className="h-full border border-[#dddddd] hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={vessel.image} 
                    alt={vessel.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-white/90 p-2 rounded-full text-[#4e7f76]">
                    <Ship className="w-5 h-5" />
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-bold text-[#333333]">{vessel.name}</CardTitle>
                  <div className="text-sm font-bold text-[#d16103] mt-1">{vessel.ownership}</div>
                </CardHeader>
                
                <CardContent className="space-y-4 flex-1">
                  <div>
                    <span className="text-xs font-bold text-[#999999] uppercase tracking-wide">Vessel Type</span>
                    <p className="text-[#333333] text-sm mt-0.5">{vessel.type}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#999999] uppercase tracking-wide">Operations</span>
                    <p className="text-[#555555] text-sm mt-0.5">{vessel.operations}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#999999] uppercase tracking-wide">Opportunities</span>
                    <p className="text-[#555555] text-sm mt-0.5">{vessel.employment}</p>
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
