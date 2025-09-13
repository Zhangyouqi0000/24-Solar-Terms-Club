"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

export function ActivitiesSection() {
  const activities = [
    {
      title: "春分诗歌朗诵会",
      en: "Spring Equinox Poetry Recital",
      date: "2024年3月20日",
      location: "学校礼堂",
      participants: "全体社团成员",
      description: "用中英双语朗诵关于春分的古诗词，感受春天的美好",
      image: "/spring-poetry-recital-students.jpg",
      status: "已举办",
    },
    {
      title: "夏至文化体验日",
      en: "Summer Solstice Cultural Day",
      date: "2024年6月21日",
      location: "校园户外",
      participants: "50+ 学生",
      description: "制作传统手工艺品，学习夏至相关的英语表达",
      image: "/summer-cultural-activities-students.jpg",
      status: "已举办",
    },
    {
      title: "秋分英语戏剧节",
      en: "Autumn Equinox Drama Festival",
      date: "2024年9月22日",
      location: "多功能厅",
      participants: "8个表演小组",
      description: "以秋分为主题的英语短剧表演，展现传统文化魅力",
      image: "/autumn-drama-performance-students.jpg",
      status: "已举办",
    },
    {
      title: "冬至传统美食节",
      en: "Winter Solstice Food Festival",
      date: "2024年12月21日",
      location: "学校食堂",
      participants: "全校师生",
      description: "制作传统冬至美食，用英语介绍饮食文化",
      image: "/winter-food-festival-traditional-chinese.jpg",
      status: "即将举办",
    },
  ]

  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">活动展示</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">Our Activities</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">丰富多彩的社团活动，让学习变得生动有趣</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant={activity.status === "已举办" ? "default" : "secondary"}>{activity.status}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                  <p className="text-primary font-medium">{activity.en}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{activity.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {activity.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {activity.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {activity.participants}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
