import { Link } from 'react-router-dom'

const JOTFORM_EMBED_URL = 'https://form.jotform.com/your-form-id'

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-serif font-semibold sm:text-4xl">Get a Quote</h1>
            <p className="mt-2 text-slate-600">Tell us about your event and we will send your custom quote.</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold transition-colors hover:border-slate-400 hover:bg-white"
          >
            Back to Home
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="Crafted By You Quote Form"
            src={JOTFORM_EMBED_URL}
            className="h-[80vh] w-full"
            frameBorder="0"
            allow="geolocation; microphone; camera; fullscreen"
          />
        </div>
      </div>
    </div>
  )
}
