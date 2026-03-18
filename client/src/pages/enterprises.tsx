import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Download, Anchor, Ship, Sprout, Fish } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Enterprises() {
  const flatSkiffs = [
    { size: "20' x 6'", price: "$25,500.00", tax: "$25,907.50", halfDown: "$12,953.75" },
    { size: "22' x 6'", price: "$26,250.00", tax: "$26,668.75", halfDown: "$13,334.38" },
    { size: "22' x 7'", price: "$27,750.00", tax: "$28,191.25", halfDown: "$14,095.63" },
    { size: "24' x 7'", price: "$32,000.00", tax: "$32,505.00", halfDown: "$16,252.50" },
  ];

  const semiVSkiffs = [
    { size: "18' x 5'", price: "$19,400.00", tax: "$19,753.50", halfDown: "$9,876.75" },
    { size: "20' x 5'9\"", price: "$25,500.00", tax: "$25,907.50", halfDown: "$12,953.75" },
    { size: "22' x 5'9\"", price: "$26,250.00", tax: "$26,668.75", halfDown: "$13,334.38" },
    { size: "22' x 7'", price: "$27,750.00", tax: "$28,191.25", halfDown: "$14,095.63" },
    { size: "24' x 7'", price: "$32,000.00", tax: "$32,505.00", halfDown: "$16,252.50" },
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/localEnterprises-Hero.jpg"
        title="Local Enterprises"
        subtitle="Driving economic growth through manufacturing, services, and sustainable development."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          
          {/* Company Grid */}
          <div className="grid gap-12 mb-20">
            {/* Yukon Marine Manufacturing */}
            <div id="ymm" className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#4e7f76]/10 rounded-full">
                  <Anchor className="h-8 w-8 text-[#4e7f76]" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-[#333333]">Yukon Marine Manufacturing</h2>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                   <p className="text-lg text-[#555555] leading-relaxed mb-6">
                    Yukon Marine Manufacturing (YMM) is an Emmonak-based skiff building facility that opened its doors in 1999. 
                    We manufacture high-quality aluminum skiffs from October through May, providing essential employment during the winter months.
                  </p>
                  <p className="text-lg text-[#555555] leading-relaxed mb-8">
                    In the summer months, YMM transitions to repairing boats for people in the surrounding villages. 
                    From 1999 through 2017, we have proudly built a total of 354 skiffs for our community.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/documents/2026-ymm-boat-price-list.pdf" download data-testid="button-download-price-list">
                      <Button className="gap-2 bg-[#d16103] hover:bg-[#4e7f76]">
                        <Download className="h-4 w-4" /> Download 2026 Price List
                      </Button>
                    </a>
                    <a href="https://ydfda.org/sites/default/files/2024-05/CCF05202024.pdf" target="_blank" rel="noopener noreferrer" data-testid="button-download-brochure">
                      <Button variant="outline" className="gap-2 border-[#4e7f76] text-[#4e7f76] hover:bg-[#4e7f76] hover:text-white">
                        <FileText className="h-4 w-4" /> View 2024 Brochure
                      </Button>
                    </a>
                  </div>
                </div>
                <Card className="border-[#dddddd]">
                  <CardHeader>
                    <CardTitle className="text-[#336666]">2026 Pricing Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                       <span>Flat Yukon Skiffs</span>
                       <span className="font-bold text-[#333333]">From $25,500</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                       <span>Semi-V Skiffs</span>
                       <span className="font-bold text-[#333333]">From $19,400</span>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                       <span>Shrimpy Skiff</span>
                       <span className="font-bold text-[#333333]">$32,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span>Aluminum Console</span>
                       <span className="font-bold text-[#333333]">$1,200</span>
                    </div>
                    <div className="pt-2">
                      <a href="/documents/2026-ymm-boat-price-list.pdf" download className="text-sm text-[#d16103] hover:underline flex items-center gap-1" data-testid="link-price-list-pdf">
                        <Download className="h-3 w-3" /> Full price list with tax &amp; half-down amounts
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing Tables */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                 <div>
                  <h3 className="text-xl font-bold mb-4 text-[#336666]">Flat Yukon Skiffs — 2026 Prices</h3>
                  <div className="rounded-md border border-[#dddddd]">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#f5f5f5]">
                          <TableHead>Size</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="text-right">With Tax</TableHead>
                          <TableHead className="text-right">Half Down</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {flatSkiffs.map((skiff) => (
                          <TableRow key={skiff.size} data-testid={`row-flat-skiff-${skiff.size}`}>
                            <TableCell className="font-medium">{skiff.size}</TableCell>
                            <TableCell className="text-right">{skiff.price}</TableCell>
                            <TableCell className="text-right text-[#555555]">{skiff.tax}</TableCell>
                            <TableCell className="text-right text-[#555555]">{skiff.halfDown}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                 </div>
                 <div>
                  <h3 className="text-xl font-bold mb-4 text-[#336666]">Semi-V Skiffs — 2026 Prices</h3>
                  <div className="rounded-md border border-[#dddddd]">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#f5f5f5]">
                          <TableHead>Size</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="text-right">With Tax</TableHead>
                          <TableHead className="text-right">Half Down</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {semiVSkiffs.map((skiff) => (
                          <TableRow key={skiff.size} data-testid={`row-semi-skiff-${skiff.size}`}>
                            <TableCell className="font-medium">{skiff.size}</TableCell>
                            <TableCell className="text-right">{skiff.price}</TableCell>
                            <TableCell className="text-right text-[#555555]">{skiff.tax}</TableCell>
                            <TableCell className="text-right text-[#555555]">{skiff.halfDown}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                 </div>
              </div>

              {/* Shrimpy Skiff & Aluminum Console */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#336666]">Shrimpy Skiff — 2026 Prices</h3>
                  <div className="rounded-md border border-[#dddddd]">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#f5f5f5]">
                          <TableHead>Size</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="text-right">With Tax</TableHead>
                          <TableHead className="text-right">Half Down</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow data-testid="row-shrimpy-skiff">
                          <TableCell className="font-medium">24' x 7'</TableCell>
                          <TableCell className="text-right">$32,200.00</TableCell>
                          <TableCell className="text-right text-[#555555]">$32,708.00</TableCell>
                          <TableCell className="text-right text-[#555555]">$16,354.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#336666]">Add-Ons</h3>
                  <div className="rounded-md border border-[#dddddd]">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#f5f5f5]">
                          <TableHead>Item</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                          <TableHead className="text-right">With Tax</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow data-testid="row-aluminum-console">
                          <TableCell className="font-medium">Aluminum Console</TableCell>
                          <TableCell className="text-right">$1,200.00</TableCell>
                          <TableCell className="text-right text-[#555555]">$1,248.00</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              {/* PDF Download Banner */}
              <div className="mt-8 bg-[#4e7f76]/5 border border-[#4e7f76]/20 rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#336666]">2026 YMM New Boat Price List</p>
                  <p className="text-sm text-[#555555]">Complete pricing sheet including tax and half-down payment amounts.</p>
                </div>
                <a href="/documents/2026-ymm-boat-price-list.pdf" download data-testid="button-download-price-banner">
                  <Button className="gap-2 bg-[#d16103] hover:bg-[#336666] whitespace-nowrap">
                    <Download className="h-4 w-4" /> Download PDF
                  </Button>
                </a>
              </div>
            </div>

            <div className="border-t border-[#dddddd] my-8"></div>

            {/* Yukon River Towing */}
            <div id="yrt" className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#C97E51]/10 rounded-full">
                    <Ship className="h-8 w-8 text-[#C97E51]" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-[#333333]">Yukon River Towing</h2>
                </div>
                <p className="text-lg text-[#555555] leading-relaxed mb-6">
                  Yukon River Towing provides essential barging, towing, and construction services throughout the Lower Yukon region. 
                  Based in Emmonak, we support infrastructure development and logistical needs for our communities.
                </p>
                <a href="https://yukonrivertowing.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 border-[#d16103] text-[#d16103] hover:bg-[#d16103] hover:text-white">
                      <ExternalLink className="h-4 w-4" /> Visit Website
                    </Button>
                </a>
              </div>
              <div className="order-1 lg:order-2 h-64 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
                 <img src="https://www.yukonrivertowing.com/wp-content/themes/yukon-river-towing/assets/img/hero-image.jpg" alt="Yukon River Towing" className="max-h-full max-w-full object-cover w-full h-full" />
              </div>
            </div>

            <div className="border-t border-[#dddddd] my-8"></div>

            {/* Kwik'pak Fisheries */}
            <div id="kwikpak" className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#336666]/10 rounded-full">
                    <Fish className="h-8 w-8 text-[#336666]" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-[#333333]">Kwik'pak Fisheries</h2>
                </div>
                <p className="text-lg text-[#555555] leading-relaxed mb-6">
                  Founded around 2003, Kwik'pak Fisheries was established to provide a fair market for local fishermen. While commercial fish processing has been paused since 2020 due to low salmon returns, the facility remains a cornerstone of our community infrastructure.
                </p>
              </div>
            </div>

            <div className="border-t border-[#dddddd] my-8"></div>

            {/* Greenhouse Project */}
            <div id="greenhouse" className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#476d67]/10 rounded-full">
                    <Sprout className="h-8 w-8 text-[#476d67]" />
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-[#333333]">Greenhouse Project</h2>
                </div>
                <p className="text-lg text-[#555555] leading-relaxed mb-6">
                  A vital food security initiative in Emmonak featuring 6 operational greenhouses with more under development. 
                  This project not only produces fresh vegetables for local communities but also provides a youth employment program, fostering agricultural skills in the next generation.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>
    </Layout>
  );
}
