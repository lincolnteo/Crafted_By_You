import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Paintbrush } from 'lucide-react';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { workshops } from './data/workshops';
import CraftYourWedding from './Components/CraftYourWedding';
import { prewarmJotform } from './utils/jotform';
import { setPageSeo } from './utils/seo';

const MotionLink = motion.create(Link);

const TrustindexReviews = () => {
    const widgetRef = React.useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?271d51981ba9864d1f868c433e2';
        script.async = true;
        script.defer = true;
        widgetRef.current?.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);

    return <div ref={widgetRef} className="h-full w-full overflow-auto" aria-label="Google reviews" />;
};

// These handlers start loading the JotForm page before someone clicks a quote button.
const quoteLinkWarmupHandlers = {
    onMouseEnter: prewarmJotform,
    onFocus: prewarmJotform,
    onTouchStart: prewarmJotform,
};

// Scrolls to a section on the landing page when a navbar item is selected.
const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// --- Reusable landing-page components ---

// Fixed top navigation with links to the main page sections and quote/contact actions.
const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-[#FFF8F2]/80 backdrop-blur-md border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
            <div className="text-lg sm:text-2xl font-bold text-slate-900 flex items-center gap-2 leading-none">
                <img
                    src="/assets/branding/logo.png"
                    alt="Crafted By You logo"
                    width="56"
                    height="56"
                    className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-contain"
                />
                Crafted By <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-orange-500">You</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
                <button type="button" onClick={() => scrollToSection('workshops')} className="hover:text-pink-500 transition-colors">Workshops</button>
                <button type="button" onClick={() => scrollToSection('wedding')} className="hover:text-pink-500 transition-colors">Wedding</button>
                <button type="button" onClick={() => scrollToSection('gallery')} className="hover:text-orange-500 transition-colors">Gallery</button>
                <button type="button" onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About Us</button>
                <button type="button" onClick={() => scrollToSection('contact')} className="hover:text-orange-500 transition-colors">Find Us!</button>

            </div>
            <div className="flex items-center gap-2">
                <a
                    href="https://wa.me/60175658275?text=Hello%20CraftedByYou%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-full border-2 border-green-500 px-3 py-2 text-xs font-bold text-green-600 transition-colors hover:bg-green-50 sm:px-5 sm:py-2.5 sm:text-sm"
                >
                    <FaWhatsapp aria-hidden="true" />
                    <span className="sm:hidden">WhatsApp</span>
                    <span className="hidden sm:inline">Enquire on WhatsApp</span>
                </a>
                <Link to="/quote" {...quoteLinkWarmupHandlers} className="bg-linear-to-r from-pink-500 to-orange-500 text-white px-3 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-pink-500/30 hover:scale-105 transition-all duration-300">
                    Get a Quote
                </Link>
            </div>
        </div>
    </nav>
);

// Decorative animated color shape used behind the hero content.
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

// One curated workshop card. Clicking it opens the full workshop catalogue.
const WorkshopCard = ({ title, tag, gradient, imageSrc }) => (
    <MotionLink
        to="/workshops"
        aria-label={`View ${title} workshop details`}
        whileHover={{ y: -15, scale: 1.03, rotate: 2 }}
        className="group relative block aspect-square w-full min-w-0 cursor-pointer overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-slate-200/50 sm:rounded-[2.5rem]"
    >
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
        <div className="absolute left-3 top-3 z-20 sm:left-6 sm:top-6">
            <span className="rounded-full border border-white/40 bg-white/20 px-2 py-1 text-[9px] font-black uppercase tracking-wider text-white shadow-sm backdrop-blur-md sm:px-4 sm:py-1.5 sm:text-xs sm:tracking-widest">
                {tag}
            </span>
        </div>
        <div className="absolute bottom-4 left-4 z-20 pr-3 sm:bottom-8 sm:left-8 sm:pr-6">
            <h3 className="mb-1 text-base font-black leading-tight text-white sm:mb-3 sm:text-3xl">{title}</h3>
            <div className="flex items-center font-bold text-pink-300 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                <span className="text-xs sm:text-base">View Details</span>
                <ArrowRight size={16} className="ml-1 sm:ml-2 sm:h-5 sm:w-5" />
            </div>
        </div>
        {imageSrc ? (
            <img src={imageSrc} alt={title} width="800" height="800" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700" />
        ) : (
            <div className={`w-full h-full bg-linear-to-br ${gradient} group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700`} />
        )}
    </MotionLink>
);

