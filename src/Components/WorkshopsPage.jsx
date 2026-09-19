import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Heart, Sparkles, X } from 'lucide-react'
import { workshops } from '../data/workshops'
import { prewarmJotform } from '../utils/jotform'
import { setPageSeo } from '../utils/seo'

const quoteLinkWarmupHandlers = {
  onMouseEnter: prewarmJotform,
  onFocus: prewarmJotform,
  onTouchStart: prewarmJotform,
}

// Uses the workshop gallery when available, otherwise falls back to its main image.
const getGalleryImages = (workshop) => {
  const images = workshop.galleryImages?.length ? workshop.galleryImages : [workshop.imageSrc]
  return [...new Set(images.filter(Boolean))]
}

// Supplies the detail panel with defaults when the catalogue item has no extra metadata.
const getDetails = (workshop) => ({
  duration: workshop.duration || '1.5 - 2 hours',
  age: workshop.age || (workshop.tag === 'Art' ? '8+' : '4+'),
  hardness: workshop.hardness || 'Beginner friendly',
  fullDescription: workshop.fullDescription || `${workshop.description} Our facilitators guide every step, so you can enjoy a relaxed creative experience and take home something made by you.`,
})

// Displays a workshop image, rotating automatically and supporting swipe/arrows in the detail view.
function WorkshopGallery({ workshop, expanded = false }) {
  const images = useMemo(() => getGalleryImages(workshop), [workshop])
  const [activeImage, setActiveImage] = useState(0)
  const [touchStart, setTouchStart] = useState(null)

  useEffect(() => {
    if (images.length < 2) return undefined
    const timer = window.setInterval(() => {
      setActiveImage((current) => {
        const candidates = images.map((_, index) => index).filter((index) => index !== current)
        return candidates[Math.floor(Math.random() * candidates.length)]
      })
    }, expanded ? 6000 : 4200)
    return () => window.clearInterval(timer)
  }, [expanded, images, workshop.title])

  const moveImage = (direction) => {
    setActiveImage((current) => (current + direction + images.length) % images.length)
  }

  return (
    <div
      className="relative h-full w-full touch-pan-y overflow-hidden bg-slate-100"
      onTouchStart={(event) => setTouchStart(event.changedTouches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart === null) return
        const distance = event.changedTouches[0].clientX - touchStart
        if (Math.abs(distance) > 45) moveImage(distance > 0 ? -1 : 1)
        setTouchStart(null)
      }}
    >
      {images.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`${workshop.title} example ${index + 1}`}
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === activeImage ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {!expanded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/10">
          <span className="rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-slate-800 shadow-lg backdrop-blur-sm">
            Tap to explore
          </span>
        </div>
      )}
      {expanded && images.length > 1 && (
        <>
          <button type="button" onClick={() => moveImage(-1)} aria-label="Previous workshop image" className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow-md transition hover:scale-105 sm:block">
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={() => moveImage(1)} aria-label="Next workshop image" className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/90 p-2 text-slate-800 shadow-md transition hover:scale-105 sm:block">
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-950/40 px-3 py-2 backdrop-blur-sm">
            {images.map((image, index) => (
              <button key={image} type="button" aria-label={`View image ${index + 1}`} onClick={() => setActiveImage(index)} className={`h-1.5 rounded-full transition-all ${index === activeImage ? 'w-5 bg-white' : 'w-1.5 bg-white/55'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// Similar products are matched by category and only appear on desktop.
// The quote button below uses the shared JotForm route and heartbeat styling.
function WorkshopDetails({ workshop, onClose, onSelect }) {
  const details = getDetails(workshop)
  const similar = workshops.filter((item) => item.title !== workshop.title && item.tag === workshop.tag && item.imageSrc).slice(0, 3)
  const faqs = [
    ['Can I customise my workshop?', 'Yes. Customisation is available on request, subject to materials and event requirements.'],
    ['Is this suitable for beginners?', 'Absolutely. Our facilitators guide you through each stage and provide all materials.'],
    ['Can you host private events?', 'Yes, we can bring the workshop to birthdays, corporate events, schools, and celebrations.'],
  ]

  return (
    <div className="fixed inset-0 z-60 overflow-y-auto bg-[#fffaf6] text-slate-900">
      <div className="mx-auto min-h-screen max-w-7xl px-4 py-4 sm:px-8 sm:py-8">
        <button type="button" onClick={onClose} className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold shadow-sm transition hover:border-slate-400 sm:absolute sm:right-8 sm:top-8 sm:mb-0 sm:p-3" aria-label="Close workshop details">
          <ArrowLeft size={17} className="sm:hidden" />
          <X size={19} className="hidden sm:block" />
          <span className="sm:hidden">Back to workshops</span>
        </button>

        <div className="grid overflow-hidden rounded-4xl border border-orange-100 bg-white shadow-xl shadow-orange-100/50 sm:mt-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
          <div className="aspect-4/3 min-h-70 sm:aspect-auto sm:min-h-155"><WorkshopGallery key={workshop.title} workshop={workshop} expanded /></div>
          <div className="flex flex-col p-6 sm:p-10 lg:p-14">
            <div className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-orange-500"><Sparkles size={15} /> {workshop.tag}</div>
            <h1 className="max-w-xl text-3xl font-black leading-tight sm:text-5xl">{workshop.title}</h1>
            <p className="mt-5 text-base leading-7 text-slate-600">{details.fullDescription}</p>
            <dl className="mt-8 grid grid-cols-2 gap-3 text-sm">
              {[['Duration', details.duration], ['Suitable age', details.age], ['Hardness', details.hardness], ['Customisation', 'Available on request!']].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-orange-50/70 p-4"><dt className="text-xs font-bold uppercase tracking-wide text-slate-500">{label}</dt><dd className="mt-1 font-bold text-slate-900">{value}</dd></div>
              ))}
            </dl>
            <Link to="/quote" {...quoteLinkWarmupHandlers} className="heart-beat mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-pink-500 via-orange-500 to-yellow-400 px-6 py-4 text-sm font-black text-white shadow-lg shadow-orange-200 transition hover:from-pink-600 hover:via-orange-600 hover:to-yellow-500"><Heart size={17} fill="currentColor" /> Get Your Quote Now!</Link>
          </div>
        </div>

        <section className="mx-auto max-w-3xl py-12 sm:py-16">
          <h2 className="text-2xl font-black sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-5 divide-y divide-orange-100 border-y border-orange-100">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8 text-base font-bold marker:hidden">{question}<span className="float-right text-orange-500 transition group-open:rotate-45">+</span></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{answer}</p></details>)}
          </div>
        </section>

        {similar.length > 0 && <section className="hidden border-t border-orange-100 py-12 lg:block"><h2 className="text-2xl font-black">You may also enjoy</h2><div className="mt-6 grid grid-cols-3 gap-6">{similar.map((item) => <button type="button" key={item.title} onClick={() => onSelect(item)} className="group text-left"><div className="aspect-4/3 overflow-hidden rounded-3xl bg-slate-100"><img src={item.imageSrc} alt={item.title} width="800" height="600" loading="lazy" decoding="async" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><h3 className="mt-3 font-black">{item.title}</h3><p className="mt-1 text-sm text-slate-500">View workshop details <ArrowRight className="inline" size={14} /></p></button>)}</div></section>}
      </div>
    </div>
  )
}

// Holds the card currently opened in the expanded product view.
// Each catalogue card below updates this state when clicked or activated with the keyboard.
export default function WorkshopsPage() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null)

  useEffect(() => {
    setPageSeo({
      title: 'DIY Workshops in Kuala Lumpur | Crafted By You',
      description: 'Explore hands-on DIY craft workshops for corporate teams, birthdays, private events, and celebrations in Kuala Lumpur.',
      path: '/workshops',
    })
  }, [])

  return (
    <div className="min-h-screen w-full overflow-visible bg-slate-50 px-4 py-10 pb-16 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-900 sm:text-4xl">All DIY Workshops</h1>
            <p className="mt-2 text-slate-600 font-medium">
              Explore our full catalogue of 23+ hands-on craft experiences.
            </p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-100 hover:shadow"
          >
            ← Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedWorkshop(workshop)}
              onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setSelectedWorkshop(workshop) }}
              className="group relative grid aspect-square cursor-pointer overflow-hidden rounded-[2.2rem] border border-slate-200 bg-slate-900 shadow-xl shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              <div className="col-start-1 row-start-1 h-full w-full transition-transform duration-700 group-hover:scale-105">{workshop.imageSrc ? <WorkshopGallery workshop={workshop} /> : <div className="h-full w-full bg-linear-to-br from-pink-500 to-orange-500" />}</div>
              <div className="col-start-1 row-start-1 h-full w-full bg-linear-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
              
              <div className="absolute top-5 left-5 z-20">
                <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest rounded-full border border-white/40 shadow-sm">
                  {workshop.tag}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-2">
                <h3 className="text-2xl font-black text-white leading-tight drop-shadow-md">{workshop.title}</h3>
                <p className="text-xs sm:text-sm text-white/85 line-clamp-2 leading-relaxed font-medium">
                  {workshop.description}
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <Link
                    to="/quote"
                    {...quoteLinkWarmupHandlers}
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-orange-500 px-5 py-2 text-xs font-black text-white shadow-md transition-all hover:scale-105"
                  >
                    Get a Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedWorkshop && <WorkshopDetails workshop={selectedWorkshop} onClose={() => setSelectedWorkshop(null)} onSelect={setSelectedWorkshop} />}
    </div>
  )
}
