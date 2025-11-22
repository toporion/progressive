import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { 
  ArrowRight, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Cpu,
  Maximize2,
  Terminal,
  Activity
} from 'lucide-react';

const ContactUs = () => {
  const [time, setTime] = useState(new Date());
  
  // Update time for that "Live System" feel
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-cyan-500 selection:text-white overflow-hidden relative flex flex-col">
      
      {/* --- BACKGROUND FX --- */}
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      {/* Ambient Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

  

      {/* --- MAIN CONTENT SPLIT --- */}
      <div className="flex-1 grid lg:grid-cols-12 relative z-10">
        
        {/* LEFT COLUMN: The "Holographic" Info Panel */}
        <div className="lg:col-span-5 p-8 md:p-16 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10 space-y-12">
            <div>
         
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                LET'S <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CONSTRUCT</span>
              </h1>
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Ready to transform your corporate void into an ergonomic powerhouse? Initialize your project request.
              </p>
            </div>

            {/* Digital Contact Cards */}
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <ContactCard 
                icon={<MapPin size={18} />} 
                label="HQ COORDINATES" 
                value="219-220, Malibagh “Sufilodge”, Dhaka – 1217" 
              />
              <ContactCard 
                icon={<Mail size={18} />} 
                label="DIGITAL COMMS" 
                value="contact@progressiveintbd.com" 
                highlight
              />
              <ContactCard 
                icon={<Phone size={18} />} 
                label="VOICE LINK" 
                value="+880 1711-520-371" 
              />
            </div>
          </div>

          {/* Decorative Background Elements for Left Panel */}
          <div className="absolute right-0 bottom-0 opacity-10">
            <Maximize2 size={300} strokeWidth={0.5} />
          </div>
        </div>

        {/* RIGHT COLUMN: The "Terminal" Form */}
        <div className="lg:col-span-7 bg-zinc-900/30 border-l border-zinc-800/50 backdrop-blur-md relative">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/80 via-zinc-950/90 to-black z-0"></div>
          
          <div className="relative z-10 h-full overflow-y-auto p-8 md:p-16">
            <div className="max-w-xl mx-auto">
            

              <ModernForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

const ContactCard = ({ icon, label, value, highlight }) => (
  <div className="flex items-start gap-4 group cursor-default">
    <div className={`p-3 rounded bg-zinc-900/50 border ${highlight ? 'border-cyan-500/50 text-cyan-400' : 'border-zinc-800 text-zinc-400'} group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-300`}>
      {icon}
    </div>
    <div>
      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">{label}</div>
      <div className={`font-medium ${highlight ? 'text-cyan-100' : 'text-zinc-300'} group-hover:text-white transition-colors`}>{value}</div>
    </div>
  </div>
);

const ModernForm = () => {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  const [activeField, setActiveField] = useState(null);
  
  // Watch the project type to add visual feedback
  const selectedType = watch("projectType");

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    // Handle success state here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      
      {/* SECTION 1: IDENTITY */}
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
        <h3 className="text-xs font-mono text-cyan-500 flex items-center gap-2">
          <Activity size={12} /> 01 // IDENTIFICATION
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <InputGroup 
            id="name" 
            label="FULL NAME" 
            register={register} 
            required 
            error={errors.name}
            active={activeField === 'name'}
            onFocus={() => setActiveField('name')}
            onBlur={() => setActiveField(null)}
          />
          <InputGroup 
            id="company" 
            label="ORGANIZATION" 
            register={register} 
            active={activeField === 'company'}
            onFocus={() => setActiveField('company')}
            onBlur={() => setActiveField(null)}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <InputGroup 
            id="email" 
            label="EMAIL ADDRESS" 
            type="email"
            register={register} 
            required 
            error={errors.email}
            active={activeField === 'email'}
            onFocus={() => setActiveField('email')}
            onBlur={() => setActiveField(null)}
          />
          <InputGroup 
            id="phone" 
            label="CONTACT NUMBER" 
            register={register} 
            active={activeField === 'phone'}
            onFocus={() => setActiveField('phone')}
            onBlur={() => setActiveField(null)}
          />
        </div>
      </div>

      {/* SECTION 2: SPECS */}
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
        <h3 className="text-xs font-mono text-cyan-500 flex items-center gap-2">
          <Cpu size={12} /> 02 // PROJECT PARAMETERS
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {['Interior Decor', 'Structural Civil', 'MEP Engineering', 'Consultancy'].map((type) => (
            <label key={type} className="cursor-pointer group relative">
              <input 
                type="radio" 
                value={type} 
                {...register("projectType", { required: true })} 
                className="peer sr-only"
              />
              {/* Visual Tile */}
              <div className="h-24 p-4 rounded bg-zinc-900 border border-zinc-800 flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:bg-zinc-800 peer-checked:bg-cyan-950/20 peer-checked:border-cyan-500 peer-checked:shadow-[0_0_20px_rgba(6,182,212,0.15)]">
                <div className={`w-2 h-2 rounded-full ${selectedType === type ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-zinc-700'}`}></div>
                <span className={`text-sm font-medium ${selectedType === type ? 'text-cyan-400' : 'text-zinc-400'} group-hover:text-white`}>
                  {type}
                </span>
              </div>
              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-cyan-500 transition-colors"></div>
            </label>
          ))}
        </div>
        {errors.projectType && <p className="text-red-500 text-xs font-mono">>> ERROR: SELECTION REQUIRED</p>}

        <div className="relative mt-8">
           <textarea
            {...register("message", { required: true })}
            rows={4}
            className="w-full bg-transparent border-b border-zinc-800 py-4 text-white placeholder-transparent focus:outline-none focus:border-cyan-500 transition-colors resize-none peer text-lg"
            placeholder="Brief"
            id="message"
            onFocus={() => setActiveField('message')}
            onBlur={() => setActiveField(null)}
           />
           <label 
            htmlFor="message"
            className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono text-xs
              ${activeField === 'message' || watch('message') 
                ? '-top-4 text-cyan-500' 
                : 'top-4 text-zinc-600 uppercase tracking-widest'
              }`}
           >
            Project Brief / Scope
           </label>
           {/* Animated Line */}
           <div className={`absolute bottom-0 left-0 h-[1px] bg-cyan-500 transition-all duration-500 ${activeField === 'message' ? 'w-full' : 'w-0'}`}></div>
        </div>
      </div>

      {/* SUBMIT ACTION */}
      <div className="pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
        <button 
          disabled={isSubmitting}
          className="w-full group relative bg-white text-black h-16 rounded overflow-hidden font-bold tracking-widest hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            {isSubmitting ? 'INITIALIZING UPLOAD...' : 'TRANSMIT DATA'}
            {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </span>
          
          {/* Button Hover Glare Effect */}
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-[10px] text-zinc-600 font-mono">
            ENCRYPTED CONNECTION // 256-BIT SSL SECURE
          </p>
        </div>
      </div>

    </form>
  );
};

const InputGroup = ({ id, label, type = "text", register, required, error, active, onFocus, onBlur }) => (
  <div className="relative group">
    <input
      type={type}
      {...register(id, { required })}
      id={id}
      onFocus={onFocus}
      onBlur={onBlur}
      className="w-full bg-transparent border-b border-zinc-800 py-3 text-white placeholder-transparent focus:outline-none focus:border-cyan-500 transition-colors peer"
      placeholder={label}
    />
    <label 
      htmlFor={id}
      className={`absolute left-0 transition-all duration-300 pointer-events-none font-mono text-xs
        ${active || document.getElementById(id)?.value 
          ? '-top-4 text-cyan-500' 
          : 'top-3 text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400'
        }`}
    >
      {label}
    </label>
    {/* The Animated Bottom Line */}
    <div className={`absolute bottom-0 left-0 h-[1px] bg-cyan-500 transition-all duration-500 ${active ? 'w-full' : 'w-0'}`}></div>
    
    {error && <span className="absolute right-0 top-3 text-[10px] text-red-500 font-mono">>> REQUIRED</span>}
  </div>
);

export default ContactUs;