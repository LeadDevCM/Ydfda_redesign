import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Reports() {
  const reports = [
    { 
      year: 2022, 
      file: "YDFDA 2022 Annual Report-compressed.pdf", 
      size: "7.06 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2024-05/Screen%20Shot%202024-05-21%20at%206.36.49%20PM.png?itok=NI6-QMJm"
    },
    { 
      year: 2021, 
      file: "Print YDFDA Annual Report 2021 .pdf", 
      size: "16.52 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2024-05/Screen%20Shot%202024-05-21%20at%205.44.30%20PM.png?itok=JOmQtmmg"
    },
    { 
      year: 2020, 
      file: "YDFDA_2020 AnnReport (1).pdf", 
      size: "1.57 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2022-05/Screen%20Shot%202022-05-14%20at%207.39.19%20PM.png?itok=I3gRkR7q"
    },
    { 
      year: 2019, 
      file: "YDFDA_2019 AnnReport .pdf", 
      size: "1.72 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2022-05/Screen%20Shot%202022-05-14%20at%207.35.53%20PM.png?itok=uaVZmHWW"
    },
    { 
      year: 2018, 
      file: "YDFDA-2018-Annual-Report (1).pdf", 
      size: "1.06 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-YDFDA-2018-Annual-Report%20%281%29.jpg?itok=l3AFVmU_"
    },
    { 
      year: 2017, 
      file: "YDFDA-2017-Annual-Report (1).pdf", 
      size: "1.51 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-YDFDA-2017-Annual-Report.jpg?itok=ogIBOuRw"
    },
    { 
      year: 2016, 
      file: "YDFDA-2016-Annual-Report (1).pdf", 
      size: "1.78 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-YDFDA-2016-Annual-Report.jpg?itok=MMxZG8tD"
    },
    { 
      year: 2015, 
      file: "YDFDA-2015-Annual-Report (1).pdf", 
      size: "1.9 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-YDFDA-2015-Annual-Report.jpg?itok=8Ztkbbtt"
    },
    { 
      year: 2014, 
      file: "YDFDA2014AnnReportWebsite-Version.pdf", 
      size: "4.09 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-YDFDA2014AnnReportWebsite-Version.jpg?itok=poL6wX1S"
    },
    { 
      year: 2013, 
      file: "annual-ydfda-2013.pdf", 
      size: "2.7 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-annual-ydfda-2013.jpg?itok=_bj9AcgM"
    },
    { 
      year: 2012, 
      file: "YDFDA2012AnnReportWebVersion.pdf", 
      size: "3.67 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-YDFDA2012AnnReportWebVersion.jpg?itok=_rN7u-fO"
    },
    { 
      year: 2011, 
      file: "annualydfda2011.pdf", 
      size: "1.18 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-annualydfda2011.jpg?itok=RVAJ1N17"
    },
    { 
      year: 2010, 
      file: "YDFDA2010AnnualReport-FINAL.pdf", 
      size: "1.45 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-YDFDA2010AnnualReport-FINAL.jpg?itok=yOIb1ZuT"
    },
    { 
      year: 2009, 
      file: "AnnualReport2009.pdf", 
      size: "1.18 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-AnnualReport2009.jpg?itok=SSJqesuh"
    },
    { 
      year: 2008, 
      file: "annual-ydfda-2008.pdf", 
      size: "993.13 KB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-annual-ydfda-2008.jpg?itok=-kwLjS3Z"
    },
    { 
      year: 2007, 
      file: "annual-ydfda-2007.pdf", 
      size: "1.13 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-annual-ydfda-2007.jpg?itok=WCZt_bDH"
    },
    { 
      year: 2006, 
      file: "annual-ydfda-2006.pdf", 
      size: "1.06 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-annual-ydfda-2006.jpg?itok=6cnoDhLW"
    },
    { 
      year: 2005, 
      file: "annual-ydfda-2005.pdf", 
      size: "1.01 MB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-annual-ydfda-2005.jpg?itok=PjGDSfTr"
    },
    { 
      year: 2004, 
      file: "annual-ydfda-2004.pdf", 
      size: "970.68 KB",
      image: "https://ydfda.org/sites/default/files/styles/medium/public/2020-08/pdf-preview-annual-ydfda-2004.jpg?itok=vYfVtAZq"
    }
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/Screenshot-at-Sep-25-17-28-12.jpg"
        title="Annual Reports"
        subtitle="Transparency and accountability to our member communities."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
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

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {reports.map((report) => (
              <a 
                key={report.year} 
                href={`#download-${report.year}`} 
                className="group flex flex-col h-full bg-white border border-[#dddddd] rounded hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="aspect-[3/4] overflow-hidden bg-slate-100 border-b border-[#dddddd] relative">
                  <img 
                    src={report.image} 
                    alt={`${report.year} Annual Report Cover`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white p-2 rounded-full shadow-lg">
                      <Download className="w-5 h-5 text-[#d16103]" />
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center flex-1 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-[#333333] text-lg">{report.year}</div>
                    <div className="text-xs text-[#999999] mt-1">Annual Report</div>
                  </div>
                  <div className="text-[10px] text-[#777777] mt-2 pt-2 border-t border-[#f5f5f5]">
                    PDF • {report.size}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
}
