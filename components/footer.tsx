"use client"

import { motion } from "framer-motion"
import { ClubLogo } from "./club-logo"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <ClubLogo className="scale-75" />
              <div>
                <h3 className="text-lg font-bold">二十四节气英语社团</h3>
                <p className="text-sm text-muted-foreground">24 Solar Terms English Club</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              北京教育学院附属丰台实验学校二十四节气英语社团，致力于传承中华文化，提升英语能力，
              培养具有国际视野的新时代青少年。
            </p>
            <p className="text-sm text-muted-foreground">Beijing Education Institute Fengtai Experimental School</p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">联系我们</h4>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                solarterms@school.edu.cn
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                010-1234-5678
              </div>
              <div className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-primary mt-0.5" />
                <span>
                  北京市丰台区
                  <br />
                  教育学院附属实验学校
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">快速链接</h4>
            <div className="space-y-2">
              {[
                { name: "社团介绍", href: "#about" },
                { name: "节气学习", href: "#solar-terms" },
                { name: "活动展示", href: "#activities" },
                { name: "加入我们", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground"
        >
          <p>© 2025 北京教育学院附属丰台实验学校二十四节气英语社团. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="mr-2">Powered by</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
