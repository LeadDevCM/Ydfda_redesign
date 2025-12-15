import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon: any;
  delay?: number;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
}

export function Section({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <section className={`py-16 md:py-24 ${className}`}>{children}</section>;
}

export function FeatureCard({ 
  title, 
  description, 
  href, 
  icon: Icon, 
  delay = 0, 
  className,
  iconClassName,
  titleClassName,
  textClassName,
  buttonClassName
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="h-full"
    >
      <Link href={href} className="block group h-full cursor-pointer">
        <Card className={cn(
          "h-full border-transparent hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 rounded-none border-0",
          className || "bg-slate-50 hover:bg-white"
        )}>
          <CardHeader>
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors",
              iconClassName || "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
            )}>
              <Icon className="w-6 h-6" />
            </div>
            <CardTitle className={cn(
              "font-heading text-xl transition-colors",
              titleClassName || "text-slate-900 group-hover:text-primary"
            )}>
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className={cn(
              "leading-relaxed",
              textClassName || "text-slate-600"
            )}>
              {description}
            </p>
          </CardContent>
          <CardFooter>
            <span className={cn(
              "text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all",
              buttonClassName || "text-secondary-foreground/80"
            )}>
              Learn more <ArrowRight className="w-4 h-4" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
}
