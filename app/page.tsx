"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Layers, Wand2 } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden selection:bg-purple-500 selection:text-white">
      
      {/* 1. LAYER NỀN ĐỘNG */}
      <div className="fixed inset-0 z-[-1]">
        <div className="absolute inset-0 bg-grid"></div>
        {/* Đốm sáng tím Pulse (Nhấp nháy nhẹ) */}
        <motion.div 
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="glow-effect"
        />
      </div>

      {/* 2. NỘI DUNG CHÍNH */}
      <div className="z-10 flex flex-col items-center text-center px-4 max-w-5xl w-full pt-20">
        
        {/* Badge xuất hiện từ trên xuống */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-purple-200 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-yellow-400" />
          <span className="tracking-wide">AI GENERATION V2.0</span>
        </motion.div>

        {/* Tiêu đề lớn (Stagger Effect) */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[1.1]"
        >
          Design Without <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-500">
            Limits.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-light"
        >
          GenTee là Studio thời trang AI đầu tiên cho phép bạn biến văn bản thành bộ sưu tập Streetwear thực tế.
        </motion.p>

        {/* Cụm nút bấm */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-20"
        >
          {/* Nút chính với hiệu ứng Hover */}
          <button className="group relative h-12 rounded-full bg-white px-8 text-black font-bold transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
            Start Creating
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
          
          <button className="h-12 rounded-full px-8 border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
            Explore Gallery
          </button>
        </motion.div>

        {/* 3. VISUAL DEMO (Cái thẻ lơ lửng) - KEY WOW FACTOR */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
          className="relative w-full max-w-4xl mx-auto perspective-1000"
        >
          {/* Khung viền kính */}
          <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-2 shadow-2xl shadow-purple-900/20">
            {/* Header giả lập của App */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="text-xs font-mono text-gray-500">gentee-ai-engine.tsx</div>
            </div>

            {/* Nội dung bên trong (Mô phỏng quá trình tạo) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
              {/* Cột trái: Input Prompt */}
              <div className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Prompt Input</label>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-mono text-sm">
                    "A cyberpunk samurai cat wearing a neon hoodie, tokyo street background, 8k resolution..."
                    <span className="inline-block w-2 h-4 ml-1 bg-purple-500 animate-pulse align-middle"></span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-2 w-20 rounded-full bg-gray-800 animate-pulse"></div>
                  <div className="h-2 w-12 rounded-full bg-gray-800 animate-pulse"></div>
                </div>
              </div>

              {/* Cột phải: Kết quả (Placeholder) */}
              <div className="relative aspect-square rounded-xl bg-gradient-to-br from-purple-900/20 to-black border border-white/10 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571366992791-2ad2078656cb?q=80&w=320&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Wand2 size={32} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                  <span className="text-xs font-bold tracking-widest text-white/80">GENERATING...</span>
                </div>
                
                {/* Thanh loading */}
                <div className="absolute bottom-0 left-0 h-1 bg-purple-500 animate-[shimmer_2s_infinite] w-full"></div>
              </div>
            </div>
          </div>

          {/* Bóng đổ phản chiếu bên dưới */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-purple-500/20 blur-[50px] rounded-full z-[-1]"></div>
        </motion.div>

      </div>
    </main>
  );
}