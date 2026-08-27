import React from 'react'
import { Link } from 'react-router-dom'
import { prewarmJotform } from '../utils/jotform'

const WHATSAPP_NUMBER = '60175658275'

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const activities = [
  {
    step: '02',
    stage: 'Create together',
    title: 'Scented Flower Candle Gifts',
    description: 'A beautiful handcrafted flower candle symbolising love, warmth, and new beginnings. Personalised with your wedding details, it is a meaningful keepsake your guests can cherish long after your special day.',
    bestFor: 'Intimate receptions and welcome events',
    image: '/assets/wedding/FlowerSoap.png'
  },
  {
    step: '06',
    stage: 'Share your thanks',
    title: 'Fragrance Pouch Gifts',
    description: 'Filled with a delightful blend of natural herbs, this elegant fragrance pouch adds a refreshing scent to wardrobes, handbags, or cars. A thoughtful wedding favour that carries your heartfelt appreciation.',
    bestFor: 'Wedding favours and guest welcome gifts',
    image: '/assets/wedding/Fragrance.png'
  },
  {
    step: '07',
    stage: 'Invite relaxation',
    title: 'Aroma Bath Salt',
    description: 'A relaxing blend of Himalayan salts, Epsom salt, and dried flower petals designed to create a soothing spa experience at home. A perfect way to thank your guests with a little relaxation and self-care.',
    bestFor: 'Self-care favours and bridal party gifts',
    image: '/assets/wedding/AromaBathSalt.png'
  },
  {
    step: '08',
    stage: 'Make it personal',
    title: 'Lovely Name Charm Gifts',
    description: 'A personalised handmade charm featuring each guest\'s name and adorable accessories. Perfect as a bag charm, keychain, or memorable keepsake that reminds them of your special day.',
    bestFor: 'Personalised favours and bridal party gifts',
    image: '/assets/wedding/NameCharm.png'
  },
  {
    step: '09',
    stage: 'Nourish the senses',
    title: 'Floral Body Scrub Gifts',
    description: 'A luxurious handcrafted body scrub made with natural exfoliating ingredients and dried flower petals. It leaves the skin feeling soft, smooth, and refreshed while offering a relaxing spa-like experience at home.',
    bestFor: 'Wellness favours and elegant celebrations',
    image: '/assets/wedding/FloralBodyScrub.png'
  }
]

export default function CraftYourWedding() {
  return (
    <section id="craft-your-wedding" className="bg-white/60 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Craft Your Wedding</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Build a celebration your guests will remember: set the mood, create together, savour the moment, and keep the memories.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {activities.map((activity, index) => (
            <article key={activity.title} className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${index === activities.length - 1 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2' : ''}`}>
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="h-56 w-full bg-slate-50 object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-extrabold text-slate-900 shadow-md">
                  {activity.step}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs font-extrabold uppercase tracking-widest text-pink-500">{activity.stage}</p>
                <h3 className="text-lg font-bold text-slate-900">{activity.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{activity.description}</p>
                <div className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <p><span className="font-bold text-slate-700">Best for:</span> {activity.bestFor}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button onClick={() => openWhatsApp('Hello CraftedByYou, I\'d like to craft my wedding — please advise next steps.')} className="bg-linear-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold">Enquire on WhatsApp</button>
          <Link
            to="/quote"
            onMouseEnter={prewarmJotform}
            onFocus={prewarmJotform}
            onTouchStart={prewarmJotform}
            className="rounded-full border-2 border-pink-100 bg-white px-6 py-3 font-bold text-pink-600 transition-colors hover:border-pink-300 hover:bg-pink-50"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
