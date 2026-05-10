'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronRight, ShoppingBag } from 'lucide-react'
import { useScroll, motion } from 'motion/react'
import { TextEffect } from '@/components/ui/text-effect'
import { Spotlight } from '@/components/ui/spotlight'
import { ImageSequence } from '@/components/ui/image-sequence'

export function HeroSection() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <>
            <HeroHeader />
            <main className="bg-[#FAF6ED]">
                <section ref={containerRef} className="relative h-[500vh]">
                    <div className="sticky top-0 h-[100dvh] py-24 md:pb-32 lg:pb-36 lg:pt-52 flex items-center overflow-hidden">
                        {/* Background Splashes */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D4AF37" />
                            <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
                            <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#9EBB92]/10 rounded-full blur-[100px]" />
                        </div>

                        {/* Image Sequence Background Container */}
                        <div className="absolute inset-4 lg:inset-8 z-0 overflow-hidden rounded-3xl sm:rounded-[3rem] shadow-2xl">
                            <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for text legibility */}
                            <ImageSequence 
                                frameCount={88} 
                                folder="Mov-Combined" 
                                prefix="ezgif-frame-" 
                                progress={scrollYProgress}
                                className="opacity-90 mix-blend-overlay"
                            />
                            {/* Fallback image if frames don't load instantly */}
                            <img src="/premium-box.jpeg" className="absolute inset-0 w-full h-full object-cover -z-10 opacity-30 blur-sm" alt="Background fallback" />
                        </div>

                        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-2xl text-center lg:ml-0 lg:max-w-3xl lg:text-left pt-20">
                                <motion.h1 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                    className="mt-8 text-balance text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] drop-shadow-lg"
                                >
                                    <TextEffect as="span" per="word" preset="fade">
                                        Authentic Milk Kova
                                    </TextEffect>
                                    <br/>
                                    <span className="font-light italic text-[#D4AF37] tracking-normal inline-block mt-2">
                                        <TextEffect as="span" per="word" preset="fade" delay={0.4}>
                                            Since 1965
                                        </TextEffect>
                                    </span>
                                </motion.h1>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                    className="mt-8 max-w-2xl text-balance text-lg sm:text-xl text-white/90 font-light leading-relaxed drop-shadow-md"
                                >
                                    <TextEffect as="span" per="word" preset="blur" delay={0.8}>
                                        Premium handcrafted sweets from Tamil Nadu’s finest tradition. Indulge in the ultimate luxury of pure, slow-cooked perfection.
                                    </TextEffect>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                    className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
                                >
                                    <Button
                                        asChild
                                        size="lg"
                                        className="h-14 rounded-full bg-[#D4AF37] hover:bg-[#C07C41] text-white px-8 text-lg font-bold shadow-lg shadow-[#D4AF37]/30 transition-all hover:scale-105"
                                    >
                                        <Link href="/shop">
                                            <ShoppingBag className="w-5 h-5 mr-2" />
                                            <span className="text-nowrap">Shop Collection</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Feature Logos / Highlights */}
                <section className="bg-[#FAF6ED] py-12 relative z-20">
                    <div className="group relative m-auto max-w-7xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-56 md:border-r border-[#152B69]/10 md:pr-6 mb-6 md:mb-0">
                                <p className="text-center md:text-end text-sm text-[#152B69]/60 font-medium uppercase tracking-widest">
                                    Trusted by <br/> Premium Brands
                                </p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-14rem)] overflow-hidden">
                                <InfiniteSlider>
                                    <div className="flex items-center justify-center text-2xl font-serif text-[#152B69]/40 italic">Taj Hotels</div>
                                    <div className="flex items-center justify-center text-2xl font-serif text-[#152B69]/40 italic">ITC Grand</div>
                                    <div className="flex items-center justify-center text-2xl font-serif text-[#152B69]/40 italic">Leela Palace</div>
                                    <div className="flex items-center justify-center text-2xl font-serif text-[#152B69]/40 italic">Oberoi</div>
                                    <div className="flex items-center justify-center text-2xl font-serif text-[#152B69]/40 italic">Marriott</div>
                                    <div className="flex items-center justify-center text-2xl font-serif text-[#152B69]/40 italic">Ritz-Carlton</div>
                                </InfiniteSlider>

                                <div className="bg-gradient-to-r from-[#FAF6ED] absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"></div>
                                <div className="bg-gradient-to-l from-[#FAF6ED] absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Shop', href: '/shop' },
    { name: 'Our Craft', href: '/craft' },
    { name: 'Reviews', href: '/reviews' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-50 w-full pt-4">
                <div className={cn('mx-auto max-w-7xl rounded-full px-6 transition-all duration-300 lg:px-12', scrolled ? 'bg-[#FAF6ED]/90 backdrop-blur-2xl shadow-sm py-2' : 'bg-transparent py-4')}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 duration-200 lg:gap-0')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <span className={cn("font-serif text-2xl font-bold tracking-wider", scrolled ? "text-[#152B69]" : "text-[#D4AF37] drop-shadow-md")}>
                                    <span className="font-light text-[#D4AF37]">SRI</span> SARASWATHI
                                </span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className={cn("relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden", scrolled ? "text-[#152B69]" : "text-white")}>
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm font-semibold tracking-widest uppercase">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={cn("hover:text-[#D4AF37] block duration-150 transition-colors", scrolled ? "text-[#152B69]/70" : "text-white/80")}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={cn("bg-[#FAF6ED] group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent", scrolled ? "" : "lg:bg-transparent")}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base font-medium uppercase tracking-wider">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-[#152B69]/80 hover:text-[#D4AF37] block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    className="rounded-full bg-[#152B69] hover:bg-[#0B173B] text-white">
                                    <Link href="/shop">
                                        <ShoppingBag className="w-4 h-4 mr-2" />
                                        <span>Shop Now</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
