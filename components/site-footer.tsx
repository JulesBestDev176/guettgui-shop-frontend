import Link from "next/link";
import { Brand } from "@/components/brand";

const groups = [
  { title: "Acheter", links: [["Catalogue", "/catalogue"], ["Poulet de chair", "/catalogue"], ["Poulet local", "/catalogue"], ["Ventes en lot", "/catalogue"]] },
  { title: "Vendre", links: [["Devenir vendeur", "/devenir-vendeur"], ["Espace vendeur", "/vendeur"], ["Commissions", "/support"]] },
  { title: "Aide", links: [["Suivre ma commande", "/suivi-commande"], ["Paiement Dexpay", "/support"], ["Annulations", "/support"], ["Support", "/support"]] },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#1F2937] px-4 py-10 text-[#D1D5DB] md:px-7">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 border-b border-[#374151] pb-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Brand light />
            <p className="font-body mt-4 max-w-[280px] text-[13px] leading-6 text-[#9CA3AF]">
              La marketplace de reference pour acheter de la volaille fraiche partout au Senegal, en toute confiance.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3.5 text-[13.5px] font-semibold text-white">{group.title}</h3>
              <div className="font-body space-y-2 text-[13px] text-[#9CA3AF]">
                {group.links.map(([label, href]) => (
                  <Link key={label} href={href} className="block hover:text-white">{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="font-body flex flex-col gap-2 pt-5 text-xs text-[#9CA3AF] md:flex-row md:items-center md:justify-between">
          <span>© 2026 Charcut&apos;SN — Tous droits reserves</span>
          <span>Paiement securise par <strong className="font-semibold text-white">Dexpay</strong></span>
        </div>
      </div>
    </footer>
  );
}
