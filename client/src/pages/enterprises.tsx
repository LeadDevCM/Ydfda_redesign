import Layout from "@/components/layout";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FileText, Anchor } from "lucide-react";

export default function Enterprises() {
  const flatSkiffs = [
    { size: "20' X 6'", price: "$25,500.00", tax: "$25,907.50" },
    { size: "22' X 6'", price: "$26,250.00", tax: "$26,668.75" },
    { size: "22' X 7'", price: "$27,750.00", tax: "$28,191.25" },
    { size: "24' X 7'", price: "$32,000.00", tax: "$32,505.00" },
  ];

  const semiVSkiffs = [
    { size: "18' X 5'", price: "$21,900.00", tax: "$22,253.50" },
    { size: "20' X 5'9\"", price: "$25,500.00", tax: "$25,907.50" },
    { size: "22' X 5'9\"", price: "$26,250.00", tax: "$26,668.75" },
    { size: "22' X 7'", price: "$27,750.00", tax: "$28,191.25" },
    { size: "24' X 7'", price: "$32,000.00", tax: "$32,505.00" },
  ];

  return (
    <Layout>
      <Hero 
        image="https://ydfda.org/sites/default/files/inline-images/localEnterprises-Hero.jpg"
        title="Local Enterprises"
        subtitle="Driving economic growth through manufacturing and services in Emmonak."
      />

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Anchor className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-slate-900">Yukon Marine Manufacturing</h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Yukon Marine Manufacturing (YMM) is an Emmonak-based skiff building facility that opened its doors in 1999. 
              We manufacture high-quality aluminum skiffs from October through May, providing essential employment during the winter months.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              In the summer months, YMM transitions to repairing boats for people in the surrounding villages. 
              From 1999 through 2017, we have proudly built a total of 354 skiffs for our community.
            </p>

            <a href="https://ydfda.org/sites/default/files/2024-05/CCF05202024.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                <FileText className="h-4 w-4" /> Download 2024 Brochure
              </Button>
            </a>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                Flat Yukon Skiffs <span className="text-sm font-normal text-slate-500 ml-auto">2024 Pricing</span>
              </h3>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">With Tax</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {flatSkiffs.map((skiff) => (
                      <TableRow key={skiff.size}>
                        <TableCell className="font-medium">{skiff.size}</TableCell>
                        <TableCell className="text-right">{skiff.price}</TableCell>
                        <TableCell className="text-right font-bold text-slate-700">{skiff.tax}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                Semi-V Skiffs <span className="text-sm font-normal text-slate-500 ml-auto">2024 Pricing</span>
              </h3>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-slate-50">
                      <TableHead>Size</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">With Tax</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {semiVSkiffs.map((skiff) => (
                      <TableRow key={skiff.size}>
                        <TableCell className="font-medium">{skiff.size}</TableCell>
                        <TableCell className="text-right">{skiff.price}</TableCell>
                        <TableCell className="text-right font-bold text-slate-700">{skiff.tax}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg border">
              <h4 className="font-bold mb-2">Additional Products</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                 <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span>Shrimpy Skiff (24' x 7')</span>
                    <span className="font-bold">$32,200.00</span>
                 </div>
                 <div className="flex justify-between items-center p-3 bg-white rounded border">
                    <span>Aluminum Console</span>
                    <span className="font-bold">$1,079.42</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
