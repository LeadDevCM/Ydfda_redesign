import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section, FeatureCard } from "@/components/section";
import { Button } from "@/components/ui/button";
import { GraduationCap, Anchor, Briefcase, FileText, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/Screenshot-at-Sep-25-17-28-12.jpg"
        title="Building a Sustainable Future"
        subtitle="Empowering the Yukon Delta communities through fisheries development, education, and local enterprise."
        size="large"
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 -mt-32 relative z-10 shadow-xl rounded-lg overflow-hidden">
            <FeatureCard 
              title="Scholarships"
              description="Financial aid for undergraduate, graduate, and vocational students from our six member villages."
              href="/scholarships"
              icon={GraduationCap}
              delay={0.1}
              className="bg-[hsl(169,24%,40%)] text-white h-full"
              iconClassName="text-white bg-white/20"
              titleClassName="text-white"
              textClassName="text-white/90"
              buttonClassName="text-white hover:text-white/80"
            />
            <FeatureCard 
              title="Local Enterprises"
              description="Supporting local businesses like Yukon Marine Manufacturing and River Towing."
              href="/enterprises"
              icon={Anchor}
              delay={0.2}
              className="bg-[hsl(25,53%,55%)] text-white h-full"
              iconClassName="text-white bg-white/20"
              titleClassName="text-white"
              textClassName="text-white/90"
              buttonClassName="text-white hover:text-white/80"
            />
            <FeatureCard 
              title="Employment"
              description="Current job openings and career opportunities within the association."
              href="/employment"
              icon={Briefcase}
              delay={0.3}
              className="bg-[hsl(180,33%,30%)] text-white h-full"
              iconClassName="text-white bg-white/20"
              titleClassName="text-white"
              textClassName="text-white/90"
              buttonClassName="text-white hover:text-white/80"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-[#f5f5f5]">
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
