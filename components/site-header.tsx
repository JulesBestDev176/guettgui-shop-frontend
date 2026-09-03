"use client";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Brand } from "@/components/brand";

const categoryLinks = ["Toutes les categories", "Poulet de chair", "Poulet local", "Local ameliore", "Poulet vivant", "Pret a cuire", "Vente en lot", "Ramasse"];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categoryLinks[0]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="hidden bg-[#1F2937] px-7 py-2.5 text-[13px] font-medium text-[#FECACA] md:flex md:items-center md:justify-between">
        <span className="flex items-center gap-2">
          <CheckCircle2 size={15} className="text-[#B91C1C]" />
          Paiement 100% securise avec Dexpay
        </span>
        <span>Livraison disponible partout au Senegal</span>
      </div>

      <div className="border-b border-[#E5E7EB] px-4 py-3 md:px-7 md:py-4">
        <div className="mx-auto flex max-w-7xl items-center gap-4 md:gap-6">
          <Brand />

          <div className="hidden h-[46px] max-w-[520px] flex-1 items-center rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-[#FAFAFA] px-3.5 md:flex">
            <Search size={18} className="text-[#9CA3AF]" />
            <input
              className="h-full flex-1 bg-transparent pl-2.5 text-[15px] outline-none placeholder:text-[#9CA3AF]"
              placeholder="Rechercher un poulet, un vendeur, une ville..."
            />
          </div>

          <nav className="ml-auto hidden items-center gap-5 text-sm font-medium text-[#374151] lg:flex">
            <Link href="/devenir-vendeur" className="hover:text-[#B91C1C]">Devenir vendeur</Link>
            <Link href="/suivi-commande" className="hover:text-[#B91C1C]">Suivre commande</Link>
            <Link href="/connexion" className="flex items-center gap-1.5 font-semibold text-[#1F2937] hover:text-[#B91C1C]">
              <User size={18} />
              Connexion
            </Link>
          </nav>

          <Link href="/panier" className="relative flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-[#B91C1C] text-white">
            <ShoppingCart size={20} />
            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#B91C1C] text-[11px] font-bold">2</span>
          </Link>

          <button className="rounded-[10px] border border-[#E5E7EB] p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="border-b border-[#E5E7EB] bg-white px-4 py-3 md:hidden">
        <div className="flex h-11 items-center rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-[#FAFAFA] px-3">
          <Search size={17} className="text-[#9CA3AF]" />
          <input className="h-full flex-1 bg-transparent pl-2 text-sm outline-none placeholder:text-[#9CA3AF]" placeholder="Rechercher..." />
        </div>
      </div>

      <div className="hidden border-b border-[#E5E7EB] bg-white px-7 py-2.5 md:block">
        <div className="no-scrollbar mx-auto flex max-w-7xl justify-center gap-2 overflow-x-auto whitespace-nowrap text-[13.5px] font-medium text-[#4B5563]">
          {categoryLinks.map((label) => (
            <Link
              key={label}
              href="/catalogue"
              onClick={() => setActiveCategory(label)}
              className={
                activeCategory === label
                  ? "rounded-full bg-[#FEF2F2] px-3.5 py-2 font-semibold text-[#B91C1C]"
                  : "rounded-full px-3.5 py-2 transition-colors hover:bg-[#FEF2F2] hover:text-[#B91C1C]"
              }
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="border-b border-[#E5E7EB] bg-white px-4 py-3 md:hidden">
          {[
            ["Catalogue", "/catalogue"],
            ["Commande rapide", "/commande-rapide"],
            ["Devenir vendeur", "/devenir-vendeur"],
            ["Suivre commande", "/suivi-commande"],
            ["Support", "/support"],
          ].map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block rounded-[10px] px-3 py-2.5 text-sm font-medium text-[#374151] hover:bg-[#FEF2F2] hover:text-[#B91C1C]">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
