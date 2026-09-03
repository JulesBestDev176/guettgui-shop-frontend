"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, ChevronLeft, Heart, Lock, MapPin, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react";
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
    <div className="mx-auto max-w-7xl px-4 py-5 md:px-7">
      <div className="font-body mb-4 text-[12.5px] text-[#9CA3AF]">
        Accueil · Catalogue · Poulet de chair · <span className="text-[#1F2937]">Poulet de chair 2 kg</span>
      </div>

      <Link href="/catalogue" className="mb-4 flex w-fit items-center gap-1.5 text-sm font-medium text-[#6B7280] hover:text-[#B91C1C] md:hidden">
        <ChevronLeft size={16} />
        Retour
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <div className="relative aspect-[1/.92] overflow-hidden rounded-[18px]">
            <img src={gallery[activeImg]} alt="Poulet de chair 2 kg" className="h-full w-full object-cover" />
            <span className="absolute left-3.5 top-3.5 rounded-full bg-[#B91C1C] px-3 py-1.5 text-[11px] font-semibold text-white">Poulet de chair</span>
            <span className="absolute bottom-3.5 right-3.5 rounded-full bg-[#1F2937]/85 px-3 py-1.5 text-[11px] font-medium text-white">{activeImg + 1} / {gallery.length}</span>
          </div>

          <div className="mt-3 flex gap-2.5">
            {gallery.map((image, index) => (
              <button
                key={image}
                onClick={() => setActiveImg(index)}
                className={`aspect-square flex-1 overflow-hidden rounded-[11px] border-2 ${activeImg === index ? "border-[#B91C1C]" : "border-[#E5E7EB]"}`}
              >
                <img src={image} alt={`Vue produit ${index + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          <div className="mt-5 rounded-[14px] border border-[#E5E7EB] bg-white p-5">
            <h2 className="mb-2.5 text-base font-bold">Description</h2>
            <p className="font-body m-0 text-[13.5px] leading-6 text-[#4B5563]">
              Poulet de chair eleve en plein air a Thies, nourri sans antibiotiques. Vendu pret a cuire ou vivant sur demande. Poids moyen 2 kg. Ideal pour vos repas en famille et ceremonies.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Badge className="rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[11px] text-[#15803D]">
              <Check size={12} />
              En stock · 45 disponibles
            </Badge>
            <button className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#B91C1C]">
              <Heart size={18} />
            </button>
          </div>

          <h1 className="mb-2.5 text-[30px] font-bold leading-[1.15] tracking-[-0.7px] text-[#1F2937]">Poulet de chair 2 kg — pret a cuire</h1>
          <div className="font-body mb-5 flex flex-wrap items-center gap-3.5 text-[13px] text-[#6B7280]">
            <span className="flex items-center gap-1.5 font-semibold text-[#1F2937]"><Star size={15} className="fill-[#F59E0B] text-[#F59E0B]" />4.8</span>
            <span>· 312 avis</span>
            <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#9CA3AF]" />Thies</span>
          </div>

          <div className="mb-5 rounded-[14px] border border-[#E5E7EB] bg-white p-5">
            <p className="mb-3 text-[13px] font-semibold text-[#6B7280]">Choisissez le poids</p>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {weights.map((weight, index) => (
                <button
                  key={weight.label}
                  onClick={() => setActiveWeight(index)}
                  className={`rounded-[11px] border-2 p-3 text-center ${activeWeight === index ? "border-[#B91C1C] bg-[#FEF2F2]" : "border-[#E5E7EB]"}`}
                >
                  <span className="block text-[13px] font-semibold">{weight.label}</span>
                  <span className={`mt-1 block text-base font-bold ${activeWeight === index ? "text-[#B91C1C]" : "text-[#1F2937]"}`}>{weight.price.toLocaleString()} F</span>
                </button>
              ))}
            </div>
            <div className="mt-3.5 flex flex-wrap gap-2.5">
              <span className="rounded-lg bg-[#FEE2E2] px-3 py-1.5 text-[11px] font-semibold text-[#991B1B]">Pret a cuire</span>
              <span className="rounded-lg border-[1.5px] border-[#E5E7EB] px-3 py-1.5 text-[11px] font-medium text-[#6B7280]">Vivant (+0 F)</span>
              <span className="rounded-lg border-[1.5px] border-[#E5E7EB] px-3 py-1.5 text-[11px] font-medium text-[#6B7280]">Decoupe (+500 F)</span>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between rounded-[14px] border border-[#E5E7EB] bg-white p-5">
            <div>
              <p className="font-body text-xs text-[#6B7280]">Prix total</p>
              <p className="text-[32px] font-extrabold leading-none text-[#B91C1C]">{price.toLocaleString()} <span className="text-base font-semibold">FCFA</span></p>
            </div>
            <div className="flex overflow-hidden rounded-[10px] border-[1.5px] border-[#E5E7EB]">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="flex h-[42px] w-10 items-center justify-center text-[#6B7280]"><Minus size={16} /></button>
              <span className="flex h-[42px] w-11 items-center justify-center border-x border-[#E5E7EB] text-base font-bold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="flex h-[42px] w-10 items-center justify-center text-[#B91C1C]"><Plus size={16} /></button>
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-3 sm:flex-row">
            <Link href="/checkout" className="flex h-[52px] flex-[1.4] items-center justify-center rounded-xl bg-[#B91C1C] text-[15px] font-bold text-white shadow-[0_8px_18px_rgba(185,28,28,.28)]">
              Commander maintenant
            </Link>
            <Link href="/panier" className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#B91C1C] bg-white text-[15px] font-semibold text-[#B91C1C]">
              <ShoppingCart size={17} />
              Panier
            </Link>
          </div>

          <div className="mb-4 rounded-[14px] border border-[#BBF7D0] bg-[#F0FDF4] p-4 text-[#15803D]">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Truck size={17} />
              Livraison disponible
            </div>
            <p className="font-body text-[12.5px] leading-6">
              <strong>Dakar</strong> : 1 500 F · 24 h · <strong>Thies</strong> : 1 000 F · meme jour · <strong>Touba</strong> : 2 500 F · 48 h
            </p>
          </div>

          <div className="rounded-[14px] border border-[#E5E7EB] bg-white p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-gradient-to-br from-[#FEE2E2] to-[#FCA5A5] text-lg font-bold text-[#991B1B]">KM</div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">Ferme Keur Massar</h3>
                  <Badge className="rounded-full bg-[#DCFCE7] text-[9.5px] text-[#15803D]">Verifie</Badge>
                </div>
                <p className="font-body text-xs text-[#6B7280]">Eleveur · Thies · 4.9 · 1 240 ventes</p>
              </div>
              <button className="hidden rounded-[9px] border-[1.5px] border-[#E5E7EB] px-3.5 py-2 text-[12.5px] font-semibold md:block">Contacter</button>
            </div>
            <p className="font-body mt-3 flex items-center gap-1.5 text-[11px] text-[#9CA3AF]">
              <Lock size={12} />
              Le numero du vendeur reste masque tant que la commande n&apos;est pas passee.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-[22px] font-bold tracking-[-0.5px]">Produits similaires</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(1, 4).map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
