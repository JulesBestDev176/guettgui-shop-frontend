"use client";
import { useState } from "react";
import { Phone, Mail, MessageCircle, ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/primitives";

const faqs = [
  { q: "Comment passer une commande ?", a: "Parcourez notre catalogue, ajoutez des produits à votre panier et finalisez votre commande en choisissant votre mode de livraison et de paiement." },
  { q: "Quels sont les modes de paiement acceptés ?", a: "Nous acceptons Wave, Orange Money, et le paiement en espèces à la livraison. D'autres méthodes seront bientôt disponibles." },
  { q: "Quelle est la zone de livraison ?", a: "Nous livrons actuellement dans tout le Grand Dakar (Dakar, Pikine, Guédiawaye, Rufisque, Bargny). D'autres zones sont en cours d'expansion." },
  { q: "Comment devenir vendeur sur la plateforme ?", a: "Cliquez sur 'Devenir vendeur', complétez le formulaire en 6 étapes avec vos informations et documents, puis notre équipe validera votre dossier sous 24–48h." },
  { q: "Que faire si ma commande est endommagée ?", a: "Contactez-nous dans les 2h suivant la réception avec des photos. Nous procéderons à un remboursement ou remplacement immédiat." },
  { q: "Comment suivre ma commande ?", a: "Rendez-vous dans la section 'Suivi commande' et entrez votre numéro de commande. Vous pouvez aussi activer les notifications SMS." },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="gradient-hero text-white py-14 px-4 text-center">
        <h1 className="text-3xl font-bold mb-3">Centre d'aide</h1>
        <p className="text-white/80 text-sm max-w-md mx-auto">
          Notre équipe est disponible 7j/7 pour vous aider. Comment pouvons-nous vous aider aujourd'hui ?
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Contact channels */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Phone, label: "Téléphone", value: "+221 33 800 00 00", desc: "Lun–Sam 8h–20h", color: "text-emerald-600 bg-emerald-50" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat en direct", desc: "Réponse en < 30 min", color: "text-[#B91C1C] bg-[#FEF2F2]" },
            { icon: Mail, label: "Email", value: "support@charcutsn.com", desc: "Réponse en 2h", color: "text-blue-600 bg-blue-50" },
          ].map(({ icon: Icon, label, value, desc, color }) => (
            <div key={label} className="bg-white rounded-2xl border border-stone-100 p-5 text-center shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-[#1F2937] text-sm">{label}</h3>
              <p className="text-[#B91C1C] font-semibold text-sm mt-1">{value}</p>
              <p className="text-xs text-stone-400 mt-0.5">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-[#1F2937] mb-5">Questions fréquentes</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                  <button
                    className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-stone-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-sm text-[#1F2937]">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp size={16} className="text-[#B91C1C] shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-stone-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-4 pb-4 text-sm text-stone-500 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="text-xl font-bold text-[#1F2937] mb-5">Nous contacter</h2>
            <form className="bg-white rounded-2xl border border-stone-100 p-6 shadow-[0_2px_8px_rgba(0,0,0,0.05)] space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600">Votre nom</label>
                <Input placeholder="Prénom Nom" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600">Téléphone / Email</label>
                <Input placeholder="+221 77 000 00 00 ou email" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600">Sujet</label>
                <select className="w-full h-11 px-4 rounded-xl border border-stone-200 text-sm outline-none focus:border-[#B91C1C]">
                  {["Commande en cours", "Problème de livraison", "Remboursement", "Compte vendeur", "Autre"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-600">Message</label>
                <Textarea rows={4} placeholder="Décrivez votre problème en détail…" />
              </div>
              <Button type="submit" className="w-full">
                Envoyer
                <Send size={15} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
