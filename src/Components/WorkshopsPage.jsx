import { Link } from 'react-router-dom'

const workshops = [
  {
    title: 'Aromatherapy Spray Mist',
    tag: 'Wellness',
    description: 'Make calming spray mists with custom fragrance blends.',
    imageSrc: '/assets/Website/workshops/Aromatheraphy Spray-Mist.jpeg',
  },
  {
    title: 'Floral Bath Salt',
    tag: 'Wellness',
    description: 'Create luxurious bath salts with floral accents.',
    imageSrc: '/assets/Website/workshops/FloralBathSalt.png',
  },
  {
    title: 'Cute Charm',
    tag: 'Accessories',
    description: 'Design playful charm pieces for bags and keys.',
    imageSrc: '/assets/Website/workshops/CuteCharm.jpeg',
  },
  {
    title: 'Clay Diffuser',
    tag: 'Ceramics',
    description: 'Hand-build elegant diffuser forms with clay.',
    imageSrc: '/assets/Website/workshops/Clay Diffuser.jpg.jpeg',
  },
  {
    title: 'Fluid Bear',
    tag: 'Art',
    description: 'Pour vibrant colors to create a fluid bear piece.',
    imageSrc: '/assets/Website/workshops/fluid_bear.jpg',
  },
  {
    title: 'Herbal Flower Pouch',
    tag: 'Fragrance',
    description: 'Craft scented pouches using herbs and florals.',
    imageSrc: '/assets/Website/workshops/Herbal_Flower_Fragrance_Pouch.jpeg',
  },
  {
    title: 'Lotion Lab',
    tag: 'Self Care',
    description: 'Blend nourishing lotions in small batches.',
    imageSrc: '/assets/Website/workshops/lotion.jpg',
  },
  {
    title: 'Acrylic Pour Painting',
    tag: 'Painting',
    description: 'Explore color flow with abstract pour techniques.',
    imageSrc: '/assets/Website/workshops/acrylic_pour_painting.jpg',
  },
  {
    title: 'Terrarium Build',
    tag: 'Nature Craft',
    description: 'Layer soil, stones, and plants into a mini ecosystem.',
    imageSrc: '/assets/Website/workshops/1terrarium.png',
  },
  {
    title: 'Mosaic Vase',
    tag: 'Mosaic',
    description: 'Assemble colorful mosaic patterns on vase forms.',
    imageSrc: '/assets/Website/workshops/1Mosaic Vase.jpg',
  },
  {
    title: 'Postcard Studio',
    tag: 'Paper Craft',
    description: 'Create custom postcards with illustrated details.',
    imageSrc: '/assets/Website/workshops/postcard.jpeg',
  },
  {
    title: 'Perfume Bar',
    tag: 'Fragrance',
    description: 'Mix signature perfumes with top, heart, and base notes.',
    imageSrc: '/assets/Website/workshops/perfume.jpeg',
  },
  {
    title: 'Neon Sign Art',
    tag: 'Decor',
    description: 'Design glowing sign concepts with modern style.',
    imageSrc: '/assets/Website/workshops/neon_sign.jpg',
  },
  {
    title: 'Mosaic Vase 2',
    tag: 'Mosaic',
    description: 'A second mosaic finish with a different surface style.',
    imageSrc: '/assets/Website/workshops/mosaic_vase.png',
  },
  {
    title: 'Mosaic Arts',
    tag: 'Mosaic',
    description: 'Colorful mosaic artwork assembled by hand.',
    imageSrc: '/assets/Website/workshops/mosaic_arts.jpg',
  },
  {
    title: 'Spa Body Scrub',
    tag: 'Wellness',
    description: 'Create a floral body scrub with natural ingredients.',
    imageSrc: '/assets/Website/workshops/Spa_floral_Body_Scrub.jpeg',
  },
  {
    title: 'Scented Candle',
    tag: 'Fragrance',
    description: 'Pour custom candles with clean, warm scents.',
    imageSrc: '/assets/Website/workshops/Scented_Candle.png',
  },
  {
    title: 'Sand Painting Candle',
    tag: 'Art',
    description: 'Blend sand layers and candle making in one workshop.',
    imageSrc: '/assets/Website/workshops/Sand_Painting_Scented_Candle.jpg',
  },
  {
    title: 'Terrarium 2',
    tag: 'Nature Craft',
    description: 'A second terrarium style for greener display options.',
    imageSrc: '/assets/Website/workshops/terrarium.png',
  },
  {
    title: 'Tufting',
    tag: 'Textile',
    description: 'Create tactile textile pieces with tufting tools.',
    imageSrc: '/assets/Website/workshops/tufting.jpg',
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
              Explore our full catalogue of workshop experiences.
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
              <img
                src={workshop.imageSrc}
                alt={workshop.title}
                className="mb-4 h-44 w-full rounded-2xl object-cover"
              />
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
