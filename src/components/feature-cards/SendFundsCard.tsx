import { ShoppingCart, ChevronDown, Info, Search } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight } from "lucide-react"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <ShoppingCart className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Быстрый заказ</h3>
      <p className="mb-4 text-sm text-gray-400">Найдите нужный товар, выберите продавца и оформите покупку в пару кликов</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Перейти в каталог <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-[#1a1a1a] border border-[#262626] p-4">
        <div className="flex items-center justify-between rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
          <div className="flex items-center gap-3">
            <Search className="h-5 w-5 text-gray-500" />
            <div>
              <p className="text-sm font-medium text-white">Категория товара</p>
              <p className="text-xs text-gray-500">Скины, валюта, аккаунты, ключи</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Поиск товара <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
            <input
              type="text"
              placeholder="Например: AK-47 Redline..."
              className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-400">
            Максимальная цена <span className="text-violet-400">*</span> (Необязательно)
          </label>
          <div className="relative">
            <div className="flex items-center rounded-lg bg-[#0f0f0f] border border-[#262626] px-3 py-2.5">
              <span className="text-gray-500 mr-2">₽</span>
              <input
                type="text"
                placeholder="0,00"
                className="flex-1 bg-transparent text-white placeholder-gray-600 outline-none text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Switch className="data-[state=checked]:bg-violet-600" />
          <span className="text-sm text-gray-400">Только проверенные продавцы</span>
        </div>
      </div>
    </div>
  )
}