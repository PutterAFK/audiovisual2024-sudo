import { motion } from "motion/react";
import { 
  Brush, 
  Share2, 
  Film, 
  ArrowRight,
  TrendingUp,
  MessageSquare,
  PlusCircle,
  Lightbulb
} from "lucide-react";

interface ContentPageProps {
  onNavigate: (page: string) => void;
}

export default function ContentPage({ onNavigate }: ContentPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      className="flex flex-col min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden flex items-center bg-primary-container">
        <div className="absolute inset-0 opacity-40">
          <img 
            className="w-full h-full object-cover" 
            alt="Digital workspace"
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-secondary-fixed font-bold tracking-widest uppercase mb-4 block text-sm">Professional Services</span>
            <h1 className="text-5xl font-bold text-white mb-6">Content - งานโสตทัศนูปกรณ์</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              “เนื้อหา” ที่ถูกสร้างขึ้นเพื่อสื่อสารบางอย่างไปยังผู้รับสารสามารถอยู่ได้หลายรูปแบบ เช่น ภาพ วิดีโอ ข้อความ เสียง หรือสื่อผสม.
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Content */}
      <section className="py-24 bg-technical-pattern blue-pattern-bg">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary-container">ผลงานปี 2567</h2>
            <div className="h-1 w-24 bg-secondary-container rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Feature Card 1: Graphic Design */}
            <div className="md:col-span-8 group bg-surface-container-lowest p-8 rounded-xl border border-slate-100 shadow-lg hover:border-primary transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center mb-6 shadow-lg">
                  <Brush className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary-container mb-4 font-headline-md tracking-tight">ออกแบบกราฟิกประชาสัมพันธ์ทุกกิจกรรม</h3>
                <p className="text-on-surface-variant mb-6 text-sm">สร้างสรรค์สื่อวิชวลคุณภาพสูงเพื่อยกระดับภาพลักษณ์กิจกรรมของคณะและมหาวิทยาลัย ครอบคลุมทั้งสื่อออฟไลน์และออนไลน์</p>
              </div>
              <div className="relative h-72 overflow-hidden rounded-xl mt-4">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Graphic Design"
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop" 
                />
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg cursor-pointer">
                  <span className="font-bold text-primary text-sm">View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* Feature Card 2: Social Media */}
            <div className="md:col-span-4 bg-surface-container-lowest p-8 rounded-xl border border-slate-100 shadow-lg hover:border-primary transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6 shadow-md">
                <Share2 className="text-primary-container" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary-container mb-4 font-headline-md tracking-tight">ดูแลเพจ Facebook และ IG งานโสต</h3>
              <p className="text-on-surface-variant mb-8 text-sm">บริหารจัดการชุมชนออนไลน์และวางแผนการโพสต์เนื้อหาอย่างเป็นระบบ เพื่อเพิ่มการเข้าถึงและการมีส่วนร่วมของผู้ติดตาม</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl hover:bg-primary-container hover:text-white transition-all group cursor-pointer border border-transparent hover:border-primary-container">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-secondary-container" size={18} />
                    <span className="font-bold text-sm">Growth +45%</span>
                  </div>
                  <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-between p-4 bg-surface-container rounded-xl">
                  <div className="flex items-center gap-3">
                    <MessageSquare size={18} className="text-secondary-container" />
                    <span className="font-bold text-sm">Active Engagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Card 3: Content Series */}
            <div className="md:col-span-4 bg-primary-container p-8 rounded-xl border border-slate-800 shadow-lg hover:border-secondary transition-all duration-300 text-white">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                <Film className="text-secondary-container" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-headline-md tracking-tight">ซีรีส์ 'โสตฤวทำอะไร'</h3>
              <p className="text-slate-300 text-sm mb-6">คอนเทนต์วิดีโอรูปแบบใหม่ที่พาไปเจาะลึกเบื้องหลังการทำงานด้านโสตทัศนูปกรณ์ด้วยสไตล์ที่ทันสมัยและเข้าถึงง่าย</p>
              <div className="aspect-square rounded-xl overflow-hidden border border-white/10">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Content"
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop" 
                />
              </div>
            </div>

            {/* Highlighted Detail Card */}
            <div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl border border-slate-100 shadow-lg flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                   <Lightbulb size={24} className="text-secondary-container" />
                   <h3 className="text-2xl font-bold text-primary-container font-headline-md tracking-tight">Engineering Creativity</h3>
                </div>
                <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">เราไม่ได้แค่ผลิตเนื้อหา แต่เราใช้วิศวกรรมทางความคิดในการออกแบบสาร เพื่อให้ทุกชิ้นงานมีประสิทธิภาพสูงสุดในการสื่อสาร</p>
                <ul className="space-y-4">
                  <ListItem text="Precision storytelling" />
                  <ListItem text="Technical visual support" />
                  <ListItem text="Multi-platform distribution" />
                </ul>
              </div>
              <div className="w-full md:w-64 aspect-square bg-surface-container-low rounded-xl flex items-center justify-center p-8 border-2 border-dashed border-slate-200 group cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="text-center">
                  <PlusCircle size={48} className="text-slate-300 mb-2 mx-auto group-hover:text-primary transition-colors" />
                  <p className="font-bold text-slate-400 text-sm">Collaborate with us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-on-surface-variant font-semibold text-sm">
      <div className="w-5 h-5 rounded-full bg-secondary-container flex items-center justify-center text-primary-container">
        <ArrowRight size={12} strokeWidth={3} />
      </div>
      {text}
    </li>
  );
}
