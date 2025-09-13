"use client"

import { motion } from "framer-motion"

export function ClubLogo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20">
        <motion.div
          className="absolute -inset-2 opacity-30"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,50 Q30,30 50,40 Q70,30 80,50 Q70,70 50,60 Q30,70 20,50"
              fill="none"
              stroke="url(#cloudGradient)"
              strokeWidth="1"
              opacity="0.6"
            />
            <path
              d="M15,35 Q25,20 40,25 Q55,15 65,35"
              fill="none"
              stroke="url(#cloudGradient)"
              strokeWidth="0.8"
              opacity="0.4"
            />
            <path
              d="M35,85 Q45,70 60,75 Q75,65 85,85"
              fill="none"
              stroke="url(#cloudGradient)"
              strokeWidth="0.8"
              opacity="0.4"
            />
            <defs>
              <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#b8860b" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path
              d="M12,2 L16,6 L12,10 L8,6 Z M12,14 L16,18 L12,22 L8,18 Z M2,12 L6,8 L10,12 L6,16 Z M22,12 L18,8 L14,12 L18,16 Z"
              fill="url(#knotGradient)"
              stroke="#8b4513"
              strokeWidth="0.5"
            />
            <defs>
              <linearGradient id="knotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#dc143c" />
                <stop offset="100%" stopColor="#8b0000" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #d4af37, #ffd700, #dc143c, #8b0000, #4169e1, #d4af37)",
            filter: "blur(8px)",
            opacity: 0.6,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute inset-1 rounded-full border-2"
          style={{
            borderImage: "linear-gradient(45deg, #d4af37, #dc143c, #4169e1) 1",
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div
          className="absolute inset-3 rounded-full flex items-center justify-center shadow-xl"
          style={{
            background: "linear-gradient(135deg, #d4af37 0%, #b8860b 50%, #8b6914 100%)",
            boxShadow: "0 8px 32px rgba(212, 175, 55, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            className="absolute inset-0 rounded-full opacity-20"
            style={{
              background: "radial-gradient(circle at 30% 30%, #dc143c 0%, transparent 50%)",
            }}
          />

          <motion.div
            className="text-white font-bold text-lg md:text-xl relative z-10"
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(220,20,60,0.4)",
              fontFamily: "'Noto Serif SC', serif",
              filter: "drop-shadow(0 0 3px #dc143c)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            节
          </motion.div>
        </div>

        <motion.div
          className="absolute top-0 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1.5 shadow-lg"
          style={{ background: "linear-gradient(45deg, #228b22, #32cd32)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0 }}
        />
        <motion.div
          className="absolute right-0 top-1/2 w-3 h-3 rounded-full transform translate-x-1.5 -translate-y-1/2 shadow-lg"
          style={{ background: "linear-gradient(45deg, #ffd700, #ffed4e)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full transform -translate-x-1/2 translate-y-1.5 shadow-lg"
          style={{ background: "linear-gradient(45deg, #dc143c, #ff6347)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
        <motion.div
          className="absolute left-0 top-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 -translate-y-1/2 shadow-lg"
          style={{ background: "linear-gradient(45deg, #4169e1, #6495ed)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
        />
      </div>
    </motion.div>
  )
}
