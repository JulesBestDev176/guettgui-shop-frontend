"use client";
import { useState } from "react";
import { ChevronDown, Filter, X } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/marketplace-data";

const filters = ["Poulet de chair", "Poulet local", "Local ameliore"];
const saleModes = ["A l'unite", "En lot", "Ramasse"];

function FilterPanel() {
  return (
    <aside className="rounded-xl bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-bold">Filtres</h2>
        <button className="text-xs font-medium text-brand">Reinitialiser</button>
      </div>

      <div className="space-y-5">
        <div>
          <h3 className="mb-2.5 text-[13px] font-semibold">Localisation</h3>
          {["Region : Dakar", "Departement", "Commune"].map((item, index) => (
            <button key={item} className={`mb-2 flex h-10 w-full items-center justify-between rounded-lg bg-page px-3 text-[13px] font-medium ${index === 0 ? "text-ink" : "text-muted"}`}>
              {item}
              <ChevronDown size={14} className="text-muted" />
            </button>
          ))}
        </div>

        <div className="h-px bg-gray-100" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Type de produit</h3>
          {filters.map((item, index) => (
            <label key={item} className="mb-2.5 flex items-center gap-2.5 font-body text-[13px]">
              <span className={`flex h-[18px] w-[18px] items-center justify-center rounded ${index === 0 ? "bg-brand" : "border-2 border-gray-300"}`}>
                {index === 0 && <span className="h-2 w-2 rounded-sm bg-white" />}
              </span>
              {item}
            </label>
          ))}
        </div>

        <div className="h-px bg-gray-100" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Etat</h3>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-lg bg-brand-soft px-3 py-2 text-xs font-semibold text-brand-dark">Vivant</span>
            <span className="rounded-lg bg-page px-3 py-2 text-xs font-medium text-muted">Pret a cuire</span>
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Prix (FCFA)</h3>
          <div className="mb-3 flex gap-2">
            <div className="flex h-10 flex-1 items-center rounded-lg bg-page px-3 font-body text-[13px] text-muted">Min</div>
            <div className="flex h-10 flex-1 items-center rounded-lg bg-page px-3 font-body text-[13px] text-muted">Max</div>
          </div>
          <div className="relative h-1 rounded bg-gray-200">
            <div className="absolute left-[15%] right-[30%] h-1 rounded bg-brand" />
            <span className="absolute left-[15%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-brand bg-white" />
            <span className="absolute left-[70%] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-brand bg-white" />
          </div>
        </div>

        <div className="h-px bg-gray-100" />

        <div>
          <h3 className="mb-3 text-[13px] font-semibold">Mode de vente</h3>
          {saleModes.map((item) => (
            <label key={item} className="mb-2.5 flex items-center gap-2.5 font-body text-[13px]">
              <span className="h-[18px] w-[18px] rounded border-2 border-gray-300" />
              {item}
            </label>
          ))}
        </div>

        <div className="h-px bg-gray-100" />

        <label className="flex items-center justify-between text-[13px] font-semibold">
          Livraison disponible
          <span className="relative h-[22px] w-[38px] rounded-full bg-brand">
            <span className="absolute right-0.5 top-0.5 h-[18px] w-[18px] rounded-full bg-white" />
          </span>
        </label>

        <button className="h-11 w-full rounded-lg bg-brand text-sm font-semibold text-white">Appliquer les filtres</button>
      </div>
    </aside>
  );
}

export default function CataloguePage() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 py-5 md:px-6">
      <div className="font-body mb-2 text-xs text-muted">
        Accueil · Catalogue · <span className="text-brand">Dakar</span>
      </div>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-ink">Catalogue des produits</h1>
          <p className="font-body text-sm text-muted">128 offres disponibles pres de <strong className="text-ink">Dakar</strong></p>
        </div>
        <button onClick={() => setDrawerOpen(true)} className="flex h-10 items-center gap-2 rounded-lg bg-white px-3 text-sm font-semibold shadow-sm lg:hidden">
          <Filter size={16} />
          Filtres
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[268px_1fr]">
        <div className="hidden lg:block">
          <FilterPanel />
        </div>

        <div>
          <div className="mb-5 flex flex-col gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-row md:items-center md:justify-between md:px-4">
            <span className="text-[13px] font-medium text-muted">128 resultats · <strong className="text-ink">page 1 / 16</strong></span>
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-muted">Trier par</span>
              <button className="flex h-9 items-center gap-4 rounded-lg bg-page px-3 text-[13px] font-semibold">
                Plus proche
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-2">
            {["1", "2", "3", "...", "16"].map((page) => (
              <span key={page} className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold ${page === "1" ? "bg-brand text-white" : "bg-white text-ink shadow-sm"}`}>
                {page}
              </span>
            ))}
          </div>
        </div>
      </div>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 p-4 lg:hidden">
          <div className="ml-auto h-full max-w-sm overflow-y-auto rounded-xl bg-page p-4">
            <button className="mb-3 ml-auto flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm" onClick={() => setDrawerOpen(false)}>
              <X size={18} />
            </button>
            <FilterPanel />
          </div>
        </div>
      )}
    </div>
  );
}
