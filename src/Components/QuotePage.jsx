import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { JOTFORM_FORM_URL, prewarmJotform } from '../utils/jotform'

export default function QuotePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Warm up Jotform host before iframe navigation starts.
    prewarmJotform()
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold sm:text-4xl">Get a Quote</h1>
            <p className="mt-2 text-slate-600">Tell us about your event and we will send your custom quote.</p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold transition-colors hover:border-slate-400 hover:bg-white"
          >
            Back to Home
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm sm:p-4">
          {isLoading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 backdrop-blur-[1px]">
              <div className="flex flex-col items-center gap-3 text-slate-600">
                <span className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-orange-500" aria-hidden="true" />
                <p className="text-sm font-semibold">Loading form...</p>
              </div>
            </div>
          )}
          <iframe
            title="Crafted By You Quote Form"
            src={JOTFORM_FORM_URL}
            className="min-h-[80vh] w-full"
            loading="eager"
            fetchPriority="high"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  )
}
