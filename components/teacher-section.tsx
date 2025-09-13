"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Award, Users, Heart } from "lucide-react"
import Image from "next/image"

export function TeacherSection() {
  const achievements = [
    { icon: BookOpen, text: "英语教育专家", color: "bg-blue-100 text-blue-700" },
    { icon: Award, text: "优秀教师奖", color: "bg-green-100 text-green-700" },
    { icon: Users, text: "社团指导老师", color: "bg-purple-100 text-purple-700" },
    { icon: Heart, text: "学生喜爱", color: "bg-pink-100 text-pink-700" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">我们的指导老师</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">专业的英语教育背景，丰富的文化传承经验</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden shadow-2xl apple-hover">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Teacher Photo */}
                <div className="relative h-96 md:h-full bg-gradient-to-br from-blue-100 to-green-100">
                  <div className="relative w-full h-full">
                    <Image
                      src="/teacher-zhao-full.png"
                      alt="赵玉红老师"
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Teacher Info */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl font-bold mb-2 text-foreground">赵玉红老师</h3>
                    <p className="text-lg text-primary font-semibold mb-6">二十四节气英语社团指导老师</p>

                    <div className="space-y-4 mb-8">
                      <p className="text-muted-foreground leading-relaxed">
                        赵玉红老师拥有丰富的英语教学经验，致力于将中华传统文化与英语教育相结合。
                        她深信通过二十四节气的学习，能够帮助学生更好地理解中华文化的深厚底蕴， 同时提升英语表达能力。
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        在她的指导下，社团成员不仅学会了用英语表达传统节气文化， 更培养了对中华文化的自豪感和传承意识。
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="grid grid-cols-2 gap-3">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge variant="secondary" className={`${achievement.color} p-2 w-full justify-start`}>
                            <achievement.icon className="w-4 h-4 mr-2" />
                            {achievement.text}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
