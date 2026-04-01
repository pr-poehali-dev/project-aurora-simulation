import { Gamepad2, Sword, Trophy, Flame, Gem, Zap, Shield } from "lucide-react"

const partners = [
  { name: "Steam", icon: Gamepad2 },
  { name: "Epic Games", icon: Sword },
  { name: "Battle.net", icon: Trophy },
  { name: "Riot Games", icon: Flame },
  { name: "Origin", icon: Gem },
  { name: "GOG", icon: Zap },
  { name: "Ubisoft", icon: Shield },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}</span>
        </div>
      ))}
    </section>
  )
}