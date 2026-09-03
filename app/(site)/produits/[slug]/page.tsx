"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ChevronLeft, Lock, MapPin, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react";
import { Badge } from "@/components/ui/primitives";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/marketplace-data";
import { productImages } from "@/lib/product-images";

const weights = [
  { label: "Moins de 2 kg", price: 3000 },
  { label: "Environ 2 kg", price: 3500 },
  { label: "2,5 kg", price: 4000 },
];

const gallery = [
  productImages.wholeChicken,
  productImages.chickenCuts,
  productImages.farm,
  productImages.eggs,
  productImages.turkey,
];

export default function ProductPage() {
  const [activeImg, setActiveImg] = useState(0);
  const [activeWeight, setActiveWeight] = useState(1);
  const [qty, setQty] = useState(1);

  const price = weights[activeWeight].price * qty;

  return (
    <div className="mx-auto max-w-6xl px-4 py-5 md:px-6">
      <div className="font-body mb-4 text-xs text-muted">
        Accueil · Catalogue · Poulet de chair · <span className="text-ink">Poulet de chair 2 kg</span>
      </div>

      <Link href="/catalogue" className="mb-4 flex w-fit items-center gap-1.5 text-sm font-medium text-muted hover:text-brand md:hidden">
        <ChevronLeft size={16} />
        Retour
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <div className="relative aspect-[1/.92] overflow-hidden rounded-xl bg-page">
            <img src={gallery[activeImg]} alt="Poulet de chair 2 kg" className="h-full w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-lg bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">Poulet de chair</span>
            <span className="absolute bottom-3 right-3 rounded-lg bg-ink/70 px-3 py-1.5 text-[11px] font-medium text-white">{activeImg + 1} / {gallery.length}</span>
          </div>

          <div className="mt-3 flex gap-2">
            {gallery.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImg(index)}
                className={`aspect-square flex-1 overflow-hidden rounded-lg border-2 ${activeImg === index ? "border-brand" : "border-transparent"}`}
              >
                <img src={image} alt={`Vue produit ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-xl bg-white p-5 shadow-sm">
            <h2 className="mb-2.5 text-base font-bold">Description</h2>
            <p className="font-body text-sm leading-6 text-ink-light">
              Poulet de chair eleve en plein air a Thies, nourri sans antibiotiques. Vendu pret a cuire ou vivant sur demande. Poids moyen 2 kg. Ideal pour vos repas en famille et ceremonies.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Badge className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] text-brand-dark">
              <Check size={12} />
              En stock · 45 disponibles
            </Badge>
          </div>

          <h1 className="mb-2.5 text-2xl font-bold leading-tight text-ink md:text-3xl">Poulet de chair 2 kg — pret a cuire</h1>
          <div className="font-body mb-5 flex flex-wrap items-center gap-3 text-[13px] text-muted">
            <span className="flex items-center gap-1.5 font-semibold text-ink"><Star size={15} className="fill-amber-400 text-amber-400" />4.8</span>
            <span>· 312 avis</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-muted" />Thies</span>
          </div>

          <div className="mb-5 rounded-xl bg-white p-5 shadow-sm">
            <p className="mb-3 text-[13px] font-semibold text-muted">Choisissez le poids</p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {weights.map((weight, index) => (
                <button
                  key={weight.label}
                  onClick={() => setActiveWeight(index)}
                  className={`rounded-lg border-2 p-3 text-center ${activeWeight === index ? "border-brand bg-brand-soft" : "border-gray-200"}`}
                >
                  <span className="block text-[13px] font-semibold">{weight.label}</span>
                  <span className={`mt-1 block text-base font-bold ${activeWeight === index ? "text-brand" : "text-ink"}`}>{weight.price.toLocaleString()} F</span>
                </button>
              ))}
            </div>
            <div className="mt-3.5 flex flex-wrap gap-2">
              <span className="rounded-lg bg-brand-soft px-3 py-1.5 text-[11px] font-semibold text-brand-dark">Pret a cuire</span>
              <span className="rounded-lg bg-page px-3 py-1.5 text-[11px] font-medium text-muted">Vivant (+0 F)</span>
              <span className="rounded-lg bg-page px-3 py-1.5 text-[11px] font-medium text-muted">Decoupe (+500 F)</span>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-xl bg-white p-5 shadow-sm">
            <div>
              <p className="font-body text-xs text-muted">Prix total</p>
              <p className="text-3xl font-extrabold leading-none text-brand">{price.toLocaleString()} <span className="text-base font-semibold">FCFA</span></p>
            </div>
            <div className="flex overflow-hidden rounded-lg border border-gray-200">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="flex h-10 w-10 items-center justify-center text-muted"><Minus size={16} /></button>
              <span className="flex h-10 w-10 items-center justify-center border-x border-gray-200 text-base font-bold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="flex h-10 w-10 items-center justify-center text-brand"><Plus size={16} /></button>
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/checkout" className="flex h-12 flex-[1.4] items-center justify-center rounded-lg bg-brand text-[15px] font-bold text-white">
              Commander maintenant
            </Link>
            <Link href="/panier" className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-brand bg-white text-[15px] font-semibold text-brand">
              <ShoppingCart size={17} />
              Panier
            </Link>
          </div>

          <div className="mb-4 rounded-xl bg-brand-soft p-4 text-brand-dark">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Truck size={17} />
              Livraison disponible
            </div>
            <p className="font-body text-xs leading-6">
              <strong>Dakar</strong> : 1 500 F · 24 h · <strong>Thies</strong> : 1 000 F · meme jour · <strong>Touba</strong> : 2 500 F · 48 h
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft text-lg font-bold text-brand-dark">KM</div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">Ferme Keur Massar</h3>
                  <Badge className="rounded-full bg-brand-soft text-[9.5px] text-brand-dark">Verifie</Badge>
                </div>
                <p className="font-body text-xs text-muted">Eleveur · Thies · 4.9 · 1 240 ventes</p>
              </div>
              <button className="hidden rounded-lg bg-page px-3.5 py-2 text-xs font-semibold md:block">Contacter</button>
            </div>
            <p className="font-body mt-3 flex items-center gap-1.5 text-[11px] text-muted">
              <Lock size={12} />
              Le numero du vendeur reste masque tant que la commande n&apos;est pas passee.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">Produits similaires</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(1, 4).map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
