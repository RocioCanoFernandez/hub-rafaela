import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin, 
  Globe, 
  Video, 
  Mail, 
  Phone,
  ArrowRight,
  User,
  Download
} from 'lucide-react';

const App = () => {
  const leftLinks = [
    {
      title: "Sitio Web Oficial",
      subtitle: "Fotografía & Video Profesional",
      url: "https://rafaelarodriguez.com/",
      icon: <Globe className="w-5 h-5" />,
      primary: true
    },
    {
      title: "Enviar Email",
      subtitle: "elairis8@gmail.com",
      url: "mailto:elairis8@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      title: "Instagram",
      subtitle: "@ela_rafaelarodriguez",
      url: "https://www.instagram.com/ela_rafaelarodriguez/?hl=es",
      icon: <Instagram className="w-5 h-5" />
    },
    {
      title: "YouTube",
      subtitle: "Contenido Audiovisual",
      url: "https://www.youtube.com/watch?v=9SKQiJMWlrk&t=10s",
      icon: <Youtube className="w-5 h-5" />
    }
  ];

  const rightLinks = [
    {
      title: "AAMMA",
      subtitle: "Perfil Asociación Audiovisual",
      url: "https://aammaudiovisual.com/socias/rafaela-rodriguez/#!",
      icon: <User className="w-5 h-5" />
    },
    {
      title: "Vimeo",
      subtitle: "Proyectos y Bobinas",
      url: "http://www.vimeo.com/22381536",
      icon: <Video className="w-5 h-5" />
    },
    {
      title: "LinkedIn",
      subtitle: "Perfil Profesional",
      url: "https://www.linkedin.com/in/rafaela-rodriguez-9b222a16/",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      title: "Facebook",
      subtitle: "Comunidad y Eventos",
      url: "https://www.facebook.com/ela.rafaelarodriguez#",
      icon: <Facebook className="w-5 h-5" />
    }
  ];

  const LinkCard = ({ link }) => (
    <a 
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 w-full
        ${link.primary 
          ? 'bg-[#222] text-white border-[#222] shadow-2xl shadow-black/20 hover:-translate-y-1' 
          : 'bg-white/80 backdrop-blur-md border-black/5 hover:border-black/20 hover:shadow-xl hover:-translate-y-1'}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`${link.primary ? 'text-white/40' : 'text-black/30'} group-hover:scale-110 transition-transform`}>
          {link.icon}
        </div>
        <div className="text-left">
          <span className="block font-bold text-sm tracking-wide">{link.title}</span>
          <span className={`block text-[10px] uppercase tracking-widest mt-0.5 opacity-50 font-medium`}>
            {link.subtitle}
          </span>
        </div>
      </div>
      <ArrowRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ${link.primary ? 'text-white' : 'text-black/30'}`} />
    </a>
  );

  const handleSaveContact = () => {
    const vcard = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:Rafaela Rodriguez\r\nORG:Rafaela Rodriguez\r\nTITLE:Photography & Video\r\nTEL;TYPE=CELL:+34620191289\r\nEMAIL:elairis8@gmail.com\r\nURL:https://hub-hub-rafaela.npfusf.easypanel.host/\r\nEND:VCARD`;
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rafaela_Rodriguez.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen font-sans bg-[#f9f8f6] text-[#222] flex flex-col selection:bg-[#222] selection:text-white relative overflow-hidden">
      
      {/* BACKGROUND IMAGE - Full screen on mobile, Right side on desktop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/rafaela-fondo.png" 
          alt="" 
          className="w-full h-full object-cover opacity-45 lg:opacity-100 lg:w-1/2 lg:translate-x-full lg:object-right-top"
        />
        {/* Subtle transition for desktop to blend the fabric texture */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 w-64 bg-gradient-to-r from-[#f9f8f6] via-[#f9f8f6]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        {/* Header Section */}
        <div className="w-full p-8 md:p-16 lg:px-24 lg:pt-20 lg:pb-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="relative group">
              <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border border-white shadow-2xl bg-white transition-transform duration-700 group-hover:scale-105">
                <img 
                  src="/rafaela-foto.jpeg" 
                  alt="Rafaela Rodriguez" 
                  className="w-full h-full object-cover scale-125"
                  onError={(e) => e.target.src = "https://ui-avatars.com/api/?name=Rafaela+Rodriguez&background=222&color=fff"}
                />
              </div>
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-extralight tracking-[0.2em] uppercase leading-tight font-serif mb-2">
                Rafaela <br className="hidden lg:block"/> Rodriguez
              </h1>
              <p className="text-sm tracking-[0.4em] uppercase opacity-40 font-medium">Photography & Video</p>
            </div>
          </div>
        </div>

        {/* Links Grid - Two Columns */}
        <div className="flex flex-col lg:flex-row w-full px-6 md:px-16 lg:px-24 gap-4 lg:gap-12 mb-20 max-w-7xl mx-auto">
          <div className="flex-1 flex flex-col gap-4">
            {leftLinks.map((link, i) => <LinkCard key={i} link={link} />)}
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {rightLinks.map((link, i) => <LinkCard key={i} link={link} />)}
          </div>
        </div>

        {/* Footer Contact */}
        <div className="mt-auto p-8 md:px-16 lg:px-24 border-t border-black/5 flex flex-wrap gap-10 items-center bg-white/40 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none">
          <a href="https://wa.me/34620191289" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-sm">
              <Phone className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">620 191 289</span>
          </a>
          <div className="flex-grow"></div>
          <p className="text-[10px] opacity-20 uppercase tracking-[0.3em] font-medium hidden sm:block">© 2024 Rafaela Rodriguez</p>
        </div>
      </div>

      <button
        onClick={handleSaveContact}
        className="fixed top-6 right-6 w-14 h-14 bg-white/90 backdrop-blur-md text-slate-700 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 z-50 group border border-white/50 cursor-pointer"
        title="Descargar Contacto"
        aria-label="Descargar Contacto"
      >
        <Download className="w-6 h-6 group-hover:text-slate-900 transition-colors drop-shadow-sm" />
      </button>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34620191289"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#fcfcfc] text-[#222] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 z-50 group border border-black/5"
        title="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 fill-current opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
