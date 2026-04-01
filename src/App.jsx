import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const MotionDiv = motion.div

const Navbar = () => (
  <nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      <div className="text-2xl font-bold font-serif text-slate-900">
        Artisan<span className="text-orange-600">Flow</span>
      </div>
      <div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
        <a href="#workshops" className="transition-colors hover:text-orange-600">
          Workshops
        </a>
        <a href="#benefits" className="transition-colors hover:text-orange-600">
          Corporate Benefits
        </a>
        <a href="#testimonials" className="transition-colors hover:text-orange-600">
          Success Stories
        </a>
      </div>
      <Link
        to="/quote"
        className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
      >
        Get a Quote
      </Link>
    </div>
  </nav>
)

const FloatingDecoration = ({ className, delay = 0 }) => (
  <MotionDiv
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
    className={`absolute rounded-full opacity-20 blur-3xl ${className}`}
  />
)

const WorkshopCard = ({ title, tag, delay }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -10 }}
    className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl bg-slate-100"
  >
    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute left-6 top-6 z-20">
      <span className="rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-md">
        {tag}
      </span>
    </div>
    <div className="absolute bottom-8 left-8 z-20">
      <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
      <div className="flex items-center text-orange-400 transition-all group-hover:gap-3">
        <span className="text-sm font-semibold text-white/90">View Details</span>
        <ArrowRight size={18} className="ml-2" />
      </div>
    </div>
    <div className="h-full w-full bg-slate-300 transition-transform duration-700 group-hover:scale-110" />
  </MotionDiv>
)

const clients = [
  { name: 'Client 01', logoSrc: '' },
  { name: 'Client 02', logoSrc: '' },
  { name: 'Client 03', logoSrc: '' },
  { name: 'Client 04', logoSrc: '' },
  { name: 'Client 05', logoSrc: '' },
  { name: 'Client 06', logoSrc: '' },
  { name: 'Client 07', logoSrc: '' },
  { name: 'Client 08', logoSrc: '' },
  { name: 'Client 09', logoSrc: '' },
  { name: 'Client 10', logoSrc: '' },
  { name: 'Client 11', logoSrc: '' },
  { name: 'Client 12', logoSrc: '' },
  { name: 'Client 13', logoSrc: '' },
  { name: 'Client 14', logoSrc: '' },
]

export default function App() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      <Navbar />

      <section className="relative px-6 pb-20 pt-32">
        <FloatingDecoration className="-left-20 -top-20 h-96 w-96 bg-orange-400" />
        <FloatingDecoration className="-right-20 bottom-0 h-80 w-80 bg-blue-400" delay={2} />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ y }}
          >
            <span className="mb-6 inline-block rounded-full bg-orange-50 px-4 py-1.5 text-sm font-bold tracking-wider text-orange-600">
              TRUSTED BY TOP-TIER HR TEAMS
            </span>
            <h1 className="mb-8 text-6xl font-medium font-serif leading-[1.1] md:text-8xl">
              Foster Unity Through <br />
              <span className="italic text-slate-400">Tactile Creativity.</span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
              We transform corporate office spaces into artisanal studios. High-impact
              workshops designed to lower stress, spark innovation, and build team bonds.
            </p>
            <Link
              to="/quote"
              className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-10 py-4 text-lg font-bold text-white transition-all hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-200 sm:w-auto"
            >
              Get a Quote
            </Link>
          </MotionDiv>
        </div>
      </section>

      <section id="workshops" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <h2 className="mb-4 text-4xl font-medium font-serif text-slate-900">Curated Experiences</h2>
              <p className="text-slate-600">
                Select from our most popular corporate modules, each fully customizable to your brand colors and values.
              </p>
            </div>
            <Link to="/workshops" className="flex items-center gap-2 text-sm font-bold text-orange-600">
              VIEW ALL WORKSHOPS <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <WorkshopCard title="The Ceramic Reset" tag="Pottery" delay={0.1} />
            <WorkshopCard title="Modern Macrame" tag="Fiber Art" delay={0.2} />
            <WorkshopCard title="Abstract Expression" tag="Painting" delay={0.3} />
          </div>
        </div>
      </section>

      <section id="benefits" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-medium font-serif leading-tight">
                Why Industry Leaders <br /> Choose ArtisanFlow
              </h2>
              <div className="space-y-6">
                {[
                  { title: 'Stress Reduction', desc: 'Proven sensory activities that lower cortisol levels.' },
                  { title: 'Communication', desc: 'Non-verbal collaboration that breaks down office silos.' },
                  { title: 'Tangible Results', desc: 'Everyone leaves with a high-quality piece of art.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="mt-1 h-fit rounded-lg bg-orange-100 p-2 text-orange-600">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-[4rem] bg-slate-100 shadow-2xl"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-slate-200">
                <Users size={120} className="text-white opacity-40" />
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      <section id="clients" className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-medium font-serif text-slate-900 md:text-5xl">Our Clients</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Trusted by teams across industries. Add your 14 client logos below.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
              >
                {client.logoSrc ? (
                  <img src={client.logoSrc} alt={client.name} className="max-h-12 w-full object-contain" />
                ) : (
                  <span className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {client.name} logo
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="testimonials" className="bg-slate-900 px-6 py-20 text-center text-white">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="mb-8 text-4xl font-serif md:text-5xl">Ready to transform your culture?</h2>
          <p className="mb-10 text-lg text-slate-400">
            Join 200+ companies that use our workshops to retain top talent.
          </p>
          <Link
            to="/quote"
            className="inline-block rounded-full bg-orange-600 px-12 py-4 text-xl font-bold text-white transition-all hover:bg-orange-500"
          >
            Get a Custom Quote
          </Link>
        </MotionDiv>
      </footer>
    </div>
  )
}
