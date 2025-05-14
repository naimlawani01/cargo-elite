import React, { useState } from "react";
import { Users, Plane, Truck, Warehouse, BadgeCheck, Clock, Globe, Network, ShieldCheck, Zap, Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function EliteCargoLandingPage() {

  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nom: form.nom.value,
      email: form.email.value,
      objet: form.objet.value,
      message: form.message.value
    };
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      setFormStatus(result.success ? "Message envoyé ✅" : "Erreur lors de l'envoi ❌");
      if (result.success) form.reset();
    } catch (err) {
      console.error(err);
      setFormStatus("Erreur serveur ❌");
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
      title: "Fret aérien",
      description: "Gestion complète du fret sur les principales compagnies aériennes avec suivi et sécurité optimisés."
    },
    {
      icon: <Truck className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: "Transit & Douane",
      description: "Formalités douanières, transit import/export, documentation spécialisée sur mesure."
    },
    {
      icon: <Users className="w-10 h-10 text-[#007d6f] mb-4" />,
      title: "Déménagement",
      description: "Solutions complètes pour les déménagements professionnels et particuliers à l'international."
    }
  ];
  const reasons = [
    { icon: <ShieldCheck className="w-8 h-8 text-[#00a199] mb-3" />, title: "Fiabilité", desc: "Des délais respectés et un suivi précis de bout en bout." },
    { icon: <Zap className="w-8 h-8 text-[#00a199] mb-3" />, title: "Réactivité", desc: "Une équipe disponible 7j/7 pour vous accompagner." },
    { icon: <Globe className="w-8 h-8 text-[#00a199] mb-3" />, title: "Réseau mondial", desc: "Un maillage international grâce à nos partenaires." }
  ];

  const team = [
    {
      name: "LAWANI Aminou",
      role: "Directeur Général",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "AKOBI Jacques",
      role: "Administration",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "CAMARA Djibril",
      role: "Exploitation Fret",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];
  const stats = [
    {
      icon: <Warehouse className="w-10 h-10 text-white mb-4" />,
      value: "2400 m²",
      label: "d’entrepôts"
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-white mb-4" />,
      value: "+15",
      label: "employés formés"
    },
    {
      icon: <Clock className="w-10 h-10 text-white mb-4" />,
      value: "+20 ans",
      label: "d’expérience"
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
    { country: "Guinée", name: "Elite Cargo Guinée", note: "(Guinée Cargo Handling S)", flag: "https://flagcdn.com/16x12/gn.png"},
    { country: "Mali", name: "Elite Cargo Mali", note: "(Mali Cargo Handling Sarl)", flag: "https://flagcdn.com/16x12/ml.png" },
    { country: "Sénégal", name: "Elite Cargo Sénégal", note: "(Yoff Cargo Express Sarl)", flag: "https://flagcdn.com/16x12/sn.png" },
    { country: "Bénin", name: "Elite Cargo Bénin", note: "(Elite Cargo Sarl)", flag: "https://flagcdn.com/16x12/bj.png"},
    { country: "Côte d’Ivoire", name: "Elite Cargo", note: "(Air Cargo Logistique et Services Sarl)", flag: "https://flagcdn.com/16x12/ci.png"}
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Fixed Navigation */}
      <header className="sticky top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-white/90 backdrop-blur-lg shadow-lg">
      <div className="flex items-center gap-2">
        <img src="/images/elite.svg" alt="Elite Cargo" className="h-10 w-auto" />
        <span className="text-sm font-extrabold text-[#007d6f] tracking-tight">Elite Cargo</span>
      </div>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="text-gray-700 hover:text-[#00a199] transition">À propos</a>
          <a href="#services" className="text-gray-700 hover:text-[#00a199] transition">Services</a>
          <a href="#team" className="text-gray-700 hover:text-[#00a199] transition">Équipe</a>
          <a href="#stats" className="text-gray-700 hover:text-[#00a199] transition">Chiffres</a>
          <a href="#certifications" className="text-gray-700 hover:text-[#00a199] transition">Partenaires</a>
          <a href="#contact" className="text-gray-700 hover:text-[#00a199] transition">Contact</a>
        </nav>
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
            Des solutions logistiques sans frontières
          </h1>
          <p className="text-md md:text-md max-w-2xl text-white/90 mb-8 font-light">
            Elite Cargo vous accompagne avec excellence dans le fret aérien, le transit douanier et le déménagement international depuis 1997.
          </p>
          <button className="bg-white text-[#007d6f] font-bold px-8 py-3 rounded-full shadow hover:scale-105 transition">
            Demander un devis personnalisé
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
            <h2 className="text-3xl font-bold text-[#007d6f]">Qui sommes-nous ?</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Depuis plus de 20 ans, Elite Cargo est le spécialiste du fret aérien, du transit international et du déménagement. Grâce à nos valeurs de réactivité, de rigueur et de transparence, nous offrons un accompagnement sur mesure à tous nos partenaires.
            </p>
            <p className="text-gray-600">
              Notre expertise repose sur un réseau de filiales solides en Afrique de l’Ouest et une équipe hautement qualifiée. Nous assurons chaque étape logistique avec sérieux, de l’enlèvement à la livraison.
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
            <h2 className="text-3xl font-bold text-gray-800">Nos Services</h2>
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
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Nos Nos Chiffres Clés</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-[#007d6f] to-[#00a199] text-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center"
              >
                {item.icon}
                <p className="text-4xl font-bold mb-1">{item.value}</p>
                <p className="text-white/90 text-sm tracking-wide">{item.label}</p>
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
            <h2 className="text-3xl font-bold text-gray-800">Pourquoi nous choisir ?</h2>
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


      {/* Équipe modernisée */}
      <section id="team" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Notre Équipe</h2>
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
       {/* Section Filiales alternée sans cards */}
       <section className="py-24 px-6 bg-gradient-to-br from-white to-[#f0fdfa]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Nos Présences Régionales</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="border-l-4 border-dashed border-[#00a199] absolute h-full left-1/2 transform -translate-x-1/2"></div>
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
      <section id="certifications" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-10 text-left">
            <div className="h-2 w-16 bg-[#007d6f] mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Nos Partenaires & Réseaux</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gray-50 hover:bg-white p-4 rounded-xl shadow text-center flex items-center justify-center h-28"
              >
                <img src={partner.logo} alt={partner.name} className="h-full object-contain" />
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
              <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start gap-2"><MapPin className="w-5 h-5 text-[#007d6f] mt-1" /> Aérogare de fret de l’Aéroport Gbessia de Conakry (République de Guinée)</p>
              <p className="flex items-center gap-2"><Mail className="w-5 h-5 text-[#007d6f]" /> info@elite-cargo.net</p>
              <p className="flex items-center gap-2"><Phone className="w-5 h-5 text-[#007d6f]" /> +224 62 65 25 11</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="nom" placeholder="Nom" required className="p-3 border rounded w-full" />
              <input type="email" name="email" placeholder="Email" required className="p-3 border rounded w-full" />
            </div>
            <input type="text" name="objet" placeholder="Objet" className="p-3 border rounded w-full" />
            <textarea name="message" rows="4" placeholder="Message" required className="p-3 border rounded w-full"></textarea>
            <button type="submit" className="bg-[#007d6f] text-white px-6 py-3 rounded hover:bg-[#005f52]">Envoyer</button>
            {formStatus && <p className="text-sm text-center text-[#007d6f] mt-2">{formStatus}</p>}
          </form>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Elite Cargo. Tous droits réservés.
      </footer>
    </main>
  );
}
