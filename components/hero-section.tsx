import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Globe, Users, Sparkles } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { AnimatedBackground } from "./animated-background"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-gray-900 dark:via-black dark:to-blue-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-orange-100/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary mr-3 animate-pulse" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">传统文化 · 现代教育</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="gradient-text animate-float">二十四节气</span>
                <br />
                <span className="text-foreground">英语社团</span>
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold mb-3">24 Solar Terms English Club</p>
              <p className="text-lg text-muted-foreground font-medium">北京教育学院附属丰台实验学校</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <div className="mb-16">
              <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
                探索中华传统文化的智慧，用英语讲述节气故事
              </p>
              <p className="text-lg text-primary font-medium">
                在文化交融中提升语言能力 · Explore traditional Chinese wisdom through English
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ScrollReveal delay={600} direction="left">
              <div className="glass rounded-2xl p-8 apple-hover group">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-foreground mb-2">24</div>
                <div className="text-muted-foreground font-medium">节气学习模块</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800} direction="scale">
              <div className="glass rounded-2xl p-8 apple-hover group">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-foreground mb-2">150+</div>
                <div className="text-muted-foreground font-medium">活跃社团成员</div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1000} direction="right">
              <div className="glass rounded-2xl p-8 apple-hover group">
                <Globe className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-foreground mb-2">双语</div>
                <div className="text-muted-foreground font-medium">文化交流平台</div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={1200}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-6 rounded-full group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0"
                style={{
                  backgroundColor: "#007aff",
                  color: "#ffffff",
                  border: "none",
                }}
              >
                立即加入社团
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                style={{
                  backgroundColor: "transparent",
                  color: "#007aff",
                  borderColor: "#007aff",
                  borderWidth: "2px",
                }}
              >
                探索更多内容
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-primary rounded-full mt-2 opacity-60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
