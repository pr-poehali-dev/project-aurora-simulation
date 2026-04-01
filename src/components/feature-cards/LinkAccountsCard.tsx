import { Gamepad2, ArrowUpRight, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const listings = [
  { name: "ProGamer_Alex", info: "CS2 — AK-47 Redline", code: "500 ₽", image: "/professional-man-portrait.png" },
  { name: "MarketQueen", info: "Dota 2 — Arcana Juggernaut", code: "1 200 ₽", image: "/professional-woman-portrait.png" },
  { name: "SkinTrader", info: "Valorant — Phantom Prime", code: "800 ₽", initials: "ST", color: "bg-teal-600" },
  { name: "GoldSeller", info: "WoW — 10 000 золота", code: "350 ₽", initials: "GS", color: "bg-amber-600" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Gamepad2 className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Каталог товаров</h3>
      <p className="mb-4 text-sm text-gray-400">Тысячи предложений от продавцов — скины, валюта, аккаунты и редкие предметы</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Открыть каталог <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {listings.map((listing, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                {listing.image ? (
                  <AvatarImage src={listing.image || "/placeholder.svg"} alt={listing.name} />
                ) : null}
                <AvatarFallback className={`${listing.color || "bg-gray-600"} text-white text-xs`}>
                  {listing.initials ||
                    listing.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-white">{listing.name}</p>
                <p className="text-xs text-gray-500">{listing.info}</p>
              </div>
            </div>
            <span className="text-xs text-violet-400 font-medium">{listing.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Разместить товар
        </Button>
      </div>
    </div>
  )
}