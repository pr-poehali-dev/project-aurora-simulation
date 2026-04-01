import { useState } from "react"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "all", label: "Все товары", icon: "LayoutGrid" },
  { id: "skins", label: "Скины", icon: "Sword" },
  { id: "currency", label: "Валюта", icon: "Coins" },
  { id: "accounts", label: "Аккаунты", icon: "UserCircle" },
  { id: "keys", label: "Ключи и игры", icon: "Key" },
  { id: "items", label: "Предметы", icon: "Package" },
]

const sortOptions = [
  { id: "popular", label: "Популярные" },
  { id: "cheap", label: "Дешевле" },
  { id: "expensive", label: "Дороже" },
  { id: "new", label: "Новые" },
]

const products = [
  {
    id: 1,
    title: "AK-47 | Redline (FT)",
    game: "CS2",
    category: "skins",
    price: 520,
    seller: "ProGamer_Alex",
    rating: 4.9,
    deals: 312,
    badge: "Хит",
    badgeColor: "bg-violet-500/20 text-violet-400",
    icon: "Sword",
    color: "from-violet-900/30 to-transparent",
  },
  {
    id: 2,
    title: "10 000 золота",
    game: "World of Warcraft",
    category: "currency",
    price: 350,
    seller: "GoldKing",
    rating: 4.8,
    deals: 1240,
    badge: "Быстро",
    badgeColor: "bg-green-500/20 text-green-400",
    icon: "Coins",
    color: "from-yellow-900/30 to-transparent",
  },
  {
    id: 3,
    title: "Аккаунт 200 lvl",
    game: "Diablo IV",
    category: "accounts",
    price: 2800,
    seller: "LegendSeller",
    rating: 5.0,
    deals: 45,
    badge: "Топ",
    badgeColor: "bg-amber-500/20 text-amber-400",
    icon: "UserCircle",
    color: "from-orange-900/30 to-transparent",
  },
  {
    id: 4,
    title: "Phantom Prime",
    game: "Valorant",
    category: "skins",
    price: 890,
    seller: "ValorantShop",
    rating: 4.7,
    deals: 178,
    badge: null,
    badgeColor: "",
    icon: "Sword",
    color: "from-red-900/30 to-transparent",
  },
  {
    id: 5,
    title: "1000 Robux",
    game: "Roblox",
    category: "currency",
    price: 420,
    seller: "RobuxStore",
    rating: 4.9,
    deals: 3201,
    badge: "Хит",
    badgeColor: "bg-violet-500/20 text-violet-400",
    icon: "Coins",
    color: "from-blue-900/30 to-transparent",
  },
  {
    id: 6,
    title: "FIFA 25 — Ultimate Edition",
    game: "EA Sports",
    category: "keys",
    price: 3200,
    seller: "KeyMaster",
    rating: 4.6,
    deals: 89,
    badge: "Новинка",
    badgeColor: "bg-sky-500/20 text-sky-400",
    icon: "Key",
    color: "from-green-900/30 to-transparent",
  },
  {
    id: 7,
    title: "Dragon Lore (FN)",
    game: "CS2",
    category: "skins",
    price: 45000,
    seller: "RareItems",
    rating: 5.0,
    deals: 12,
    badge: "Редкий",
    badgeColor: "bg-rose-500/20 text-rose-400",
    icon: "Sword",
    color: "from-violet-900/30 to-transparent",
  },
  {
    id: 8,
    title: "Arcana Juggernaut",
    game: "Dota 2",
    category: "items",
    price: 1200,
    seller: "DotaMarket",
    rating: 4.8,
    deals: 234,
    badge: null,
    badgeColor: "",
    icon: "Package",
    color: "from-teal-900/30 to-transparent",
  },
  {
    id: 9,
    title: "V-Bucks 2800",
    game: "Fortnite",
    category: "currency",
    price: 980,
    seller: "FortStore",
    rating: 4.7,
    deals: 567,
    badge: "Быстро",
    badgeColor: "bg-green-500/20 text-green-400",
    icon: "Coins",
    color: "from-blue-900/30 to-transparent",
  },
]

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSort, setActiveSort] = useState("popular")
  const [search, setSearch] = useState("")
  const [onlyVerified, setOnlyVerified] = useState(false)

  const filtered = products.filter((p) => {
    const matchCategory = activeCategory === "all" || p.category === activeCategory
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.game.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  const sorted = [...filtered].sort((a, b) => {
    if (activeSort === "cheap") return a.price - b.price
    if (activeSort === "expensive") return b.price - a.price
    if (activeSort === "new") return b.id - a.id
    return b.deals - a.deals
  })

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Заголовок */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Каталог товаров</h1>
          <p className="text-gray-400">Тысячи предложений от проверенных продавцов</p>
        </div>

        {/* Поиск */}
        <div className="relative mb-6">
          <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="text"
            placeholder="Поиск по названию или игре..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl bg-[#141414] border border-[#262626] pl-11 pr-4 py-3 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Сайдбар фильтры */}
          <aside className="lg:w-56 shrink-0 space-y-2">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 px-1">Категории</p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  activeCategory === cat.id
                    ? "bg-violet-600 text-white"
                    : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                }`}
              >
                <Icon name={cat.icon} size={16} />
                {cat.label}
              </button>
            ))}

            <div className="pt-4">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3 px-1">Фильтры</p>
              <button
                onClick={() => setOnlyVerified(!onlyVerified)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-colors ${
                  onlyVerified
                    ? "bg-[#1a1a1a] text-violet-400 border border-violet-500/30"
                    : "text-gray-400 hover:bg-[#1a1a1a] hover:text-white"
                }`}
              >
                <Icon name="ShieldCheck" size={16} />
                Проверенные продавцы
              </button>
            </div>
          </aside>

          {/* Основной контент */}
          <div className="flex-1">
            {/* Сортировка */}
            <div className="flex items-center justify-between mb-5">
              <span className="text-sm text-gray-500">{sorted.length} товаров</span>
              <div className="flex items-center gap-2">
                {sortOptions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveSort(s.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeSort === s.id
                        ? "bg-[#1f1f1f] text-white border border-[#333]"
                        : "text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Сетка карточек */}
            {sorted.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500">
                <Icon name="SearchX" size={40} className="mb-4 opacity-40" />
                <p className="text-sm">Ничего не найдено. Попробуйте другой запрос.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {sorted.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <footer className="py-8 text-center text-sm text-gray-400 mt-8 border-t border-[#1a1a1a]">
        От редких скинов до игровой валюты —{" "}
        <span className="font-medium text-white">все цифровые товары на одной платформе.</span>
      </footer>
    </main>
  )
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <div className="group rounded-2xl bg-[#141414] border border-[#262626] overflow-hidden hover:border-violet-500/30 transition-all cursor-pointer">
      {/* Превью */}
      <div className={`h-32 bg-gradient-to-br ${product.color} bg-[#1a1a1a] flex items-center justify-center relative`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0f0f0f]/60 border border-[#262626]">
          <Icon name={product.icon} size={28} className="text-gray-300" />
        </div>
        {product.badge && (
          <span className={`absolute top-3 right-3 text-xs font-medium px-2 py-0.5 rounded-full ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Инфо */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{product.game}</p>
        <h3 className="text-sm font-semibold text-white mb-3 leading-tight">{product.title}</h3>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Icon name="Star" size={12} className="text-amber-400 fill-amber-400" />
            <span>{product.rating}</span>
          </div>
          <span className="text-gray-700">·</span>
          <span className="text-xs text-gray-500">{product.deals} сделок</span>
          <span className="text-gray-700">·</span>
          <span className="text-xs text-gray-500 truncate">{product.seller}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-white">
            {product.price.toLocaleString("ru-RU")} ₽
          </span>
          <Button
            size="sm"
            className="rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs px-3 h-8"
          >
            Купить
          </Button>
        </div>
      </div>
    </div>
  )
}