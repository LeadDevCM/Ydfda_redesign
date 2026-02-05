import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export default function Board() {
  const board = [
    {
      name: "Max Agayar",
      role: "Board Chairman",
      location: "Alakanuk, AK 99554",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Max%20Agayar.jpg?itok=LmDRi3TP"
    },
    {
      name: "Rachel Freireich",
      role: "Vice Chairman",
      location: "Grayling, AK",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/YDFDA%20Logo%20high_1.jpg?itok=-vMEsFDc"
    },
    {
      name: "Darlene Pete",
      role: "Board Secretary",
      location: "Nunam Iqua, AK 99666",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Darlene%20Pete.jpg?itok=ekhgqNYe"
    },
    {
      name: "Antonia Kameroff",
      role: "Board Member",
      location: "Emmonak, AK 99581",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Antonia%20Kameroff.jpg?itok=n-eqByy9"
    },
    {
      name: "Cyril Okitkun",
      role: "Board Member",
      location: "Kotlik, AK 99620",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Cyril%20Okitkun.jpg?itok=l3otSlMo"
    },
    {
      name: "Reynold Okitkun",
      role: "Board Member",
      location: "Kotlik, AK 99620",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Reynold%20Okitkun%20.jpg?itok=QFU-Pifz"
    },
    {
      name: "Stanley Pete",
      role: "Board Member",
      location: "Nunam Iqua, AK 99666",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Stanley%20Pete.jpg?itok=e-LIiDAa"
    },
    {
      name: "Elmer Beans",
      role: "Board Member",
      location: "Mountain Village, AK",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Elmer%20Beans.jpg?itok=1heNPgkj"
    },
    {
      name: "Shelby Edmunds",
      role: "Board Member",
      location: "Alakanuk, AK",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Shelby%20Edmunds.jpg?itok=iNXT8dJd"
    },
    {
      name: "Billy Westlock",
      role: "Board Member",
      location: "Emmonak, AK",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/YDFDA%20Logo%20high_2.jpg?itok=qvQ63h1J"
    },
    {
      name: "Christine Teganlakla",
      role: "Board Member",
      location: "Emmonak, AK",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/Christine%20Teganlakla.jpg?itok=obgr5UYW"
    },
    {
      name: "Rebecca Bostrom",
      role: "Board Member",
      location: "Grayling, AK",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/YDFDA%20Logo%20high_3.jpg?itok=iDIL6GNT"
    },
    {
      name: "Eric Walters",
      role: "Board Member",
      location: "Mountain Village, AK",
      image: "https://ydfda.org/sites/default/files/styles/profile_image/public/2024-05/YDFDA%20Logo%20high_4.jpg?itok=Y-Fl_lOk"
    }
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/aboutUs-Hero3.jpg"
        title="Board of Directors"
        subtitle="Representing our six member villages with leadership and vision."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {board.map((member, index) => (
              <Card key={index} className="h-full border border-[#dddddd] hover:shadow-lg transition-shadow overflow-hidden flex flex-col text-center">
                <div className="aspect-square w-full bg-slate-100 relative group overflow-hidden">
                   <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#4e7f76]/0 group-hover:bg-[#4e7f76]/10 transition-colors" />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col items-center">
                  <h3 className="text-lg font-bold text-[#333333] mb-1">{member.name}</h3>
                  <div className="text-[#d16103] font-medium text-sm mb-3 uppercase tracking-wide">{member.role}</div>
                  <div className="mt-auto flex items-center gap-1 text-[#777777] text-xs">
                    <MapPin className="w-3 h-3" />
                    {member.location}
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
