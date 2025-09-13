'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Download, Calendar, User } from "lucide-react"
import { useState } from "react"

interface HomeworkItem {
  id: string
  title: string
  description: string
  videoPath: string
  thumbnail: string
  author: string
  date: string
  category: string
}

export function HomeworkGallery() {
  // 作业数据 - 用户需要将视频文件放在 public/videos/ 文件夹中
  const homeworkItems: HomeworkItem[] = [
    {
      id: "1",
      title: "春分节气英语介绍",
      description: "学生用英语详细介绍春分节气的文化内涵和传统习俗",
      videoPath: "/1.mp4",
      thumbnail: "/spring-equinox-presentation.jpg",
      author: "张同学",
      date: "2024-03-20",
      category: "春季节气",
    },
    {
      id: "2",
      title: "夏至节气文化展示",
      description: "通过英语演讲展示夏至节气的天文现象和民俗活动",
      videoPath: "/2.mp4",
      thumbnail: "/summer-solstice-cultural-presentation.jpg",
      author: "李同学",
      date: "2024-06-21",
      category: "夏季节气",
    },
    {
      id: "3",
      title: "秋分节气诗歌朗诵",
      description: "用英语朗诵关于秋分节气的中英文诗歌作品",
      videoPath: "/3.mp4",
      thumbnail: "/autumn-equinox-poetry-recitation.jpg",
      author: "王同学",
      date: "2024-09-23",
      category: "秋季节气",
    },
    {
      id: "4",
      title: "冬至节气传统美食",
      description: "英语介绍冬至节气的传统美食制作过程和文化意义",
      videoPath: "/4.mp4",
      thumbnail: "/winter-solstice-traditional-food.jpg",
      author: "刘同学",
      date: "2024-12-21",
      category: "冬季节气",
    },
  ]

  const categoryColors = {
    春季节气: "bg-green-100 text-green-700",
    夏季节气: "bg-red-100 text-red-700",
    秋季节气: "bg-orange-100 text-orange-700",
    冬季节气: "bg-blue-100 text-blue-700",
  }

  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">学生作业展示</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">展示学生们精彩的二十四节气英语学习成果</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {homeworkItems.map((item, index) => (
            <div key={item.id}>
              <Card className="overflow-hidden shadow-lg apple-hover h-full">
                <div className="relative">
                  <div
                    className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 cursor-pointer group"
                    onClick={() => setPlayingIndex(index)}
                  >
                    <img
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center pointer-events-none">
                      <div className="bg-white/90 rounded-full p-4 shadow-lg pointer-events-auto">
                        <Play className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                  </div>
                  {/* 视频播放器 */}
                  {playingIndex === index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
                      <video
                        src={item.videoPath}
                        controls
                        autoPlay
                        className="w-full h-full object-contain bg-black"
                        onClick={e => e.stopPropagation()}
                      />
                      <button
                        className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-black text-sm shadow"
                        onClick={() => setPlayingIndex(null)}
                      >
                        关闭
                      </button>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg font-semibold line-clamp-2">{item.title}</CardTitle>
                    <Badge variant="secondary" className={categoryColors[item.category as keyof typeof categoryColors]}>
                      {item.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{item.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {item.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-transparent"
                      onClick={() => setPlayingIndex(index)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      播放视频
                    </Button>
                    <a href={item.videoPath} download>
                      <Button variant="ghost" size="sm" asChild>
                        <span>
                          <Download className="w-4 h-4" />
                        </span>
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
