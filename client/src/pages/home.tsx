import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section, FeatureCard } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GraduationCap, Anchor, Briefcase, FileText, Ship, LineChart } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/Screenshot-at-Sep-25-17-28-12.jpg"
        title="Building a Sustainable Future"
        subtitle="Empowering the Yukon Delta communities through fisheries development, education, and local enterprise."
        size="large"
      />

      <Section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            
            {/* Feature Block 1: Scholarships */}
            <Link href="/scholarships">
              <div className="group cursor-pointer h-full relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-[#4e7f76] transition-colors duration-300 group-hover:bg-[#3d635c]" />
                <div className="relative p-8 h-full flex flex-col items-center text-center text-white">
                  <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-heading tracking-wide">Scholarships</h3>
                  <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                    Educational funding for undergraduate, graduate, and vocational students from our member villages.
                  </p>
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider border-b-2 border-white/30 pb-1 group-hover:border-white transition-all">
                    Apply Now
                  </span>
                </div>
              </div>
            </Link>

            {/* Feature Block 2: Local Enterprises */}
            <Link href="/enterprises">
              <div className="group cursor-pointer h-full relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-[#C97E51] transition-colors duration-300 group-hover:bg-[#b06d45]" />
                <div className="relative p-8 h-full flex flex-col items-center text-center text-white">
                  <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Anchor className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-heading tracking-wide">Local Enterprises</h3>
                  <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                    Supporting economic growth through Yukon Marine Manufacturing, River Towing, and Kwik'pak Fisheries.
                  </p>
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider border-b-2 border-white/30 pb-1 group-hover:border-white transition-all">
                    View Services
                  </span>
                </div>
              </div>
            </Link>

            {/* Feature Block 3: Employment */}
            <Link href="/employment">
              <div className="group cursor-pointer h-full relative overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 bg-[#336666] transition-colors duration-300 group-hover:bg-[#264d4d]" />
                <div className="relative p-8 h-full flex flex-col items-center text-center text-white">
                  <div className="mb-6 p-4 bg-white/10 rounded-full backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-heading tracking-wide">Employment</h3>
                  <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                    Year-round and seasonal job opportunities in fisheries, manufacturing, and administration.
                  </p>
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider border-b-2 border-white/30 pb-1 group-hover:border-white transition-all">
                    View Openings
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </Section>

      <Section className="bg-[#f5f5f5] pt-0">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-heading font-bold text-[#333333]">Community Focused Development</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Since 1999, we have been dedicated to improving the economic conditions of the Yukon Delta region. Through our skiff building programs and educational scholarships, we invest directly back into our people.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 py-4">
                <Link href="/investments">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-[#dddddd] cursor-pointer hover:border-[#4e7f76] transition-colors group">
                    <div className="bg-[#4e7f76]/10 p-2 rounded text-[#4e7f76]">
                      <Ship className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-[#333333] group-hover:text-[#4e7f76]">Offshore Investments</span>
                  </div>
                </Link>
                <Link href="/reports">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-[#dddddd] cursor-pointer hover:border-[#4e7f76] transition-colors group">
                    <div className="bg-[#4e7f76]/10 p-2 rounded text-[#4e7f76]">
                      <LineChart className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-[#333333] group-hover:text-[#4e7f76]">Annual Reports</span>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/apply">
                  <Button size="lg" className="bg-[#d16103] hover:bg-[#4e7f76] text-white font-semibold transition-colors duration-300">
                    Apply Online
                  </Button>
                </Link>
                <a href="https://ydfda.org/FreeTaxAssistance.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center gap-2 border-[#d16103] text-[#d16103] hover:bg-[#d16103] hover:text-white">
                    <FileText className="w-4 h-4" /> Tax Assistance PDF
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-lg overflow-hidden shadow-lg border-4 border-[#4e7f76]"
            >
              <img 
                src="https://ydfda.org/sites/default/files/inline-images/localEnterprises-Hero.jpg" 
                alt="Yukon Marine Manufacturing"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#336666] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-white">Need Assistance?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg font-light">
            Whether you're a student looking for scholarships or a resident needing tax help, we're here to support our community.
          </p>
          <div className="flex justify-center gap-6">
             <Link href="/contact">
               <Button size="lg" className="bg-[#d16103] hover:bg-[#4e7f76] text-white font-bold border-none">Contact Us</Button>
             </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
