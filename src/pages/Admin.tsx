import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

type Tab = "dashboard" | "users" | "listings" | "orders" | "disputes"

const stats = [
  { label: "Пользователей", value: "3 241", delta: "+48 за неделю", icon: "Users", color: "text-violet-400" },
  { label: "Активных объявлений", value: "1 087", delta: "+123 за неделю", icon: "Tag", color: "text-green-400" },
  { label: "Заказов всего", value: "18 540", delta: "+340 за неделю", icon: "ShoppingBag", color: "text-blue-400" },
  { label: "Открытых споров", value: "12", delta: "−3 за неделю", icon: "AlertTriangle", color: "text-amber-400" },
]

const users = [
  { id: 1, name: "ProGamer_Alex", email: "alex@example.com", role: "seller", status: "active", deals: 312, joined: "10 янв 2025", avatar: "/professional-man-portrait.png" },
  { id: 2, name: "MarketQueen", email: "queen@example.com", role: "seller", status: "active", deals: 230, joined: "15 янв 2025", avatar: "/professional-woman-portrait.png" },
  { id: 3, name: "SpeedRunner42", email: "speed@example.com", role: "buyer", status: "active", deals: 45, joined: "3 фев 2025", avatar: "" },
  { id: 4, name: "DarkHunter", email: "dark@example.com", role: "buyer", status: "banned", deals: 8, joined: "20 фев 2025", avatar: "" },
  { id: 5, name: "GoldKing", email: "gold@example.com", role: "seller", status: "active", deals: 1240, joined: "5 янв 2025", avatar: "" },
  { id: 6, name: "TradeBot_X", email: "bot@example.com", role: "seller", status: "suspended", deals: 45, joined: "1 мар 2025", avatar: "" },
]

const listings = [
  { id: 1, title: "AK-47 | Redline (FT)", game: "CS2", seller: "ProGamer_Alex", price: 520, status: "active", views: 1240, date: "29 мар 2026" },
  { id: 2, title: "10 000 золота", game: "WoW", seller: "GoldKing", price: 350, status: "active", views: 890, date: "28 мар 2026" },
  { id: 3, title: "Аккаунт 200 lvl", game: "Diablo IV", seller: "LegendSeller", price: 2800, status: "moderation", views: 56, date: "30 мар 2026" },
  { id: 4, title: "Dragon Lore (FN)", game: "CS2", seller: "RareItems", price: 45000, status: "active", views: 3400, date: "27 мар 2026" },
  { id: 5, title: "Phantom Prime", game: "Valorant", seller: "ValorantShop", price: 890, status: "blocked", views: 210, date: "25 мар 2026" },
]

const orders = [
  { id: "ORD-4821", buyer: "SpeedRunner42", seller: "ProGamer_Alex", item: "AK-47 | Redline", price: 520, status: "completed", date: "28 мар 2026" },
  { id: "ORD-4820", buyer: "DarkHunter", seller: "GoldKing", item: "10 000 золота", price: 350, status: "completed", date: "28 мар 2026" },
  { id: "ORD-4819", buyer: "Noob2Pro", seller: "ValorantShop", item: "Phantom Prime", price: 890, status: "disputed", date: "27 мар 2026" },
  { id: "ORD-4818", buyer: "PaladinMax", seller: "GoldKing", item: "10 000 золота", price: 350, status: "pending", date: "27 мар 2026" },
  { id: "ORD-4817", buyer: "WitchQueen", seller: "ProGamer_Alex", item: "AK-47 | Redline", price: 520, status: "completed", date: "26 мар 2026" },
]

const disputes = [
  { id: "DSP-112", buyer: "Noob2Pro", seller: "ValorantShop", item: "Phantom Prime", price: 890, reason: "Товар не передан", status: "open", date: "27 мар 2026" },
  { id: "DSP-111", buyer: "DarkHunter", seller: "TradeBot_X", item: "Steam ключ", price: 1200, reason: "Ключ уже использован", status: "open", date: "25 мар 2026" },
  { id: "DSP-110", buyer: "SpeedRunner42", seller: "RareItems", item: "Dragon Lore", price: 45000, reason: "Состояние не соответствует", status: "resolved", date: "20 мар 2026" },
]

