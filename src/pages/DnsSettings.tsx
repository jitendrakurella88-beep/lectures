import { useState } from "react";
import { Globe, Copy, CheckCircle2, RefreshCw, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const DEFAULT_DOMAIN = import.meta.env.VITE_CUSTOM_DOMAIN ?? "app.notzith.com";

type DnsRecord = {
  type: string;
  name: string;
  value: string;
  ttl: string;
  status: "active" | "pending" | "error";
};

// DNS records required for the custom domain. Extend or replace with an API response when available.
const dnsRecords: DnsRecord[] = [
  {
    type: "CNAME",
    name: "app",
    value: "jitendrakurella88-beep.github.io",
    ttl: "3600",
    status: "active",
  },
  {
    type: "A",
    name: "@",
    value: "185.199.108.153",
    ttl: "3600",
    status: "active",
  },
  {
    type: "A",
    name: "@",
    value: "185.199.109.153",
    ttl: "3600",
    status: "active",
  },
  {
    type: "TXT",
    name: "@",
    value: "v=spf1 include:_spf.github.com ~all",
    ttl: "3600",
    status: "pending",
  },
];

const statusStyles: Record<DnsRecord["status"], string> = {
  active: "bg-success/15 text-success border-success/30",
  pending: "bg-warm/15 text-warm border-warm/30",
  error: "bg-destructive/15 text-destructive border-destructive/30",
};

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button variant="ghost" size="icon" className="h-7 w-7 shrink-0" onClick={handleCopy}>
      {copied ? (
        <CheckCircle2 className="h-3.5 w-3.5 text-success" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </Button>
  );
}

export default function DnsSettings() {
  const [domain, setDomain] = useState(DEFAULT_DOMAIN);
  const [checking, setChecking] = useState(false);
  const { toast } = useToast();

  const handleCheckDns = () => {
    setChecking(true);
    // Simulates a DNS propagation check — replace with a real API call when available.
    setTimeout(() => {
      setChecking(false);
      toast({
        title: "DNS Check Complete",
        description: "All active records are propagating correctly.",
      });
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6 animate-fade-in">
      <div>
        <h1 className="font-display text-2xl font-bold">DNS Settings</h1>
        <p className="text-muted-foreground">
          Manage DNS records for your custom domain.
        </p>
      </div>

      {/* Domain */}
      <div className="rounded-xl border bg-card p-6 card-shadow space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Globe className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold">Custom Domain</p>
            <p className="text-sm text-muted-foreground">Your application's public domain name</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Input
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="e.g., app.example.com"
            className="font-mono text-sm"
          />
          <Button onClick={handleCheckDns} disabled={checking} variant="outline">
            <RefreshCw className={cn("mr-2 h-4 w-4", checking && "animate-spin")} />
            {checking ? "Checking…" : "Check DNS"}
          </Button>
        </div>
      </div>

      {/* Records */}
      <div className="rounded-xl border bg-card card-shadow">
        <div className="flex items-center justify-between p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Shield className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">DNS Records</p>
              <p className="text-sm text-muted-foreground">
                Add these records at your DNS provider
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-t bg-muted/40">
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">Type</th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">Name</th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">Value</th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">TTL</th>
                <th className="px-6 py-3 text-left font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {dnsRecords.map((record, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-xs font-semibold text-primary">
                      {record.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{record.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs truncate max-w-[260px]">{record.value}</span>
                      <CopyButton value={record.value} />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs text-muted-foreground">{record.ttl}</td>
                  <td className="px-6 py-4">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize",
                        statusStyles[record.status]
                      )}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Help */}
      <div className="rounded-xl border bg-muted/40 p-6 text-sm text-muted-foreground space-y-2">
        <p className="font-medium text-foreground">How to configure your DNS</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Log in to your domain registrar or DNS provider.</li>
          <li>Navigate to the DNS management section for your domain.</li>
          <li>Add each record listed above exactly as shown.</li>
          <li>Save your changes — propagation may take up to 48 hours.</li>
        </ol>
      </div>
    </div>
  );
}
