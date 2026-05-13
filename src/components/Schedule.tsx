import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Calendar as CalendarIcon, 
  MapPin, 
  Clock, 
  User,
  Search,
  Filter,
  Plus,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Ticket,
  BarChart3,
  DoorOpen,
  Headset,
  ExternalLink,
  PlusCircle,
  Camera
} from "lucide-react";

interface ScheduleProps {
  onNavigate: (page: string) => void;
}

export default function Schedule({ onNavigate }: ScheduleProps) {
  const queueItems = [
    { id: 1, type: 'Booked', time: '09:00 - 12:00', title: 'Sony A7IV + Lens Kit', user: 'ณิชาภา ดำรงค์สกุล', img: 'https://i.pravatar.cc/150?u=nichapa' },
    { id: 2, type: 'In Use', time: '13:00 - 16:30', title: 'Studio Lighting Set B', user: 'อนันต์ พากเพียร', img: 'https://i.pravatar.cc/150?u=anan' },
    { id: 3, type: 'Available', time: 'ช่วงบ่าย', title: 'Wireless Mic System', user: null, img: null },
  ];

  const venues = [
    { 
      id: 1, 
      name: 'Studio A (Main)', 
      desc: 'Professional Recording', 
      status: 'จองเต็มวันนี้', 
      statusColor: 'bg-error text-white',
      img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      name: 'Edit Suite 01', 
      desc: 'Post-Production', 
      status: 'มีคิวว่างบ่าย', 
      statusColor: 'bg-secondary text-primary',
      img: 'https://images.unsplash.com/photo-1574631315133-2868936662e0?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      name: 'Audio Booth', 
      desc: 'Voice Over / Podcast', 
      status: 'ว่างทั้งวัน', 
      statusColor: 'bg-secondary-container text-primary',
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=800&auto=format&fit=crop' 
    },
  ];

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen pt-20 bg-[#f8f9fa] font-sans"
    >
      {/* Header Sticky Container */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 sticky top-20 z-40 shadow-sm">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors active:scale-95"
            >
              <ArrowLeft size={24} className="text-primary" />
            </button>
            <div>
              <h1 className="text-xl font-bold text-primary flex items-center gap-2">
                <CalendarIcon size={20} className="text-secondary" /> ตารางงาน - งานโสตทัศนูปกรณ์
              </h1>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
               <input 
                type="text" 
                placeholder="ค้นหากิจกรรม..."
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
               />
            </div>
            <button className="bg-secondary-container text-primary font-bold text-xs px-6 py-2 rounded-full shadow-sm hover:brightness-105 active:scale-95 transition-all">
                จองอุปกรณ์
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-8 py-12 w-full">
        {/* Page Hero Title */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Professional AV Services</span>
            <h2 className="text-5xl font-bold text-primary mb-4 tracking-tight">ตารางงานและระบบการจอง</h2>
            <p className="text-slate-600 max-w-2xl font-medium">จัดการตารางปฏิบัติงานของทีมโปรดักชั่นและตรวจสอบคิวการจองอุปกรณ์แบบเรียลไทม์เพื่อความเป็นมืออาชีพสูงสุด</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 min-w-[200px]">
              <div className="bg-primary/5 p-3 rounded-lg">
                <CalendarIcon size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">วันนี้</p>
                <p className="font-bold text-xl text-primary">12 พฤษภาคม 2569</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Calendar Section (8/12) */}
          <div className="lg:col-span-8">
            <section className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="bg-primary p-6 flex justify-between items-center">
                <h3 className="text-white font-bold text-xl flex items-center gap-2">
                  <ClipboardList size={24} className="text-secondary" />
                  ตารางการปฏิบัติงาน
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-all"><ChevronLeft size={20} /></button>
                  <button className="bg-secondary-container text-primary px-4 py-1.5 rounded-lg font-bold text-sm">พฤษภาคม 2569</button>
                  <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-all"><ChevronRight size={20} /></button>
                </div>
              </div>
              
              <div className="p-1 grid-pattern">
                <div className="grid grid-cols-7 gap-px bg-slate-200">
                  {['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'].map(day => (
                    <div key={day} className="bg-slate-50 p-4 text-center text-xs font-bold text-slate-500">{day}</div>
                  ))}
                  
                  {/* Mock empty days for current month start */}
                  <div className="bg-white min-h-[120px] p-2 opacity-50"></div>
                  <div className="bg-white min-h-[120px] p-2 opacity-50"></div>
                  <div className="bg-white min-h-[120px] p-2 opacity-50"></div>
                  <div className="bg-white min-h-[120px] p-2 opacity-50"></div>
                  <div className="bg-white min-h-[120px] p-2 opacity-50"></div>
                  
                  {calendarDays.slice(0, 25).map(day => (
                    <div key={day} className={`bg-white min-h-[120px] p-2 hover:bg-slate-50 transition-all ${day === 12 ? 'bg-secondary-container/10 border-2 border-secondary-container relative ring-4 ring-secondary-container/10' : ''}`}>
                      {day === 12 && (
                        <span className="bg-secondary-container text-primary font-bold text-[10px] px-2 py-0.5 rounded-full absolute top-2 right-2">TODAY</span>
                      )}
                      <span className={`font-bold text-sm block mb-2 ${day === 12 ? 'text-primary' : 'text-slate-400'}`}>{day}</span>
                      
                      {day === 2 && (
                        <div className="bg-blue-50 text-primary text-[10px] p-1 rounded font-bold border-l-4 border-primary">สัมมนาวิชาการ (Live)</div>
                      )}
                      {day === 6 && (
                        <div className="bg-blue-50 text-primary text-[10px] p-1 rounded font-bold border-l-4 border-primary">บันทึกเทปบทเรียน</div>
                      )}
                      {day === 12 && (
                        <>
                          <div className="bg-primary text-white text-[10px] p-1.5 rounded mb-1 shadow-md font-bold">ถ่ายทำภาพยนตร์สั้น</div>
                          <div className="bg-blue-100 text-primary text-[10px] p-1.5 rounded font-bold">จัดแสงใน Studio A</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Booking Queue (4/12) */}
          <div className="lg:col-span-4 space-y-6">
            <section className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
              <h3 className="font-bold text-xl text-primary mb-6 flex items-center gap-2">
                <Ticket className="text-secondary" size={24} />
                คิวการจองอุปกรณ์
              </h3>
              
              <div className="space-y-4">
                {queueItems.map(item => (
                  <div 
                    key={item.id} 
                    className={`flex flex-col gap-3 p-4 rounded-xl border transition-all ${
                      item.type === 'In Use' ? 'bg-secondary-container/5 border-secondary' : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                        item.type === 'Booked' ? 'bg-red-100 text-red-700' :
                        item.type === 'In Use' ? 'bg-secondary text-primary' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {item.type}
                      </span>
                      <span className={`text-xs font-bold ${item.type === 'In Use' ? 'text-secondary' : 'text-slate-500'}`}>
                        {item.time}
                      </span>
                    </div>
                    <h4 className="font-bold text-primary">{item.title}</h4>
                    <div className="flex items-center gap-2">
                      {item.img ? (
                        <img src={item.img} className="w-6 h-6 rounded-full object-cover" alt={item.user || 'User'} />
                      ) : (
                        <PlusCircle size={20} className="text-slate-300" />
                      )}
                      <span className={`text-xs font-medium ${item.user ? 'text-slate-600' : 'text-slate-400 italic'}`}>
                        {item.user || 'ว่างสำหรับการจอง'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 border-2 border-primary text-primary font-bold text-sm rounded-xl hover:bg-primary hover:text-white transition-all flex justify-center items-center gap-2">
                <BarChart3 size={18} />
                ดูรายงานการใช้งานทั้งหมด
              </button>
            </section>

            {/* Support Card */}
            <section className="bg-primary text-white rounded-2xl p-6 relative overflow-hidden">
               <div className="relative z-10">
                  <h4 className="font-bold text-xl mb-2">ต้องการความช่วยเหลือ?</h4>
                  <p className="text-xs opacity-75 mb-4">หากพบคิวที่ทับซ้อนกัน หรือต้องการยกเลิกการจองอุปกรณ์ฉุกเฉิน</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-secondary-container hover:underline group">
                    ติดต่อหัวหน้าฝ่ายโสตฯ
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>
               <Headset size={120} className="absolute -right-8 -bottom-8 opacity-10" />
            </section>
          </div>
        </div>

        {/* Venue Schedule Bottom Section */}
        <section className="mt-12">
          <h3 className="font-bold text-2xl text-primary mb-8 flex items-center gap-2">
            <DoorOpen className="text-secondary" size={28} />
            ตารางคิวจองสถานที่
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {venues.map(venue => (
              <div key={venue.id} className="group relative rounded-2xl overflow-hidden shadow-md aspect-video">
                <img src={venue.img} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <div className="flex justify-between items-end">
                    <div>
                      <h5 className="text-white font-bold text-lg">{venue.name}</h5>
                      <p className="text-slate-300 text-xs font-medium">{venue.desc}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${venue.statusColor}`}>
                      {venue.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
}
