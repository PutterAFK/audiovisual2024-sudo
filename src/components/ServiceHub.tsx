import { motion } from "motion/react";
import { 
  ClipboardCheck, 
  Wrench, 
  Clock, 
  Headset, 
  MapPin, 
  ArrowRight,
  AlertTriangle,
  Play,
  Video
} from "lucide-react";

interface ServiceHubProps {
  onNavigate: (page: string) => void;
}

export default function ServiceHub({ onNavigate }: ServiceHubProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col min-h-screen"
    >
      <main className="flex-grow relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-[0.03]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-8 py-16 relative">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">ศูนย์รวมบริการโสตทัศนูปกรณ์</h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              ยินดีต้อนรับสู่ Service Hub พื้นที่สำหรับการจัดการทุกความต้องการด้านสื่อและอุปกรณ์โสตฯ ของคุณให้เป็นเรื่องง่ายและเป็นมืออาชีพ
            </p>
          </div>

          {/* Main Service Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Request Service Card */}
            <div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Video size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-fixed rounded-xl flex items-center justify-center mb-6">
                  <ClipboardCheck className="text-primary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">แบบฟอร์มขอใช้บริการโสตฯ</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  ต้องการบันทึกวิดีโอการสอน ถ่ายภาพกิจกรรม หรือขอรับการสนับสนุนด้านเทคนิคในห้องประชุม กรุณากรอกรายละเอียดเพื่อรับการบริการจากทีมงานมืออาชีพ
                </p>
                <div className="flex flex-wrap gap-4 mb-8 text-xs font-bold">
                  <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                    การบันทึกวิดีโอ
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                    ถ่ายภาพกิจกรรม
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                    ระบบเสียงและแสง
                  </span>
                </div>
              </div>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2 group-hover:bg-primary/90">
                <span>เริ่มกรอกแบบฟอร์มขอใช้บริการ</span>
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Repair Service Card */}
            <div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Wrench size={120} />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="text-secondary" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-4">แบบฟอร์มแจ้งซ่อมอุปกรณ์</h2>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  อุปกรณ์ขัดข้องหรือเสียหาย? แจ้งเรื่องให้เจ้าหน้าที่ตรวจสอบและซ่อมบำรุงทันที เพื่อให้อุปกรณ์พร้อมสำหรับการใช้งานในการเรียนการสอนครั้งถัดไป
                </p>
                <div className="flex flex-wrap gap-4 mb-8 text-xs font-bold">
                  <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full text-error">
                    <AlertTriangle size={14} /> โปรเจคเตอร์ไม่ทำงาน
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                    ไมโครโฟนเสีย
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
                    ระบบสายสัญญาณ
                  </span>
                </div>
              </div>
              <button className="w-full bg-secondary-container text-primary font-bold py-4 rounded-lg hover:shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <span>แจ้งซ่อมอุปกรณ์ด่วน</span>
                <AlertTriangle size={20} />
              </button>
            </div>
          </div>

          {/* Quick Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard icon={<Clock />} title="เวลาทำการ" desc="จันทร์ - ศุกร์: 08:30 - 16:30 น." color="bg-blue-50 text-blue-900" />
            <InfoCard icon={<Headset />} title="สายด่วนสนับสนุน" desc="ติดต่อภายใน: ต่อ 4500" color="bg-yellow-50 text-yellow-700" />
            <InfoCard icon={<MapPin />} title="ที่ตั้งศูนย์" desc="ชั้น 2 อาคารนวัตกรรมการเรียนรู้" color="bg-slate-100 text-slate-700" />
          </div>

          {/* Featured Image Section */}
          <div className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-outline-variant h-80 relative group">
            <img 
              alt="AV Tech Studio" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-2xl font-bold mb-2">เตรียมพร้อมทุกจังหวะสำคัญของการสื่อสาร</p>
                <p className="opacity-90">ทีมงาน AV Department พร้อมเปลี่ยนทุกจินตนาการของคุณให้เป็นผลงานสื่อระดับคุณภาพ</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

function InfoCard({ icon, title, desc, color }: any) {
  return (
    <div className="bg-white border border-slate-200 p-6 rounded-xl flex items-center gap-4 shadow-sm">
      <div className={`p-4 rounded-lg ${color}`}>
        {icon}
      </div>
      <div>
        <div className="font-bold text-primary">{title}</div>
        <div className="text-sm text-on-surface-variant">{desc}</div>
      </div>
    </div>
  );
}
