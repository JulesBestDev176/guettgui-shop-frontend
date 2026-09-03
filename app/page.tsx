import Link from "next/link";
import { ArrowRight, ChevronDown, MapPin, Search } from "lucide-react";
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

        {/* ── Hero ── */}
        <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-body text-sm font-medium text-brand">
                + 280 vendeurs verifies · 14 regions
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink md:text-[40px] md:leading-[1.1]">
                Achetez vos produits{" "}
                <span className="text-brand">frais</span> partout au{" "}
                <span className="text-brand">Senegal</span>
              </h1>
              <p className="font-body mt-4 max-w-md text-base leading-relaxed text-muted">
                Poulet de chair, local, ameliore, vivant ou pret a cuire.
                Commandez chez des vendeurs verifies avec livraison pres de chez vous.
              </p>

              <div className="mt-8 flex max-w-md items-center rounded-lg bg-white p-1.5 pl-4 shadow-sm">
                <Search size={18} className="text-muted" />
                <input
                  className="h-10 flex-1 bg-transparent pl-2.5 text-sm outline-none placeholder:text-muted font-body"
                  placeholder="Ex : poulet de chair a Dakar"
                />
                <Link
                  href="/catalogue"
                  className="hidden sm:flex h-10 items-center rounded-md bg-brand px-5 text-sm font-semibold text-white"
                >
                  Rechercher
                </Link>
              </div>

              <div className="mt-5 flex gap-3">
                <Link
                  href="/catalogue"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 text-sm font-semibold text-white"
                >
                  Voir les produits
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/devenir-vendeur"
                  className="inline-flex h-11 items-center rounded-lg border border-brand px-5 text-sm font-semibold text-brand"
                >
                  Devenir vendeur
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img
                  src={products[0].image}
                  alt="Produit frais Guett Gui"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Location bar ── */}
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-brand" />
              <span className="text-sm font-semibold">Choisissez votre zone</span>
            </div>
            <div className="grid gap-3 md:grid-cols-[1fr_1fr_1fr_auto] md:items-end">
              {locationFields.map((field) => (
                <label key={field.label} className="block">
                  <span className="mb-1 block font-body text-xs font-medium text-muted">{field.label}</span>
                  <span className="flex h-10 items-center justify-between rounded-lg bg-page px-3 font-body text-sm text-ink">
                    {field.value}
                    <ChevronDown size={14} className="text-muted" />
                  </span>
                </label>
              ))}
              <Link
                href="/catalogue"
                className="flex h-10 items-center justify-center rounded-lg bg-brand px-5 text-sm font-semibold text-white"
              >
                Voir les offres
              </Link>
            </div>
          </div>
        </section>

        {/* ── Categories ── */}
        <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <SectionTitle title="Categories" action="Tout voir" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {categories.map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href="/catalogue"
                className="flex flex-col items-center gap-2.5 rounded-xl bg-white px-3 py-5 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span className="text-xs font-semibold text-ink">{name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Produits populaires ── */}
        <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
          <SectionTitle title="Produits populaires" action="Voir le catalogue" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </section>

        {/* ── Lots & Ramasses ── */}
        <section className="mx-auto grid max-w-6xl gap-4 px-4 pb-12 md:grid-cols-2 md:px-6">
          {[
            { label: "Vente en lot", title: "Lots disponibles", text: "Achetez en gros pour vos ceremonies et revente.", items: lots },
            { label: "Ramasse", title: "Ramasses disponibles", text: "Enlevement direct a la ferme. Ideal pour les revendeurs.", items: ramasses },
          ].map((block) => (
            <div key={block.label} className="rounded-xl bg-ink p-6 text-white">
              <span className="inline-block rounded-md bg-white/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide">
                {block.label}
              </span>
              <h3 className="mt-3 text-lg font-bold">{block.title}</h3>
              <p className="font-body mt-1 text-sm text-gray-400">{block.text}</p>
              <div className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-lg bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="font-body text-xs text-gray-400">{item.detail}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold">{item.price}</p>
                      <p className="font-body text-[11px] text-gray-400">{item.vendor}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ── Comment ca marche ── */}
        <section className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
          <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
            <div className="text-center">
              <h2 className="text-xl font-bold md:text-2xl">Comment ca marche ?</h2>
              <p className="font-body mt-1 text-sm text-muted">Commandez en 4 etapes simples</p>
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-4">
              {howItWorks.map(({ title, text, icon: Icon }, index) => (
                <div key={title} className="text-center">
                  <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <span className="absolute -left-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-sm font-semibold text-ink">{title}</h3>
                  <p className="font-body mt-1.5 text-xs leading-relaxed text-muted">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
      <MobileNav />
    </>
  );
}
