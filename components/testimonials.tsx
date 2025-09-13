"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "李明轩",
    grade: "高二(3)班",
    avatar: "/diverse-student-portraits.png",
    content: "通过二十四节气英语社团，我不仅提高了英语水平，还深入了解了中华传统文化。每次活动都让我收获满满！",
    english:
      "Through the 24 Solar Terms English Club, I not only improved my English but also gained deep insights into traditional Chinese culture.",
    rating: 5,
  },
  {
    name: "王雨涵",
    grade: "高一(5)班",
    avatar: "/diverse-female-student.png",
    content: "社团的互动式学习方法很有趣，老师们很专业，同学们也很友善。这里是我最喜欢的课外活动！",
    english:
      "The interactive learning methods are fascinating, and the teachers are very professional. This is my favorite extracurricular activity!",
    rating: 5,
  },
  {
    name: "张浩然",
    grade: "高三(1)班",
    avatar: "/male-student-studying.png",
    content: "参加节气英语演讲比赛让我更加自信。现在我可以用流利的英语介绍中国文化了！",
    english:
      "Participating in the solar terms English speech contest made me more confident. Now I can introduce Chinese culture fluently in English!",
    rating: 5,
  },
  {
    name: "陈思语",
    grade: "高二(7)班",
    avatar: "/asian-student-girl.png",
    content: "社团活动丰富多彩，从诗词朗诵到文化展示，每个环节都精心设计。真的很棒！",
    english:
      "The club activities are rich and colorful, from poetry recitation to cultural exhibitions. Every session is carefully designed!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">学员心声</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">听听我们社团成员的真实感受和学习体验</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 apple-hover glass relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />

                <div className="flex items-center mb-6">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.grade}</p>
                    <div className="flex mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-foreground mb-4 leading-relaxed">"{testimonial.content}"</blockquote>

                <p className="text-primary font-medium italic text-sm">"{testimonial.english}"</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
