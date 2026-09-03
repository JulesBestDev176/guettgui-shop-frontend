"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, User, Store, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/primitives";

const profiles = [
  { id: "client", icon: User, label: "Client", desc: "Acheter des produits" },
  { id: "vendeur", icon: Store, label: "Vendeur", desc: "Vendre mes produits" },
  { id: "livreur", icon: Bike, label: "Livreur", desc: "Livrer les commandes" },
];

export default function InscriptionPage() {
  const [profile, setProfile] = useState("client");

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <span className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center text-white font-bold text-sm">C</span>
        <span className="font-bold text-lg text-[#1F2937]">Charcut<span className="text-[#B91C1C]">'SN</span></span>
      </Link>

      <h1 className="text-2xl font-bold text-[#1F2937] mb-1">Créer un compte</h1>
      <p className="text-stone-500 text-sm mb-6">Choisissez votre profil</p>

      {/* Profile selector */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {profiles.map(({ id, icon: Icon, label, desc }) => (
          <button
            key={id}
            onClick={() => setProfile(id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${
              profile === id
                ? "border-[#B91C1C] bg-[#FEF2F2]"
                : "border-stone-200 hover:border-stone-300 bg-white"
            }`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${profile === id ? "gradient-brand" : "bg-stone-100"}`}>
              <Icon size={18} className={profile === id ? "text-white" : "text-stone-500"} />
            </div>
            <div className="text-center">
              <p className={`text-sm font-bold ${profile === id ? "text-[#B91C1C]" : "text-[#1F2937]"}`}>{label}</p>
              <p className="text-[10px] text-stone-400 mt-0.5">{desc}</p>
            </div>
          </button>
        ))}
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-600">Prénom</label>
            <Input placeholder="Prénom" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-600">Nom</label>
            <Input placeholder="Nom" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-600">Téléphone</label>
          <Input placeholder="+221 77 000 00 00" type="tel" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-600">Email</label>
          <Input placeholder="email@exemple.com" type="email" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-600">Mot de passe</label>
          <Input placeholder="Minimum 8 caractères" type="password" />
        </div>

        {profile === "vendeur" && (
          <div className="space-y-1.5 p-4 bg-[#FEF2F2] rounded-xl border border-rose-100">
            <label className="text-xs font-semibold text-[#7F1D1D]">Nom de votre élevage / boutique</label>
            <Input placeholder="ex. Ferme Diallo" className="bg-white" />
          </div>
        )}

        <Button type="submit" size="lg" className="w-full">
          Créer mon compte
          <ArrowRight size={16} />
        </Button>
      </form>

      <p className="text-center text-sm text-stone-500 mt-6">
        Déjà un compte ?{" "}
        <Link href="/connexion" className="text-[#B91C1C] font-semibold hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}
