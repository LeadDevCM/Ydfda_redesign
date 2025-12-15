import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Employment() {
  const jobs = [
    {
      title: "Skiff Builder / Welder",
      location: "Emmonak, AK",
      type: "Seasonal (Oct - May)",
      description: "Experienced aluminum welder needed for Yukon Marine Manufacturing. Must have experience with MIG/TIG welding and fabrication."
    },
    {
      title: "Administrative Assistant",
      location: "Emmonak, AK",
      type: "Full-time",
      description: "Support the daily operations of the YDFDA office. Organization and computer skills required."
    },
    {
      title: "Marine Technician",
      location: "Emmonak, AK",
      type: "Seasonal (Summer)",
      description: "Repair and maintenance of outboard motors and marine equipment during the summer season."
    }
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/Screenshot-at-Sep-25-17-28-12.jpg"
        title="Employment Opportunities"
        subtitle="Join our team and help build a stronger community."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Current Openings</h2>
            <p className="text-slate-600">
              We are always looking for dedicated individuals to join our team. 
              If you don't see a position that fits, feel free to submit a general application.
            </p>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-primary mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
                      </div>
                    </div>
                    <Link href="/apply">
                      <Button>Apply Now</Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-slate-50 rounded-xl text-center border border-dashed border-slate-300">
            <h3 className="text-xl font-bold mb-2">Don't see the right fit?</h3>
            <p className="text-slate-600 mb-6">We accept general applications year-round for various positions.</p>
            <Link href="/apply">
              <Button variant="outline" size="lg">Submit General Application</Button>
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
