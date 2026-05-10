import { Reviews } from "@/components/ui/sections"
import { HeroHeader } from "@/components/ui/hero-section-5"

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#FAF6ED] font-sans selection:bg-[#D4AF37]/30 selection:text-[#152B69]">
      <HeroHeader />
      <Reviews />
    </div>
  )
}
