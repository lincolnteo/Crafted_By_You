import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { workshops } from '../data/workshops'
import { prewarmJotform } from '../utils/jotform'

const quoteLinkWarmupHandlers = {
  onMouseEnter: prewarmJotform,
  onFocus: prewarmJotform,
  onTouchStart: prewarmJotform,
}

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
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

        {/* Render cards from shared workshop dataset in App.jsx modern overlay card style */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="group relative overflow-hidden rounded-[2.2rem] bg-slate-900 aspect-square cursor-pointer shadow-xl shadow-slate-200/60 border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20"
            >
              {workshop.imageSrc ? (
                <img
                  src={workshop.imageSrc}
                  alt={workshop.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-linear-to-br from-pink-500 to-orange-500 group-hover:scale-108 transition-transform duration-700" />
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent z-10 pointer-events-none" />
              
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
    </div>
  )
}
