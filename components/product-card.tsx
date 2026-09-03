import Link from "next/link";
import { Check, Heart, MapPin, Star } from "lucide-react";
import { Badge } from "@/components/ui/primitives";
import { productImages } from "@/lib/product-images";

interface ProductCardProps {
  slug?: string;
  name: string;
  price: number;
  badge?: string;
  category?: string;
  vendor: string;
  city?: string;
  weight?: string;
  stock?: number;
  rating?: number;
  reviewCount?: number;
  livraison?: boolean;
  image?: string;
  compact?: boolean;
}

export function ProductCard({
  slug = "produit",
  name,
  price,
  badge,
  category,
  vendor,
  city = "Dakar",
  weight = "2 kg",
  stock = 24,
  rating = 4.8,
  livraison = true,
  image,
  compact = false,
}: ProductCardProps) {
  const contentPadding = compact ? "p-4" : "p-4";
  const titleSize = compact ? "text-[15px]" : "text-[15px]";
  const metaSize = compact ? "text-[12px]" : "text-xs";

  return (
    <Link href={`/produits/${slug}`} className="group block">
      <article className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image || productImages.wholeChicken}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-[#B91C1C] px-2.5 py-1 text-[11px] font-semibold text-white">
            {badge || category}
          </span>
          <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.12)]">
            <Heart size={15} className="text-[#B91C1C]" />
          </span>
        </div>

        <div className={contentPadding}>
          <div className={`mb-2 flex min-w-0 items-center gap-1.5 ${metaSize}`}>
            <Star size={13} className="fill-[#F59E0B] text-[#F59E0B]" />
            <span className="font-semibold text-[#1F2937]">{rating}</span>
            <span className="font-body min-w-0 truncate text-[#9CA3AF]">· {vendor}</span>
          </div>

          <h3 className={`mb-2 min-h-11 font-semibold leading-snug text-[#1F2937] line-clamp-2 ${titleSize}`}>
            {name}
          </h3>

          <div className="mb-3 flex min-w-0 items-center gap-1.5 font-body text-xs text-[#6B7280]">
            <MapPin size={13} className="text-[#9CA3AF]" />
            <span className="truncate">{city} · {weight}</span>
          </div>

          <div className="mb-3 flex flex-wrap gap-1.5">
            {livraison && (
              <Badge className="rounded-md bg-[#DCFCE7] px-2 py-1 text-[10px] text-[#15803D]">
                <Check size={11} />
                Livraison
              </Badge>
            )}
            <Badge className="rounded-md bg-[#F1F5F9] px-2 py-1 text-[10px] text-[#475569]">
              {stock} en stock
            </Badge>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="text-[#B91C1C]">
              <span className="text-[22px] font-bold">{price.toLocaleString()}</span>
              <span className="ml-1 text-xs font-medium">FCFA</span>
            </div>
            <span className="rounded-lg bg-[#FEE2E2] px-3 py-2 text-xs font-semibold text-[#991B1B]">
              Commander
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
