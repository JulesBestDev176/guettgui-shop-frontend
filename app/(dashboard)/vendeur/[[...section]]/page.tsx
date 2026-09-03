import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock,
  CreditCard,
  Edit3,
  Eye,
  MapPin,
  Package,
  PackageCheck,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Store,
  Trash2,
  TrendingUp,
  Truck,
  User,
  Wallet,
} from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { Badge } from "@/components/ui/primitives";
import { productImages } from "@/lib/product-images";

const sellerProducts = [
  { id: "PRD-001", name: "Poulet entier frais", category: "Poulet", stock: 24, price: "4 500 F", sales: 92, status: "Actif", image: productImages.wholeChicken },
  { id: "PRD-002", name: "Cuisses de poulet x6", category: "Decoupe", stock: 8, price: "3 200 F", sales: 47, status: "Actif", image: productImages.chickenCuts },
  { id: "PRD-003", name: "Plateau 30 oeufs frais", category: "Oeufs", stock: 18, price: "4 200 F", sales: 61, status: "Actif", image: productImages.eggs },
  { id: "PRD-004", name: "Dinde entiere 3 kg", category: "Dinde", stock: 0, price: "12 000 F", sales: 15, status: "Rupture", image: productImages.turkey },
];

const sellerOrders = [
  { id: "CMD-20260626-0042", client: "Fatou Sarr", phone: "+221 77 123 45 67", items: "Poulet entier x2, oeufs x1", count: "3 articles", total: "17 200 F", status: "Nouvelle", date: "26 juin 2026", address: "Dakar Plateau", payment: "Dexpay", image: productImages.wholeChicken },
  { id: "CMD-20260625-0038", client: "Moussa Diop", phone: "+221 76 420 10 40", items: "Cuisses de poulet x2", count: "2 articles", total: "6 400 F", status: "Preparation", date: "25 juin 2026", address: "Almadies", payment: "Dexpay", image: productImages.chickenCuts },
  { id: "CMD-20260624-0033", client: "Aissatou Ba", phone: "+221 78 310 11 09", items: "Dinde entiere x1", count: "1 article", total: "12 000 F", status: "Expediee", date: "24 juin 2026", address: "Mermoz", payment: "Dexpay", image: productImages.turkey },
  { id: "CMD-20260620-0027", client: "Oumar Fall", phone: "+221 70 222 18 88", items: "Plateau oeufs x2", count: "2 articles", total: "8 400 F", status: "Livree", date: "20 juin 2026", address: "Thies Nord", payment: "Dexpay", image: productImages.eggs },
];

const payoutMethods = [
  { label: "Wave", logo: "/payment-logos/wave.jpg", value: "+221 77 000 11 22" },
  { label: "Orange Money", logo: "/payment-logos/orange-money.png", value: "+221 78 000 11 22" },
  { label: "Free Money", logo: "/payment-logos/free-money.png", value: "+221 76 000 11 22" },
];

const deliveryZones = [
  { name: "Thies Nord", distance: "0-5 km", fee: "1 000 F", time: "30-45 min", minimum: "5 000 F", active: true, orders: 18 },
  { name: "Thies Centre", distance: "5-10 km", fee: "1 500 F", time: "45-60 min", minimum: "7 500 F", active: true, orders: 24 },
  { name: "Mbour", distance: "35 km", fee: "4 000 F", time: "2 h", minimum: "25 000 F", active: true, orders: 7 },
  { name: "Dakar Plateau", distance: "70 km", fee: "6 000 F", time: "3-4 h", minimum: "40 000 F", active: false, orders: 3 },
];

const statusColor: Record<string, string> = {
  Nouvelle: "bg-[#F0FDF4] text-[#22A849]",
  Preparation: "bg-[#FFF7ED] text-[#C2410C]",
  Expediee: "bg-[#EFF6FF] text-[#2563EB]",
  Livree: "bg-[#DCFCE7] text-[#15803D]",
  Actif: "bg-[#DCFCE7] text-[#15803D]",
  Rupture: "bg-[#F1F5F9] text-[#64748B]",
};

function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-2xl font-extrabold tracking-[-0.4px] text-[#1F2937] md:text-3xl">{title}</h1>
        <p className="font-body mt-1 text-sm text-[#6B7280]">{subtitle}</p>
      </div>
      {action}
    </div>
  );
}

