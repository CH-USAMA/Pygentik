"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const phoneNumber = "923038004684";
  const message = "Hi! I'm interested in discussing a project.";

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] group flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Outer Pulse */}
      <div className="absolute inset-0 rounded-full bg-[#01FFA4] opacity-40 animate-ping" style={{ animationDuration: '3s' }} />
      
      {/* Hover background glow */}
      <div className="absolute inset-0 rounded-full bg-[#01FFA4] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
      
      {/* Main button */}
      <div className="relative w-14 h-14 bg-[#050505] border border-[#01FFA4]/40 flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(1,255,164,0.3)] transition-all overflow-hidden group-hover:border-[#01FFA4]">
        
        {/* Fill animation */}
        <div className="absolute inset-0 bg-[#01FFA4] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out" />
        
        {/* Icon */}
        <MessageCircle className="relative z-10 w-6 h-6 text-[#01FFA4] group-hover:text-[#050505] transition-colors duration-300" />
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;
