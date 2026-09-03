"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drumstick, Grid3X3, Home, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", icon: Home, label: "Accueil" },
  { href: "/catalogue", icon: Drumstick, label: "Poulets" },
  { href: "/commande-rapide", icon: Grid3X3, label: "Rapide" },
  { href: "/panier", icon: ShoppingBag, label: "Panier" },
  { href: "/connexion", icon: User, label: "Compte" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#F1F1F1] bg-white px-4 pb-3 pt-2 md:hidden">
      <div className="flex items-center justify-between">
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex min-w-12 flex-col items-center gap-1 text-[9.5px] font-medium",
                active ? "font-semibold text-[#B91C1C]" : "text-[#9CA3AF]"
              )}
            >
              <Icon size={21} strokeWidth={active ? 2.3 : 2} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
