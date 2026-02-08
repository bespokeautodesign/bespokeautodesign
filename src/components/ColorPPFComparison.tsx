import { CheckCircle, XCircle, Minus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const comparisonData = [
  { feature: "Paint Protection", colorPpf: "full", vinyl: "none", respray: "none" },
  { feature: "Self-Healing", colorPpf: "full", vinyl: "none", respray: "none" },
  { feature: "Rock Chip Resistance", colorPpf: "full", vinyl: "partial", respray: "none" },
  { feature: "UV Resistance", colorPpf: "full", vinyl: "partial", respray: "partial" },
  { feature: "Hydrophobic Surface", colorPpf: "full", vinyl: "none", respray: "none" },
  { feature: "Reversible / Removable", colorPpf: "full", vinyl: "full", respray: "none" },
  { feature: "Factory-Paint Appearance", colorPpf: "full", vinyl: "partial", respray: "full" },
  { feature: "Preserves Resale Value", colorPpf: "full", vinyl: "partial", respray: "none" },
  { feature: "10-Year Warranty", colorPpf: "full", vinyl: "none", respray: "none" },
  { feature: "Longevity (Years)", colorPpf: "10+", vinyl: "3–5", respray: "Permanent" },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "full") return <CheckCircle className="h-5 w-5 text-foreground" />;
  if (status === "none") return <XCircle className="h-5 w-5 text-destructive/60" />;
  if (status === "partial") return <Minus className="h-5 w-5 text-muted-foreground" />;
  return <span className="text-sm font-medium text-foreground">{status}</span>;
};

export const ColorPPFComparison = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">COMPARISON</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            COLOR PPF vs. Vinyl Wrap vs. Respray
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See why XPEL COLOR PPF is the superior choice for changing your vehicle's color.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-4 px-4 text-sm font-semibold text-muted-foreground">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="text-sm font-bold text-foreground">XPEL COLOR PPF</div>
                  <Badge className="mt-1 text-xs">Recommended</Badge>
                </th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Vinyl Wrap</th>
                <th className="text-center py-4 px-4 text-sm font-semibold text-muted-foreground">Full Respray</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-foreground">{row.feature}</td>
                  <td className="py-3 px-4 text-center"><div className="flex justify-center"><StatusIcon status={row.colorPpf} /></div></td>
                  <td className="py-3 px-4 text-center"><div className="flex justify-center"><StatusIcon status={row.vinyl} /></div></td>
                  <td className="py-3 px-4 text-center"><div className="flex justify-center"><StatusIcon status={row.respray} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
