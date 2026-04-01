import { useState } from "react"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

const tabs = [
  { id: "orders", label: "История заказов", icon: "ShoppingBag" },
  { id: "listings", label: "Мои объявления", icon: "Tag" },
  { id: "wallet", label: "Кошелёк", icon: "Wallet" },
  { id: "settings", label: "Настройки", icon: "Settings" },
]

const orders = [
  {
    id: "ORD-4821",
    title: "AK-47 | Redline (FT)",
    game: "CS2",
    seller: "ProGamer_Alex",
    price: 520,
    status: "completed",
    date: "28 марта 2026",
    icon: "Sword",
  },
  {
    id: "ORD-4790",
    title: "10 000 золота",
    game: "World of Warcraft",
    seller: "GoldKing",
    price: 350,
    status: "completed",
    date: "24 марта 2026",
    icon: "Coins",
  },
  {
    id: "ORD-4755",
    title: "V-Bucks 2800",
    game: "Fortnite",
    seller: "FortStore",
    price: 980,
    status: "pending",
    date: "20 марта 2026",
    icon: "Coins",
  },
  {
    id: "ORD-4712",
    title: "Phantom Prime",
    game: "Valorant",
    seller: "ValorantShop",
    price: 890,
    status: "disputed",
    date: "15 марта 2026",
    icon: "Sword",
  },
  {
    id: "ORD-4680",
    title: "Arcana Juggernaut",
    game: "Dota 2",
    seller: "DotaMarket",
    price: 1200,
    status: "completed",
    date: "10 марта 2026",
    icon: "Package",
  },
]

const myListings = [
  {
    id: "LST-221",
    title: "Glock-18 | Water Elemental (MW)",
    game: "CS2",
    price: 180,
    status: "active",
    views: 234,
    date: "29 марта 2026",
    icon: "Sword",
  },
  {
    id: "LST-198",
    title: "5000 Riot Points",
    game: "League of Legends",
    price: 650,
    status: "active",
    views: 87,
    date: "25 марта 2026",
    icon: "Coins",
  },
  {
    id: "LST-177",
    title: "Аккаунт 85 lvl (все классы)",
    game: "World of Warcraft",
    price: 1800,
    status: "sold",
    views: 512,
    date: "18 марта 2026",
    icon: "UserCircle",
  },
  {
    id: "LST-155",
    title: "Steam Deck — ключ активации",
    game: "Steam",
    price: 4200,
    status: "inactive",
    views: 41,
    date: "5 марта 2026",
    icon: "Key",
  },
]

