import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageCircle,
  Clock,
  ExternalLink,
  Facebook,
  Globe
} from "lucide-react";

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen pt-20 bg-background"
    >
      <section className="py-16 px-8 max-w-7xl mx-auto w-full">
         <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4 font-display-lg">ช่องทางการติดต่อ</h1>
            <p className="text-on-surface-variant max-w-2xl mx-auto font-medium">
               หากคุณมีข้อสงสัยหรือต้องการข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา ทีมงานของเราพร้อมให้ความช่วยเหลือแก่คุณเสมอ
            </p>
         </div>

         <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            <div className="md:col-span-4 space-y-6">
                <ContactInfoCard 
                  icon={<Mail />} 
                  title="อีเมล" 
                  content="av-itt@rittiya.ac.th" 
                  sub="ส่งคำร้องหรือคำถามทั่วไป"
                />
                <ContactInfoCard 
                  icon={<Phone />} 
                  title="เบอร์โทรศัพท์" 
                  content="02-123-4567 ต่อ 4500" 
                  sub="สายด่วนปฏิบัติงาน"
                />
                <ContactInfoCard 
                  icon={<MapPin />} 
                  title="สถานที่ตั้ง" 
                  content="ชั้น 2 อาคารนวัตกรรมฯ" 
                  sub="โรงเรียนฤทธิยะวรรณาลัย"
                />
                
                <div className="bg-primary-container text-white p-8 rounded-3xl shadow-xl overflow-hidden relative">
                   <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                   <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Clock size={20} className="text-secondary-fixed" /> เวลาเข้าพบ
                   </h3>
                   <div className="space-y-3 text-sm font-medium text-blue-100/70">
                      <div className="flex justify-between">
                         <span>จันทร์ - ศุกร์:</span>
                         <span className="text-white">08:00 - 16:30</span>
                      </div>
                      <div className="flex justify-between">
                         <span>เสาร์ - อาทิตย์:</span>
                         <span className="text-white">ปิดทำการ</span>
                      </div>
                   </div>
                </div>
            </div>

            <div className="md:col-span-8">
               <div className="bg-white p-10 rounded-[32px] shadow-2xl border border-slate-100">
                  <h2 className="text-2xl font-bold text-primary mb-8 flex items-center gap-2">
                     <Send size={24} className="text-secondary-container" /> ส่งคำถามถึงเรา
                  </h2>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => e.preventDefault()}>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider">ชื่อ-นามสกุล</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:outline-none" placeholder="ระบุชื่อของคุณ" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider">อีเมล / ช่องทางติดต่อ</label>
                        <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:outline-none" placeholder="example@email.com" />
                     </div>
                     <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider">หัวข้อเรื่อง</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:outline-none" placeholder="เช่น ขอจองถังไฟ แสตูดิโอ" />
                     </div>
                     <div className="space-y-2 md:col-span-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-wider">ข้อความรายละเอียด</label>
                        <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/10 focus:outline-none min-h-[120px]" placeholder="ระบข้อมูลที่คุณต้องการทราบ..." />
                     </div>
                     <button className="md:col-span-2 bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-lg mt-4">
                        <Send size={20} />
                        ส่งข้อความ
                     </button>
                  </form>
               </div>

               <div className="mt-8 flex flex-wrap gap-4">
                  <SocialButton icon={<Facebook />} label="Facebook" color="bg-blue-600" />
                  <SocialButton icon={<MessageCircle />} label="LINE Official" color="bg-green-500" />
                  <SocialButton icon={<Globe />} label="Website" color="bg-slate-700" />
               </div>
            </div>
         </div>
      </section>
    </motion.div>
  );
}

function ContactInfoCard({ icon, title, content, sub }: any) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg flex items-center gap-5 group hover:border-primary transition-all">
       <div className="shrink-0 w-14 h-14 bg-secondary-container/10 text-primary rounded-2xl flex items-center justify-center shadow-sm">
          {icon}
       </div>
       <div>
          <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-0.5">{title}</div>
          <div className="text-lg font-bold text-primary">{content}</div>
          <div className="text-[10px] font-bold text-on-surface-variant/60">{sub}</div>
       </div>
    </div>
  );
}

function SocialButton({ icon, label, color }: any) {
  return (
    <button className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-white font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all ${color}`}>
       {icon}
       <span>{label}</span>
       <ExternalLink size={14} className="opacity-50" />
    </button>
  );
}
