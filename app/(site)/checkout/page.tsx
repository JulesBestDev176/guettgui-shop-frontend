"use client";
import Link from "next/link";
import { ArrowLeft, Check, Lock, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-5 md:py-8">
      <div className="mb-4 flex items-center gap-3 border-b border-[#F1F1F1] bg-white p-4 -mx-4 -mt-5 md:mx-0 md:mt-0 md:rounded-2xl md:border md:border-[#E5E7EB]">
        <Link href="/commande-rapide" className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] border-[1.5px] border-[#E5E7EB]">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-base font-bold">Paiement</h1>
      </div>

      <div className="mb-2 flex items-center justify-center gap-1.5">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center gap-1.5">
            <span className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-xs font-bold ${step < 3 ? "bg-[#16A34A] text-white" : step === 3 ? "bg-[#B91C1C] text-white" : "bg-[#E5E7EB] text-[#9CA3AF]"}`}>
              {step < 3 ? <Check size={13} strokeWidth={3} /> : step}
            </span>
            {step < 4 && <span className={`h-0.5 w-6 ${step < 3 ? "bg-[#16A34A]" : step === 3 ? "bg-[#B91C1C]" : "bg-[#E5E7EB]"}`} />}
          </div>
        ))}
      </div>
      <p className="font-body mb-4 text-center text-[11px] text-[#6B7280]">Etape 3 sur 4 · Choisir le paiement</p>

      <section className="mb-4 rounded-[14px] border border-[#E5E7EB] bg-white p-4">
        <h2 className="mb-3 text-[13px] font-bold">Recapitulatif</h2>
        <div className="font-body space-y-2 text-[13px] text-[#4B5563]">
          <div className="flex justify-between"><span>Poulet de chair 2 kg x 1</span><strong className="font-semibold text-[#1F2937]">3 500 F</strong></div>
          <div className="flex justify-between"><span>Livraison · Dakar</span><strong className="font-semibold text-[#1F2937]">1 500 F</strong></div>
        </div>
        <div className="my-3 h-px bg-[#F1F1F1]" />
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Total</span>
          <span className="text-[19px] font-extrabold text-[#B91C1C]">5 000 FCFA</span>
        </div>
      </section>

      <h2 className="mb-3 text-[13px] font-bold">Mode de paiement</h2>
      <section className="mb-3 flex items-center gap-3 rounded-[13px] border-2 border-[#B91C1C] bg-white p-4">
        <div className="gradient-brand flex h-[46px] w-[46px] items-center justify-center rounded-[11px] text-[13px] font-extrabold text-white">Dx</div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold">Dexpay</h3>
          <p className="font-body text-[11px] text-[#6B7280]">Wave, Orange Money, carte...</p>
        </div>
        <span className="h-[22px] w-[22px] rounded-full border-[6px] border-[#B91C1C]" />
      </section>

      <div className="mb-3 flex gap-2.5 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4] p-3 text-[#15803D]">
        <Lock size={17} className="mt-0.5 shrink-0" />
        <p className="font-body text-[11.5px] leading-5">Votre argent est <strong>protege</strong>. Le vendeur est paye seulement apres la livraison confirmee.</p>
      </div>

      <div className="flex gap-2.5 rounded-xl border border-[#FDE68A] bg-[#FFFBEB] p-3 text-[#92400E]">
        <ShieldCheck size={17} className="mt-0.5 shrink-0" />
        <p className="font-body text-[11px] leading-5">La plateforme prend une commission de 8%. Le vendeur recoit 3 220 F apres livraison.</p>
      </div>

      <div className="sticky bottom-[76px] -mx-4 mt-8 border-t border-[#F1F1F1] bg-white p-4 md:bottom-4 md:mx-0 md:rounded-2xl md:border md:border-[#E5E7EB]">
        <Link href="/suivi-commande" className="flex h-[50px] w-full items-center justify-center rounded-[13px] bg-[#B91C1C] text-[15px] font-bold text-white">
          Payer 5 000 FCFA
        </Link>
      </div>
    </div>
  );
}
