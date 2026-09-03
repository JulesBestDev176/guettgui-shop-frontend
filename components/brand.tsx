import Link from "next/link";
import { Drumstick } from "lucide-react";
import { cn } from "@/lib/utils";

export function Brand({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span
        className={cn(
          "gradient-brand flex items-center justify-center text-white shadow-[0_4px_10px_rgba(185,28,28,.28)]",
          compact ? "h-9 w-9 rounded-[9px]" : "h-[42px] w-[42px] rounded-[10px]"
        )}
      >
        <Drumstick size={compact ? 20 : 23} strokeWidth={1.8} />
      </span>
      <span className="leading-none">
        <span className={cn("block font-extrabold tracking-[-0.5px] text-[#B91C1C]", compact ? "text-lg" : "text-[21px]")}>
          Charcut&apos;SN
        </span>
        {!compact && (
          <span className={cn("mt-1 block text-[10px] font-medium tracking-[0.05em]", light ? "text-gray-300" : "text-gray-500")}>
            VOLAILLE FRAICHE · SENEGAL
          </span>
        )}
      </span>
    </Link>
  );
}

export function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <div className="mb-[18px] flex items-baseline justify-between gap-4">
      <h2 className="text-[26px] font-bold tracking-[-0.5px] text-[#1F2937]">{title}</h2>
      {action && <span className="text-sm font-medium text-[#B91C1C]">{action}</span>}
    </div>
  );
}
