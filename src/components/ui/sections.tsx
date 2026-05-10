'use client'
import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ShoppingBag, Star, ArrowRight, CheckCircle2, Leaf, Award, Quote, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Cover } from "@/components/ui/cover"

const products = [
  { id: 'kova', name: 'Premium Milk Kova', price: '₹450', weight: '500g', desc: 'Our signature slow-cooked sweetened milk reduction. A rich, creamy texture that melts in your mouth.', image: '/premium-box.jpeg', tags: ['Best Seller', 'Signature'] },
  { id: 'khalakand', name: 'Royal Khalakand', price: '₹550', weight: '500g', desc: 'Granular, rich milk cake flavored with a hint of rose water and topped with premium pistachios.', image: '/hero-tray.jpeg', tags: ['Festive Favorite'] },
  { id: 'kundha', name: 'Classic Kundha', price: '₹480', weight: '500g', desc: 'Deeply caramelized milk sweet with a rich, earthy flavor profile. Slow roasted to perfection.', image: '/premium-box.jpeg', tags: ['Traditional'] },
  { id: 'milkcake', name: 'Golden Milk Cake', price: '₹520', weight: '500g', desc: 'A rich, brown-centered traditional delicacy. The perfect balance of sweet and roasted milk notes.', image: '/hero-tray.jpeg', tags: ['Gourmet'] },
]

export function SignatureCollection() {
  const [activeTab, setActiveTab] = useState(products[0].id)
  const activeProduct = products.find(p => p.id === activeTab) || products[0]

  return (
    <section className="py-24 bg-[#F3EBE1] relative pt-32">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#152B69] mb-4">Signature Collection</h2>
          <p className="text-lg text-[#152B69]/70 max-w-2xl mx-auto font-light">Explore our gourmet range of traditional milk sweets, crafted for the ultimate festive indulgence.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(21,43,105,0.05)] border border-[#D4AF37]/20">
          {/* Image Showcase */}
          <div className="w-full lg:w-1/2 relative aspect-square rounded-[2rem] overflow-hidden bg-[#FAF6ED]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeProduct.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src={activeProduct.image}
                alt={activeProduct.name}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]" />
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {products.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === p.id 
                      ? 'bg-[#152B69] text-white shadow-md' 
                      : 'bg-zinc-100 text-[#152B69]/60 hover:bg-zinc-200'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {activeProduct.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#152B69] mb-2">{activeProduct.name}</h3>
              <p className="text-[#152B69]/60 font-medium mb-6">Net Weight: {activeProduct.weight}</p>
              
              <p className="text-lg text-[#152B69]/80 font-light leading-relaxed mb-8">
                {activeProduct.desc}
              </p>

              <div className="flex items-center gap-6 mb-8 pb-8 border-b border-zinc-100">
                <div className="text-4xl font-bold text-[#152B69]">{activeProduct.price}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Cover>
                  <Button className="w-full sm:w-auto h-14 rounded-full bg-[#152B69] hover:bg-[#1E3A8A] text-white px-8 text-lg font-bold shadow-xl shadow-[#152B69]/20 transition-transform hover:scale-105">
                    <ShoppingBag className="w-5 h-5 mr-2" /> Buy Now
                  </Button>
                </Cover>
                <Button variant="outline" className="w-full sm:w-auto h-14 rounded-full border-2 border-[#152B69]/10 text-[#152B69] hover:bg-[#152B69]/5 px-8 text-lg font-bold transition-colors">
                  View Details
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function PackagingShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#152B69] mb-6">Premium Unboxing Experience</h2>
            <p className="text-lg text-[#152B69]/70 font-light leading-relaxed mb-8">
              Every order arrives in our signature heritage packaging. Crafted with deep blue hues and embellished with gold foil, it's designed to make every occasion feel incredibly special.
            </p>
            <ul className="space-y-4 mb-10">
              {["Premium Gold-Foiled Box", "Temperature-Controlled Delivery", "Personalized Greeting Cards Available"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#152B69]/80">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="link" className="text-[#D4AF37] p-0 text-lg font-bold hover:text-[#C07C41]">
              View Unboxing Experience <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#152B69]/5 to-transparent rounded-full blur-3xl" />
            <img 
              src="/premium-box.jpeg" 
              alt="Premium Packaging" 
              className="relative z-10 w-full h-auto rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function IngredientsPurity() {
  return (
    <section className="py-24 bg-[#152B69] text-white relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/30 backdrop-blur-sm">
              <Leaf className="w-10 h-10 text-[#9EBB92]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#F3EBE1] mb-3">Pure Ingredients</h3>
            <p className="text-white/70 font-light leading-relaxed">Sourced directly from local dairy farms. Only the freshest milk, pure cane sugar, and natural aromatics.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/30 backdrop-blur-sm">
              <Award className="w-10 h-10 text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#F3EBE1] mb-3">Time-Honored Recipe</h3>
            <p className="text-white/70 font-light leading-relaxed">Slow-cooked over traditional wood fires for hours to achieve that perfect caramelized flavor and rich texture.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6 border border-[#D4AF37]/30 backdrop-blur-sm">
              <ShieldCheck className="w-10 h-10 text-[#C07C41]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#F3EBE1] mb-3">No Preservatives</h3>
            <p className="text-white/70 font-light leading-relaxed">100% natural goodness. We never use artificial colors, flavors, or preservatives in our sweets.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Reviews() {
  return (
    <section className="py-24 bg-[#FAF6ED] pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#152B69] mb-4">Loved by Connoisseurs</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />)}
          </div>
          <p className="text-lg text-[#152B69]/70">Over 50,000+ happy customers across India.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Ananya R.", text: "The packaging is incredibly luxurious, and the Kova tastes exactly like how my grandmother used to make it. Perfect for Diwali gifting!" },
            { name: "Karthik M.", text: "I ordered the Assorted Tray for a corporate event. The quality is unmatched. The Khalakand literally melts in your mouth." },
            { name: "Priya S.", text: "Finally a brand that treats traditional sweets like gourmet desserts. The unboxing experience itself is worth it. Highly recommend." }
          ].map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-[#152B69]/5 hover:shadow-xl transition-shadow duration-300">
              <Quote className="w-10 h-10 text-[#D4AF37]/20 mb-4" />
              <p className="text-[#152B69]/80 font-light leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="text-[#152B69] font-bold tracking-wide">— {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
