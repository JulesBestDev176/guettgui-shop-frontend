import { Award, Bike, Box, Drumstick, ForkKnife, MapPin, Package, Search, Truck } from "lucide-react";
import { productImages } from "@/lib/product-images";

export const categories = [
  { name: "Poulet de chair", desc: "Eleve pour la viande", icon: Drumstick },
  { name: "Poulet local", desc: "Gout authentique", icon: ForkKnife },
  { name: "Local ameliore", desc: "Race croisee", icon: Award },
  { name: "Poulet vivant", desc: "Sur pied", icon: Bike },
  { name: "Pret a cuire", desc: "Plume & vide", icon: ForkKnife },
  { name: "Vente en lot", desc: "Achat en gros", icon: Box },
  { name: "Ramasse", desc: "Enlevement ferme", icon: Truck },
];

export const products = [
  { slug: "poulet-entier-frais", name: "Poulet de chair 2 kg - pret a cuire", price: 3500, badge: "Poulet de chair", category: "Poulet de chair", vendor: "Ferme Keur Massar", city: "Thies", weight: "2 kg", stock: 45, rating: 4.8, reviewCount: 312, livraison: true, image: productImages.wholeChicken },
  { slug: "poulet-local-fermier", name: "Poulet local fermier vivant", price: 4200, badge: "Poulet local", category: "Poulet local", vendor: "Elevage Ndiaye", city: "Dakar", weight: "1.8 kg", stock: 28, rating: 4.7, reviewCount: 156, livraison: true, image: productImages.farm },
  { slug: "lot-25-poulets", name: "Lot de 25 poulets locaux", price: 98000, badge: "Vente en lot", category: "Vente en lot", vendor: "Coop Bio Mbour", city: "Mbour", weight: "~42 kg", stock: 8, rating: 4.9, reviewCount: 89, livraison: false, image: productImages.chickenCuts },
  { slug: "plateau-oeufs-frais", name: "Plateau 30 oeufs frais", price: 4200, badge: "Oeufs", category: "Oeufs", vendor: "Pondeuses du Sine", city: "Fatick", weight: "30 pieces", stock: 62, rating: 4.6, reviewCount: 74, livraison: true, image: productImages.eggs },
  { slug: "dinde-entiere", name: "Dinde entiere prete a cuire", price: 12000, badge: "Dinde", category: "Dinde", vendor: "Ferme Senghor", city: "Rufisque", weight: "3-4 kg", stock: 12, rating: 4.8, reviewCount: 41, livraison: true, image: productImages.turkey },
  { slug: "canard-vide", name: "Canard vide sur commande", price: 7500, badge: "Canard", category: "Canard", vendor: "Elevage Kaolack", city: "Kaolack", weight: "2.2 kg", stock: 17, rating: 4.5, reviewCount: 29, livraison: false, image: productImages.duck },
];

export const locationFields = [
  { label: "Region", value: "Dakar" },
  { label: "Departement", value: "Choisir..." },
  { label: "Commune / Ville", value: "Choisir..." },
];

export const howItWorks = [
  { title: "Choisissez votre zone", text: "Region, departement et commune pour voir les offres pres de vous.", icon: MapPin },
  { title: "Selectionnez un produit", text: "Type, poids et etat. Comparez les vendeurs verifies.", icon: Search },
  { title: "Payez avec Dexpay", text: "Paiement securise. Votre argent est protege jusqu'a la livraison.", icon: Package },
  { title: "Recevez ou recuperez", text: "Livraison a domicile ou enlevement. Suivez votre commande en direct.", icon: Truck },
];

export const lots = [
  { name: "Lot 25 poulets locaux", detail: "~42 kg - sur commande", price: "98 000 F", vendor: "Elevage Ndiaye" },
  { name: "Lot 50 poulets de chair", detail: "Pret a cuire - livraison Dakar", price: "165 000 F", vendor: "Ferme Keur Massar" },
];

export const ramasses = [
  { name: "Ramasse 30 sujets vivants", detail: "A retirer a Thies avant 12h", price: "112 000 F", vendor: "Ferme Keur Massar" },
  { name: "Ramasse 80 poulets", detail: "Prix revendeur - Mbour", price: "275 000 F", vendor: "Coop Bio Mbour" },
];
