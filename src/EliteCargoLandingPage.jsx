import React, { useState } from "react";
import { Users, Plane, Truck, Warehouse, BadgeCheck, Clock, Globe, Network, ShieldCheck, Zap, Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function EliteCargoLandingPage() {
  const { t } = useTranslation();
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    setFormStatus(t('form.sending'));
    e.preventDefault();
    const form = e.target;
    const data = {
      nom: form.nom.value,
      email: form.email.value,
      objet: form.objet.value,
      message: form.message.value
    };
    try {
      const res = await fetch("https://cargo-elite.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      setFormStatus(result.success ? t('form.success') : t('form.error'));
      if (result.success) form.reset();
      setTimeout(() => setFormStatus(null), 5000);
    } catch (err) {
      console.error(err);
      setFormStatus(t('form.serverError'));
      setTimeout(() => setFormStatus(null), 5000);
    }
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  const services = [
    {
      icon: <Plane className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: t('services.freight.title'),
      description: t('services.freight.description')
    },
    {
      icon: <Truck className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: t('services.customs.title'),
      description: t('services.customs.description')
    },
    {
      icon: <Users className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: t('services.moving.title'),
      description: t('services.moving.description')
    }
  ];
  const reasons = [
    { 
      icon: <ShieldCheck className="w-8 h-8 text-[#00a199] mb-3" />, 
      title: t('reasons.reliability.title'), 
      desc: t('reasons.reliability.desc') 
    },
    { 
      icon: <Zap className="w-8 h-8 text-[#00a199] mb-3" />, 
      title: t('reasons.reactivity.title'), 
      desc: t('reasons.reactivity.desc') 
    },
    { 
      icon: <Globe className="w-8 h-8 text-[#00a199] mb-3" />, 
      title: t('reasons.network.title'), 
      desc: t('reasons.network.desc') 
    }
  ];

  const team = [
    {
      name: t('team.members.director.name'),
      role: t('team.members.director.role'),
      image: "images/team/aminouLawani.png"
    },
    {
      name: t('team.members.admin.name'),
      role: t('team.members.admin.role'),
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: t('team.members.operations.name'),
      role: t('team.members.operations.role'),
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  const stats = [
    {
      icon: <Warehouse className="w-10 h-10 text-white mb-4" />,
      value: t('stats.warehouses.value'),
      label: t('stats.warehouses.label')
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-white mb-4" />,
      value: t('stats.employees.value'),
      label: t('stats.employees.label')
    },
    {
      icon: <Clock className="w-10 h-10 text-white mb-4" />,
      value: t('stats.experience.value'),
      label: t('stats.experience.label')
    }
  ];
  const partners = [
    { name: "Air France", logo: "https://cdn.brandfetch.io/idddYhP85r/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Ethiopian airlines", logo: "https://cdn.brandfetch.io/idA9s40f4v/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Royal Air Maroc", logo: "https://cdn.brandfetch.io/idelgXOOOS/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Brussels Airlines", logo: "https://cdn.brandfetch.io/idiZLXv-wz/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
    { name: "Asky", logo: "https://cdn.brandfetch.io/idFPXMyIRS/w/400/h/167/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" }
  ];
  const branches = [
    { 
      country: t('branches.guinea.country'), 
      name: t('branches.guinea.name'), 
      note: t('branches.guinea.note'), 
      flag: "https://flagcdn.com/16x12/gn.png"
    },
    { 
      country: t('branches.mali.country'), 
      name: t('branches.mali.name'), 
      note: t('branches.mali.note'), 
      flag: "https://flagcdn.com/16x12/ml.png" 
    },
    { 
      country: t('branches.senegal.country'), 
      name: t('branches.senegal.name'), 
      note: t('branches.senegal.note'), 
      flag: "https://flagcdn.com/16x12/sn.png" 
    },
    { 
      country: t('branches.benin.country'), 
      name: t('branches.benin.name'), 
      note: t('branches.benin.note'), 
      flag: "https://flagcdn.com/16x12/bj.png"
    },
    { 
      country: t('branches.ivoryCoast.country'), 
      name: t('branches.ivoryCoast.name'), 
      note: t('branches.ivoryCoast.note'), 
      flag: "https://flagcdn.com/16x12/ci.png"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Fixed Navigation */}
      <header className="sticky top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-white/90 backdrop-blur-lg shadow-lg">
        <div className="flex items-center gap-2">
          <img src="/images/elite.svg" alt="Elite Cargo" className="h-10 w-auto" />
          <span className="text-sm font-extrabold text-[#007d6f] tracking-tight">Elite Cargo</span>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="https://elite-cargo.net/about" className="text-gray-700 hover:text-[#00a199] transition">{t('nav.about')}</a>
            <a href="https://elite-cargo.net/services" className="text-gray-700 hover:text-[#00a199] transition">{t('nav.services')}</a>
            <a href="https://elite-cargo.net/team" className="text-gray-700 hover:text-[#00a199] transition">{t('nav.team')}</a>
            <a href="https://elite-cargo.net/stats" className="text-gray-700 hover:text-[#00a199] transition">{t('nav.stats')}</a>
            <a href="https://elite-cargo.net/certifications" className="text-gray-700 hover:text-[#00a199] transition">{t('nav.partners')}</a>
            <a href="https://elite-cargo.net/contact" className="text-gray-700 hover:text-[#00a199] transition">{t('nav.contact')}</a>
          </nav>
          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero amélioré */}
      <section className="relative h-screen text-white">
        <img
          src="https://images.unsplash.com/photo-1599741977044-82663d0d5500?q=80&w=3270&auto=format&fit=crop"
          alt="Aéroport"
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10" />

        <motion.div
          className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-20 text-left max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="h-2 w-20 bg-white mb-6"></div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-md md:text-md max-w-2xl text-white/90 mb-9 font-light">
            {t('hero.subtitle')}
          </p>
          <button className="bg-white text-[#007d6f] font-bold px-8 py-3 rounded-lg shadow hover:scale-105 transition">
            <a href="#contact">{t('hero.cta')}</a>
          </button>
        </motion.div>
      </section>

      <section id="about" className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#007d6f]">{t('about.title')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('about.text1')}
            </p>
            <p className="text-gray-600">
              {t('about.text2')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=3135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fret Elite Cargo"
                className="w-full h-full object-cover scale-105 brightness-90 transition duration-500 hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section modernisée avec icônes */}
      <section id="services" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">{t('services.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border hover:border-[#00a199] hover:shadow-lg p-8 rounded-2xl transition duration-300 text-left"
              >
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres clés revisités */}
      <section id="stats" className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-left"
          >
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">{t('stats.title')}</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-gradient-to-br from-[#007d6f] to-[#00a199] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center overflow-hidden"
              >
                {/* Animated background effect */}
                <motion.div 
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Icon with rotation animation */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  {item.icon}
                </motion.div>

                {/* Counter animation for the value */}
                <motion.p 
                  className="text-4xl font-bold mb-1"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {item.value}
                </motion.p>

                {/* Label with slide up animation */}
                <motion.p 
                  className="text-white/90 text-sm tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                >
                  {item.label}
                </motion.p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Pourquoi nous choisir */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">{t('reasons.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="bg-[#f0fdfa] border border-[#00a199]/10 rounded-2xl p-8 shadow-sm hover:shadow-md transition text-left"
              >
                {reason.icon}
                <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-sm text-gray-600">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Section Filiales alternée sans cards */}
      <section className="py-24 px-6 bg-gradient-to-br from-white to-[#f0fdfa]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">{t('branches.title')}</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block border-l-4 border-dashed border-[#00a199] absolute h-full left-1/2 transform -translate-x-1/2"></div>
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`relative w-full md:w-1/2 px-6 py-6 ${index % 2 === 0 ? 'md:pr-16 md:text-right ml-auto' : 'md:pl-16 md:text-left mr-auto'}`}
              >
                <div className="absolute top-6 w-4 h-4 rounded-full bg-[#00a199] border-4 border-white left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="text-sm">
                  <div className={`flex items-center gap-3 mb-1 justify-${index % 2 === 0 ? 'end' : 'start'}`}> 
                    <img src={branch.flag} alt={branch.country} className="w-6 h-4 object-cover rounded-sm shadow" />
                    <span className="font-semibold text-[#007d6f]">{branch.name}</span>
                  </div>
                  <p className="text-gray-600">{branch.note}</p>
                  <p className="text-gray-500 italic text-xs">{branch.country}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe modernisée */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">{t('team.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#00a199]"
                />
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       
      {/* Google Map */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              width="100%" 
              height="600" 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ahmed%20sekou%20toure%20internatioinal%20airport+(Elite%20cargo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/collections/personal-trackers/">Personal GPS</a>
            </iframe>
          </div>
        </div>
      </section>
      {/* Partenaires modernisés */}
      <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="mb-10 text-left">
              <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">{t('partners.title')}</h2>
            </div>
            {/* <p className="text-gray-600 max-w-2xl mx-auto">{t('partners.subtitle')}</p> */}
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#007d6f]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-32">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" 
                  />
                </div>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#007d6f] to-[#00a199] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact modernisé avec back-end */}
      <section id="contact" className="py-24 px-6 bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-10 text-left">
              <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
              <h2 className="text-3xl font-bold text-gray-800">{t('contact.title')}</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#007d6f] mt-1" /> {t('contact.address')}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#007d6f]" /> {t('contact.email')}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#007d6f]" /> {t('contact.phone')}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="nom" placeholder={t('contact.form.name')} required className="p-3 border rounded w-full" />
              <input type="email" name="email" placeholder={t('contact.form.email')} required className="p-3 border rounded w-full" />
            </div>
            <input type="text" name="objet" placeholder={t('contact.form.subject')} className="p-3 border rounded w-full" />
            <textarea name="message" rows="4" placeholder={t('contact.form.message')} required className="p-3 border rounded w-full"></textarea>
            <button type="submit" className="bg-[#007d6f] text-white px-6 py-3 rounded hover:bg-[#005f52] flex items-center justify-center gap-2" disabled={formStatus === t('form.sending')}>
              {formStatus === t('form.sending') ? t('form.sending') : t('form.submit')}
            </button>
            {formStatus && <p className="text-sm text-center text-[#007d6f] mt-2">{formStatus}</p>}
          </form>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        {t('footer.rights')} <br />
        {t('footer.madeBy')} <a href="https://imrane.tech" target="_blank" rel="noopener noreferrer" className="text-[#007d6f] font-semibold hover:underline">IMRANE TECH SOLUTIONS</a>
      </footer>
    </main>
  );
}