const statusConfig = {
  completed: { label: "Завершён", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  pending: { label: "В процессе", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  disputed: { label: "Спор", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
  active: { label: "Активно", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  sold: { label: "Продано", color: "text-gray-400 bg-gray-500/10 border-gray-500/20" },
  inactive: { label: "Снято", color: "text-gray-500 bg-gray-500/10 border-gray-700" },
}

export default function Profile() {
  const [activeTab, setActiveTab] = useState("orders")

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Шапка профиля */}
        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="relative">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/professional-man-portrait.png" alt="ProGamer_Alex" />
                <AvatarFallback className="bg-violet-700 text-white text-xl">PA</AvatarFallback>
              </Avatar>
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 border-2 border-[#141414]" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h1 className="text-xl font-bold text-white">ProGamer_Alex</h1>
                <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/20">
                  <Icon name="ShieldCheck" size={11} /> Проверен
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">alexey@example.com · На платформе с января 2025</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Icon name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  <span className="font-medium text-white">4.9</span>
                  <span className="text-gray-600">рейтинг</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Icon name="ShoppingBag" size={14} className="text-violet-400" />
                  <span className="font-medium text-white">312</span>
                  <span className="text-gray-600">сделок</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <Icon name="Tag" size={14} className="text-violet-400" />
                  <span className="font-medium text-white">4</span>
                  <span className="text-gray-600">объявления</span>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="rounded-xl border-[#333] text-gray-400 hover:text-white hover:border-[#444] bg-transparent shrink-0"
            >
              <Icon name="Edit2" size={14} className="mr-2" />
              Редактировать
            </Button>
          </div>
        </div>

        {/* Табы */}
        <div className="flex gap-1 rounded-xl bg-[#141414] border border-[#262626] p-1 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#262626] text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <Icon name={tab.icon} size={15} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Контент табов */}
        {activeTab === "orders" && <OrdersTab />}
        {activeTab === "listings" && <ListingsTab />}
        {activeTab === "wallet" && <WalletTab />}
        {activeTab === "settings" && <SettingsTab />}
      </div>

      <footer className="py-8 text-center text-sm text-gray-400 mt-4 border-t border-[#1a1a1a]">
        От редких скинов до игровой валюты —{" "}
        <span className="font-medium text-white">все цифровые товары на одной платформе.</span>
      </footer>
    </main>
  )
}

function OrdersTab() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">История заказов</h2>
        <span className="text-sm text-gray-500">{orders.length} заказов</span>
      </div>
      {orders.map((order) => (
        <div
          key={order.id}
          className="flex items-center gap-4 rounded-xl bg-[#141414] border border-[#262626] p-4 hover:border-[#333] transition-colors"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
            <Icon name={order.icon} size={18} className="text-gray-400" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <p className="text-sm font-medium text-white truncate">{order.title}</p>
              <span className="text-xs text-gray-600">{order.game}</span>
            </div>
            <p className="text-xs text-gray-500">
              {order.id} · {order.seller} · {order.date}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-sm font-semibold text-white">{order.price.toLocaleString("ru-RU")} ₽</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full border ${
                statusConfig[order.status as keyof typeof statusConfig].color
              }`}
            >
              {statusConfig[order.status as keyof typeof statusConfig].label}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function ListingsTab() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Мои объявления</h2>
        <Button size="sm" className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs h-8 px-3">
          <Icon name="Plus" size={13} className="mr-1.5" />
          Разместить
        </Button>
      </div>
      {myListings.map((listing) => (
        <div
          key={listing.id}
          className="flex items-center gap-4 rounded-xl bg-[#141414] border border-[#262626] p-4 hover:border-[#333] transition-colors"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
            <Icon name={listing.icon} size={18} className="text-gray-400" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <p className="text-sm font-medium text-white truncate">{listing.title}</p>
              <span className="text-xs text-gray-600">{listing.game}</span>
            </div>
            <p className="text-xs text-gray-500">
              {listing.id} · {listing.views} просмотров · {listing.date}
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 shrink-0">
            <span className="text-sm font-semibold text-white">{listing.price.toLocaleString("ru-RU")} ₽</span>
            <div className="flex items-center gap-2">
              <span
                className={`text-xs px-2 py-0.5 rounded-full border ${
                  statusConfig[listing.status as keyof typeof statusConfig].color
                }`}
              >
                {statusConfig[listing.status as keyof typeof statusConfig].label}
              </span>
              {listing.status !== "sold" && (
                <button className="text-xs text-gray-500 hover:text-violet-400 transition-colors">
                  <Icon name="Edit2" size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function WalletTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-semibold text-white mb-4">Кошелёк</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
        {[
          { label: "Доступно", value: "3 500 ₽", icon: "Wallet", color: "text-green-400" },
          { label: "Заморожено", value: "980 ₽", icon: "Lock", color: "text-amber-400" },
          { label: "Выведено всего", value: "12 400 ₽", icon: "ArrowUpRight", color: "text-violet-400" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl bg-[#141414] border border-[#262626] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Icon name={stat.icon} size={15} className={stat.color} />
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
            <p className="text-xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <Button className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white flex-1">
          <Icon name="Plus" size={15} className="mr-2" /> Пополнить
        </Button>
        <Button variant="outline" className="rounded-xl border-[#333] text-gray-400 hover:text-white bg-transparent flex-1">
          <Icon name="ArrowUpRight" size={15} className="mr-2" /> Вывести
        </Button>
      </div>

      <div className="rounded-xl bg-[#141414] border border-[#262626] p-4">
        <p className="text-sm font-medium text-white mb-3">Последние операции</p>
        {[
          { label: "Продажа: AK-47 Redline", amount: "+520 ₽", date: "28 мар", plus: true },
          { label: "Покупка: V-Bucks 2800", amount: "−980 ₽", date: "20 мар", plus: false },
          { label: "Продажа: WoW аккаунт", amount: "+1 800 ₽", date: "18 мар", plus: true },
          { label: "Вывод на карту", amount: "−3 000 ₽", date: "12 мар", plus: false },
        ].map((tx, i) => (
          <div key={i} className="flex items-center justify-between py-2.5 border-b border-[#1f1f1f] last:border-0">
            <div>
              <p className="text-sm text-white">{tx.label}</p>
              <p className="text-xs text-gray-500">{tx.date}</p>
            </div>
            <span className={`text-sm font-medium ${tx.plus ? "text-green-400" : "text-gray-400"}`}>
              {tx.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function SettingsTab() {
  return (
    <div className="space-y-4">
      <h2 className="text-base font-semibold text-white mb-4">Настройки профиля</h2>

      <div className="rounded-xl bg-[#141414] border border-[#262626] divide-y divide-[#1f1f1f]">
        {[
          { label: "Имя пользователя", value: "ProGamer_Alex", icon: "User" },
          { label: "Email", value: "alexey@example.com", icon: "Mail" },
          { label: "Телефон", value: "+7 (999) 123-45-67", icon: "Phone" },
        ].map((field) => (
          <div key={field.label} className="flex items-center justify-between px-4 py-3.5">
            <div className="flex items-center gap-3">
              <Icon name={field.icon} size={15} className="text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">{field.label}</p>
                <p className="text-sm text-white">{field.value}</p>
              </div>
            </div>
            <button className="text-xs text-violet-400 hover:text-violet-300 transition-colors">Изменить</button>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-[#141414] border border-[#262626] divide-y divide-[#1f1f1f]">
        {[
          { label: "Уведомления о новых сделках", enabled: true },
          { label: "Уведомления о статусах заказов", enabled: true },
          { label: "Рекламные рассылки", enabled: false },
        ].map((setting) => (
          <div key={setting.label} className="flex items-center justify-between px-4 py-3.5">
            <span className="text-sm text-gray-300">{setting.label}</span>
            <div
              className={`relative w-9 h-5 rounded-full transition-colors ${
                setting.enabled ? "bg-violet-600" : "bg-[#333]"
              }`}
            >
              <div
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                  setting.enabled ? "translate-x-4" : "translate-x-0.5"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="outline"
        className="w-full rounded-xl border-rose-500/30 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300 bg-transparent"
      >
        <Icon name="LogOut" size={15} className="mr-2" />
        Выйти из аккаунта
      </Button>
    </div>
  )
}
