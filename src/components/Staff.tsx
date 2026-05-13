import { motion } from "motion/react";
import { 
  Users as UsersIcon, 
  Mail, 
  Phone,
  Layout,
  Briefcase,
  GraduationCap,
  Award
} from "lucide-react";

interface StaffProps {
  onNavigate: (page: string) => void;
}

export default function Staff({ onNavigate }: StaffProps) {
  const staffMembers = [
    { id: 1, name: 'ครูธนพร มาธุระ (ครูวา)', role: 'หัวหน้างานโสตทัศนูปกรณ์', expertise: 'ดูแลรับผิดชอบ: ภาพนิ่ง', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80', pos: 'object-center' },
    { id: 2, name: 'ครูศิวฤทธิ์ โอวาทกถา (ครูอิทธ์)', role: 'Sound Manager', expertise: 'ดูแลรับผิดชอบ: เครื่องเสียง', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80', pos: 'object-center' },
    { id: 3, name: 'ครูศิวกร สุพัธนาพงศ์ (ครูกร)', role: 'Videographer', expertise: 'ดูแลรับผิดชอบ: วิดีโอและวิเคราะห์ข้อมูล', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80', pos: 'object-center' },
    { id: 4, name: 'ครูวรกิจ สุนทนหิรัญเลิศ (ครูคิว)', role: 'Content & Admin', expertise: 'ดูแลรับผิดชอบ: คอนเทนต์, Social Media', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80', pos: 'object-center' },
    { id: 5, name: 'ครูวิไลพร ลาหงษ์ (ครูวิ)', role: 'Strategist', expertise: 'ดูแลรับผิดชอบ: แผนงานและกลยุทธ์', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=300&q=80', pos: 'object-center' },
    { id: 6, name: 'ครูชนัฎพร จาริก (ครูฝน)', role: 'Coordinator', expertise: 'ดูแลรับผิดชอบ: พัสดุและประสานงาน', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80', pos: 'object-center' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex flex-col min-h-screen pt-20 bg-background"
    >
      <section className="py-16 px-8 max-w-7xl mx-auto w-full">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
               <h1 className="text-4xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Layout className="text-secondary" /> บุคลากรงานโสตทัศนูปกรณ์
               </h1>
               <p className="text-on-surface-variant max-w-2xl font-medium">
                  ทีมงานเทคนิคผู้อยู่เบื้องหลังการติดตั้ง บำรุงรักษา และอำนวยความสะดวกด้านอุปกรณ์โสตทัศนูปกรณ์ทุกกิจกรรมในโรงเรียน
               </p>
            </div>
            <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex gap-12 items-center text-center">
               <div>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Professional Members</div>
               </div>
               <div className="w-px h-8 bg-primary/20"></div>
               <div>
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Core Roles</div>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staffMembers.map(member => (
               <motion.div 
                  key={member.id}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-6 border border-slate-100 shadow-lg group hover:border-secondary transition-all"
               >
                  <div className="relative mb-6 flex justify-center">
                     <div className="absolute w-32 h-32 bg-secondary-container rounded-full translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                     <div className="w-32 h-32 rounded-full overflow-hidden relative z-10 border-4 border-white shadow-md">
                        <img 
                           src={member.img} 
                           alt={member.name} 
                           className={`w-full h-full object-cover scale-[3.5] ${member.pos}`}
                        />
                     </div>
                  </div>
                  <div className="text-center mb-6">
                     <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                     <p className="text-xs font-bold text-secondary-container bg-primary px-3 py-1 rounded-full inline-block">{member.role}</p>
                  </div>
                  
                  <div className="space-y-4 border-t border-slate-50 pt-6">
                     <div className="flex items-center gap-3 text-sm text-on-surface-variant font-medium">
                        <Briefcase size={16} className="text-primary-container" />
                        <span>{member.expertise}</span>
                     </div>
                     <div className="flex items-center gap-3 text-sm text-on-surface-variant font-medium group-hover:text-primary transition-colors cursor-pointer">
                        <Mail size={16} className="text-primary-container" />
                        <span>contact@av.rittiya.ac.th</span>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>

         <div className="mt-24 grid md:grid-cols-3 gap-8">
            <StatBox icon={<UsersIcon />} title="Expert Team" desc="Qualified professionals with years of field experience." />
            <StatBox icon={<GraduationCap />} title="Student Trainees" desc="Providing real-world media production training for students." />
            <StatBox icon={<Award />} title="Quality First" desc="Dedicated to providing high-fidelity visual and audio services." />
         </div>

         <div className="mt-20 pt-8 border-t border-slate-100 text-center">
            <p className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-1">Created By</p>
            <p className="text-xl font-bold text-primary">นายเสฎฐวุฒิ เจนศิริวาณิชย์</p>
         </div>
      </section>
    </motion.div>
  );
}

function StatBox({ icon, title, desc }: any) {
  return (
    <div className="bg-surface-container-low p-8 rounded-3xl border border-slate-100 flex flex-col gap-4">
       <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-primary-container">
          {icon}
       </div>
       <h4 className="text-lg font-bold text-primary">{title}</h4>
       <p className="text-sm text-on-surface-variant leading-relaxed font-medium">{desc}</p>
    </div>
  );
}
