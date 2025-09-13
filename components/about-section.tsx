"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Globe } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: BookOpen,
      title: "文化学习",
      en: "Cultural Learning",
      description: "深入了解二十四节气的历史文化内涵，感受中华文明的博大精深",
    },
    {
      icon: Globe,
      title: "英语表达",
      en: "English Expression",
      description: "用英语讲述中国故事，提升跨文化交流能力和语言表达水平",
    },
    {
      icon: Users,
      title: "团队合作",
      en: "Teamwork",
      description: "通过小组活动和项目合作，培养团队精神和协作能力",
    },
    {
      icon: Award,
      title: "实践活动",
      en: "Practical Activities",
      description: "参与节气主题活动，在实践中体验传统文化的魅力",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              关于我们
              <br />
              <span className="gradient-text">About Our Club</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                二十四节气英语社团成立于北京教育学院附属丰台实验学校，致力于将中华传统文化与英语学习相结合，
                为学生提供一个独特的学习平台。
              </p>
              <p>
                我们相信，语言是文化的载体。通过学习二十四节气，学生不仅能够提升英语表达能力，
                更能深入理解中华文化的精髓，培养文化自信和国际视野。
              </p>
              <p>
                社团定期举办各类活动，包括节气主题演讲、文化体验活动、英语戏剧表演等，
                让学生在轻松愉快的氛围中学习成长。
              </p>
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{feature.en}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
