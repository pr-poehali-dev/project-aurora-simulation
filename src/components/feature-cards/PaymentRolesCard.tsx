import { Shield, ArrowUpRight, Wallet, ChevronDown, Info } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Shield className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Безопасные сделки</h3>
      <p className="mb-4 text-sm text-gray-400">Средства заморожены до подтверждения — ни продавец, ни покупатель не рискуют</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/professional-man-portrait.png" alt="ProGamer_Alex" />
              <AvatarFallback className="bg-gray-600 text-white">PA</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">ProGamer_Alex</p>
              <p className="text-xs text-gray-500">Продавец · Рейтинг 4.9 ⭐</p>
            </div>
          </div>
          <button className="text-sm text-violet-400 hover:text-violet-300">Профиль</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Способ оплаты <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <span className="text-sm text-white">Банковская карта</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <p className="mt-1 text-xs text-gray-500">Защита покупателя активна. Комиссия 2%.</p>
        </div>

        <div className="border-t border-dashed border-[#333] pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f0f0f] border border-[#262626]">
                <Wallet className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Игровой кошелёк</p>
                <p className="text-xs text-gray-500">Баланс: 3 500 ₽ · Заморожено: 800 ₽</p>
              </div>
            </div>
            <button className="text-sm text-violet-400 hover:text-violet-300">Пополнить</button>
          </div>
        </div>

        <Button className="w-full bg-[#252525] text-gray-400 hover:bg-[#2a2a2a] hover:text-white">Подтвердить сделку</Button>
      </div>
    </div>
  )
}