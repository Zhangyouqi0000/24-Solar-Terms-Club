import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const solarTerms = [
  // Spring
  {
    name: "立春",
    en: "Beginning of Spring",
    season: "spring",
    description: "春季开始，万物复苏",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "雨水",
    en: "Rain Water",
    season: "spring",
    description: "降雨增多，滋润大地",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "惊蛰",
    en: "Insect Awakening",
    season: "spring",
    description: "春雷响起，蛰虫苏醒",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "春分",
    en: "Spring Equinox",
    season: "spring",
    description: "昼夜平分，春意盎然",
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    name: "清明",
    en: "Pure Brightness",
    season: "spring",
    description: "天清地明，踏青时节",
    color: "bg-green-100 text-green-800",
  },
  {
    name: "谷雨",
    en: "Grain Rain",
    season: "spring",
    description: "雨生百谷，播种时节",
    color: "bg-blue-100 text-blue-800",
  },

  // Summer
  {
    name: "立夏",
    en: "Beginning of Summer",
    season: "summer",
    description: "夏季开始，气温升高",
    color: "bg-red-100 text-red-800",
  },
  {
    name: "小满",
    en: "Grain Full",
    season: "summer",
    description: "麦粒饱满，夏熟作物",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "芒种",
    en: "Grain in Ear",
    season: "summer",
    description: "忙于播种，农事繁忙",
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "夏至",
    en: "Summer Solstice",
    season: "summer",
    description: "白昼最长，盛夏来临",
    color: "bg-red-100 text-red-800",
  },
  {
    name: "小暑",
    en: "Slight Heat",
    season: "summer",
    description: "暑热渐起，雷雨频繁",
    color: "bg-orange-100 text-orange-800",
  },
  {
    name: "大暑",
    en: "Great Heat",
    season: "summer",
    description: "酷暑炎热，一年最热",
    color: "bg-red-100 text-red-800",
  },

  // Autumn
  {
    name: "立秋",
    en: "Beginning of Autumn",
    season: "autumn",
    description: "秋季开始，暑去凉来",
    color: "bg-amber-100 text-amber-800",
  },
  {
    name: "处暑",
    en: "End of Heat",
    season: "autumn",
    description: "暑热结束，秋高气爽",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "白露",
    en: "White Dew",
    season: "autumn",
    description: "露水凝结，秋意渐浓",
    color: "bg-gray-100 text-gray-800",
  },
  {
    name: "秋分",
    en: "Autumnal Equinox",
    season: "autumn",
    description: "昼夜平分，丰收时节",
    color: "bg-amber-100 text-amber-800",
  },
  {
    name: "寒露",
    en: "Cold Dew",
    season: "autumn",
    description: "露水转寒，深秋来临",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "霜降",
    en: "Frost Descent",
    season: "autumn",
    description: "霜花降临，秋末冬初",
    color: "bg-gray-100 text-gray-800",
  },

  // Winter
  {
    name: "立冬",
    en: "Beginning of Winter",
    season: "winter",
    description: "冬季开始，万物收藏",
    color: "bg-slate-100 text-slate-800",
  },
  {
    name: "小雪",
    en: "Slight Snow",
    season: "winter",
    description: "初雪飘落，气温下降",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "大雪",
    en: "Great Snow",
    season: "winter",
    description: "雪花纷飞，严冬来临",
    color: "bg-slate-100 text-slate-800",
  },
  {
    name: "冬至",
    en: "Winter Solstice",
    season: "winter",
    description: "白昼最短，数九寒天",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    name: "小寒",
    en: "Slight Cold",
    season: "winter",
    description: "小寒胜大寒，严寒开始",
    color: "bg-blue-100 text-blue-800",
  },
  {
    name: "大寒",
    en: "Great Cold",
    season: "winter",
    description: "一年最冷，冬季结束",
    color: "bg-slate-100 text-slate-800",
  },
]

export function SolarTermsGrid() {
  return (
    <section id="solar-terms" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">二十四节气</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-2">24 Solar Terms</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            跟随自然的节拍，感受时间的韵律，用英语探索中华文化的智慧结晶
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solarTerms.map((term, index) => (
            <div key={term.name} className="group">
              <Card className="h-full border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={term.color}>{term.season}</Badge>
                    <span className="text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{term.name}</CardTitle>
                  <p className="text-sm text-primary font-medium">{term.en}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{term.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