function StatCard({ label, value, sub, icon: Icon, color }: { label: string; value: string; sub: string; icon: React.ElementType; color: string }) {
  return (
    <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
      <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] ${color}`}>
        <Icon size={19} />
      </div>
      <p className="text-2xl font-extrabold text-[#1F2937]">{value}</p>
      <div className="mt-1 flex items-center justify-between gap-2">
        <p className="font-body text-xs text-[#6B7280]">{label}</p>
        <span className="rounded-full bg-[#FAFAFA] px-2 py-0.5 text-[10px] font-bold text-[#6B7280]">{sub}</span>
      </div>
    </div>
  );
}

function OrderRow({ order }: { order: (typeof sellerOrders)[number] }) {
  return (
    <Link href={`/vendeur/commandes/${order.id}`} className="grid gap-3 rounded-[14px] border border-[#F1F1F1] bg-white p-4 transition hover:border-[#22A849]/30 hover:bg-[#FAFAFA] md:grid-cols-[auto_1fr_auto_auto_auto] md:items-center">
      <img src={order.image} alt={order.id} className="h-12 w-12 rounded-[12px] object-cover" />
      <div className="min-w-0">
        <p className="font-semibold text-[#1F2937]">{order.id}</p>
        <p className="font-body text-xs text-[#6B7280]">{order.client} · {order.count} · {order.address}</p>
      </div>
      <Badge className={`w-fit rounded-full px-3 py-1 ${statusColor[order.status]}`}>{order.status}</Badge>
      <p className="font-bold text-[#1F2937] md:text-right">{order.total}</p>
      <ArrowRight size={17} className="hidden text-[#9CA3AF] md:block" />
    </Link>
  );
}

function ProductCard({ product }: { product: (typeof sellerProducts)[number] }) {
  return (
    <div className="rounded-[16px] border border-[#E5E7EB] bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
      <img src={product.image} alt={product.name} className="h-40 w-full rounded-[13px] object-cover" />
      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="truncate font-bold text-[#1F2937]">{product.name}</h2>
            <p className="font-body text-xs text-[#6B7280]">{product.category} · {product.sales} ventes</p>
          </div>
          <Badge className={`rounded-full px-3 py-1 ${statusColor[product.status]}`}>{product.status}</Badge>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-extrabold text-[#22A849]">{product.price}</p>
            <p className="font-body text-xs text-[#6B7280]">{product.stock > 0 ? `${product.stock} en stock` : "Stock epuise"}</p>
          </div>
          <div className="flex gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#E5E7EB] text-[#1F2937] transition hover:border-[#22A849] hover:text-[#22A849]">
              <Edit3 size={15} />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[#E5E7EB] text-[#22A849] transition hover:bg-[#F0FDF4]">
              <Trash2 size={15} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewPage() {
  return (
    <>
      <section className="mb-6 grid gap-4 xl:grid-cols-[1.35fr_0.8fr]">
        <div className="relative overflow-hidden rounded-[18px] bg-[#1F2937] p-6 text-white shadow-[0_12px_32px_rgba(31,41,55,.16)]">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-[#22A849]/25" />
          <div className="relative">
            <p className="font-body text-sm text-[#9CA3AF]">Bienvenue</p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-[-0.6px]">Ferme Diallo</h1>
            <p className="font-body mt-2 max-w-xl text-sm leading-6 text-[#D1D5DB]">
              Suivez vos ventes, preparez les commandes et gardez votre inventaire a jour.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/vendeur/produits/ajouter" className="inline-flex h-11 items-center justify-center gap-2 rounded-[11px] bg-[#22A849] px-5 text-sm font-bold text-white">
                <Plus size={16} />
                Ajouter produit
              </Link>
              <Link href="/vendeur/commandes" className="inline-flex h-11 items-center justify-center rounded-[11px] border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white">
                Voir commandes
              </Link>
              <Link href="/vendeur/livraison" className="inline-flex h-11 items-center justify-center rounded-[11px] border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white">
                Zones livraison
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-body text-xs text-[#6B7280]">A traiter</p>
              <h2 className="font-bold text-[#1F2937]">Nouvelle commande</h2>
            </div>
            <Badge className="rounded-full bg-[#F0FDF4] px-3 py-1 text-[#22A849]">Priorite</Badge>
          </div>
          <div className="rounded-[14px] bg-[#FAFAFA] p-4">
            <p className="font-semibold text-[#1F2937]">CMD-20260626-0042</p>
            <p className="font-body mt-1 text-xs text-[#6B7280]">Fatou Sarr · Poulet entier x2, oeufs x1</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-xl font-extrabold text-[#22A849]">17 200 F</span>
              <Link href="/vendeur/commandes/CMD-20260626-0042" className="rounded-[10px] bg-[#1F2937] px-4 py-2 text-xs font-bold text-white">Ouvrir</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Ventes ce mois" value="287K" sub="+18%" icon={Wallet} color="bg-[#F0FDF4] text-[#22A849]" />
        <StatCard label="Commandes" value="42" sub="+6" icon={ShoppingBag} color="bg-[#EFF6FF] text-[#2563EB]" />
        <StatCard label="Produits actifs" value="8" sub="sur 11" icon={Package} color="bg-[#DCFCE7] text-[#15803D]" />
        <StatCard label="Note moyenne" value="4.8" sub="34 avis" icon={Star} color="bg-[#FFF7ED] text-[#C2410C]" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <OrdersPanel compact />
        <InventoryPanel />
      </section>
    </>
  );
}

function OrdersPanel({ compact = false }: { compact?: boolean }) {
  return (
    <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-[#1F2937]">Commandes</h2>
          <p className="font-body text-xs text-[#6B7280]">Demandes client et suivi preparation</p>
        </div>
        {compact && <Link href="/vendeur/commandes" className="text-xs font-bold text-[#22A849]">Voir tout</Link>}
      </div>
      <div className="space-y-3">
        {(compact ? sellerOrders.slice(0, 3) : sellerOrders).map((order) => <OrderRow key={order.id} order={order} />)}
      </div>
    </div>
  );
}

function InventoryPanel() {
  return (
    <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#1F2937]">Inventaire</h2>
          <p className="font-body text-xs text-[#6B7280]">Produits a surveiller</p>
        </div>
        <Link href="/vendeur/produits" className="text-xs font-bold text-[#22A849]">Gerer</Link>
      </div>
      <div className="space-y-3">
        {sellerProducts.slice(0, 4).map((product) => (
          <div key={product.id} className="flex items-center gap-3 rounded-[14px] bg-[#FAFAFA] p-3">
            <img src={product.image} alt={product.name} className="h-12 w-12 rounded-[10px] object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[#1F2937]">{product.name}</p>
              <p className="font-body text-xs text-[#6B7280]">{product.stock > 0 ? `${product.stock} disponibles` : "Rupture de stock"}</p>
            </div>
            <p className="text-sm font-bold text-[#22A849]">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Mes produits"
        subtitle="Ajoutez, modifiez et suivez vos produits disponibles."
        action={<Link href="/vendeur/produits/ajouter" className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-[#22A849] px-4 text-sm font-bold text-white"><Plus size={16} /> Ajouter</Link>}
      />
      <div className="mb-5 grid gap-4 md:grid-cols-[1fr_auto]">
        <div className="flex h-11 items-center gap-2 rounded-[12px] border border-[#E5E7EB] bg-white px-3">
          <Search size={17} className="text-[#9CA3AF]" />
          <input placeholder="Rechercher un produit" className="w-full bg-transparent text-sm outline-none" />
        </div>
        <select className="h-11 rounded-[12px] border border-[#E5E7EB] bg-white px-3 text-sm outline-none">
          <option>Tous les statuts</option>
          <option>Actif</option>
          <option>Rupture</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {sellerProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}

function OrdersPage() {
  return (
    <>
      <PageHeader title="Commandes" subtitle="Traitez les commandes entrantes et suivez les livraisons." />
      <div className="mb-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Nouvelles" value="8" sub="A traiter" icon={ShoppingBag} color="bg-[#F0FDF4] text-[#22A849]" />
        <StatCard label="Preparation" value="12" sub="En cours" icon={Clock} color="bg-[#FFF7ED] text-[#C2410C]" />
        <StatCard label="Expediees" value="6" sub="Livreur" icon={Truck} color="bg-[#EFF6FF] text-[#2563EB]" />
        <StatCard label="Livrees" value="24" sub="OK" icon={PackageCheck} color="bg-[#DCFCE7] text-[#15803D]" />
      </div>
      <OrdersPanel />
    </>
  );
}

function OrderDetailPage({ orderId }: { orderId: string }) {
  const order = sellerOrders.find((item) => item.id === orderId) ?? sellerOrders[0];
  const steps = ["Recue", "Preparation", "Confiee livreur", "Livree"];
  const activeIndex = order.status === "Livree" ? 3 : order.status === "Expediee" ? 2 : order.status === "Preparation" ? 1 : 0;

  return (
    <>
      <PageHeader
        title={order.id}
        subtitle={`${order.client} · ${order.date}`}
        action={<Link href="/vendeur/commandes" className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] border border-[#E5E7EB] bg-white px-4 text-sm font-bold text-[#1F2937]"><ArrowLeft size={16} /> Retour</Link>}
      />
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="space-y-6">
          <div className="overflow-hidden rounded-[18px] bg-[#1F2937] text-white shadow-[0_12px_32px_rgba(31,41,55,.16)]">
            <div className="grid gap-5 p-5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
              <div className="flex min-w-0 items-center gap-4">
                <img src={order.image} alt={order.id} className="h-20 w-20 rounded-[16px] object-cover" />
                <div className="min-w-0">
                  <Badge className={`mb-2 rounded-full px-3 py-1 ${statusColor[order.status]}`}>{order.status}</Badge>
                  <h2 className="text-xl font-extrabold md:text-2xl">{order.total}</h2>
                  <p className="font-body mt-1 text-sm text-[#D1D5DB]">{order.items}</p>
                </div>
              </div>
              <div className="rounded-[14px] bg-white/10 p-4 md:min-w-56">
                <p className="font-body text-xs text-[#D1D5DB]">Client</p>
                <p className="mt-1 font-extrabold">{order.client}</p>
                <p className="font-body mt-1 text-xs text-[#D1D5DB]">{order.phone}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
            <h2 className="mb-5 text-lg font-bold text-[#1F2937]">Avancement</h2>
            <div className="grid gap-3 sm:grid-cols-4">
              {steps.map((label, index) => {
                const done = index <= activeIndex;
                return (
                  <div key={label} className={`rounded-[14px] border p-4 ${done ? "border-[#22A849] bg-[#F0FDF4]" : "border-[#E5E7EB] bg-[#FAFAFA]"}`}>
                    <div className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full ${done ? "bg-[#22A849] text-white" : "bg-white text-[#9CA3AF]"}`}>
                      {done ? <CheckCircle2 size={17} /> : index + 1}
                    </div>
                    <p className="text-sm font-bold text-[#1F2937]">{label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
            <h2 className="mb-4 text-lg font-bold text-[#1F2937]">Details</h2>
            <div className="space-y-4">
              <InfoLine icon={MapPin} label="Adresse" value={order.address} />
              <InfoLine icon={CreditCard} label="Paiement" value={order.payment} />
              <InfoLine icon={Package} label="Articles" value={order.count} />
            </div>
          </div>
          <div className="grid gap-3">
            <button className="h-11 rounded-[11px] bg-[#22A849] px-4 text-sm font-bold text-white">Marquer en preparation</button>
            <button className="h-11 rounded-[11px] border border-[#E5E7EB] bg-white px-4 text-sm font-bold text-[#1F2937]">Contacter le client</button>
          </div>
        </aside>
      </div>
    </>
  );
}

