"use client";
import { useState } from "react";
import Link from "next/link";
import { Minus, Plus, X, ShoppingCart, ArrowRight, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productImages } from "@/lib/product-images";

const initialItems = [
  { id: 1, name: "Poulet entier frais fermier", vendor: "Ferme Diallo", weight: "1kg", price: 4500, qty: 2, image: productImages.wholeChicken },
  { id: 2, name: "Cuisses de poulet x6", vendor: "Aviculture Thiès", weight: "1.5kg", price: 3200, qty: 1, image: productImages.chickenCuts },
  { id: 3, name: "Œufs frais (plateau 30)", vendor: "Pondeuses du Sine", weight: "—", price: 4200, qty: 1, image: productImages.eggs },
];

export default function PanierPage() {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id: number, delta: number) => {
    setItems((prev) => prev.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeItem = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal >= 10000 ? 0 : 800;
  const total = subtotal + delivery;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-[#1F2937] mb-6 flex items-center gap-2">
        <ShoppingCart size={24} className="text-[#B91C1C]" />
        Mon panier
        <span className="text-base text-stone-400 font-normal">({items.length} articles)</span>
      </h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <ShoppingCart size={52} className="text-stone-300 mx-auto mb-4" />
          <h2 className="text-lg font-semibold text-stone-700 mb-2">Votre panier est vide</h2>
          <p className="text-stone-400 text-sm mb-6">Découvrez nos produits frais</p>
          <Link href="/catalogue"><Button>Voir le catalogue</Button></Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-stone-100 p-4 flex items-center gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#1F2937] text-sm leading-tight">{item.name}</h3>
                  <p className="text-xs text-stone-400 mt-0.5">{item.vendor} · {item.weight}</p>
                  <p className="font-bold text-[#B91C1C] mt-1">{(item.price * item.qty).toLocaleString()} F</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-2 bg-stone-100 rounded-xl p-1">
                    <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-50 transition-colors">
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-sm font-bold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 flex items-center justify-center rounded-lg bg-white text-stone-700 hover:bg-stone-50 transition-colors">
                      <Plus size={12} />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-1.5 rounded-lg text-stone-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="sticky top-24 self-start">
            <div className="bg-white rounded-2xl border border-stone-100 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
              <h2 className="font-bold text-[#1F2937] mb-4">Récapitulatif</h2>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-500">Sous-total</span>
                  <span className="font-medium">{subtotal.toLocaleString()} F</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 flex items-center gap-1">
                    <Truck size={13} />
                    Livraison
                  </span>
                  <span className={`font-medium ${delivery === 0 ? "text-emerald-600" : ""}`}>
                    {delivery === 0 ? "Gratuite" : `${delivery.toLocaleString()} F`}
                  </span>
                </div>
                {delivery > 0 && (
                  <p className="text-[11px] text-rose-700 bg-rose-50 rounded-lg px-3 py-1.5">
                    Encore {(10000 - subtotal).toLocaleString()} F pour la livraison gratuite !
                  </p>
                )}
                <div className="border-t border-stone-100 pt-2.5 flex justify-between">
                  <span className="font-bold text-[#1F2937]">Total</span>
                  <span className="font-bold text-xl text-[#B91C1C]">{total.toLocaleString()} F</span>
                </div>
              </div>

              <Link href="/checkout">
                <Button size="lg" className="w-full mt-5">
                  Commander
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/catalogue" className="block text-center text-xs text-stone-400 hover:text-[#B91C1C] mt-3">
                Continuer mes achats
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
