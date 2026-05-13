import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { 
  Bell, 
  UserCircle, 
  ChevronRight,
  LayoutDashboard,
  Youtube,
  Trophy,
  ArrowLeft,
  Plus,
  Users,
  MessageCircle,
  Facebook
} from "lucide-react";

// Components
import Home from "./components/Home";
import ServiceHub from "./components/ServiceHub";
import ContentPage from "./components/ContentPage";
import SoundManager from "./components/SoundManager";
import Photographer from "./components/Photographer";
import Schedule from "./components/Schedule";
import Staff from "./components/Staff";
import Contact from "./components/Contact";

type Page = 'home' | 'service_hub' | 'content' | 'sound_manager' | 'photographer' | 'schedule' | 'staff' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress for custom animations
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home', th: 'หน้าหลัก' },
    { id: 'staff', label: 'Personnel', th: 'บุคลากร' },
    { id: 'service_hub', label: 'Service Hub', th: 'ระบบบริการ' },
    { id: 'schedule', label: 'AV Schedule', th: 'ตารางงาน' },
    { id: 'contact', label: 'Contact', th: 'ช่องทางการติดต่อ' },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface">
      {/* Top Navbar */}
      <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-slate-800 h-20">
        <div className="max-w-[1280px] mx-auto h-full px-8 flex justify-between items-center">
          <div 
            onClick={() => navigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
            id="logo-home-link"
          >
            <div className="relative w-12 h-12 flex items-center justify-center bg-primary rounded-xl overflow-hidden shadow-lg group-hover:shadow-secondary/20 group-hover:scale-105 transition-all outline outline-2 outline-offset-2 outline-transparent group-hover:outline-secondary">
              <img 
                alt="AV Dept Logo" 
                className="h-full w-full object-contain" 
                src="https://lh3.googleusercontent.com/aida/ADBb0uhmFdopB95ekaiZYH8OjTyiqI_0J2TEyezajj-2c0TRrOKVLck0FlTkGFIfVerhy_7JdZvSWYfaZIBDsBS2EcIh9Uaf2kRc1_GeoIiKVEipn-onmvCNkBQOHprcYEZ8Tz-pZr3FyPy9MZFj8lNIQQfvahLL7BRCGWYNduK9GkRY7gIQR2g3J7WC5PcjL5j7_9ZktVmoo8EH3JeIomFZe_as7biGSA_EPXYmHK2eHlKBG17QL3RekDy4-CzDDZmAc6Ff8ERtth9wP54" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-primary leading-none tracking-tight">โสตถิ์</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">AV Department</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center h-full space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id as Page)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  currentPage === item.id 
                    ? 'text-primary bg-secondary-container shadow-md' 
                    : 'text-slate-600 hover:text-primary hover:bg-slate-50'
                }`}
              >
                {item.id === 'home' ? 'Home' : 
                 item.id === 'staff' ? 'บุคลากร' : 
                 item.id === 'service_hub' ? 'Service Hub' : 
                 item.id === 'schedule' ? 'AV Schedule' : 'Contact'}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('schedule')}
              className="hidden sm:block bg-secondary-container text-primary text-xs font-black px-5 py-2.5 rounded-full hover:shadow-lg active:scale-95 transition-all shadow-sm border border-primary/5"
            >
              Book Equipment
            </button>
            <div className="flex items-center gap-1 border-l border-slate-200 pl-4">
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
                <UserCircle size={24} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-secondary-container transition-all" style={{ width: `${scrollProgress}%` }}></div>
      </header>

      {/* Screen Sections with Transitions */}
      <main className="relative">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div key="home">
               <Home onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
          {currentPage === 'service_hub' && (
            <motion.div key="service_hub">
               <ServiceHub onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
          {currentPage === 'content' && (
            <motion.div key="content">
               <ContentPage onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
          {currentPage === 'sound_manager' && (
            <motion.div key="sound_manager">
               <SoundManager onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
          {currentPage === 'photographer' && (
            <motion.div key="photographer">
               <Photographer onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
          {currentPage === 'schedule' && (
            <motion.div key="schedule">
               <Schedule onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
          {currentPage === 'staff' && (
            <motion.div key="staff">
               <Staff onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
          {currentPage === 'contact' && (
            <motion.div key="contact">
               <Contact onNavigate={(page) => navigate(page as Page)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-0 w-full lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 z-50 flex justify-around items-center py-2 px-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
         <MobileNavItem 
          active={currentPage === 'home'} 
          icon={<LayoutDashboard size={20} />} 
          label="หน้าหลัก" 
          onClick={() => navigate('home')} 
         />
         <MobileNavItem 
          active={currentPage === 'service_hub'} 
          icon={<Bell size={20} />} 
          label="บริการ" 
          onClick={() => navigate('service_hub')} 
         />
         <div className="-mt-10 bg-white p-2 rounded-full shadow-xl mb-4">
            <button 
              onClick={() => navigate('schedule')}
              className="w-14 h-14 bg-primary text-secondary-container rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <Plus size={24} />
            </button>
         </div>
         <MobileNavItem 
          active={currentPage === 'staff'} 
          icon={<Users size={20} />} 
          label="ทีมงาน" 
          onClick={() => navigate('staff')} 
         />
         <MobileNavItem 
          active={currentPage === 'contact'} 
          icon={<MessageCircle size={20} />} 
          label="ติดต่อ" 
          onClick={() => navigate('contact')} 
         />
      </nav>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16 px-8 mt-24">
        <div className="max-w-[1280px] mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-12">
              <div className="space-y-4">
                 <div className="flex items-center gap-2">
                    <img 
                       alt="Logo" 
                       className="h-10 w-auto grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" 
                       src="https://lh3.googleusercontent.com/aida/ADBb0uhmFdopB95ekaiZYH8OjTyiqI_0J2TEyezajj-2c0TRrOKVLck0FlTkGFIfVerhy_7JdZvSWYfaZIBDsBS2EcIh9Uaf2kRc1_GeoIiKVEipn-onmvCNkBQOHprcYEZ8Tz-pZr3FyPy9MZFj8lNIQQfvahLL7BRCGWYNduK9GkRY7gIQR2g3J7WC5PcjL5j7_9ZktVmoo8EH3JeIomFZe_as7biGSA_EPXYmHK2eHlKBG17QL3RekDy4-CzDDZmAc6Ff8ERtth9wP54" 
                       onClick={() => navigate('home')} 
                    />
                 </div>
                 <p className="text-xs uppercase tracking-[0.2em] font-bold text-slate-400">© 2024 School AV Department. The Professional Creative.</p>
              </div>
              
              <div className="flex flex-wrap gap-8 lg:gap-12">
                 <FooterLink label="Support Desk" />
                 <FooterLink label="Equipment FAQ" />
                 <FooterLink label="Brand Guidelines" />
                 <FooterLink label="Privacy" />
              </div>
           </div>
           
           <div className="flex justify-between items-center pt-12 border-t border-slate-200">
              <div className="flex gap-4">
                 <SocialIcon icon={<Youtube size={20} />} />
                 <SocialIcon icon={<Facebook size={20} />} />
                 <SocialIcon icon={<Trophy size={20} />} />
              </div>
              <div className="text-[10px] uppercase font-black text-primary tracking-widest bg-secondary-container px-3 py-1 rounded">Thailand</div>
           </div>
        </div>
      </footer>
    </div>
  );
}

function MobileNavItem({ active, icon, label, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 flex-1 py-1 transition-all ${active ? 'text-primary scale-110' : 'text-slate-400 opacity-60'}`}
    >
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
      {active && <motion.div layoutId="mobile-nav-dot" className="w-1 h-1 bg-primary rounded-full mt-1" />}
    </button>
  );
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors underline-offset-4 decoration-secondary hover:underline">
       {label}
    </a>
  );
}

function SocialIcon({ icon }: { icon: any }) {
  return (
    <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white hover:shadow-lg transition-all duration-300">
       {icon}
    </button>
  );
}
