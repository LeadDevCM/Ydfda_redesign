import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

export default function Reports() {
  const reports = [
    { year: 2018, file: "YDFDA-2018-Annual-Report (1).pdf", size: "1.06 MB" },
    { year: 2017, file: "YDFDA-2017-Annual-Report (1).pdf", size: "1.51 MB" },
    { year: 2016, file: "YDFDA-2016-Annual-Report (1).pdf", size: "1.78 MB" },
    { year: 2015, file: "YDFDA-2015-Annual-Report (1).pdf", size: "1.9 MB" },
    { year: 2014, file: "YDFDA2014AnnReportWebsite-Version.pdf", size: "4.09 MB" },
    { year: 2013, file: "annual-ydfda-2013.pdf", size: "2.7 MB" },
    { year: 2012, file: "YDFDA2012AnnReportWebVersion.pdf", size: "3.67 MB" },
    { year: 2011, file: "annualydfda2011.pdf", size: "1.18 MB" },
    { year: 2010, file: "YDFDA2010AnnualReport-FINAL.pdf", size: "1.45 MB" },
    { year: 2009, file: "AnnualReport2009.pdf", size: "1.18 MB" },
    { year: 2008, file: "annual-ydfda-2008.pdf", size: "993.13 KB" },
    { year: 2007, file: "annual-ydfda-2007.pdf", size: "1.13 MB" },
    { year: 2006, file: "annual-ydfda-2006.pdf", size: "1.06 MB" },
    { year: 2005, file: "annual-ydfda-2005.pdf", size: "1.01 MB" },
    { year: 2004, file: "annual-ydfda-2004.pdf", size: "970.68 KB" },
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/Screenshot-at-Sep-25-17-28-12.jpg"
        title="Annual Reports"
        subtitle="Transparency and accountability to our member communities."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
               <h2 className="text-2xl font-bold mb-4 text-[#333333]">About Our Reporting</h2>
               <p className="text-[#555555] mb-4">
                 YDFDA is committed to transparency. Our annual reports detail our financial performance, community development initiatives, scholarship awards, and employment statistics.
               </p>
               <p className="text-[#555555]">
                 Reports include information on top employee compensation, board relations, litigation disclosures, and operational overviews.
               </p>
            </div>
            <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#dddddd]">
               <h3 className="font-bold mb-2 text-[#336666]">Additional Resources</h3>
               <ul className="space-y-3">
                 <li>
                   <a href="#" className="flex items-center gap-2 text-[#428bca] hover:text-[#2a6496]">
                     <FileText className="w-4 h-4" /> 2020 Annual Report (Latest)
                   </a>
                 </li>
                 <li>
                   <a href="#" className="flex items-center gap-2 text-[#428bca] hover:text-[#2a6496]">
                     <FileText className="w-4 h-4" /> Newsletters Archive
                   </a>
                 </li>
                 <li>
                   <a href="https://www.guidestar.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#428bca] hover:text-[#2a6496]">
                     <ExternalLink className="w-4 h-4" /> IRS Form 990 (GuideStar)
                   </a>
                 </li>
               </ul>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Report Archive</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {reports.map((report) => (
                  <div key={report.year} className="flex items-center justify-between p-4 bg-white border border-[#dddddd] rounded hover:bg-[#f5f5f5] transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#4e7f76]/10 p-2 rounded text-[#4e7f76]">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-[#333333]">{report.year} Annual Report</div>
                        <div className="text-xs text-[#999999]">{report.size}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#d16103] group-hover:bg-[#d16103] group-hover:text-white">
                      <Download className="w-4 h-4 mr-2" /> Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </Layout>
  );
}

import { ExternalLink } from "lucide-react";
