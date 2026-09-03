"use client";
import Link from "next/link";
import { ArrowLeft, Check, Lock, ShieldCheck } from "lucide-react";

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-5 md:py-8">
      <div className="mb-4 flex items-center gap-3 bg-white p-4 -mx-4 -mt-5 md:mx-0 md:mt-0 md:rounded-xl md:shadow-sm">
        <Link href="/commande-rapide" className="flex h-9 w-9 items-center justify-center rounded-lg bg-page">
          <ArrowLeft size={18} />
        </Link>
        <h1 className="text-base font-bold">Paiement</h1>
      </div>

      <div className="mb-2 flex items-center justify-center gap-1.5">
        {[1, 2, 3, 4].map((step) => (
          <div key={step} className="flex items-center gap-1.5">
            <span className={`flex h-[26px] w-[26px] items-center justify-center rounded-full text-xs font-bold ${step < 3 ? "bg-brand text-white" : step === 3 ? "bg-brand text-white" : "bg-gray-200 text-muted"}`}>
              {step < 3 ? <Check size={13} strokeWidth={3} /> : step}
            </span>
            {step < 4 && <span className={`h-0.5 w-6 ${step < 3 ? "bg-brand" : step === 3 ? "bg-brand" : "bg-gray-200"}`} />}
          </div>
        ))}
      </div>
      <p className="font-body mb-4 text-center text-[11px] text-muted">Etape 3 sur 4 · Choisir le paiement</p>

      <section className="mb-4 rounded-xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-[13px] font-bold">Recapitulatif</h2>
        <div className="font-body space-y-2 text-[13px] text-ink-light">
          <div className="flex justify-between"><span>Poulet de chair 2 kg x 1</span><strong className="font-semibold text-ink">3 500 F</strong></div>
          <div className="flex justify-between"><span>Livraison · Dakar</span><strong className="font-semibold text-ink">1 500 F</strong></div>
        </div>
        <div className="my-3 h-px bg-gray-100" />
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Total</span>
          <span className="text-lg font-extrabold text-brand">5 000 FCFA</span>
        </div>
      </section>

      <h2 className="mb-3 text-[13px] font-bold">Mode de paiement</h2>
      <section className="mb-3 flex items-center gap-3 rounded-xl border-2 border-brand bg-white p-4">
        <div className="bg-brand flex h-11 w-11 items-center justify-center rounded-lg text-[13px] font-extrabold text-white">Dx</div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold">Dexpay</h3>
          <p className="font-body text-[11px] text-muted">Wave, Orange Money, carte...</p>
        </div>
        <span className="h-[22px] w-[22px] rounded-full border-[6px] border-brand" />
      </section>

      <div className="mb-3 flex gap-2.5 rounded-xl bg-brand-soft p-3 text-brand-dark">
        <Lock size={17} className="mt-0.5 shrink-0" />
        <p className="font-body text-[11.5px] leading-5">Votre argent est <strong>protege</strong>. Le vendeur est paye seulement apres la livraison confirmee.</p>
      </div>

      <div className="flex gap-2.5 rounded-xl bg-amber-50 p-3 text-amber-800">
        <ShieldCheck size={17} className="mt-0.5 shrink-0" />
        <p className="font-body text-[11px] leading-5">La plateforme prend une commission de 8%. Le vendeur recoit 3 220 F apres livraison.</p>
      </div>

      <div className="sticky bottom-[76px] -mx-4 mt-8 bg-white p-4 shadow-[0_-2px_8px_rgba(0,0,0,0.05)] md:bottom-4 md:mx-0 md:rounded-xl md:shadow-sm">
        <Link href="/suivi-commande" className="flex h-12 w-full items-center justify-center rounded-lg bg-brand text-[15px] font-bold text-white">
          Payer 5 000 FCFA
        </Link>
      </div>
    </div>
  );
}
