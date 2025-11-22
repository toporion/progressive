import React from 'react';
import { useForm } from 'react-hook-form';
// Assuming the path is correct based on your snippet
import aboyBanner from '../assets/custom1.png'; 
import { 
  ArrowRight, 
  Award, 
  Users, 
  Instagram, 
  Twitter, 
  Linkedin, 
  MapPin,
  Phone,
  Mail,
  Send,
  Zap,
  Anchor,
  PenTool,
  Factory,
  Layers
} from 'lucide-react';

const ProgressiveAbout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">
      
      {/* --- HERO SECTION: CINEMATIC & TYPOGRAPHIC --- */}
      <header className="relative min-h-[90vh] flex flex-col justify-end pb-20 px-6 md:px-12 overflow-hidden">
        
        {/* Background Image with Modern overlay effects */}
        <div className="absolute inset-0 z-0">
          {/* The Image */}
          <img 
            src={aboyBanner} 
            alt="Interior Design Showcase" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-in fade-in duration-1000"
          />
          {/* Gradient Overlay (Top to Bottom fade) */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-zinc-950/60 to-zinc-950" />
          {/* Radical Gradient (Spotlight effect) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(9,9,11,1)_100%)]" />
        </div>

        {/* Content Z-Index High */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 animate-in slide-in-from-bottom-4 duration-700">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-100">Est. 2008 • Sister Concern of Charuta Pvt Ltd</span>
          </div>

          {/* Massive Typography */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white mb-8 mix-blend-overlay opacity-90">
            PROGRESSIVE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-zinc-500">INT.</span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end border-t border-white/10 pt-8">
            <div className="md:col-span-7">
               <p className="text-lg md:text-2xl font-light text-zinc-300 leading-relaxed max-w-3xl">
                 Specializing in <span className="text-cyan-400 font-medium">Corporate Design</span> & <span className="text-cyan-400 font-medium">Space Planning</span>. 
                 We blend ergonomic analysis with creative passion to turn corporate voids into welcoming environments.
               </p>
            </div>
            <div className="md:col-span-5 flex md:justify-end">
               <div className="flex gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-white">15+</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp.</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">2008</div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Established</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </header>


      {/* --- NARRATIVE SECTION: BENTO GRID LAYOUT --- */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: The Origin (Large) */}
            <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800/50 p-8 md:p-12 rounded-3xl hover:border-cyan-500/30 transition-colors group">
              <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Anchor className="text-cyan-400" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">The Origin Story</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Established in November 2008 by <span className="text-white font-semibold">Altamash Ahmed Sufi</span>, Chairman of Charuta Private Limited. 
                Progressive Int. has grown into a dynamic interior firm with a dedicated team of 15 specialists.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                From manufacturing furniture to fabricating SS work and painting, we cater to Banks, Apparel Showrooms, and Buying Houses with precision.
              </p>
            </div>

            {/* Card 2: The Strength (Highlight) */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/20 blur-[60px] rounded-full pointer-events-none"></div>
              <Factory className="text-zinc-600 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">The Charuta Advantage</h3>
              <p className="text-sm text-zinc-400 mb-6">
                As a sister concern of Charuta Private Limited, we enjoy unique strengths. We leverage Charuta's wide industry recognition and have access to their <span className="text-cyan-400">highly equipped factory</span> situated in Savar.
              </p>
              <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded border border-cyan-500/20">
                POWERED BY CHARUTA
              </div>
            </div>

            {/* Card 3: Philosophy */}
            <div className="bg-zinc-900/50 border border-zinc-800/50 p-8 rounded-3xl hover:border-cyan-500/30 transition-colors">
              <PenTool className="text-zinc-500 mb-6" size={32} />
              <h3 className="text-xl font-bold text-white mb-3">Design Philosophy</h3>
              <p className="text-sm text-zinc-400">
                We create spaces by applying decorating principles, analysis, and knowledge integration. Your needs meet our resources to produce attractive, goal-oriented interior office spaces.
              </p>
            </div>

             {/* Card 4: Stats/Details */}
             <div className="md:col-span-2 bg-zinc-900/50 border border-zinc-800/50 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                      <Award size={24} className="text-green-400" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white">Safety Regulation</h4>
                      <p className="text-xs text-zinc-500">Strict adherence to safety standards</p>
                   </div>
                </div>
                <div className="h-px w-full md:w-px md:h-12 bg-zinc-800"></div>
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <Users size={24} className="text-blue-400" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white">Skilled Workforce</h4>
                      <p className="text-xs text-zinc-500">Proficient Project Managers</p>
                   </div>
                </div>
                <div className="h-px w-full md:w-px md:h-12 bg-zinc-800"></div>
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                      <Layers size={24} className="text-purple-400" />
                   </div>
                   <div>
                      <h4 className="font-bold text-white">Turnkey Solutions</h4>
                      <p className="text-xs text-zinc-500">Civil to Finishing</p>
                   </div>
                </div>
            </div>

          </div>
        </div>
      </section>


      {/* --- SPECIALIZED AREAS: TECH GRID --- */}
      <section className="py-20 bg-black border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized <span className="text-cyan-500">Areas</span></h2>
              <p className="text-zinc-500 max-w-2xl mx-auto">Comprehensive solutions ranging from structural civil works to detailed interior finishing.</p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ServiceItem label="Structural Works" />
              <ServiceItem label="Civil & Glazing" />
              <ServiceItem label="MEP Works" active />
              <ServiceItem label="Plumbing" />
              <ServiceItem label="Fire Fighting" />
              <ServiceItem label="HVAC Works" />
              <ServiceItem label="Electrical Works" active />
              <ServiceItem label="IT & ELV Works" />
              <ServiceItem label="Lift & Elevator" />
              <ServiceItem label="Interior Decoration" highlight />
              <ServiceItem label="Kitchen & Laundry" />
              <ServiceItem label="Landscaping" />
              <ServiceItem label="Signage" />
              <ServiceItem label="Furniture" />
              <ServiceItem label="FF & E" />
              <ServiceItem label="Loose Items" />
           </div>
        </div>
      </section>


      {/* --- CONTACT SECTION (Refined) --- */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden bg-zinc-950">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(6,182,212,0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-12 gap-0 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
            
            {/* Left Side: Info */}
            <div className="md:col-span-5 relative min-h-[500px] bg-zinc-800 flex flex-col justify-between p-8 md:p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/90 to-zinc-900/95 z-0"></div>
              
              {/* Stylized Map Background hint */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Dhaka_Metro_Map.svg/1200px-Dhaka_Metro_Map.svg.png')] bg-cover bg-center grayscale mix-blend-overlay"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2">Get in Touch</h3>
                <p className="text-cyan-200/80 text-sm">Discuss your office or showroom project.</p>
              </div>

              <div className="relative z-10 space-y-8 mt-12">
                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 group-hover/item:border-cyan-500/50 transition-colors">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Head Office</p>
                    <p className="text-white font-medium text-sm leading-relaxed">
                      219-220, Malibagh “Sufilodge”<br/>
                      Dhaka – 1217, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 group-hover/item:border-cyan-500/50 transition-colors">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white font-medium text-sm">deraanad@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item">
                  <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-700 group-hover/item:border-cyan-500/50 transition-colors">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Phones</p>
                    <p className="text-white font-medium text-sm">01711-520-371</p>
                    <p className="text-white font-medium text-sm">01715-006-404</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 flex gap-4">
                <SocialLink icon={<Instagram size={18} />} />
                <SocialLink icon={<Twitter size={18} />} />
                <SocialLink icon={<Linkedin size={18} />} />
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:col-span-7 p-8 md:p-12 bg-zinc-950 relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none"></div>
               <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-zinc-600 text-sm border-t border-zinc-900">
        <p>&copy; {new Date().getFullYear()} Progressive INT. All rights reserved.</p>
      </footer>
    </div>
  );
};

// --- Sub Components ---

const ServiceItem = ({ label, active, highlight }) => (
  <div className={`
    p-4 rounded-xl border transition-all duration-300 cursor-default flex items-center justify-center text-center h-24
    ${highlight 
      ? 'bg-cyan-900/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
      : 'bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:bg-zinc-900'}
  `}>
    {active && <Zap size={14} className="text-cyan-400 absolute top-3 right-3" />}
    <span className={`text-sm font-medium ${highlight ? 'font-bold' : ''}`}>{label}</span>
  </div>
);

const SocialLink = ({ icon }) => (
  <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-cyan-600 hover:text-white text-zinc-400 transition-all border border-zinc-700 hover:border-cyan-500">
    {icon}
  </a>
);

// --- Contact Form Component ---
const ContactForm = () => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful } 
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    reset();
  };

  if (isSubmitSuccessful) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(52,211,153,0.4)]">
          <CheckCircle className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Inquiry Received</h3>
        <p className="text-zinc-400 max-w-xs mx-auto mb-8">We've successfully received your details. Progressive INT team will contact you shortly.</p>
        <button onClick={() => window.location.reload()} className="text-sm text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 group">
          Send another <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Name Field */}
        <div className="group relative">
          <input
            {...register("name", { required: "Name is required" })}
            className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors placeholder-transparent"
            placeholder="Name"
            id="name"
          />
          <label htmlFor="name" className="absolute left-0 -top-3 text-xs text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-600 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-500 transition-all cursor-text">
            Full Name
          </label>
          {errors.name && <span className="text-red-500 text-xs absolute right-0 top-4">{errors.name.message}</span>}
        </div>

        {/* Email Field */}
        <div className="group relative">
          <input
            type="email"
            {...register("email", { 
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email"
              }
            })}
            className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors placeholder-transparent"
            placeholder="Email"
            id="email"
          />
          <label htmlFor="email" className="absolute left-0 -top-3 text-xs text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-600 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-500 transition-all cursor-text">
            Email Address
          </label>
          {errors.email && <span className="text-red-500 text-xs absolute right-0 top-4">{errors.email.message}</span>}
        </div>
      </div>

      {/* Project Type - Modern Radio Selection */}
      <div>
        <label className="block text-xs text-zinc-500 uppercase tracking-wider mb-4">Service Interest</label>
        <div className="grid grid-cols-2 gap-3">
          {['Interior Decor', 'Structural/Civil', 'MEP/HVAC', 'Furniture/Fabrication'].map((type) => (
            <label key={type} className="cursor-pointer relative">
              <input 
                type="radio" 
                value={type} 
                {...register("projectType", { required: true })} 
                className="peer sr-only"
              />
              <div className="px-2 py-3 rounded-lg border border-zinc-800 text-zinc-400 text-xs md:text-sm font-medium text-center transition-all peer-checked:border-cyan-500 peer-checked:bg-cyan-950/30 peer-checked:text-cyan-400 hover:border-zinc-700 hover:bg-zinc-900">
                {type}
              </div>
            </label>
          ))}
        </div>
        {errors.projectType && <p className="text-red-500 text-xs mt-2">Please select a service</p>}
      </div>

      {/* Message */}
      <div className="group relative mt-4">
        <textarea
          rows="2"
          {...register("message", { required: "Please provide details" })}
          className="peer w-full bg-transparent border-b border-zinc-800 py-3 text-white focus:border-cyan-500 focus:outline-none transition-colors placeholder-transparent resize-none"
          placeholder="Message"
          id="message"
        />
        <label htmlFor="message" className="absolute left-0 -top-3 text-xs text-zinc-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-600 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-cyan-500 transition-all cursor-text">
          Project Details...
        </label>
        {errors.message && <span className="text-red-500 text-xs absolute right-0 top-4">{errors.message.message}</span>}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group w-full relative overflow-hidden rounded-xl bg-white text-zinc-950 font-bold py-4 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all active:scale-[0.99] disabled:opacity-70"
        >
           <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
           <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
             {isSubmitting ? 'Sending...' : 'Send Inquiry'} 
             {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
           </span>
        </button>
      </div>
    </form>
  );
};

const CheckCircle = ({ size, className }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

export default ProgressiveAbout;