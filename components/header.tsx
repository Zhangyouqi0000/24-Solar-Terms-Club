import { SchoolBadge } from "./school-badge"

export function Header() {
  const navItems = [
    { name: "首页", href: "#home", en: "Home" },
    { name: "关于我们", href: "#about", en: "About Us" },
    { name: "节气学习", href: "#solar-terms", en: "Solar Terms" },
    { name: "活动展示", href: "#activities", en: "Activities" },
    { name: "联系我们", href: "#contact", en: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <SchoolBadge />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold gradient-text">二十四节气英语社团</h1>
              <p className="text-sm text-muted-foreground">24 Solar Terms English Club</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <span className="block">{item.name}</span>
                <span className="block text-xs text-muted-foreground">{item.en}</span>
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </nav>

          {/* Mobile Navigation - Always visible on mobile */}
          <nav className="lg:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.slice(0, 3).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
