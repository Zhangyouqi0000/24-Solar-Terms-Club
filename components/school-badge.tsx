import Image from "next/image"

export function SchoolBadge() {
  return (
    <div className="relative w-12 h-12 md:w-16 md:h-16">
      <Image
        src="/school-badge.png"
        alt="北京实验学校附属丰台实验小学校徽"
        fill
        className="object-contain"
        priority
        sizes="(max-width: 768px) 48px, 64px"
      />
    </div>
  )
}
