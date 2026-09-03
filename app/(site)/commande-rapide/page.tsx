"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, ChevronDown, Truck } from "lucide-react";
import { Input } from "@/components/ui/primitives";
import { products } from "@/lib/marketplace-data";

export default function CommandeRapidePage() {
  const [submitted, setSubmitted] = useState(false);
  const product = products[0];
  const total = 5000;

  if (submitted) {
    return (
      <div className="mx-auto max-w-md px-4 py-14 text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-[22px] bg-[#DCFCE7]">
          <CheckCircle size={38} className="text-[#16A34A]" />
        </div>
        <h1 className="mb-2 text-2xl font-bold">Commande envoyee</h1>
        <p className="font-body mb-6 text-sm leading-6 text-[#6B7280]">Votre demande est enregistree. Vous serez redirige vers Dexpay pour confirmer le paiement securise.</p>
        <Link href="/checkout" className="flex h-[50px] items-center justify-center rounded-[13px] bg-[#B91C1C] text-[15px] font-bold text-white">Continuer vers le paiement</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-5 md:py-8">
      <div className="mb-4 flex items-center gap-3 border-b border-[#F1F1F1] bg-white p-4 -mx-4 -mt-5 md:mx-0 md:mt-0 md:rounded-2xl md:border md:border-[#E5E7EB]">
        <Link href="/catalogue" className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border-[1.5px] border-[#E5E7EB]">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-base font-bold">Commander maintenant</h1>
          <p className="font-body text-[11px] text-[#6B7280]">Sans creer de compte</p>
        </div>
      </div>

      <div className="mb-5 rounded-[14px] border border-[#E5E7EB] bg-white p-3">
        <div className="flex items-center gap-3">
          <img src={product.image} alt={product.name} className="h-[54px] w-[54px] shrink-0 rounded-[10px] object-cover" />
          <div className="min-w-0 flex-1">
            <h2 className="text-[13.5px] font-semibold">{product.name}</h2>
            <p className="font-body text-[11px] text-[#6B7280]">Pret a cuire · {product.vendor}</p>
          </div>
          <div className="text-right">
            <p className="text-base font-bold text-[#B91C1C]">3 500 F</p>
            <p className="font-body text-[10px] text-[#9CA3AF]">x1</p>
          </div>
        </div>
      </div>

      <h2 className="mb-3 text-sm font-bold">Vos informations</h2>
      <div className="space-y-3">
        <label className="block">
          <span className="mb-1.5 block text-[11.5px] font-medium text-[#6B7280]">Nom complet</span>
          <Input defaultValue="Awa Ndiaye" className="rounded-[10px] border-[1.5px] bg-white" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[11.5px] font-medium text-[#6B7280]">Telephone</span>
          <Input defaultValue="+221 77 123 45 67" className="rounded-[10px] border-[1.5px] border-[#B91C1C] bg-white" />
        </label>
        <div className="grid grid-cols-2 gap-2.5">
          {["Dakar", "Choisir"].map((value, index) => (
            <label key={index} className="block">
              <span className="mb-1.5 block text-[11.5px] font-medium text-[#6B7280]">{index === 0 ? "Region" : "Commune"}</span>
              <button className="flex h-[46px] w-full items-center justify-between rounded-[10px] border-[1.5px] border-[#E5E7EB] bg-white px-3 text-[13px] font-medium text-[#1F2937]">
                {value}
                <ChevronDown size={14} />
              </button>
            </label>
          ))}
        </div>
        <label className="block">
          <span className="mb-1.5 block text-[11.5px] font-medium text-[#6B7280]">Adresse detaillee</span>
          <Input placeholder="Quartier, rue, point de repere..." className="rounded-[10px] border-[1.5px] bg-white" />
        </label>
      </div>

      <div className="mt-4 flex gap-2.5 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3 text-[#15803D]">
        <Truck size={17} className="mt-0.5 shrink-0" />
        <p className="font-body text-[11.5px] leading-5">Livraison a <strong>Dakar : 1 500 F</strong> · sous 24 h</p>
      </div>

      <div className="sticky bottom-[76px] -mx-4 mt-8 border-t border-[#F1F1F1] bg-white p-4 md:bottom-4 md:mx-0 md:rounded-2xl md:border md:border-[#E5E7EB]">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-body text-xs text-[#6B7280]">Total a payer</span>
          <span className="text-xl font-extrabold text-[#B91C1C]">{total.toLocaleString()} FCFA</span>
        </div>
        <button onClick={() => setSubmitted(true)} className="flex h-[50px] w-full items-center justify-center gap-2 rounded-[13px] bg-[#B91C1C] text-[15px] font-bold text-white">
          Payer avec Dexpay
          <ArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}