// Hero background images. Keeping these in an array makes future rotation easy.
const heroBackgrounds = [
    '/assets/backgrounds/header_background.png',
];

// Brand logos displayed in the client section near the bottom of the page.
const clients = [
    { name: 'Vinda', logoSrc: '/assets/clients/Vinda.png' },
    { name: 'UOB', logoSrc: '/assets/clients/UOB.png' },
    { name: 'Traveloka', logoSrc: '/assets/clients/traveloka.png' },
    { name: 'TITAN', logoSrc: '/assets/clients/TITAN.png' },
    { name: 'Safi', logoSrc: '/assets/clients/Safi.png' },
    { name: 'Prasarana', logoSrc: '/assets/clients/Prasarana.png' },
    { name: 'Pantai KL', logoSrc: '/assets/clients/Pantai.png' },
    { name: 'MRC', logoSrc: '/assets/clients/MRC.png' },
    { name: 'Magnum', logoSrc: '/assets/clients/Magnum.png' },
    { name: 'LE Consulting', logoSrc: '/assets/clients/LEConsulting.png' },
    { name: 'Kingsbee', logoSrc: '/assets/clients/Kingsbee.png' },
    { name: 'IQVIA', logoSrc: '/assets/clients/IQVIA.png' },
    { name: 'GAMUDA', logoSrc: '/assets/clients/GAMUDA.png' },
    { name: 'Four Season', logoSrc: '/assets/clients/FourSeason.png'},
    { name: 'Leap Motor', logoSrc: '/assets/clients/LeapMotor.png' },
    { name: 'Coway', logoSrc: '/assets/clients/Coway.png' }
];

// Images used by the two continuously scrolling gallery rows.
const galleryPhotos = [
    { title: 'Gallery 1', imageSrc: '/assets/gallery/gallery1.jpeg' },
    { title: 'Gallery 2', imageSrc: '/assets/gallery/gallery2.jpeg' },
    { title: 'Gallery 3', imageSrc: '/assets/gallery/gallery3.jpeg' },
    { title: 'Gallery 4', imageSrc: '/assets/gallery/gallery4.jpeg' },
    { title: 'Gallery 5', imageSrc: '/assets/gallery/gallery5.jpeg' },
    { title: 'Gallery 6', imageSrc: '/assets/gallery/gallery6.jpeg' },
    { title: 'Gallery 7', imageSrc: '/assets/gallery/gallery7.jpeg' },
    { title: 'Gallery 8', imageSrc: '/assets/gallery/gallery8.jpeg' },
    { title: 'Gallery 9', imageSrc: '/assets/gallery/gallery9.jpeg' },
    { title: 'Gallery 10', imageSrc: '/assets/gallery/gallery10.jpeg' },
    { title: 'Gallery 11', imageSrc: '/assets/gallery/gallery11.jpeg' },
    { title: 'Gallery 13', imageSrc: '/assets/gallery/gallery13.jpeg' },
    { title: 'Gallery 14', imageSrc: '/assets/gallery/gallery14.jpeg' },    
    { title: 'Gallery 15', imageSrc: '/assets/gallery/gallery15.jpeg' },
    { title: 'Gallery 16', imageSrc: '/assets/gallery/gallery16.jpeg' },
];

