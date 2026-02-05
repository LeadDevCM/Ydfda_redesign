import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Reports() {
  const reports = [
    { year: 2022, size: "7.06 MB", image: "/images/reports/2022-thumb.png" },
    { year: 2021, size: "16.52 MB", image: "/images/reports/2021-thumb.png" },
    { year: 2020, size: "1.57 MB", image: "/images/reports/2020-thumb.png" },
    { year: 2019, size: "1.72 MB", image: "/images/reports/2019-thumb.png" },
    { year: 2018, size: "1.06 MB", image: "/images/reports/2018-thumb.jpg" },
    { year: 2017, size: "1.51 MB", image: "/images/reports/2017-thumb.jpg" },
    { year: 2016, size: "1.78 MB", image: "/images/reports/2016-thumb.jpg" },
    { year: 2015, size: "1.9 MB", image: "/images/reports/2015-thumb.jpg" },
    { year: 2014, size: "4.09 MB", image: "/images/reports/2014-thumb.jpg" },
    { year: 2013, size: "2.7 MB", image: "/images/reports/2013-thumb.jpg" },
    { year: 2012, size: "3.67 MB", image: "/images/reports/2012-thumb.jpg" },
    { year: 2011, size: "1.18 MB", image: "/images/reports/2011-thumb.jpg" },
    { year: 2010, size: "1.45 MB", image: "/images/reports/2010-thumb.jpg" },
    { year: 2009, size: "1.18 MB", image: "/images/reports/2009-thumb.jpg" },
    { year: 2008, size: "993.13 KB", image: "/images/reports/2008-thumb.jpg" },
    { year: 2007, size: "1.13 MB", image: "/images/reports/2007-thumb.jpg" },
    { year: 2006, size: "1.06 MB", image: "/images/reports/2006-thumb.jpg" },
    { year: 2005, size: "1.01 MB", image: "/images/reports/2005-thumb.jpg" },
    { year: 2004, size: "970.68 KB", image: "/images/reports/2004-thumb.jpg" }
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
                href={`/reports/${report.year}-annual-report.pdf`}
                download
                className="group flex flex-col h-full bg-white border border-[#dddddd] rounded hover:shadow-lg transition-all hover:-translate-y-1"
                data-testid={`report-download-${report.year}`}
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
