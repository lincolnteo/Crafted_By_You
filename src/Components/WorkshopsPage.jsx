import { Link } from 'react-router-dom'

const workshops = [
  {
    title: 'The Ceramic Reset',
    tag: 'Pottery',
    description: 'Hands-on wheel and hand-building session focused on mindfulness and flow.',
    imageSrc: '',
  },
  {
    title: 'Modern Macrame',
    tag: 'Fiber Art',
    description: 'Contemporary knotting techniques that blend design thinking with collaboration.',
    imageSrc: '',
  },
  {
    title: 'Abstract Expression',
    tag: 'Painting',
    description: 'Color-led painting workshop built to encourage creative confidence.',
    imageSrc: '',
  },
  {
    title: 'Leathercraft Essentials',
    tag: 'Leather',
    description: 'Design and make custom small leather goods with hand-finishing techniques.',
    imageSrc: '',
  },
  {
    title: 'Candle Lab',
    tag: 'Fragrance',
    description: 'Create signature candles and scent blends tailored to your team vibe.',
    imageSrc: '',
  },
  {
    title: 'Jesmonite Studio',
    tag: 'Casting',
    description: 'Mix, pour, and finish modern decor pieces using eco-friendly materials.',
    imageSrc: '',
  },
  {
    title: 'Terrarium Build Bar',
    tag: 'Nature Craft',
    description: 'Build desk-friendly terrariums while exploring visual balance and composition.',
    imageSrc: '',
  },
  {
    title: 'Tufting for Teams',
    tag: 'Textile',
    description: 'Collaborative rug-making experience that turns team ideas into tactile art.',
    imageSrc: '',
  },
  {
    title: 'Linocut Print Jam',
    tag: 'Printmaking',
    description: 'Carve and print custom artwork that can become company keepsakes.',
    imageSrc: '',
  },
  {
    title: 'Kintsugi Mindset',
    tag: 'Ceramics',
    description: 'Repair broken ceramics with gold accents as a lesson in resilience and growth.',
    imageSrc: '',
  },
]

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold sm:text-4xl">All Workshops</h1>
            <p className="mt-2 text-slate-600">
              Explore our full catalogue of 10 team-building workshop experiences.
            </p>
          </div>
          <Link
            to="/"
            className="rounded-full border border-slate-300 px-5 py-2 text-sm font-semibold transition-colors hover:border-slate-400 hover:bg-white"
          >
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workshops.map((workshop) => (
            <article
              key={workshop.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              {workshop.imageSrc ? (
                <img
                  src={workshop.imageSrc}
                  alt={workshop.title}
                  className="mb-4 h-44 w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="mb-4 flex h-44 w-full items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 text-sm font-semibold text-slate-500">
                  Add workshop image here
                </div>
              )}
              <span className="mb-4 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600">
                {workshop.tag}
              </span>
              <h2 className="mb-3 text-2xl font-bold text-slate-900">{workshop.title}</h2>
              <p className="mb-5 text-slate-600">{workshop.description}</p>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-orange-600"
              >
                Get a Quote
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
