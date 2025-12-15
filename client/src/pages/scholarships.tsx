import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, Download, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function Scholarships() {
  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/opportunities-hero5.jpg"
        title="Scholarship Opportunities"
        subtitle="Investing in the future leaders of the Yukon Delta through education."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Purpose of the Program</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The primary purpose of the program is to provide financial aid to both full-time & part-time undergraduate and graduate students from Alakanuk, Emmonak, Grayling, Kotlik, Mountain Village, and Nunam Iqua.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Eligible students must be enrolled and attending an accredited college or university, whether inside or outside Alaska. This includes post-secondary junior colleges and any institution offering a Bachelors Degree. Courses provided by the Career Academy in Alaska may also be considered.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Eligibility & Qualifications</h2>
              <div className="bg-slate-50 p-6 rounded-lg border space-y-4">
                <ul className="list-disc list-outside ml-5 space-y-3 text-slate-700">
                  <li><strong>Residency:</strong> Must be a resident of one of the six-member villages (Alakanuk, Emmonak, Grayling, Kotlik, Mountain Village, Nunam Iqua) for at least five continuous years.</li>
                  <li><strong>Freshman GPA:</strong> Minimum cumulative GPA of 2.0 for the first year.</li>
                  <li><strong>Sophomore GPA:</strong> Minimum cumulative GPA of 2.25.</li>
                  <li><strong>General GPA:</strong> Minimum cumulative GPA of 2.5 until graduation.</li>
                  <li><strong>Vocational:</strong> Must be accepted into a course minimum of 3 months full-time duration.</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Award Details</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Degree Programs</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between border-b pb-2">
                      <span>Full-time (12+ credits)</span>
                      <span className="font-bold text-primary">$3,500 / semester</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span>Part-time (6-11 credits)</span>
                      <span className="font-bold text-primary">$1,850 / semester</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Single Class (3+ credits)</span>
                      <span className="font-bold text-primary">$875 / semester</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Vocational</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between border-b pb-2">
                      <span>Quarterly Max</span>
                      <span className="font-bold text-primary">$1,500</span>
                    </div>
                    <div className="mt-4 text-xs italic">
                      Exceptions to minimum duration may be made for specific courses like CDL training (4-6 weeks).
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Card className="bg-slate-50 border-primary/20 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-secondary" />
                  Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="text-sm font-medium">Summer Semester</span>
                  <span className="text-sm font-bold text-destructive">April 15</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="text-sm font-medium">Fall Semester</span>
                  <span className="text-sm font-bold text-destructive">July 15</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded border">
                  <span className="text-sm font-medium">Spring Semester</span>
                  <span className="text-sm font-bold text-destructive">Dec 15</span>
                </div>
                
                <div className="pt-4 border-t mt-4">
                  <p className="text-xs text-muted-foreground mb-2">University of Alaska Foundation Deadline: <strong>Feb 14</strong></p>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="font-bold text-slate-900">Resources</h3>
              <a href="https://uaonline.alaska.edu/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ExternalLink className="h-4 w-4" /> UA Online
                </Button>
              </a>
              <a href="https://www.ydfda.org/assets/Uploads/YDFDA-2018-Scholarship-Application.doc">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Download className="h-4 w-4" /> Download Application (DOC)
                </Button>
              </a>
              <Link href="/apply">
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
                  Apply Online Now
                </Button>
              </Link>
            </div>

            <Alert className="bg-blue-50 border-blue-100">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertTitle className="text-blue-800">Note for UA Students</AlertTitle>
              <AlertDescription className="text-blue-700 text-sm">
                Students applying to any University of Alaska campus are strongly encouraged to first apply directly with the University of Alaska Foundation.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
