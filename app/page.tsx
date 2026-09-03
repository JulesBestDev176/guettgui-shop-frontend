import Link from "next/link";
import { ArrowRight, Check, ChevronDown, MapPin, Search } from "lucide-react";
import { MobileNav } from "@/components/mobile-nav";
import { ProductCard } from "@/components/product-card";
import { SectionTitle } from "@/components/brand";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { categories, howItWorks, locationFields, lots, products, ramasses } from "@/lib/marketplace-data";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0">
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:px-7 md:py-9">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FEE2E2] px-3.5 py-2 text-xs font-semibold text-[#991B1B]">
              <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
              + 280 vendeurs verifies dans 14 regions
            </div>
            <h1 className="max-w-2xl text-[40px] font-extrabold leading-[1.08] tracking-[-1.2px] text-[#1F2937] md:text-[44px]">
              Achetez vos produits <span className="text-[#B91C1C]">frais</span><br className="hidden md:block" /> partout au <span className="text-[#B91C1C]">Senegal</span>
            </h1>
            <p className="font-body mt-4 max-w-[500px] text-[17px] leading-[1.55] text-[#6B7280]">
              Poulet de chair, local, local ameliore, vivant ou pret a cuire. Commandez chez des vendeurs verifies avec livraison pres de chez vous.
            </p>

            <div className="mt-7 flex max-w-[500px] items-center rounded-[13px] border-[1.5px] border-[#E5E7EB] bg-white p-2 pl-4 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">
              <Search size={20} className="text-[#9CA3AF]" />
              <input className="h-11 flex-1 bg-transparent pl-3 text-[15px] outline-none placeholder:text-[#9CA3AF]" placeholder="Ex : poulet de chair a Dakar" />
              <Link href="/catalogue" className="hidden h-11 items-center rounded-[9px] bg-[#B91C1C] px-5 text-sm font-semibold text-white sm:flex">
                Rechercher
              </Link>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/catalogue" className="inline-flex h-12 items-center justify-center gap-2 rounded-[11px] bg-[#B91C1C] px-6 text-[15px] font-semibold text-white shadow-[0_8px_18px_rgba(185,28,28,.28)]">
                Voir les produits
                <ArrowRight size={18} />
              </Link>
              <Link href="/devenir-vendeur" className="inline-flex h-12 items-center justify-center rounded-[11px] border-[1.5px] border-[#B91C1C] bg-white px-6 text-[15px] font-semibold text-[#B91C1C]">
                Devenir vendeur
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[22px] shadow-[0_18px_40px_rgba(185,28,28,.16)]">
              <img src={products[0].image} alt="Produit frais Charcut'SN" className="h-full w-full object-cover" />
              <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-[#1F2937]/85 px-3.5 py-2 text-xs font-medium text-white">
                <Check size={13} />
                Vendeur verifie
              </span>
            </div>
            <div className="absolute right-0 top-5 flex translate-x-1 items-center gap-3 rounded-[14px] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,.14)] md:-right-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DCFCE7] text-[#16A34A]"><Check size={20} /></span>
              <div>
                <p className="text-sm font-bold">Livraison verifiee</p>
                <p className="font-body text-xs text-[#6B7280]">Suivi en temps reel</p>
              </div>
            </div>
            <div className="absolute -bottom-4 left-3 flex items-center gap-3 rounded-[14px] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,.14)] md:-left-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FEE2E2] text-base font-bold text-[#991B1B]">4.8</span>
              <div>
                <p className="text-sm font-bold text-[#1F2937]">★★★★★</p>
                <p className="font-body text-xs text-[#6B7280]">12 400 avis clients</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-8 md:px-7">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,.04)] md:p-6">
            <div className="mb-4 flex items-center gap-2.5">
              <MapPin size={20} className="text-[#B91C1C]" />
              <span className="text-[17px] font-semibold">Choisissez votre zone pour voir les offres pres de vous</span>
            </div>
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
              {locationFields.map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-[#6B7280]">{field.label}</span>
                  <span className="flex h-[46px] items-center justify-between rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-[#FAFAFA] px-3.5 text-sm font-medium text-[#1F2937]">
                    {field.value}
                    <ChevronDown size={16} className="text-[#6B7280]" />
                  </span>
                </label>
              ))}
              <Link href="/catalogue" className="flex h-[46px] items-center justify-center rounded-[10px] bg-[#B91C1C] px-6 text-sm font-semibold text-white">
                Voir les offres
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-2 md:px-7">
          <SectionTitle title="Categories" action="Tout voir ->" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {categories.map(({ name, desc, icon: Icon }) => (
              <Link key={name} href="/catalogue" className="rounded-[14px] border border-[#E5E7EB] bg-white px-3 py-4 text-center transition hover:border-[#B91C1C]">
                <span className="mx-auto mb-3 flex h-[52px] w-[52px] items-center justify-center rounded-[13px] bg-[#FEF2F2] text-[#B91C1C]">
                  <Icon size={26} strokeWidth={1.8} />
                </span>
                <span className="block text-[13.5px] font-semibold text-[#1F2937]">{name}</span>
                <span className="font-body mt-1 block text-[11.5px] leading-snug text-[#9CA3AF]">{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:px-7">
          <SectionTitle title="Produits populaires" action="Voir le catalogue ->" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-2 md:grid-cols-2 md:px-7">
          {[
            { label: "VENTE EN LOT", title: "Lots disponibles", text: "Achetez en gros pour vos ceremonies et revente.", items: lots },
            { label: "RAMASSE", title: "Ramasses disponibles", text: "Enlevement direct a la ferme. Ideal pour les revendeurs.", items: ramasses },
          ].map((block) => (
            <div key={block.label} className="gradient-hero rounded-[18px] p-6 text-white">
              <span className="rounded-full bg-white/20 px-3 py-1.5 text-[11px] font-semibold">{block.label}</span>
              <h3 className="mt-4 text-[21px] font-bold">{block.title}</h3>
              <p className="font-body mt-1 text-[13.5px] text-white/85">{block.text}</p>
              <div className="mt-5 space-y-2.5">
                {block.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="font-body text-xs text-white/80">{item.detail}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">{item.price}</p>
                      <p className="font-body text-[11px] text-white/80">{item.vendor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mx-4 my-8 rounded-[20px] border border-[#E5E7EB] bg-white p-6 md:mx-auto md:max-w-7xl md:px-7">
          <div className="text-center">
            <h2 className="text-[26px] font-bold tracking-[-0.5px]">Comment ca marche ?</h2>
            <p className="font-body mt-1 text-sm text-[#6B7280]">Commandez en 4 etapes simples, meme sans compte</p>
          </div>
          <div className="mt-7 grid gap-6 md:grid-cols-4">
            {howItWorks.map(({ title, text, icon: Icon }, index) => (
              <div key={title} className="text-center">
                <div className="relative mx-auto mb-3.5 flex h-[58px] w-[58px] items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#B91C1C]">
                  <span className="absolute -left-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#B91C1C] text-xs font-bold text-white">{index + 1}</span>
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="text-[15px] font-semibold">{title}</h3>
                <p className="font-body mt-1.5 text-[12.5px] leading-5 text-[#6B7280]">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileNav />
    </>
  );
}
