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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative z-10">
            <FeatureCard 
              title="Scholarships"
              description="Financial aid for undergraduate, graduate, and vocational students from our six member villages."
              href="/scholarships"
              icon={GraduationCap}
              delay={0.1}
            />
            <FeatureCard 
              title="Local Enterprises"
              description="Supporting local businesses like Yukon Marine Manufacturing and River Towing."
              href="/enterprises"
              icon={Anchor}
              delay={0.2}
            />
            <FeatureCard 
              title="Employment"
              description="Current job openings and career opportunities within the association."
              href="/employment"
              icon={Briefcase}
              delay={0.3}
            />
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-heading font-bold text-slate-900">Community Focused Development</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Since 1999, we have been dedicated to improving the economic conditions of the Yukon Delta region. Through our skiff building programs and educational scholarships, we invest directly back into our people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/apply">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                    Apply Online
                  </Button>
                </Link>
                <a href="https://ydfda.org/FreeTaxAssistance.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                    <FileText className="w-4 h-4" /> Tax Assistance PDF
                  </Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://ydfda.org/sites/default/files/inline-images/localEnterprises-Hero.jpg" 
                alt="Yukon Marine Manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="text-white font-medium">Supporting local industry through marine manufacturing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Need Assistance?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Whether you're a student looking for scholarships or a resident needing tax help, we're here to support our community.
          </p>
          <div className="flex justify-center gap-6">
             <Link href="/contact">
               <Button variant="secondary" size="lg" className="font-bold">Contact Us</Button>
             </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
