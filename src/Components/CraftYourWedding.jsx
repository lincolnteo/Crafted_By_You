import React from 'react'

const WHATSAPP_NUMBER = '60175658275'

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

export default function CraftYourWedding() {
  return (
    <section id="craft-your-wedding" className="bg-white/60 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Craft Your Wedding</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Design the little moments that make your day unforgettable — favours, keepsakes, and workshop experiences tailored to you.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl p-6 bg-rose-50 border border-rose-100 shadow-sm">
            <h3 className="font-bold text-rose-700">Pick Favours</h3>
            <p className="mt-2 text-sm text-slate-600">Choose from handcrafted candles, pouches, charms and personalised keepsakes.</p>
          </div>

          <div className="rounded-2xl p-6 bg-amber-50 border border-amber-100 shadow-sm">
            <h3 className="font-bold text-amber-700">Book a Workshop</h3>
            <p className="mt-2 text-sm text-slate-600">Add an onsite DIY experience to surprise guests and create shared memories.</p>
          </div>

          <div className="rounded-2xl p-6 bg-pink-50 border border-pink-100 shadow-sm">
            <h3 className="font-bold text-pink-700">Create Keepsakes</h3>
            <p className="mt-2 text-sm text-slate-600">From 3D hand casting to memory books — custom-made to celebrate your story.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button onClick={() => openWhatsApp('Hello CraftedByYou, I\'d like to craft my wedding — please advise next steps.')} className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold">Enquire on WhatsApp</button>
          <a href="/wedding-experience-catalogue.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full border border-slate-200">Download PDF</a>
        </div>
      </div>
    </section>
  )
}
