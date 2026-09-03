"use client";
import { Check, Info, Phone, Truck } from "lucide-react";

const steps = [
  ["Commande creee & payee", "Hier · 18 h 02 · Dexpay confirme", true],
  ["Vendeur a confirme", "Hier · 18 h 40 · Ferme Keur Massar", true],
  ["En preparation & recuperee", "Aujourd'hui · 13 h 10 · Livreur assigne", true],
  ["En livraison", "En cours · arrivee ~14 h 30", "active"],
  ["Livree", "En attente", false],
] as const;

export default function SuiviCommandePage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-5 md:py-8">
      <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
        <h1 className="text-base font-bold">Suivi de commande</h1>
        <p className="font-body text-[11px] text-muted">N° GG-2026-04821</p>
      </div>

      <section className="bg-ink mb-5 overflow-hidden rounded-xl p-5 text-white">
        <p className="font-body mb-1 text-xs text-gray-400">Statut actuel</p>
        <div className="flex items-center gap-2 text-xl font-bold">
          <Truck size={22} />
          En livraison
        </div>
        <p className="font-body mt-1.5 text-xs text-gray-400">Arrivee estimee : aujourd&apos;hui, 14 h 30</p>
        <div className="mt-4 flex items-center gap-3 rounded-lg bg-white/10 p-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">MF</div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold">Mamadou Fall · Livreur</p>
            <p className="font-body text-[11px] text-gray-400">4.9 · Moto</p>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <Phone size={16} />
          </button>
        </div>
      </section>

      <h2 className="mb-4 text-sm font-bold">Historique</h2>
      <div className="rounded-xl bg-white p-4 shadow-sm">
        {steps.map(([title, text, state], index) => (
          <div key={title} className="flex gap-3.5">
            <div className="flex flex-col items-center">
              <span className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full ${state === true ? "bg-brand" : state === "active" ? "bg-brand shadow-[0_0_0_4px] shadow-brand-soft" : "border-2 border-gray-200 bg-white"}`}>
                {state === true && <Check size={13} className="text-white" strokeWidth={3} />}
                {state === "active" && <Truck size={13} className="text-white" strokeWidth={2.5} />}
              </span>
              {index < steps.length - 1 && <span className={`h-10 w-0.5 ${state === false ? "bg-gray-200" : "bg-brand"}`} />}
            </div>
            <div className="pb-4">
              <p className={`text-sm font-semibold ${state === "active" ? "text-brand" : state === false ? "text-muted" : "text-ink"}`}>{title}</p>
              <p className="font-body text-[11px] text-muted">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 h-11 w-full rounded-lg bg-white text-sm font-semibold shadow-sm">Voir le detail de la commande</button>
      <p className="font-body mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] text-muted">
        <Info size={13} />
        Un souci ? Ouvrir un litige reste possible
      </p>
    </div>
  );
}
