"use client";
import { useState } from "react";
import { ChevronDown, Filter, SlidersHorizontal, X } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/marketplace-data";

const filters = ["Poulet de chair", "Poulet local", "Local ameliore"];
const saleModes = ["A l'unite", "En lot", "Ramasse"];

function FilterPanel() {
  return (
    <aside className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-bold">Filtres</h2>
        <button className="text-xs font-medium text-[#B91C1C]">Reinitialiser</button>
      </div>

      <div className="space-y-5">
        <div>
          <h3 className="mb-2.5 text-[13px] font-semibold">Localisation</h3>
          {["Region : Dakar", "Departement", "Commune"].map((item, index) => (
            <button key={item} className={`mb-2 flex h-10 w-full items-center justify-between rounded-[9px] border-[1.5px] border-[#E5E7EB] px-3 text-[13px] font-medium ${index === 0 ? "bg-[#FAFAFA] text-[#1F2937]" : "text-[#9CA3AF]"}`}>
              {item}
              <ChevronDown size={14} className="text-[#6B7280]" />
            </button>
          ))}
        </div>

        <div className="h-px bg-[#F1F1F1]" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Type de produit</h3>
          {filters.map((item, index) => (
            <label key={item} className="mb-2.5 flex items-center gap-2.5 font-body text-[13px]">
              <span className={`flex h-[18px] w-[18px] items-center justify-center rounded-[5px] ${index === 0 ? "bg-[#B91C1C]" : "border-[1.5px] border-[#D1D5DB]"}`}>
                {index === 0 && <span className="h-2 w-2 rounded-sm bg-white" />}
              </span>
              {item}
            </label>
          ))}
        </div>

        <div className="h-px bg-[#F1F1F1]" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Etat</h3>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg bg-[#FEE2E2] px-3 py-2 text-xs font-semibold text-[#991B1B]">Vivant</span>
            <span className="rounded-lg border-[1.5px] border-[#E5E7EB] px-3 py-2 text-xs font-medium text-[#6B7280]">Pret a cuire</span>
          </div>
        </div>

        <div className="h-px bg-[#F1F1F1]" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Prix (FCFA)</h3>
          <div className="mb-3 flex gap-2">
            <div className="flex h-10 flex-1 items-center rounded-[9px] border-[1.5px] border-[#E5E7EB] px-3 font-body text-[13px] text-[#6B7280]">Min</div>
            <div className="flex h-10 flex-1 items-center rounded-[9px] border-[1.5px] border-[#E5E7EB] px-3 font-body text-[13px] text-[#6B7280]">Max</div>
          </div>
          <div className="relative h-1 rounded bg-[#E5E7EB]">
            <div className="absolute left-[15%] right-[30%] h-1 rounded bg-[#B91C1C]" />
            <span className="absolute left-[15%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-[#B91C1C] bg-white" />
            <span className="absolute left-[70%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-[#B91C1C] bg-white" />
          </div>
        </div>

        <div className="h-px bg-[#F1F1F1]" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Mode de vente</h3>
          {saleModes.map((item) => (
            <label key={item} className="mb-2.5 flex items-center gap-2.5 font-body text-[13px]">
              <span className="h-[18px] w-[18px] rounded-[5px] border-[1.5px] border-[#D1D5DB]" />
              {item}
            </label>
          ))}
        </div>

        <div className="h-px bg-[#F1F1F1]" />

        <label className="flex items-center justify-between text-[13px] font-semibold">
          Livraison disponible
          <span className="relative h-[22px] w-[38px] rounded-full bg-[#16A34A]">
            <span className="absolute right-0.5 top-0.5 h-[18px] w-[18px] rounded-full bg-white" />
          </span>
        </label>

        <button className="h-11 w-full rounded-[10px] bg-[#B91C1C] text-sm font-semibold text-white">Appliquer les filtres</button>
      </div>
    </aside>
  );
}

export default function CataloguePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-5 md:px-7">
      <div className="font-body mb-2 text-[12.5px] text-[#9CA3AF]">
        Accueil · Catalogue · <span className="text-[#B91C1C]">Dakar</span>
      </div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-[28px] font-bold tracking-[-0.6px] text-[#1F2937]">Catalogue des produits</h1>
          <p className="font-body text-sm text-[#6B7280]">128 offres disponibles pres de <strong className="text-[#1F2937]">Dakar</strong></p>
        </div>
        <button onClick={() => setDrawerOpen(true)} className="flex h-10 items-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-3 text-sm font-semibold lg:hidden">
          <Filter size={16} />
          Filtres
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[268px_1fr]">
        <div className="hidden lg:block">
          <FilterPanel />
        </div>

        <div>
          <div className="mb-5 flex flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-3 md:flex-row md:items-center md:justify-between md:px-4">
            <span className="text-[13.5px] font-medium text-[#6B7280]">128 resultats · <strong className="text-[#1F2937]">page 1 / 16</strong></span>
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-[#6B7280]">Trier par</span>
              <button className="flex h-9 items-center gap-4 rounded-[9px] border-[1.5px] border-[#E5E7EB] px-3 text-[13px] font-semibold">
                Plus proche
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            {["1", "2", "3", "...", "16"].map((page) => (
              <span key={page} className={`flex h-9 w-9 items-center justify-center rounded-[9px] text-sm font-semibold ${page === "1" ? "bg-[#B91C1C] text-white" : "border border-[#E5E7EB] bg-white text-[#374151]"}`}>
                {page}
              </span>
            ))}
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 p-4 lg:hidden">
          <div className="ml-auto h-full max-w-sm overflow-y-auto rounded-2xl bg-[#FAFAFA] p-4">
            <button className="mb-3 ml-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white" onClick={() => setDrawerOpen(false)}>
              <X size={18} />
            </button>
            <FilterPanel />
          </div>
        </div>
      )}
    </div>
  );
}
