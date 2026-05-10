import { SignatureCollection } from "@/components/ui/sections"
import { HeroHeader } from "@/components/ui/hero-section-5"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#FAF6ED] font-sans selection:bg-[#D4AF37]/30 selection:text-[#152B69]">
      <HeroHeader />
      <SignatureCollection />
    </div>
  )
}