// Partner cards shown in the Creative Partners section.
const partnerAssets = [
    {
        title: 'MyEnsy',
        imageSrc: '/assets/partners/MyEnsyLogo.png',
        description:
            'MYENSY Academy provides DIY hands-on courses, professional aromatherapy certification, customized perfumery guides, and a one-stop shop for pure essential oils, carrier oils, and material kits. This helps you complete the full "learn + do + create" experience from the comfort of your home.',
    },
    {
        title: 'smovf',
        imageSrc: '/assets/partners/smovf.png',
        description:
            'Let your brand scent stand out. SMOVF FRAGRANCE is quickly making waves in the perfume industry by offering unique and alluring scents.',
    },
    {
        title: 'Luumi Space',
        imageSrc: '/assets/partners/LuumiSpaceLogo.png',
        description:
            'Luumi Space is proudly certified in SDCA, KGAD, and KPIA, with credentials from Korea. We are dedicated to delivering high-value craftsmanship through our range of artistic creations.',
    },
];

const workshopProducts = workshops.filter((workshop) => workshop.tag !== 'Custom Request');
// Chooses the small set of workshop cards shown in Curated Experiences.
const getRandomWorkshopSpotlights = (workshops, count = 3) => {
    if (!Array.isArray(workshops) || workshops.length === 0) return [];
    // Lightweight shuffle is sufficient for rotating spotlight cards.
    const shuffled = [...workshops].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, shuffled.length));
};
const ClientsSection = () => (
    <section id="clients" className="bg-slate-50 px-4 sm:px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 md:text-5xl">Our Clients</h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-600 font-medium">
                    Trusted by teams across industries.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
                {clients.map((client) => (
                    <div
                        key={client.name}
                        className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                    >
                        <img src={client.logoSrc} alt={client.name} width="240" height="96" loading="lazy" decoding="async" className="max-h-12 w-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const AssetsSection = () => (
    <section className="bg-linear-to-b from-rose-50 via-white to-orange-50 px-4 sm:px-6 py-16 sm:py-24 border-y border-rose-100">
        <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
                <p className="mx-auto inline-flex items-center rounded-full border border-rose-200 bg-white/80 px-4 py-1 text-xs font-black uppercase tracking-widest text-rose-500">
                    Our Collaborators
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 md:text-5xl">
                    Creative <span className="bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">Partners</span>
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-slate-600 font-medium">
                    At Crafted By You, we collaborate with experienced workshop facilitators to offer a wider range
                    of creative and experiential activities. Through these partnerships, we bring unique workshops and
                    specialized skills to our community, ensuring every experience remains engaging, meaningful, and
                    thoughtfully curated.
                </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
                {partnerAssets.map((asset, index) => (
                    <figure
                        key={asset.title}
                        className="overflow-hidden rounded-2xl border border-rose-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                        <div className={`mb-4 h-1 w-full rounded-full ${index % 2 === 0 ? 'bg-linear-to-r from-pink-400 to-rose-400' : 'bg-linear-to-r from-orange-400 to-amber-400'}`} />
                        <img src={asset.imageSrc} alt={asset.title} width="640" height="192" loading="lazy" decoding="async" className="h-24 w-full object-contain" />
                        <figcaption className="mt-3 text-center text-xs font-black uppercase tracking-wider text-slate-600">
                            {asset.title}
                        </figcaption>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{asset.description}</p>
                    </figure>
                ))}
            </div>
        </div>
    </section>
);

const GallerySection = () => {
    const galleryRef = React.useRef(null);
    const resumeAutoScrollRef = React.useRef(null);
    const galleryAnimationRef = React.useRef(null);
    const loopedGalleryPhotos = [...galleryPhotos, ...galleryPhotos];

    useEffect(() => {
        const gallery = galleryRef.current;
        if (gallery) gallery.scrollLeft = gallery.scrollWidth / 2;
    }, []);

    useEffect(() => () => {
        window.clearTimeout(resumeAutoScrollRef.current);
        window.cancelAnimationFrame(galleryAnimationRef.current);
    }, []);

    const animateGalleryScroll = (distance) => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        window.cancelAnimationFrame(galleryAnimationRef.current);
        const start = gallery.scrollLeft;
        const duration = 650;
        const startedAt = performance.now();

        const animate = (now) => {
            const progress = Math.min((now - startedAt) / duration, 1);
            const easedProgress = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;

            gallery.scrollLeft = start + distance * easedProgress;
            if (progress < 1) {
                galleryAnimationRef.current = window.requestAnimationFrame(animate);
            } else {
                galleryAnimationRef.current = null;
            }
        };

        galleryAnimationRef.current = window.requestAnimationFrame(animate);
    };

    const pauseAutoScroll = () => {
        window.clearTimeout(resumeAutoScrollRef.current);
        resumeAutoScrollRef.current = window.setTimeout(() => {
            resumeAutoScrollRef.current = null;
        }, 2500);
    };

    useEffect(() => {
        const autoScroll = window.setInterval(() => {
            if (resumeAutoScrollRef.current) return;

            animateGalleryScroll(window.innerWidth >= 640 ? 370 : 300);
        }, 3000);

        return () => window.clearInterval(autoScroll);
    }, []);

    const handleGalleryWheel = (event) => {
        pauseAutoScroll();
        const wheelDistance = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
        if (!wheelDistance) return;

        event.preventDefault();
        event.stopPropagation();
        galleryRef.current?.scrollBy({ left: wheelDistance, behavior: 'smooth' });
    };

    const handleGalleryScroll = () => {
        const gallery = galleryRef.current;
        if (!gallery) return;

        const setWidth = gallery.scrollWidth / 2;
        if (gallery.scrollLeft <= 0) gallery.scrollLeft += setWidth;
        if (gallery.scrollLeft >= setWidth) gallery.scrollLeft -= setWidth;
    };

    return (
        <section id="gallery" className="bg-slate-100 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mb-10 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">Photo Gallery</h2>
                        <p className="heart-beat mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-slate-500 shadow-sm backdrop-blur-sm">
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 text-pink-500 fill-none stroke-current stroke-2">
                                <path d="M8 7v7a4 4 0 0 0 8 0V7a4 4 0 0 0-8 0Z" strokeLinecap="round" />
                                <path d="M12 5v4" strokeLinecap="round" />
                            </svg>
                            <span className="hidden sm:inline">Scroll to explore</span>
                            <span className="sm:hidden">Swipe to explore</span>
                        </p>
                    </div>
                </div>
            </div>

            <div
                ref={galleryRef}
                onWheelCapture={handleGalleryWheel}
                onTouchStart={pauseAutoScroll}
                onTouchMove={pauseAutoScroll}
                onTouchEnd={pauseAutoScroll}
                onScroll={handleGalleryScroll}
                className="flex snap-x snap-mandatory overscroll-contain touch-pan-x gap-5 overflow-x-auto px-4 pb-4 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] sm:px-6"
            >
                {loopedGalleryPhotos.map((photo, index) => (
                    <article key={`${photo.title}-${index}`} className="w-[280px] shrink-0 snap-always snap-center overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm sm:w-[350px]">
                        {photo.imageSrc ? (
                            <img src={photo.imageSrc} alt={photo.title} width="350" height="250" loading="lazy" decoding="async" className="h-52 w-full object-cover sm:h-64" />
                        ) : (
                            <div className="flex h-52 w-full items-center justify-center bg-slate-200 text-sm font-semibold text-slate-600 sm:h-64">Add photo here</div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
};

// --- Landing page ---

export default function App() {
    // Four cards are rendered on mobile; the fourth is hidden at the desktop breakpoint below.
    const [spotlightWorkshops, setSpotlightWorkshops] = useState(() => getRandomWorkshopSpotlights(workshopProducts, 4));

    useEffect(() => {
        setPageSeo({
            title: 'Crafted By You | DIY Workshops & Corporate Events',
            description: 'Hands-on DIY craft workshops for corporate events, team building, birthdays, and private sessions in Kuala Lumpur. Request a quote with Crafted By You.',
            path: '/',
        });

        const intervalId = setInterval(() => {
            setSpotlightWorkshops(getRandomWorkshopSpotlights(workshopProducts, 4));
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="min-h-screen bg-[#FFF8F2] text-slate-900 selection:bg-pink-200 selection:text-pink-900 overflow-hidden">
            <Navbar />

            <main>

            {/* Hero: main introduction and primary actions. */}
            <section className="relative pt-28 sm:pt-40 pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
                {/* Animated Background Blobs */}
                <FloatingBlob className="w-96 h-96 bg-pink-300 -top-20 -left-10" delay={0} duration={8} />
                <FloatingBlob className="w-120 h-120 bg-yellow-300 top-20 right-0" delay={2} duration={10} />
                <FloatingBlob className="w-80 h-80 bg-violet-300 bottom-10 left-1/3" delay={1} duration={9} />

                <div className="absolute inset-0 z-0 opacity-20">
                    <img src={heroBackgrounds[0]} alt="" width="1920" height="1080" fetchPriority="high" decoding="async" className="h-full w-full object-cover" />
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] font-black leading-[1.1] md:leading-[1.05] mb-6 sm:mb-8 text-slate-900">
                            Your One-Stop DIY Craft <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-orange-500">Workshops</span>, Event & Supplies
                        </h1>

                        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-700 mb-8 sm:mb-12 leading-relaxed font-medium">
                            We transform corporate office spaces into vibrant artisanal studios. High-energy,
                            hands-on workshops designed to melt stress, spark innovation, and build unbreakable team bonds.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <MotionLink
                                to="/quote"
                                {...quoteLinkWarmupHandlers}
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

            {/* Curated Experiences: two columns on mobile and three on desktop. */}
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

                    <div className="grid grid-cols-2 gap-3 sm:gap-8 md:grid-cols-3">
                        {spotlightWorkshops.map((workshop, index) => (
                            <div key={`${workshop.title}-${index}`} className={`min-w-0 ${index > 2 ? 'md:hidden' : ''}`}>
                                <WorkshopCard
                                    title={workshop.title}
                                    tag={workshop.tag}
                                    imageSrc={workshop.imageSrc}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Separate wedding-focused experience page section. */}
            <CraftYourWedding id="wedding" /> 
            {/* Scrolling photo gallery. */}
            <GallerySection />
            {/* About section. */}
            <section id="about" className="py-16 sm:py-32 px-4 sm:px-6 bg-[#F8F8F8]">
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
                                Why Forward-Thinking <br /> Teams Choose <span className="text-violet-700">CraftedByYou</span>
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
                                            <h3 className="font-black text-lg sm:text-xl mb-2">{item.title}</h3>
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
                            className="relative aspect-square bg-white rounded-4xl sm:rounded-[3rem] overflow-hidden shadow-2xl shadow-violet-900/10 border-8 border-white flex items-center justify-center p-8"
                        >
                            <TrustindexReviews />
                        </motion.div>
                    </div>
                </div>
            </section>

            <AssetsSection />

            <ClientsSection />

            </main>

            {/* Contact Footer */}
            <footer id="contact" className="bg-linear-to-br from-violet-900 via-purple-900 to-fuchsia-900 text-white overflow-hidden">
                <div className="mx-auto grid max-w-7xl gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="min-h-90 bg-white/10 p-4 sm:p-6 lg:p-8">
                        <div className="h-full overflow-hidden rounded-[1.75rem] border border-white/25 bg-white shadow-2xl shadow-black/10">
                            <iframe
                                title="Crafted By You location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9257263688414!2d101.72741727342634!3d3.114352696861179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc372cb924eb2b%3A0xfb7f0640ee198b4f!2sCrafted%20by%20You!5e0!3m2!1sen!2sie!4v1773589933553!5m2!1sen!2sie"
                                className="h-105 w-full lg:h-full min-h-105"
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
                                <p className="text-sm sm:text-base uppercase tracking-[0.35em] text-white/70">WhatsApp us</p>
                                <a href="tel:+60175658275" className="inline-flex text-2xl sm:text-4xl font-black text-yellow-300 hover:text-yellow-200 transition-colors">
                                    +60 17-565 8275
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 flex items-center gap-5 text-white/85">
                            <a href="https://www.instagram.com/craftedbyyou97/" target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://wa.me/60175658275" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                                <FaWhatsapp size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/crafted-by-you-at-sc-arts-studio/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="https://www.facebook.com/craftedbyyou977" target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15 hover:text-white">
                                <FaFacebookF size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
