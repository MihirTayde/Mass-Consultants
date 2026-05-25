'use client'

import {
  Settings2, MessageCircle, Cpu, Package, BadgeCheck,
  Clock3, ShieldCheck, Layers3, Ruler, Award, Leaf
} from 'lucide-react'
import Image from 'next/image'

const WHATSAPP_LINK = "https://wa.me/919827743899?text=Hello%20Mass%20Consultants%2C%20I%20am%20interested%20in%20your%20services.%20Please%20share%20more%20details."

const machines = [
  { name: 'Hydroelectric Stacker', tag: 'Material Handling', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-1-50f6640c815c4cc1a8d2122543ba3cea.png' },
  { name: 'Oven / Furnace', tag: 'Heat Treatment', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-2-886fa7e8f34d4cf585f5d4e223469610.png' },
  { name: 'Hydraulic Press Machine', tag: 'Pressing', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-3-5eaa88e3636e44a8a20356dca0e826a8.png' },
  { name: 'VMC 540V', tag: 'CNC', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-4-35bfd2be258c4a3da4018b578926fe6c.png' },
  { name: 'Lathe Machine', tag: 'Turning', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-5-fe72ea53b2794fcdb74b920f8f774830.png' },
  { name: 'Milling Machine', tag: 'Milling', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-6-8a9a5e8ffa1e4f47aae14b3e07d27852.png' },
  { name: 'Radial Drill', tag: 'Drilling', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-7-5aa544c856c64b39940350351560cca9.png' },
  { name: 'Pillar Drill', tag: 'Drilling', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-8-b420d0f838ce4ea3ba7ddc359c65c495.png' },
  { name: 'Grinder', tag: 'Finishing', img: 'https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/machine-9-519124dd40ff44f9b7dfd11441747330.png' },
]

const services = [
  { icon: <Cpu className="w-6 h-6" />, title: 'CNC & VMC Machining', desc: 'Precision machined components and job work as per customer drawings, with dependable execution and repeatable accuracy.' },
  { icon: <Package className="w-6 h-6" />, title: 'Hydraulic Stacker Manufacturing', desc: 'Custom hydraulic stackers designed for warehouses and factories, engineered for lifting performance and durability.' },
  { icon: <BadgeCheck className="w-6 h-6" />, title: 'ISO / IATF / EMS Certification', desc: 'End-to-end consultancy for ISO 9001, IATF 16949, and ISO 14001 compliance, documentation, and audit readiness.' },
]

const whyUs = [
  { icon: <Clock3 className="w-5 h-5" />, title: '10+ Years of Experience' },
  { icon: <ShieldCheck className="w-5 h-5" />, title: 'OEM Trusted (Cummins Turbo Technologies)' },
  { icon: <Layers3 className="w-5 h-5" />, title: 'One-Stop Solution' },
  { icon: <Ruler className="w-5 h-5" />, title: 'Quality as per Customer Drawing' },
]

const certs = [
  { icon: <Award className="w-8 h-8" />, title: 'ISO 9001' },
  { icon: <BadgeCheck className="w-8 h-8" />, title: 'IATF 16949' },
  { icon: <Leaf className="w-8 h-8" />, title: 'ISO 14001', sub: 'EMS' },
]

export default function Home() {
  return (
    <div className="antialiased">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100" style={{ boxShadow: '0 8px 30px rgba(17,24,39,.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-3 min-w-0">
              <div className="h-11 w-11 rounded-xl border border-slate-200 flex items-center justify-center text-[#1a2744] bg-white">
                <Settings2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-heading font-bold tracking-wide text-[#1a2744] text-lg leading-none" style={{ fontFamily: 'Poppins, sans-serif' }}>MASS CONSULTANTS</div>
                <div className="text-xs mt-1 text-slate-500 font-medium">Dewas, M.P.</div>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
              {['home', 'services', 'machines', 'about', 'contact'].map(s => (
                <a key={s} href={`#${s}`} className="hover:text-[#1a2744] transition capitalize">{s}</a>
              ))}
            </nav>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition"
              style={{ background: '#E87A3A' }}>
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </header>

      <main id="home">

        {/* HERO */}
        <section className="relative overflow-hidden" style={{ background: '#f5f6f8' }}>
          <div className="absolute inset-0 grid-pattern opacity-70" />
          <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-20 lg:opacity-100">
            <img
              src="https://cdn.landing-page.io/ai-landingpage/html-generate/aad52f03-b3cd-4fb6-8a3a-07820c6edb54/images/hero-cnc-c835ecfb2e74489d9b9eb799dfe3f2f5.png"
              alt="CNC machining workshop"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 soft-shadow">
                  <span className="h-2 w-2 rounded-full" style={{ background: '#E87A3A' }} />
                  Established 2013 · Dewas, Madhya Pradesh
                </div>
                <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1a2744] leading-[1.03] section-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Precision Machining &amp; Engineering Solutions
                </h1>
                <p className="mt-5 text-base sm:text-lg text-slate-600 leading-8 max-w-xl">
                  ISO Certified Consultancy · CNC Machining · Hydraulic Stackers · Est. 2013, Dewas M.P.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white" style={{ background: '#E87A3A' }}>
                    Get a Quote
                  </a>
                  <a href="#services" className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold bg-white text-[#1a2744] border border-slate-200 hover:border-[#1a2744] transition">
                    Our Services
                  </a>
                </div>
                <div className="mt-10 grid grid-cols-3 gap-4">
                  {[['10+', 'Years'], ['9', 'Machines'], ['3', 'Core Services']].map(([num, label]) => (
                    <div key={label} className="rounded-2xl bg-white border border-slate-100 p-5 soft-shadow">
                      <div className="text-3xl font-bold text-[#1a2744]" style={{ fontFamily: 'Poppins, sans-serif' }}>{num}</div>
                      <div className="mt-1 text-sm text-slate-600 font-medium">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87A3A' }}>Services</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1a2744] section-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Focused engineering support, built for reliability.
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {services.map((s) => (
                <article key={s.title} className="rounded-3xl border border-slate-100 bg-white p-8 soft-shadow">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(232,122,58,.12)', color: '#E87A3A' }}>
                    {s.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#1a2744]" style={{ fontFamily: 'Poppins, sans-serif' }}>{s.title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MACHINES */}
        <section id="machines" className="py-20 lg:py-28" style={{ background: '#f5f6f8' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87A3A' }}>Equipment</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1a2744] section-title" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Equipment</h2>
              </div>
              <p className="max-w-2xl text-slate-600 leading-7">A practical, versatile machine lineup supporting machining, fabrication, drilling, grinding, and workshop operations.</p>
            </div>
            <div className="mt-10 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {machines.map((m) => (
                <article key={m.name} className="overflow-hidden rounded-3xl bg-white border border-slate-100 soft-shadow">
                  <img src={m.img} alt={m.name} className="h-56 w-full object-cover" />
                  <div className="p-6">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold" style={{ background: 'rgba(232,122,58,.12)', color: '#E87A3A' }}>
                      {m.tag}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-[#1a2744]" style={{ fontFamily: 'Poppins, sans-serif' }}>{m.name}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="about" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87A3A' }}>Why choose us</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1a2744] section-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Engineering discipline with dependable execution.
                </h2>
                <p className="mt-5 text-slate-600 leading-7 max-w-xl">
                  Mass Consultants combines shop-floor capability, certification expertise, and practical manufacturing knowledge to deliver focused solutions for industrial clients.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((w) => (
                  <div key={w.title} className="rounded-3xl border border-slate-100 p-6" style={{ background: '#f5f6f8' }}>
                    <div className="h-11 w-11 rounded-2xl bg-white flex items-center justify-center" style={{ color: '#E87A3A' }}>
                      {w.icon}
                    </div>
                    <h3 className="mt-4 font-bold text-[#1a2744] text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>{w.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="py-20 lg:py-24" style={{ background: '#f5f6f8' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87A3A' }}>Certifications</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1a2744] section-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Standards that support quality and accountability.
              </h2>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {certs.map((c) => (
                <div key={c.title} className="rounded-3xl bg-white border border-slate-100 p-8 text-center soft-shadow">
                  <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(232,122,58,.12)', color: '#E87A3A' }}>
                    {c.icon}
                  </div>
                  <div className="mt-5 text-2xl font-extrabold text-[#1a2744]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {c.title} {c.sub && <span className="text-base font-semibold text-slate-500">({c.sub})</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ background: '#1a2744', color: 'white' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: 'rgba(255,255,255,.65)' }}>Contact</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold section-title" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Let's discuss your next engineering requirement.
                </h2>
                <p className="mt-5 leading-7" style={{ color: 'rgba(255,255,255,.75)' }}>
                  Reach Mass Consultants for machining, fabrication, industrial stackers, and certification consulting from our Dewas facility.
                </p>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl p-6" style={{ border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.05)' }}>
                  <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,.6)' }}>Phone</div>
                  <a href="tel:9827743899" className="mt-2 inline-block text-2xl font-bold text-white hover:text-[#E87A3A] transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    9827743899
                  </a>
                </div>
                <div className="rounded-3xl p-6" style={{ border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.05)' }}>
                  <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,.6)' }}>Address</div>
                  <div className="mt-2 leading-7" style={{ color: 'rgba(255,255,255,.9)' }}>
                    135, Industrial Area No. 2, Near Madhu Milan Square, Dewas (M.P.)
                  </div>
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-base font-semibold text-white transition"
                  style={{ background: '#22c55e' }}>
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <div>Mass Consultants © 2024 | Est. 2013 | Dewas, M.P.</div>
          <div className="font-medium text-[#1a2744]">Precision · Reliability · Engineering</div>
        </div>
      </footer>

    </div>
  )
}
