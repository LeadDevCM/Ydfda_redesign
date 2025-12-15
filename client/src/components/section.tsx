import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function Section({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <section className={`py-16 md:py-24 ${className}`}>{children}</section>;
}

export function FeatureCard({ title, description, href, icon: Icon, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <Link href={href} className="block group h-full cursor-pointer">
        <Card className="h-full border-transparent bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
          <CardHeader>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <Icon className="w-6 h-6" />
            </div>
            <CardTitle className="font-heading text-xl text-slate-900 group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 leading-relaxed">
              {description}
            </p>
          </CardContent>
          <CardFooter>
            <span className="text-sm font-semibold text-secondary-foreground/80 flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
