"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Video, Headphones, PenTool, Users, Trophy } from "lucide-react"

const modules = [
  {
    icon: BookOpen,
    title: "节气词汇学习",
    english: "Vocabulary Learning",
    description: "学习与每个节气相关的英语词汇和表达方式",
    features: ["专业词汇库", "发音练习", "语境应用"],
    color: "from-blue-500 to-cyan-500",
    level: "初级",
  },
  {
    icon: Video,
    title: "文化视频课程",
    english: "Cultural Video Courses",
    description: "通过精美视频了解节气背后的文化故事",
    features: ["双语字幕", "文化解读", "互动问答"],
    color: "from-purple-500 to-pink-500",
    level: "中级",
  },
  {
    icon: Headphones,
    title: "听力训练营",
    english: "Listening Training",
    description: "提升英语听力技能，感受节气诗词之美",
    features: ["诗词朗诵", "故事讲述", "听力测试"],
    color: "from-green-500 to-teal-500",
    level: "中级",
  },
  {
    icon: PenTool,
    title: "创意写作工坊",
    english: "Creative Writing",
    description: "用英语创作关于节气的诗歌和散文",
    features: ["写作指导", "作品展示", "同伴评议"],
    color: "from-orange-500 to-red-500",
    level: "高级",
  },
  {
    icon: Users,
    title: "小组讨论",
    english: "Group Discussion",
    description: "与同学们分享节气体验和文化感悟",
    features: ["话题讨论", "文化交流", "演讲练习"],
    color: "from-indigo-500 to-purple-500",
    level: "中级",
  },
  {
    icon: Trophy,
    title: "节气挑战赛",
    english: "Solar Terms Challenge",
    description: "参与有趣的节气知识竞赛和文化活动",
    features: ["知识竞赛", "文化表演", "奖励机制"],
    color: "from-yellow-500 to-orange-500",
    level: "全级别",
  },
]

export function LearningModules() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">学习模块</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            多样化的学习方式，让传统文化与英语学习完美融合
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full apple-hover glass">
                <div className="text-center mb-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center`}
                  >
                    <module.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="mb-3" variant="outline">
                    {module.level}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                  <p className="text-primary font-medium mb-3">{module.english}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{module.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full rounded-full bg-transparent" variant="outline">
                  开始学习
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