const userStatusConfig: Record<string, { label: string; color: string }> = {
  active: { label: "Активен", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  banned: { label: "Заблокирован", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
  suspended: { label: "Приостановлен", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
}

const listingStatusConfig: Record<string, { label: string; color: string }> = {
  active: { label: "Активно", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  moderation: { label: "На модерации", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  blocked: { label: "Заблокировано", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
}

const orderStatusConfig: Record<string, { label: string; color: string }> = {
  completed: { label: "Завершён", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  pending: { label: "В процессе", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  disputed: { label: "Спор", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
}

const disputeStatusConfig: Record<string, { label: string; color: string }> = {
  open: { label: "Открыт", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  resolved: { label: "Решён", color: "text-green-400 bg-green-500/10 border-green-500/20" },
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard")

  const tabs: { id: Tab; label: string; icon: string; badge?: number }[] = [
    { id: "dashboard", label: "Обзор", icon: "LayoutDashboard" },
    { id: "users", label: "Пользователи", icon: "Users" },
    { id: "listings", label: "Объявления", icon: "Tag" },
    { id: "orders", label: "Заказы", icon: "ShoppingBag" },
    { id: "disputes", label: "Споры", icon: "AlertTriangle", badge: 2 },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex">
      {/* Сайдбар */}
      <aside className="w-56 shrink-0 border-r border-[#1a1a1a] flex flex-col py-5 px-3">
        <Link to="/" className="flex items-center gap-2 px-2 mb-8">
          <GameMarketLogo />
          <div>
            <p className="text-sm font-semibold text-white leading-none">GameMarket</p>
            <p className="text-xs text-gray-600 mt-0.5">Админ-панель</p>
          </div>
        </Link>

        <nav className="space-y-1 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                activeTab === tab.id
                  ? "bg-violet-600 text-white"
                  : "text-gray-500 hover:bg-[#141414] hover:text-white"
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span className="flex-1 text-left">{tab.label}</span>
              {tab.badge && (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-white text-[10px] font-bold">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="border-t border-[#1a1a1a] pt-4 mt-4 space-y-1">
          <Link
            to="/catalog"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-[#141414] hover:text-white transition-colors"
          >
            <Icon name="Store" size={16} />
            На сайт
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500 hover:bg-[#141414] hover:text-rose-400 transition-colors">
            <Icon name="LogOut" size={16} />
            Выйти
          </button>
        </div>
      </aside>

      {/* Основной контент */}
      <main className="flex-1 overflow-auto">
        <div className="px-6 py-6 max-w-6xl">
          {activeTab === "dashboard" && <DashboardTab />}
          {activeTab === "users" && <UsersTab />}
          {activeTab === "listings" && <ListingsTab />}
          {activeTab === "orders" && <OrdersTab />}
          {activeTab === "disputes" && <DisputesTab />}
        </div>
      </main>
    </div>
  )
}

function DashboardTab() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Обзор платформы</h1>
        <p className="text-sm text-gray-500 mt-1">Сводка по состоянию на 1 апреля 2026</p>
      </div>

      {/* Статистика */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl bg-[#141414] border border-[#262626] p-4">
            <div className="flex items-center gap-2 mb-3">
              <Icon name={s.icon} size={16} className={s.color} />
              <span className="text-xs text-gray-500">{s.label}</span>
            </div>
            <p className="text-2xl font-bold text-white">{s.value}</p>
            <p className="text-xs text-gray-600 mt-1">{s.delta}</p>
          </div>
        ))}
      </div>

      {/* Последние споры */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-white">Открытые споры</h2>
            <button onClick={() => {}} className="text-xs text-violet-400 hover:text-violet-300">Все споры</button>
          </div>
          <div className="space-y-3">
            {disputes.filter(d => d.status === "open").map((d) => (
              <div key={d.id} className="flex items-center gap-3 rounded-xl bg-[#1a1a1a] p-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 border border-rose-500/20">
                  <Icon name="AlertTriangle" size={14} className="text-rose-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{d.item}</p>
                  <p className="text-xs text-gray-500">{d.buyer} → {d.seller}</p>
                </div>
                <span className="text-sm font-medium text-white shrink-0">{d.price.toLocaleString("ru-RU")} ₽</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-white">Последние заказы</h2>
            <button className="text-xs text-violet-400 hover:text-violet-300">Все заказы</button>
          </div>
          <div className="space-y-3">
            {orders.slice(0, 4).map((o) => (
              <div key={o.id} className="flex items-center gap-3 rounded-xl bg-[#1a1a1a] p-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white truncate">{o.item}</p>
                  <p className="text-xs text-gray-500">{o.id} · {o.date}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm font-medium text-white">{o.price.toLocaleString("ru-RU")} ₽</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${orderStatusConfig[o.status].color}`}>
                    {orderStatusConfig[o.status].label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function UsersTab() {
  const [search, setSearch] = useState("")
  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Пользователи</h1>
          <p className="text-sm text-gray-500 mt-1">{users.length} зарегистрировано</p>
        </div>
      </div>

      <div className="relative mb-4">
        <Icon name="Search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          placeholder="Поиск по имени или email..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-xl bg-[#141414] border border-[#262626] pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
        />
      </div>

      <div className="rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1f1f1f]">
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Пользователь</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 hidden md:table-cell">Роль</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 hidden lg:table-cell">Сделок</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Статус</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-gray-500">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1a1a1a]">
            {filtered.map((user) => (
              <tr key={user.id} className="hover:bg-[#1a1a1a] transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 shrink-0">
                      {user.avatar && <AvatarImage src={user.avatar} alt={user.name} />}
                      <AvatarFallback className="bg-violet-800 text-white text-xs">
                        {user.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-white">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${
                    user.role === "seller"
                      ? "text-violet-400 bg-violet-500/10 border-violet-500/20"
                      : "text-gray-400 bg-gray-500/10 border-gray-500/20"
                  }`}>
                    {user.role === "seller" ? "Продавец" : "Покупатель"}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">{user.deals}</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${userStatusConfig[user.status].color}`}>
                    {userStatusConfig[user.status].label}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="text-xs text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-[#262626]">
                      <Icon name="Eye" size={14} />
                    </button>
                    {user.status === "active" ? (
                      <button className="text-xs text-gray-500 hover:text-rose-400 transition-colors p-1 rounded-lg hover:bg-[#262626]">
                        <Icon name="Ban" size={14} />
                      </button>
                    ) : (
                      <button className="text-xs text-gray-500 hover:text-green-400 transition-colors p-1 rounded-lg hover:bg-[#262626]">
                        <Icon name="CheckCircle" size={14} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function ListingsTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Объявления</h1>
          <p className="text-sm text-gray-500 mt-1">{listings.length} объявлений</p>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
          1 на модерации
        </span>
      </div>

      <div className="rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1f1f1f]">
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Товар</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 hidden md:table-cell">Продавец</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 hidden lg:table-cell">Просмотры</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Цена</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Статус</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-gray-500">Действия</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1a1a1a]">
            {listings.map((l) => (
              <tr key={l.id} className="hover:bg-[#1a1a1a] transition-colors">
                <td className="px-4 py-3">
                  <p className="font-medium text-white">{l.title}</p>
                  <p className="text-xs text-gray-500">{l.game} · {l.date}</p>
                </td>
                <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{l.seller}</td>
                <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">{l.views.toLocaleString("ru-RU")}</td>
                <td className="px-4 py-3 font-medium text-white">{l.price.toLocaleString("ru-RU")} ₽</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${listingStatusConfig[l.status].color}`}>
                    {listingStatusConfig[l.status].label}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    {l.status === "moderation" && (
                      <button className="text-xs text-green-400 hover:text-green-300 p-1 rounded-lg hover:bg-[#262626] transition-colors">
                        <Icon name="CheckCircle" size={14} />
                      </button>
                    )}
                    <button className="text-xs text-gray-500 hover:text-rose-400 p-1 rounded-lg hover:bg-[#262626] transition-colors">
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function OrdersTab() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Заказы</h1>
        <p className="text-sm text-gray-500 mt-1">{orders.length} последних заказов</p>
      </div>

      <div className="rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#1f1f1f]">
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">ID / Товар</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 hidden md:table-cell">Покупатель</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 hidden md:table-cell">Продавец</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Сумма</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500">Статус</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1a1a1a]">
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-[#1a1a1a] transition-colors">
                <td className="px-4 py-3">
                  <p className="font-medium text-white">{o.item}</p>
                  <p className="text-xs text-gray-500">{o.id} · {o.date}</p>
                </td>
                <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{o.buyer}</td>
                <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{o.seller}</td>
                <td className="px-4 py-3 font-medium text-white">{o.price.toLocaleString("ru-RU")} ₽</td>
                <td className="px-4 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${orderStatusConfig[o.status].color}`}>
                    {orderStatusConfig[o.status].label}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function DisputesTab() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Споры</h1>
        <p className="text-sm text-gray-500 mt-1">Управление конфликтными сделками</p>
      </div>

      <div className="space-y-3">
        {disputes.map((d) => (
          <div key={d.id} className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 ${
                  d.status === "open" ? "bg-rose-500/10 border border-rose-500/20" : "bg-green-500/10 border border-green-500/20"
                }`}>
                  <Icon name={d.status === "open" ? "AlertTriangle" : "CheckCircle"} size={18}
                    className={d.status === "open" ? "text-rose-400" : "text-green-400"} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{d.id} · {d.item}</p>
                  <p className="text-xs text-gray-500">{d.date}</p>
                </div>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full border self-start sm:self-auto ${disputeStatusConfig[d.status].color}`}>
                {disputeStatusConfig[d.status].label}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { label: "Покупатель", value: d.buyer, icon: "User" },
                { label: "Продавец", value: d.seller, icon: "Tag" },
                { label: "Причина", value: d.reason, icon: "MessageCircle" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-[#1a1a1a] p-3">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon name={item.icon} size={12} className="text-gray-600" />
                    <p className="text-xs text-gray-500">{item.label}</p>
                  </div>
                  <p className="text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white">{d.price.toLocaleString("ru-RU")} ₽</span>
              {d.status === "open" && (
                <div className="flex gap-2">
                  <Button size="sm" className="rounded-lg bg-green-600 hover:bg-green-700 text-white text-xs h-8 px-3">
                    <Icon name="CheckCircle" size={13} className="mr-1.5" />
                    Вернуть покупателю
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-lg border-[#333] text-gray-400 bg-transparent hover:text-white text-xs h-8 px-3">
                    <Icon name="ArrowRight" size={13} className="mr-1.5" />
                    Отдать продавцу
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function GameMarketLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="13" rx="3" fill="#8B5CF6" opacity="0.3" />
      <rect x="2" y="7" width="20" height="13" rx="3" stroke="#8B5CF6" strokeWidth="1.5" />
      <path d="M8 13.5H12M10 11.5V15.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15.5" cy="12.5" r="1" fill="#8B5CF6" />
      <circle cx="17.5" cy="14.5" r="1" fill="#8B5CF6" />
      <path d="M7 4L12 2L17 4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
