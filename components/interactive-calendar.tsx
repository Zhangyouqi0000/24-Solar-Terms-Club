"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Thermometer, Wind } from "lucide-react"

const solarTerms = [
  {
    name: "立春",
    english: "Beginning of Spring",
    date: "Feb 4",
    season: "spring",
    temp: "5°C",
    desc: "Spring begins, everything awakens",
  },
  {
    name: "雨水",
    english: "Rain Water",
    date: "Feb 19",
    season: "spring",
    temp: "8°C",
    desc: "Rainfall increases, ice melts",
  },
  {
    name: "惊蛰",
    english: "Insect Awakening",
    date: "Mar 6",
    season: "spring",
    temp: "12°C",
    desc: "Thunder awakens hibernating insects",
  },
  {
    name: "春分",
    english: "Spring Equinox",
    date: "Mar 21",
    season: "spring",
    temp: "15°C",
    desc: "Day and night are equal",
  },
  {
    name: "清明",
    english: "Pure Brightness",
    date: "Apr 5",
    season: "spring",
    temp: "18°C",
    desc: "Clear and bright weather",
  },
  {
    name: "谷雨",
    english: "Grain Rain",
    date: "Apr 20",
    season: "spring",
    temp: "22°C",
    desc: "Rain nourishes growing crops",
  },
  {
    name: "立夏",
    english: "Beginning of Summer",
    date: "May 6",
    season: "summer",
    temp: "25°C",
    desc: "Summer begins, plants flourish",
  },
  {
    name: "小满",
    english: "Grain Full",
    date: "May 21",
    season: "summer",
    temp: "28°C",
    desc: "Grains begin to plump",
  },
  {
    name: "芒种",
    english: "Grain in Ear",
    date: "Jun 6",
    season: "summer",
    temp: "30°C",
    desc: "Time to plant rice and wheat",
  },
  {
    name: "夏至",
    english: "Summer Solstice",
    date: "Jun 21",
    season: "summer",
    temp: "32°C",
    desc: "Longest day of the year",
  },
  {
    name: "小暑",
    english: "Slight Heat",
    date: "Jul 7",
    season: "summer",
    temp: "35°C",
    desc: "Heat begins to intensify",
  },
  {
    name: "大暑",
    english: "Great Heat",
    date: "Jul 23",
    season: "summer",
    temp: "38°C",
    desc: "Hottest period of the year",
  },
  {
    name: "立秋",
    english: "Beginning of Autumn",
    date: "Aug 8",
    season: "autumn",
    temp: "35°C",
    desc: "Autumn begins, heat subsides",
  },
  {
    name: "处暑",
    english: "End of Heat",
    date: "Aug 23",
    season: "autumn",
    temp: "30°C",
    desc: "Heat comes to an end",
  },
  { name: "白露", english: "White Dew", date: "Sep 8", season: "autumn", temp: "25°C", desc: "Dew appears on grass" },
  {
    name: "秋分",
    english: "Autumnal Equinox",
    date: "Sep 23",
    season: "autumn",
    temp: "20°C",
    desc: "Day and night are equal again",
  },
  { name: "寒露", english: "Cold Dew", date: "Oct 8", season: "autumn", temp: "15°C", desc: "Dew becomes cold" },
  {
    name: "霜降",
    english: "Frost Descent",
    date: "Oct 23",
    season: "autumn",
    temp: "10°C",
    desc: "First frost appears",
  },
  { name: "立冬", english: "Beginning of Winter", date: "Nov 7", season: "winter", temp: "5°C", desc: "Winter begins" },
  {
    name: "小雪",
    english: "Slight Snow",
    date: "Nov 22",
    season: "winter",
    temp: "0°C",
    desc: "Light snow begins to fall",
  },
  { name: "大雪", english: "Great Snow", date: "Dec 7", season: "winter", temp: "-5°C", desc: "Heavy snow falls" },
  {
    name: "冬至",
    english: "Winter Solstice",
    date: "Dec 22",
    season: "winter",
    temp: "-8°C",
    desc: "Shortest day of the year",
  },
  { name: "小寒", english: "Slight Cold", date: "Jan 6", season: "winter", temp: "-10°C", desc: "Cold intensifies" },
  {
    name: "大寒",
    english: "Great Cold",
    date: "Jan 20",
    season: "winter",
    temp: "-12°C",
    desc: "Coldest period of the year",
  },
]

const seasonColors = {
  spring: "from-green-400 to-blue-500",
  summer: "from-yellow-400 to-red-500",
  autumn: "from-orange-400 to-red-600",
  winter: "from-blue-400 to-purple-600",
}

export function InteractiveCalendar() {
  const [selectedTerm, setSelectedTerm] = useState(solarTerms[0])

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
            <span className="gradient-text">互动节气日历</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">点击探索每个节气的独特魅力和文化内涵</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {solarTerms.map((term, index) => (
                <motion.div
                  key={term.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`p-4 cursor-pointer transition-all duration-300 apple-hover ${
                      selectedTerm.name === term.name
                        ? `bg-gradient-to-br ${seasonColors[term.season as keyof typeof seasonColors]} text-white shadow-lg`
                        : "hover:shadow-md"
                    }`}
                    onClick={() => setSelectedTerm(term)}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold mb-1">{term.name}</div>
                      <div className="text-sm opacity-80">{term.date}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Term Details */}
          <motion.div
            key={selectedTerm.name}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Card className="p-8 glass sticky top-8">
              <div className="text-center mb-6">
                <Badge
                  className={`mb-4 bg-gradient-to-r ${seasonColors[selectedTerm.season as keyof typeof seasonColors]} text-white`}
                >
                  {selectedTerm.season.toUpperCase()}
                </Badge>
                <h3 className="text-3xl font-bold mb-2">{selectedTerm.name}</h3>
                <p className="text-lg text-primary font-medium mb-4">{selectedTerm.english}</p>
                <p className="text-muted-foreground">{selectedTerm.desc}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <span>日期</span>
                  </div>
                  <span className="font-medium">{selectedTerm.date}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-secondary mr-2" />
                    <span>平均气温</span>
                  </div>
                  <span className="font-medium">{selectedTerm.temp}</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center">
                    <Wind className="h-5 w-5 text-accent mr-2" />
                    <span>季节特征</span>
                  </div>
                  <Badge variant="outline">{selectedTerm.season}</Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
