"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Camera, CheckCircle, FileText, MapPin, Rocket, Trash2, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Progress, Textarea } from "@/components/ui/primitives";

const STEPS = [
  { title: "Votre profil" },
  { title: "Localisation" },
  { title: "Photos" },
  { title: "Documents" },
  { title: "Paiement" },
  { title: "Lancement" },
];

export default function DevenirVendeurPage() {
  const [step, setStep] = useState(0);
  const progress = ((step + 1) / STEPS.length) * 100;

  if (step === STEPS.length) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-[18px] bg-emerald-100">
          <CheckCircle size={44} className="text-emerald-600" />
        </div>
        <h1 className="mb-3 text-2xl font-bold text-[#1F2937]">Dossier soumis</h1>
        <p className="mb-6 text-sm leading-relaxed text-stone-500">
          Votre dossier de vendeur est soumis. Notre equipe va verifier vos informations sous 24-48h. Vous serez notifie par SMS.
        </p>
        <Button size="lg" className="w-full">Retour a l&apos;accueil</Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 md:py-10">
      <section className="mb-5 rounded-[18px] bg-[#1F2937] p-5 text-white md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-[-0.4px] md:text-3xl">Devenir vendeur</h1>
            <p className="font-body mt-2 max-w-xl text-sm leading-6 text-[#D1D5DB]">
              Completez votre dossier vendeur en quelques minutes.
            </p>
          </div>
          <div className="rounded-[14px] bg-white/10 px-4 py-3 text-left md:text-right">
            <p className="font-body text-xs text-[#D1D5DB]">Etape en cours</p>
            <p className="text-lg font-extrabold">{STEPS[step].title}</p>
          </div>
        </div>
        <Progress value={progress} className="mt-5 bg-white/15" />
      </section>

      <section className="mb-5 rounded-[18px] border border-[#E5E7EB] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="grid grid-cols-6 items-center">
          {STEPS.map(({ title }, i) => {
            const active = i === step;
            const done = i < step;

            return (
              <button
                key={title}
                type="button"
                onClick={() => setStep(i)}
                aria-label={`Etape ${i + 1}: ${title}`}
                title={title}
                className="group relative flex min-h-12 items-center justify-center"
              >
                {i > 0 && (
                  <span className={`absolute right-1/2 top-1/2 h-0.5 w-full -translate-y-1/2 ${i <= step ? "bg-[#B91C1C]" : "bg-[#E5E7EB]"}`} />
                )}
                <span
                  className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-extrabold transition sm:h-11 sm:w-11 ${
                    active
                      ? "border-[#B91C1C] bg-[#B91C1C] text-white shadow-[0_8px_18px_rgba(185,28,28,.22)]"
                      : done
                        ? "border-[#B91C1C] bg-white text-[#B91C1C]"
                        : "border-[#E5E7EB] bg-[#FAFAFA] text-[#9CA3AF] group-hover:border-[#B91C1C]"
                  }`}
                >
                  {i + 1}
                </span>
              </button>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <div>
            <p className="font-body text-xs text-[#6B7280]">Etape {step + 1} sur {STEPS.length}</p>
            <h2 className="text-lg font-extrabold text-[#1F2937]">{STEPS[step].title}</h2>
          </div>
          <span className="rounded-full bg-[#FEF2F2] px-3 py-1 text-xs font-bold text-[#B91C1C]">{Math.round(progress)}%</span>
        </div>
      </section>

      <section className="mb-6 rounded-[18px] border border-[#E5E7EB] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] md:p-6">
        <div className="mb-5 border-b border-[#F1F1F1] pb-4">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-[#B91C1C]">Etape {step + 1}</p>
          <h2 className="mt-1 text-xl font-extrabold text-[#1F2937]">{STEPS[step].title}</h2>
        </div>

        {step === 0 && <ProfileStep />}
        {step === 1 && <LocationStep />}
        {step === 2 && <PhotosStep />}
        {step === 3 && <DocumentsStep />}
        {step === 4 && <PaymentStep />}
        {step === 5 && <LaunchStep />}
      </section>

      <div className="flex gap-3">
        {step > 0 && (
          <Button variant="ghost" onClick={() => setStep(step - 1)}>
            <ArrowLeft size={16} />
            Retour
          </Button>
        )}
        <Button className="ml-auto" onClick={() => setStep(step + 1)}>
          {step === STEPS.length - 1 ? "Soumettre le dossier" : "Continuer"}
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
}

function ProfileStep() {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-600">Nom de la ferme / boutique</label>
        <Input placeholder="ex. Ferme Diallo" />
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-600">Telephone professionnel</label>
        <Input placeholder="+221 77 000 00 00" type="tel" />
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-600">Description</label>
        <Textarea rows={3} placeholder="Decrivez votre elevage, vos produits, votre savoir-faire" />
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-600">Type de production</label>
        <div className="flex flex-wrap gap-2">
          {["Poulet", "Dinde", "Canard", "Oeufs", "Lapin", "Autre"].map((type) => (
            <label key={type} className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-stone-200 px-3 py-1.5 text-xs font-medium transition-colors hover:border-[#B91C1C] has-[:checked]:border-[#B91C1C] has-[:checked]:bg-[#FEF2F2] has-[:checked]:text-[#B91C1C]">
              <input type="checkbox" className="accent-[#B91C1C]" />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function LocationStep() {
  return (
    <div className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-600">Region</label>
        <select className="h-11 w-full rounded-xl border border-stone-200 px-4 text-sm outline-none focus:border-[#B91C1C]">
          {["Dakar", "Thies", "Saint-Louis", "Ziguinchor", "Kaolack", "Diourbel", "Fatick", "Kolda", "Tambacounda", "Louga"].map((region) => (
            <option key={region}>{region}</option>
          ))}
        </select>
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-600">Ville / Commune</label>
        <Input placeholder="ex. Thies Nord" />
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-stone-600">Adresse precise</label>
        <Input placeholder="Quartier, repere" />
      </div>
      <div className="flex gap-2 rounded-xl bg-rose-50 p-4 text-sm text-rose-700">
        <MapPin size={16} className="mt-0.5 shrink-0" />
        <span>Votre localisation permet aux acheteurs de calculer les frais de livraison.</span>
      </div>
    </div>
  );
}

function PhotosStep() {
  const [photos, setPhotos] = useState<string[]>([]);

  const handlePhotos = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) {
      return;
    }

    setPhotos((current) => [
      ...current,
      ...files.map((file) => URL.createObjectURL(file)),
    ]);
    event.target.value = "";
  };

  return (
    <div className="space-y-4">
      <p className="font-body text-sm text-[#6B7280]">Ajoutez quelques photos, nous verifierons apres.</p>

      <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center gap-3 rounded-[16px] border-2 border-dashed border-[#E5E7EB] bg-[#FAFAFA] p-5 text-center transition hover:border-[#B91C1C] hover:bg-[#FEF2F2]">
        <input type="file" accept="image/*" multiple className="hidden" onChange={handlePhotos} />
        <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-white text-[#B91C1C] shadow-sm">
          <Upload size={22} />
        </span>
        <span className="text-sm font-extrabold text-[#1F2937]">Ajouter des photos</span>
        <span className="font-body max-w-sm text-xs leading-5 text-[#6B7280]">
          Selectionnez une ou plusieurs images depuis votre telephone ou ordinateur.
        </span>
      </label>

      {photos.length > 0 && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {photos.map((photo, index) => (
            <div key={photo} className="group relative overflow-hidden rounded-[14px] border border-[#E5E7EB] bg-white">
              <img src={photo} alt={`Photo ajoutee ${index + 1}`} className="aspect-square w-full object-cover" />
              <button
                type="button"
                onClick={() => setPhotos((current) => current.filter((_, photoIndex) => photoIndex !== index))}
                aria-label="Supprimer cette photo"
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#B91C1C] shadow-sm transition hover:bg-[#B91C1C] hover:text-white"
              >
                <Trash2 size={15} />
              </button>
            </div>
          ))}
        </div>
      )}

      {photos.length === 0 && (
        <div className="flex items-center gap-2 rounded-xl bg-[#FEF2F2] p-3 text-sm text-[#7F1D1D]">
          <Camera size={16} className="shrink-0" />
          <span>Les photos aident juste a valider le vendeur. Elles pourront etre revues par l&apos;equipe.</span>
        </div>
      )}
    </div>
  );
}

function DocumentsStep() {
  const [files, setFiles] = useState<Record<string, string>>({});
  const documents = [
    { label: "CNI ou Passeport", desc: "Document d'identite du vendeur", required: true },
    { label: "Attestation veterinaire", desc: "Si disponible", required: false },
    { label: "Registre de commerce", desc: "Pour les entreprises formelles", required: false },
  ];

  return (
    <div className="space-y-3">
      <p className="font-body text-sm text-[#6B7280]">La CNI ou le passeport est obligatoire. Les autres documents peuvent etre ajoutes plus tard.</p>
      {documents.map((doc) => (
        <div key={doc.label} className="flex items-center gap-3 rounded-xl border border-stone-200 p-3 sm:gap-4 sm:p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100">
            <FileText size={18} className="text-stone-400" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm font-semibold text-[#1F2937]">{doc.label}</p>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${doc.required ? "bg-[#FEF2F2] text-[#B91C1C]" : "bg-[#F1F5F9] text-[#64748B]"}`}>
                {doc.required ? "Obligatoire" : "Optionnel"}
              </span>
            </div>
            <p className="text-xs text-stone-400">{doc.desc}</p>
            {files[doc.label] && (
              <p className="mt-1 truncate text-xs font-semibold text-[#15803D]">{files[doc.label]}</p>
            )}
          </div>
          {files[doc.label] ? (
            <button
              type="button"
              onClick={() => setFiles((current) => {
                const next = { ...current };
                delete next[doc.label];
                return next;
              })}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-stone-200 text-[#B91C1C] transition hover:bg-[#FEF2F2]"
              aria-label="Retirer ce document"
            >
              <Trash2 size={15} />
            </button>
          ) : (
            <label className="inline-flex h-9 shrink-0 cursor-pointer items-center justify-center rounded-[10px] border border-stone-200 px-3 text-xs font-bold text-[#1F2937] transition hover:border-[#B91C1C] hover:text-[#B91C1C]">
              Ajouter
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png,.webp,image/*,application/pdf"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    setFiles((current) => ({ ...current, [doc.label]: file.name }));
                  }
                  event.target.value = "";
                }}
              />
            </label>
          )}
        </div>
      ))}
    </div>
  );
}

function PaymentStep() {
  const methods = [
    { id: "wave", label: "Wave", logo: "/payment-logos/wave.jpg" },
    { id: "orange-money", label: "Orange Money", logo: "/payment-logos/orange-money.png" },
    { id: "free-money", label: "Free Money", logo: "/payment-logos/free-money.png" },
  ];

  return (
    <div className="space-y-4">
      <p className="text-sm text-stone-500">Choisissez comment recevoir vos paiements.</p>
      <div className="space-y-3">
        {methods.map((method) => (
          <label key={method.id} className="flex cursor-pointer items-center gap-4 rounded-xl border-2 border-stone-200 p-4 transition-colors hover:border-[#B91C1C] has-[:checked]:border-[#B91C1C] has-[:checked]:bg-[#FEF2F2]">
            <input type="radio" name="payout" className="accent-[#B91C1C]" />
            <span className="flex h-12 w-16 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-stone-100">
              <img src={method.logo} alt={method.label} className="max-h-full max-w-full object-contain" />
            </span>
            <span className="text-sm font-semibold">{method.label}</span>
          </label>
        ))}
      </div>
      <Input placeholder="Numero de telephone" />
    </div>
  );
}

function LaunchStep() {
  return (
    <div className="space-y-4 py-4 text-center">
      <div className="gradient-brand mx-auto flex h-20 w-20 items-center justify-center rounded-3xl">
        <Rocket size={36} className="text-white" />
      </div>
      <h2 className="text-xl font-bold text-[#1F2937]">Pret a lancer ?</h2>
      <p className="text-sm leading-relaxed text-stone-500">
        Verifiez vos informations et soumettez votre dossier. Notre equipe l&apos;examinera sous 24-48h.
      </p>
      <div className="space-y-1.5 rounded-xl bg-[#FEF2F2] p-4 text-left text-sm">
        {["Profil elevage complete", "Localisation renseignee", "Photos ajoutees", "Documents fournis", "Mode de paiement configure"].map((item) => (
          <div key={item} className="flex items-center gap-2 text-[#7F1D1D]">
            <CheckCircle size={14} className="shrink-0 text-emerald-600" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
