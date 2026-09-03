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
      <Link href="/" className="mb-8 inline-block">
        <img src="/assets/logo.png" alt="Guett Gui" className="h-10 object-contain" />
      </Link>

      <h1 className="text-2xl font-bold text-ink mb-1">Creer un compte</h1>
      <p className="text-muted text-sm mb-6">Choisissez votre profil</p>

      {/* Profile selector */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {profiles.map(({ id, icon: Icon, label, desc }) => (
          <button
            key={id}
            onClick={() => setProfile(id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
              profile === id
                ? "border-brand bg-brand-soft"
                : "border-gray-200 hover:border-gray-300 bg-white"
            }`}
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${profile === id ? "bg-brand" : "bg-page"}`}>
              <Icon size={18} className={profile === id ? "text-white" : "text-muted"} />
            </div>
            <div className="text-center">
              <p className={`text-sm font-bold ${profile === id ? "text-brand" : "text-ink"}`}>{label}</p>
              <p className="text-[10px] text-muted mt-0.5">{desc}</p>
            </div>
          </button>
        ))}
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-ink-light">Prenom</label>
            <Input placeholder="Prenom" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-ink-light">Nom</label>
            <Input placeholder="Nom" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-ink-light">Telephone</label>
          <Input placeholder="+221 77 000 00 00" type="tel" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-ink-light">Email</label>
          <Input placeholder="email@exemple.com" type="email" />
        </div>
        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-ink-light">Mot de passe</label>
          <Input placeholder="Minimum 8 caracteres" type="password" />
        </div>

        {profile === "vendeur" && (
          <div className="space-y-1.5 p-4 bg-brand-soft rounded-xl">
            <label className="text-xs font-semibold text-brand-dark">Nom de votre elevage / boutique</label>
            <Input placeholder="ex. Ferme Diallo" className="bg-white" />
          </div>
        )}

        <Button type="submit" size="lg" className="w-full">
          Creer mon compte
          <ArrowRight size={16} />
        </Button>
      </form>

      <p className="text-center text-sm text-muted mt-6">
        Deja un compte ?{" "}
        <Link href="/connexion" className="text-brand font-semibold hover:underline">
          Se connecter
        </Link>
      </p>
    </div>
  );
}
