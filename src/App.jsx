import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, ArrowRight, CheckCircle2, Sparkles, Paintbrush, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#FFF8F2]/80 backdrop-blur-md border-b border-orange-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
      <div className="text-lg sm:text-2xl font-bold text-slate-900 flex items-center gap-2 leading-none">
        <img
          src="/assets/Website/branding/logo.png"
          alt="Crafted By You logo"
          className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-contain"
        />
        Crafted By <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">You</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
        <button type="button" onClick={() => scrollToSection('workshops')} className="hover:text-pink-500 transition-colors">Workshops</button>
        <button type="button" onClick={() => scrollToSection('gallery')} className="hover:text-pink-500 transition-colors">Gallery</button>
        <button type="button" onClick={() => scrollToSection('testimonials')} className="hover:text-orange-500 transition-colors">Find Us!</button>
      </div>
      <Link to="/quote" className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
        Get a Quote
      </Link>
    </div>
  </nav>
);

const FloatingBlob = ({ className, delay = 0, duration = 7 }) => (
  <motion.div
    animate={{ 
      y: [0, -40, 0],
      x: [0, 30, -10, 0],
      rotate: [0, 45, -15, 0],
      scale: [1, 1.2, 0.9, 1]
    }}
    transition={{ duration, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute rounded-full mix-blend-multiply filter blur-2xl opacity-60 ${className}`}
  />
);

const WorkshopCard = ({ title, tag, delay, gradient, imageSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
    whileHover={{ y: -15, scale: 1.03, rotate: 2 }}
    className="group relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/5] cursor-pointer shadow-xl shadow-slate-200/50"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
    <div className="absolute top-6 left-6 z-20">
      <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest rounded-full border border-white/40 shadow-sm">
        {tag}
      </span>
    </div>
    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 z-20 pr-4 sm:pr-6">
      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">{title}</h3>
      <Link to="/workshops" className="flex items-center text-pink-300 group-hover:text-white group-hover:gap-3 transition-all duration-300 font-bold">
        <span>View Details</span>
        <ArrowRight size={20} className="ml-2" />
      </Link>
    </div>
    {imageSrc ? (
      <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700" />
    ) : (
      <div className={`w-full h-full bg-gradient-to-br ${gradient} group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700`} />
    )}
  </motion.div>
);

const heroBackgrounds = [
  '/assets/Website/backgrounds/header_background.png',
];

const clients = [
  { name: 'Vinda', logoSrc: '/assets/Website/clients/Vinda.png' },
  { name: 'UOB', logoSrc: '/assets/Website/clients/UOB.png' },
  { name: 'Traveloka', logoSrc: '/assets/Website/clients/traveloka.png' },
  { name: 'TITAN', logoSrc: '/assets/Website/clients/TITAN.png' },
  { name: 'Safi', logoSrc: '/assets/Website/clients/Safi.png' },
  { name: 'Prasarana', logoSrc: '/assets/Website/clients/Prasarana.png' },
  { name: 'Pantai KL', logoSrc: '/assets/Website/clients/Pantai KL.png' },
  { name: 'MRC', logoSrc: '/assets/Website/clients/MRC.png' },
  { name: 'Magnum', logoSrc: '/assets/Website/clients/Magnum.png' },
  { name: 'LE Consulting', logoSrc: '/assets/Website/clients/LE Consulting.png' },
  { name: 'Kingsbee', logoSrc: '/assets/Website/clients/Kingsbee.png' },
  { name: 'IQVIA', logoSrc: '/assets/Website/clients/IQVIA.png' },
  { name: 'GAMUDA', logoSrc: '/assets/Website/clients/GAMUDA.png' },
  { name: 'Four Season', logoSrc: '/assets/Website/clients/Four Season.png' },
];

const galleryPhotos = [
  { title: 'Gallery 1', imageSrc: '/assets/Website/gallery/gallery1.jpeg' },
  { title: 'Gallery 2', imageSrc: '/assets/Website/gallery/gallery2.jpeg' },
  { title: 'Gallery 3', imageSrc: '/assets/Website/gallery/gallery3.jpeg' },
  { title: 'Gallery 4', imageSrc: '/assets/Website/gallery/gallery4.jpeg' },
  { title: 'Gallery 5', imageSrc: '/assets/Website/gallery/gallery5.jpeg' },
  { title: 'Gallery 7', imageSrc: '/assets/Website/gallery/gallery7.jpeg' },
  { title: 'Gallery 8', imageSrc: '/assets/Website/gallery/gallery8.jpeg' },
  { title: 'Gallery 9', imageSrc: '/assets/Website/gallery/gallery9.jpeg' },
  { title: 'Gallery 10', imageSrc: '/assets/Website/gallery/gallery10.jpg' },
  { title: 'Gallery 11', imageSrc: '/assets/Website/gallery/gallery11.jpeg' },
  { title: 'Gallery 12', imageSrc: '/assets/Website/gallery/gallery12.jpeg' },
  { title: 'Gallery 13', imageSrc: '/assets/Website/gallery/gallery13.jpeg' },
  { title: 'Gallery 15', imageSrc: '/assets/Website/gallery/gallery15.jpeg' },
  { title: 'Gallery 16', imageSrc: '/assets/Website/gallery/gallery16.jpeg' },
  { title: 'Gallery 17', imageSrc: '/assets/Website/gallery/gallery17.jpeg' },
  { title: 'Gallery 18', imageSrc: '/assets/Website/gallery/gallery18.jpeg' },
  { title: 'Gallery 20', imageSrc: '/assets/Website/gallery/gallery20.jpeg' },
  { title: 'Gallery 21', imageSrc: '/assets/Website/gallery/gallery21.jpg' },
];

const brandAssets = [
  { title: 'Logo', imageSrc: '/assets/Website/branding/logo.png' },
  { title: 'New Logo', imageSrc: '/assets/Website/branding/New Logo.png' },
  { title: 'Slogan', imageSrc: '/assets/Website/branding/Slogan.png' },
  { title: 'New Slogan', imageSrc: '/assets/Website/branding/New_Slogan.png' },
  { title: 'New Slogan 1', imageSrc: '/assets/Website/branding/New_Slogan1.png' },
];

const partnerAssets = [
  { title: 'MyEnsy', imageSrc: '/assets/Website/partners/MyEnsyLogo.png' },
  { title: 'smovf', imageSrc: '/assets/Website/partners/smovf.jpeg' },
];

const workshopSpotlightImages = [
  '/assets/Website/workshops/Aromatheraphy Spray-Mist.jpeg',
  '/assets/Website/workshops/FloralBathSalt.png',
  '/assets/Website/workshops/Scented_Candle.png',
];

const workshopMarqueeItems = [
  'Aromatherapy Spray Mist',
  'Floral Bath Salt',
  'Cute Charm',
  'Clay Diffuser',
  'Fluid Bear',
  'Herbal Flower Pouch',
  'Acrylic Pour Painting',
  'Terrarium Build',
  'Mosaic Vase',
  'Perfume Bar',
  'Neon Sign Art',
  'Tufting',
];

const allWorkshopImages = [
  { title: 'Aromatherapy Spray Mist', tag: 'Wellness', imageSrc: '/assets/Website/workshops/Aromatheraphy Spray-Mist.jpeg' },
  { title: 'Bath Salt', tag: 'Wellness', imageSrc: '/assets/Website/workshops/FloralBathSalt.png' },
  { title: 'Cute Charm', tag: 'Accessories', imageSrc: '/assets/Website/workshops/CuteCharm.jpeg' },
  { title: 'Clay Diffuser', tag: 'Ceramics', imageSrc: '/assets/Website/workshops/Clay Diffuser.jpg.jpeg' },
  { title: 'Fluid Bear', tag: 'Art', imageSrc: '/assets/Website/workshops/fluid_bear.jpg' },
  { title: 'Herbal Pouch', tag: 'Fragrance', imageSrc: '/assets/Website/workshops/Herbal_Flower_Fragrance_Pouch.jpeg' },
  { title: 'Lotion', tag: 'Self Care', imageSrc: '/assets/Website/workshops/lotion.jpg' },
  { title: 'Acrylic Pour Painting', tag: 'Painting', imageSrc: '/assets/Website/workshops/acrylic_pour_painting.jpg' },
  { title: 'Terrarium', tag: 'Nature Craft', imageSrc: '/assets/Website/workshops/1terrarium.png' },
  { title: 'Mosaic Vase', tag: 'Mosaic', imageSrc: '/assets/Website/workshops/1Mosaic Vase.jpg' },
  { title: 'Postcard', tag: 'Paper Craft', imageSrc: '/assets/Website/workshops/postcard.jpeg' },
  { title: 'Perfume', tag: 'Fragrance', imageSrc: '/assets/Website/workshops/perfume.jpeg' },
  { title: 'Neon Sign', tag: 'Decor', imageSrc: '/assets/Website/workshops/neon_sign.jpg' },
  { title: 'Mosaic Vase 2', tag: 'Mosaic', imageSrc: '/assets/Website/workshops/mosaic_vase.png' },
  { title: 'Mosaic Arts', tag: 'Mosaic', imageSrc: '/assets/Website/workshops/mosaic_arts.jpg' },
  { title: 'Body Scrub', tag: 'Wellness', imageSrc: '/assets/Website/workshops/Spa_floral_Body_Scrub.jpeg' },
  { title: 'Scented Candle', tag: 'Fragrance', imageSrc: '/assets/Website/workshops/Scented_Candle.png' },
  { title: 'Sand Painting Candle', tag: 'Art', imageSrc: '/assets/Website/workshops/Sand_Painting_Scented_Candle.jpg' },
  { title: 'Terrarium 2', tag: 'Nature Craft', imageSrc: '/assets/Website/workshops/terrarium.png' },
  { title: 'Tufting', tag: 'Textile', imageSrc: '/assets/Website/workshops/tufting.jpg' },
];

const WorkshopsMarquee = () => (
  <section className="bg-violet-900 py-5 sm:py-8 overflow-hidden border-y-4 border-pink-500">
    <div className="flex w-fit">
      <motion.div
        animate={{ x: '-50%' }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
        className="flex items-center whitespace-nowrap"
      >
        {[...allWorkshopImages, ...allWorkshopImages].map((workshop, index) => (
          <div key={`${workshop.title}-${index}`} className="mx-5 sm:mx-10 flex items-center gap-3 sm:gap-4">
            <span className="text-sm sm:text-lg font-black uppercase tracking-wider text-violet-200/90">
              {workshop.title}
            </span>
            <Sparkles className="text-pink-400/70" size={14} />
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const ClientsSection = () => (
  <section id="clients" className="bg-slate-50 px-4 sm:px-6 py-16 sm:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 md:text-5xl">Our Clients</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 font-medium">
          Trusted by teams across industries. Add your 14 logos below.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
          >
            <img src={client.logoSrc} alt={client.name} className="max-h-12 w-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AssetsSection = () => (
  <section className="bg-white px-4 sm:px-6 py-16 sm:py-24 border-y border-slate-200">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 md:text-5xl">Brand & Partners</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 font-medium">
          Brand files and partner logos from your assets folder, shown here without the archive content.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
        {[...brandAssets, ...partnerAssets].map((asset) => (
          <figure key={asset.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <img src={asset.imageSrc} alt={asset.title} className="h-24 w-full object-contain" />
            <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
              {asset.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="bg-slate-100 py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 md:text-5xl">Photo Gallery</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 font-medium">
          Showcase all your event highlights in a continuous scrolling gallery.
        </p>
      </div>
    </div>

      <div className="w-full space-y-5 overflow-hidden">
        <div className="flex w-fit">
          <motion.div
            animate={{ x: '-50%' }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="flex gap-5 whitespace-nowrap"
          >
            {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
              <article
                key={`gallery-top-${photo.title}-${index}`}
                className="w-56 sm:w-64 md:w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                {photo.imageSrc ? (
                  <img src={photo.imageSrc} alt={photo.title} className="h-40 sm:h-52 w-full object-cover" />
                ) : (
                  <div className="flex h-40 sm:h-52 w-full items-center justify-center bg-slate-200 text-sm font-semibold text-slate-600">
                    Add photo here
                  </div>
                )}
              </article>
            ))}
          </motion.div>
        </div>

        <div className="flex w-fit">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 58, repeat: Infinity, ease: 'linear' }}
            className="flex gap-5 whitespace-nowrap"
          >
            {[...galleryPhotos, ...galleryPhotos].map((photo, index) => (
              <article
                key={`gallery-bottom-${photo.title}-${index}`}
                className="w-56 sm:w-64 md:w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                {photo.imageSrc ? (
                  <img src={photo.imageSrc} alt={photo.title} className="h-40 sm:h-52 w-full object-cover" />
                ) : (
                  <div className="flex h-40 sm:h-52 w-full items-center justify-center bg-slate-200 text-sm font-semibold text-slate-600">
                    Add photo here
                  </div>
                )}
              </article>
            ))}
          </motion.div>
        </div>
      </div>
  </section>
);

// --- Main Page ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="min-h-screen bg-[#FFF8F2] text-slate-900 selection:bg-pink-200 selection:text-pink-900 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-40 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Animated Background Blobs */}
        <FloatingBlob className="w-96 h-96 bg-pink-300 -top-20 -left-10" delay={0} duration={8} />
        <FloatingBlob className="w-[30rem] h-[30rem] bg-yellow-300 top-20 right-0" delay={2} duration={10} />
        <FloatingBlob className="w-80 h-80 bg-violet-300 bottom-10 left-1/3" delay={1} duration={9} />

        <div className="absolute inset-0 -z-0 opacity-20">
          <img src={heroBackgrounds[0]} alt="Hero background" className="h-full w-full object-cover" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-black leading-[1.1] md:leading-[1.05] mb-6 sm:mb-8 text-slate-900">
              Your One-Stop DIY Craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">Workshops</span>, Event & Supplies
            </h1>
            
            <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-700 mb-8 sm:mb-12 leading-relaxed font-medium">
              We transform corporate office spaces into vibrant artisanal studios. High-energy, 
              hands-on workshops designed to melt stress, spark innovation, and build unbreakable team bonds.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <MotionLink
                to="/quote"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-slate-900 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-violet-700 shadow-xl shadow-slate-900/20 transition-colors"
              >
                Get a Quote
              </MotionLink>
              <MotionLink
                to="/workshops"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg bg-white border-2 border-pink-100 text-pink-600 hover:border-pink-300 hover:bg-pink-50 shadow-xl shadow-pink-100/50 transition-colors"
              >
                View Workshops
              </MotionLink>
            </div>
          </motion.div>
        </div>
      </section>

      <WorkshopsMarquee />

      {/* Workshop Grid Section */}
      <section id="workshops" className="py-16 sm:py-32 px-4 sm:px-6 bg-cyan-50 relative border-b-4 border-white">
        {/* Decorative corner icon */}
        <Paintbrush className="absolute top-10 right-10 text-cyan-200 opacity-50 rotate-45" size={120} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-5xl font-black mb-4 sm:mb-6 text-slate-900">Curated Experiences</h2>
              <p className="text-base sm:text-lg text-slate-600 font-medium">Select from our most popular corporate modules, completely customizable to match your brand's unique energy.</p>
            </div>
            <MotionLink
              to="/workshops"
              whileHover={{ x: 5 }}
              className="text-sm font-black text-pink-500 flex items-center gap-2 cursor-pointer bg-white px-6 py-3 rounded-full shadow-md"
            >
              VIEW ALL WORKSHOPS <ArrowRight size={18} />
            </MotionLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WorkshopCard 
              title="The Ceramic Reset" 
              tag="Pottery" 
              delay={0.1} 
              imageSrc={workshopSpotlightImages[0]}
            />
            <WorkshopCard 
              title="Modern Macramé" 
              tag="Fiber Art" 
              delay={0.2} 
              imageSrc={workshopSpotlightImages[1]}
            />
            <WorkshopCard 
              title="Abstract Expression" 
              tag="Painting" 
              delay={0.3} 
              imageSrc={workshopSpotlightImages[2]}
            />
          </div>
        </div>
      </section>

      <GallerySection />

      <AssetsSection />

      {/* Features / Benefits */}
      <section id="benefits" className="py-16 sm:py-32 px-4 sm:px-6 bg-[#FFF8F2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-3xl sm:text-5xl font-black leading-[1.1]">
                Why Forward-Thinking <br /> Teams Choose <span className="text-violet-700">ArtisanFlow</span>
              </h2>
              <div className="space-y-8">
                {[
                  { title: "Melt Stress Fast", desc: "Proven sensory activities that dramatically lower cortisol levels and reset the mind.", color: "text-pink-500", bg: "bg-pink-100" },
                  { title: "Break Down Silos", desc: "Non-verbal, joyful collaboration that permanently improves cross-department communication.", color: "text-orange-500", bg: "bg-orange-100" },
                  { title: "Tangible Masterpieces", desc: "Everyone leaves with a high-quality, personal piece of art to proudly display.", color: "text-violet-500", bg: "bg-violet-100" }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex gap-5 p-4 rounded-2xl hover:bg-white transition-colors cursor-default"
                  >
                    <div className={`mt-1 ${item.bg} ${item.color} p-3 rounded-xl h-fit shadow-sm`}>
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-lg sm:text-xl mb-2">{item.title}</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative aspect-square bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-violet-900/10 border-8 border-white"
            >
               <img src="/assets/Website/about/intro1st.jpg" alt="Workshop team" className="absolute inset-0 h-full w-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-br from-pink-300/40 via-purple-300/30 to-indigo-400/40" />
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Users size={140} className="text-white drop-shadow-lg" />
                  </motion.div>
                  <p className="text-white font-black text-lg sm:text-2xl mt-4 sm:mt-6 drop-shadow-md">Team Magic Happens Here</p>
               </div>
               
               {/* Decorative floating shapes over the image */}
               <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full mix-blend-overlay animate-pulse" />
               <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-400 rounded-full mix-blend-overlay animate-bounce" />
            </motion.div>
          </div>
        </div>
      </section>

      <ClientsSection />

      {/* Contact Footer */}
      <footer id="testimonials" className="bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="min-h-[360px] bg-white/10 p-4 sm:p-6 lg:p-8">
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-white/25 bg-white shadow-2xl shadow-black/10">
              <iframe
                title="Crafted By You location"
                src="https://www.google.com/maps?q=G2%20Shoplot,%20Vila%20Vista%20Condominium,%20Jalan%20Selar%204,%20Taman%20Pertama,%2056100%20Cheras,%20Kuala%20Lumpur,%20Malaysia&output=embed"
                className="h-[420px] w-full lg:h-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-left">
            <div className="space-y-10">
              <p className="text-lg sm:text-xl tracking-wide text-white/75">© Crafted By You — Done In Style</p>
              <p className="text-lg sm:text-xl tracking-wide text-white/75">@ SC ARTS STUDIO (KT0518814-M)</p>

              <div className="space-y-3 text-white/90">
                <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-white/70">Crafted By You</p>
                <p className="text-base sm:text-lg leading-relaxed">
                  G2, Vila Vista Condominium, Taman Pertama, 56100, Cheras, Kuala Lumpur
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-white/70">Talk To Us</p>
                <a href="tel:+60175658275" className="inline-flex text-2xl sm:text-4xl font-black text-yellow-300 hover:text-yellow-200 transition-colors">
                  +60 17-5658 275
                </a>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-5 text-white/85">
              <a href="#" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" aria-label="WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                <FaLinkedinIn size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}