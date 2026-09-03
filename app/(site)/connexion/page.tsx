import Link from "next/link";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/primitives";
import { productImages } from "@/lib/product-images";

export default function ConnexionPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      {/* Form side */}
      <div className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <span className="w-8 h-8 gradient-brand rounded-lg flex items-center justify-center text-white font-bold text-sm">C</span>
            <span className="font-bold text-lg text-[#1F2937]">Charcut<span className="text-[#B91C1C]">'SN</span></span>
          </Link>

          <h1 className="text-2xl font-bold text-[#1F2937] mb-1">Bon retour !</h1>
          <p className="text-stone-500 text-sm mb-8">Connectez-vous à votre compte</p>

          <div className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-600">Téléphone ou email</label>
              <Input placeholder="+221 77 000 00 00" />
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <label className="text-xs font-semibold text-stone-600">Mot de passe</label>
                <Link href="/support" className="text-xs text-[#B91C1C] hover:underline">Oublié ?</Link>
              </div>
              <Input type="password" placeholder="••••••••" />
            </div>

            <Link href="/client" className="block">
              <Button type="button" size="lg" className="w-full mt-2">
                Se connecter
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          <p className="text-center text-sm text-stone-500 mt-6">
            Pas encore de compte ?{" "}
            <Link href="/inscription" className="text-[#B91C1C] font-semibold hover:underline">
              S'inscrire
            </Link>
          </p>
        </div>
      </div>

      {/* Visual side */}
      <div className="hidden lg:flex gradient-hero relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-black/10 rounded-full" />
        </div>
        <div className="relative z-10 text-white text-center px-12">
          <img src={productImages.farm} alt="Ferme avicole" className="w-40 h-40 rounded-3xl object-cover mx-auto mb-6 shadow-xl" />
          <h2 className="text-3xl font-bold mb-3">La volaille fraîche<br />à portée de clic</h2>
          <p className="text-white/75 mb-10 text-sm leading-relaxed">
            Commandez en ligne, payez avec Dexpay, et recevez chez vous en 2h.
          </p>
          <div className="space-y-3">
            {[
              { icon: Shield, text: "Produits contrôlés et certifiés" },
              { icon: Users, text: "+150 éleveurs partenaires" },
              { icon: TrendingUp, text: "Note moyenne 4.8/5" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-xl px-4 py-3">
                <Icon size={16} className="text-rose-200 shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