function InfoLine({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <Icon size={18} className="mt-0.5 text-[#22A849]" />
      <div>
        <p className="font-semibold text-[#1F2937]">{value}</p>
        <p className="font-body text-xs text-[#6B7280]">{label}</p>
      </div>
    </div>
  );
}

function StatsPage() {
  const rows = [
    { label: "Lundi", value: "32K", width: "38%" },
    { label: "Mardi", value: "48K", width: "54%" },
    { label: "Mercredi", value: "64K", width: "72%" },
    { label: "Jeudi", value: "52K", width: "60%" },
    { label: "Vendredi", value: "91K", width: "100%" },
  ];

  return (
    <>
      <PageHeader title="Statistiques" subtitle="Analyse des ventes, produits et performances de la boutique." />
      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="CA mensuel" value="287K" sub="+18%" icon={TrendingUp} color="bg-[#F0FDF4] text-[#22A849]" />
        <StatCard label="Panier moyen" value="9 850 F" sub="+7%" icon={Wallet} color="bg-[#DCFCE7] text-[#15803D]" />
        <StatCard label="Vues produits" value="1 284" sub="+21%" icon={Eye} color="bg-[#EFF6FF] text-[#2563EB]" />
        <StatCard label="Conversion" value="8.4%" sub="+2%" icon={BarChart3} color="bg-[#FFF7ED] text-[#C2410C]" />
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
          <h2 className="mb-5 text-lg font-bold text-[#1F2937]">Ventes de la semaine</h2>
          <div className="space-y-4">
            {rows.map((row) => (
              <div key={row.label} className="grid grid-cols-[80px_1fr_52px] items-center gap-3">
                <p className="font-body text-xs text-[#6B7280]">{row.label}</p>
                <div className="h-3 overflow-hidden rounded-full bg-[#F1F5F9]">
                  <div className="h-full rounded-full bg-[#22A849]" style={{ width: row.width }} />
                </div>
                <p className="text-right text-sm font-bold text-[#1F2937]">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
          <h2 className="mb-5 text-lg font-bold text-[#1F2937]">Top produits</h2>
          <div className="space-y-3">
            {sellerProducts.slice(0, 3).map((product, index) => (
              <div key={product.id} className="flex items-center gap-3 rounded-[14px] bg-[#FAFAFA] p-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22A849] text-xs font-bold text-white">{index + 1}</span>
                <img src={product.image} alt={product.name} className="h-11 w-11 rounded-[10px] object-cover" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-[#1F2937]">{product.name}</p>
                  <p className="font-body text-xs text-[#6B7280]">{product.sales} ventes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function DeliveryPage() {
  return (
    <>
      <PageHeader
        title="Zones de livraison"
        subtitle="Definissez ou vous livrez, les frais, les delais et le minimum de commande."
        action={<button className="inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-[#22A849] px-4 text-sm font-bold text-white"><Plus size={16} /> Ajouter zone</button>}
      />

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Zones actives" value="3" sub="sur 4" icon={MapPin} color="bg-[#F0FDF4] text-[#22A849]" />
        <StatCard label="Commandes zone" value="52" sub="ce mois" icon={Truck} color="bg-[#EFF6FF] text-[#2563EB]" />
        <StatCard label="Frais moyens" value="2 800 F" sub="livraison" icon={Wallet} color="bg-[#DCFCE7] text-[#15803D]" />
        <StatCard label="Delai moyen" value="1 h 20" sub="estime" icon={Clock} color="bg-[#FFF7ED] text-[#C2410C]" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#1F2937]">Zones configurees</h2>
              <p className="font-body text-xs text-[#6B7280]">Chaque zone peut avoir ses propres frais et delais.</p>
            </div>
            <select className="h-10 rounded-[10px] border border-[#E5E7EB] bg-white px-3 text-sm outline-none">
              <option>Toutes les zones</option>
              <option>Actives</option>
              <option>Inactives</option>
            </select>
          </div>

          <div className="space-y-3">
            {deliveryZones.map((zone) => (
              <div key={zone.name} className="rounded-[15px] border border-[#F1F1F1] bg-white p-4 transition hover:border-[#22A849]/30 hover:bg-[#FAFAFA]">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-[#F0FDF4] text-[#22A849]">
                      <MapPin size={19} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-[#1F2937]">{zone.name}</h3>
                        <Badge className={`rounded-full px-3 py-1 ${zone.active ? "bg-[#DCFCE7] text-[#15803D]" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                          {zone.active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <p className="font-body mt-1 text-xs text-[#6B7280]">{zone.distance} · {zone.orders} commandes ce mois</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center md:min-w-[320px]">
                    <Metric label="Frais" value={zone.fee} />
                    <Metric label="Delai" value={zone.time} />
                    <Metric label="Minimum" value={zone.minimum} />
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-[10px] border border-[#E5E7EB] text-xs font-bold text-[#1F2937] transition hover:border-[#22A849] hover:text-[#22A849]">
                    <Edit3 size={14} /> Modifier
                  </button>
                  <button className={`inline-flex h-9 flex-1 items-center justify-center rounded-[10px] text-xs font-bold ${zone.active ? "bg-[#F1F5F9] text-[#64748B]" : "bg-[#22A849] text-white"}`}>
                    {zone.active ? "Desactiver" : "Activer"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
            <h2 className="mb-4 text-lg font-bold text-[#1F2937]">Ajouter rapidement</h2>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B7280]">Nom de la zone</label>
                <input className="h-11 w-full rounded-[12px] border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#22A849]" placeholder="ex. Rufisque" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B7280]">Frais</label>
                  <input className="h-11 w-full rounded-[12px] border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#22A849]" placeholder="3000 F" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#6B7280]">Delai</label>
                  <input className="h-11 w-full rounded-[12px] border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#22A849]" placeholder="1 h" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#6B7280]">Minimum commande</label>
                <input className="h-11 w-full rounded-[12px] border border-[#E5E7EB] px-3 text-sm outline-none focus:border-[#22A849]" placeholder="10000 F" />
              </div>
              <button className="h-11 w-full rounded-[11px] bg-[#22A849] text-sm font-bold text-white">Enregistrer zone</button>
            </div>
          </div>

          <div className="rounded-[18px] border border-[#BBF7D0] bg-[#F0FDF4] p-5 text-[#15803D]">
            <div className="mb-2 flex items-center gap-2 font-bold">
              <ShieldCheck size={18} />
              Conseil livraison
            </div>
            <p className="font-body text-xs leading-5">Gardez les frais simples et adaptez le minimum de commande pour les zones eloignees.</p>
          </div>
        </aside>
      </div>
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[12px] bg-[#FAFAFA] p-2">
      <p className="text-sm font-extrabold text-[#1F2937]">{value}</p>
      <p className="font-body text-[10px] text-[#6B7280]">{label}</p>
    </div>
  );
}

function SettingsPage() {
  return (
    <>
      <PageHeader title="Parametres" subtitle="Informations boutique, paiement et securite." />
      <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
          <h2 className="mb-5 text-lg font-bold text-[#1F2937]">Boutique</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <SettingBox icon={Store} label="Nom boutique" value="Ferme Diallo" />
            <SettingBox icon={MapPin} label="Localisation" value="Thies Nord" />
            <SettingBox icon={User} label="Responsable" value="Mamadou Diallo" />
            <SettingBox icon={ShieldCheck} label="Verification" value="Compte valide" />
          </div>
          <button className="mt-5 inline-flex h-10 items-center justify-center gap-2 rounded-[10px] bg-[#22A849] px-4 text-sm font-bold text-white">
            <Edit3 size={15} /> Modifier boutique
          </button>
        </div>

        <div className="rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.04)]">
          <h2 className="mb-5 text-lg font-bold text-[#1F2937]">Paiements</h2>
          <div className="space-y-3">
            {payoutMethods.map((method) => (
              <label key={method.label} className="flex cursor-pointer items-center gap-3 rounded-[14px] border border-[#E5E7EB] p-3 transition hover:border-[#22A849] has-[:checked]:border-[#22A849] has-[:checked]:bg-[#F0FDF4]">
                <input type="radio" name="seller-payout" className="accent-[#22A849]" defaultChecked={method.label === "Wave"} />
                <span className="flex h-12 w-16 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-stone-100">
                  <img src={method.logo} alt={method.label} className="max-h-full max-w-full object-contain" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-[#1F2937]">{method.label}</p>
                  <p className="truncate font-body text-xs text-[#6B7280]">{method.value}</p>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function SettingBox({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-[#F1F1F1] bg-[#FAFAFA] p-4">
      <Icon size={18} className="mb-3 text-[#22A849]" />
      <p className="font-body text-xs text-[#6B7280]">{label}</p>
      <p className="mt-1 font-semibold text-[#1F2937]">{value}</p>
    </div>
  );
}

export default async function VendeurDashboardPage({
  params,
}: {
  params: Promise<{ section?: string[] }>;
}) {
  const { section } = await params;
  const current = section?.[0] ?? "dashboard";
  const itemId = section?.[1] ? decodeURIComponent(section[1]) : undefined;

  const page =
    current === "produits" ? <ProductsPage /> :
    current === "commandes" && itemId ? <OrderDetailPage orderId={itemId} /> :
    current === "commandes" ? <OrdersPage /> :
    current === "livraison" ? <DeliveryPage /> :
    current === "statistiques" ? <StatsPage /> :
    current === "parametres" ? <SettingsPage /> :
    <OverviewPage />;

  return (
    <DashboardShell role="vendeur" userName="Ferme Diallo">
      <div className="mx-auto max-w-7xl p-4 md:p-6">{page}</div>
    </DashboardShell>
  );
}
