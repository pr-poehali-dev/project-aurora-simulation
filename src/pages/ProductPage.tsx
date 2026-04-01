import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Icon from "@/components/ui/icon"

const products = [
  {
    id: 1,
    title: "AK-47 | Redline (FT)",
    game: "CS2",
    category: "Скины",
    price: 520,
    seller: "ProGamer_Alex",
    sellerRating: 4.9,
    sellerDeals: 312,
    sellerAvatar: "/professional-man-portrait.png",
    rating: 4.9,
    deals: 312,
    badge: "Хит",
    badgeColor: "bg-violet-500/20 text-violet-400",
    icon: "Sword",
    color: "from-violet-900/40 to-[#141414]",
    description:
      "Легендарный скин для AK-47 с тёмно-красным рисунком и прожилками. Состояние — После полевых испытаний (FT). Плавающий параметр износа: 0.24. Без StatTrak, без наклеек.",
    specs: [
      { label: "Игра", value: "Counter-Strike 2" },
      { label: "Оружие", value: "AK-47" },
      { label: "Коллекция", value: "The Phoenix Collection" },
      { label: "Качество", value: "После полевых испытаний" },
      { label: "Износ", value: "0.24" },
      { label: "Редкость", value: "Засекреченное" },
    ],
    otherSellers: [
      { name: "SkinDealer99", price: 540, rating: 4.7, deals: 98, avatar: "" },
      { name: "MarketQueen", price: 560, rating: 4.8, deals: 230, avatar: "/professional-woman-portrait.png" },
      { name: "TradeBot_X", price: 510, rating: 4.6, deals: 45, avatar: "" },
    ],
    reviews: [
      { author: "SpeedRunner42", text: "Быстрая сделка, всё честно. Скин пришёл мгновенно.", rating: 5, date: "27 марта 2026" },
      { author: "DarkHunter", text: "Хороший продавец, общение нормальное. Рекомендую.", rating: 5, date: "22 марта 2026" },
      { author: "Noob2Pro", text: "Немного задержали, но в итоге всё окей.", rating: 4, date: "15 марта 2026" },
    ],
  },
  {
    id: 2,
    title: "10 000 золота",
    game: "World of Warcraft",
    category: "Валюта",
    price: 350,
    seller: "GoldKing",
    sellerRating: 4.8,
    sellerDeals: 1240,
    sellerAvatar: "",
    rating: 4.8,
    deals: 1240,
    badge: "Быстро",
    badgeColor: "bg-green-500/20 text-green-400",
    icon: "Coins",
    color: "from-yellow-900/40 to-[#141414]",
    description:
      "Продаю внутриигровое золото для World of Warcraft. Сервер: Азурегос (РУ). Передача через торговый дом или личную встречу в игре. Время передачи — до 15 минут после оплаты.",
    specs: [
      { label: "Игра", value: "World of Warcraft" },
      { label: "Сервер", value: "Азурегос (РУ)" },
      { label: "Фракция", value: "Любая" },
      { label: "Количество", value: "10 000 золота" },
      { label: "Способ передачи", value: "Торговый дом / Личная встреча" },
      { label: "Время доставки", value: "До 15 минут" },
    ],
    otherSellers: [
      { name: "WoWGoldPro", price: 370, rating: 4.5, deals: 560, avatar: "" },
      { name: "AzerothBank", price: 360, rating: 4.9, deals: 890, avatar: "" },
    ],
    reviews: [
      { author: "PaladinMax", text: "Всё чётко, золото получил быстро. Буду брать ещё.", rating: 5, date: "26 марта 2026" },
      { author: "WitchQueen", text: "Надёжный продавец, золото пришло через 10 минут.", rating: 5, date: "20 марта 2026" },
    ],
  },
  {
    id: 3,
    title: "Аккаунт 200 lvl",
    game: "Diablo IV",
    category: "Аккаунты",
    price: 2800,
    seller: "LegendSeller",
    sellerRating: 5.0,
    sellerDeals: 45,
    sellerAvatar: "",
    rating: 5.0,
    deals: 45,
    badge: "Топ",
    badgeColor: "bg-amber-500/20 text-amber-400",
    icon: "UserCircle",
    color: "from-orange-900/40 to-[#141414]",
    description:
      "Прокачанный аккаунт Diablo IV, 200 уровень, все классы открыты. Много редкого лута, завершены все сезонные задания. Аккаунт передаётся с полным доступом к почте.",
    specs: [
      { label: "Игра", value: "Diablo IV" },
      { label: "Уровень", value: "200" },
      { label: "Классы", value: "Все открыты" },
      { label: "Сезон", value: "Завершён полностью" },
      { label: "Передача", value: "Полный доступ + почта" },
      { label: "Гарантия", value: "7 дней" },
    ],
    otherSellers: [],
    reviews: [
      { author: "Necromancer99", text: "Аккаунт именно такой, как описано. Продавец ответил быстро.", rating: 5, date: "25 марта 2026" },
    ],
  },
]

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id)) ?? products[0]

  const [selectedSeller, setSelectedSeller] = useState<number | null>(null)
  const [ordered, setOrdered] = useState(false)

  const allSellers = [
    { name: product.seller, price: product.price, rating: product.sellerRating, deals: product.sellerDeals, avatar: product.sellerAvatar },
    ...product.otherSellers,
  ]

  const chosen = selectedSeller !== null ? allSellers[selectedSeller] : allSellers[0]

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-5xl mx-auto px-4 md:px-8 py-8">
        {/* Хлебные крошки */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to="/catalog" className="hover:text-gray-300 transition-colors">Каталог</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-gray-300 truncate">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Левая колонка */}
          <div className="lg:col-span-3 space-y-5">
            {/* Превью */}
            <div className={`rounded-2xl bg-gradient-to-br ${product.color} border border-[#262626] h-56 flex items-center justify-center relative overflow-hidden`}>
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#0f0f0f]/70 border border-[#333]">
                <Icon name={product.icon} size={40} className="text-gray-200" />
              </div>
              {product.badge && (
                <span className={`absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Описание */}
            <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs text-gray-500 bg-[#1f1f1f] px-2 py-0.5 rounded-md">{product.game}</span>
                <span className="text-xs text-gray-500 bg-[#1f1f1f] px-2 py-0.5 rounded-md">{product.category}</span>
              </div>
              <h1 className="text-2xl font-bold text-white mt-3 mb-4">{product.title}</h1>
              <p className="text-sm text-gray-400 leading-relaxed">{product.description}</p>
            </div>

            {/* Характеристики */}
            <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
              <h2 className="text-sm font-semibold text-white mb-4">Характеристики</h2>
              <div className="grid grid-cols-2 gap-2">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="rounded-xl bg-[#1a1a1a] px-3 py-2.5">
                    <p className="text-xs text-gray-500 mb-0.5">{spec.label}</p>
                    <p className="text-sm text-white font-medium">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Отзывы */}
            {product.reviews.length > 0 && (
              <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
                <h2 className="text-sm font-semibold text-white mb-4">
                  Отзывы <span className="text-gray-500 font-normal">({product.reviews.length})</span>
                </h2>
                <div className="space-y-3">
                  {product.reviews.map((review, i) => (
                    <div key={i} className="rounded-xl bg-[#1a1a1a] p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-7 w-7 rounded-full bg-violet-700 flex items-center justify-center text-xs font-bold text-white">
                            {review.author[0]}
                          </div>
                          <span className="text-sm font-medium text-white">{review.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, j) => (
                            <Icon key={j} name="Star" size={11} className="text-amber-400 fill-amber-400" />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-400">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Правая колонка — оформление */}
          <div className="lg:col-span-2 space-y-4">
            {/* Выбор продавца */}
            <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
              <h2 className="text-sm font-semibold text-white mb-3">
                Выберите продавца <span className="text-gray-500 font-normal">({allSellers.length})</span>
              </h2>
              <div className="space-y-2">
                {allSellers.map((seller, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedSeller(i)}
                    className={`w-full flex items-center gap-3 rounded-xl p-3 border transition-all text-left ${
                      (selectedSeller === null && i === 0) || selectedSeller === i
                        ? "border-violet-500/50 bg-violet-500/5"
                        : "border-[#262626] bg-[#1a1a1a] hover:border-[#333]"
                    }`}
                  >
                    <Avatar className="h-9 w-9 shrink-0">
                      {seller.avatar ? <img src={seller.avatar} alt={seller.name} className="rounded-full object-cover" /> : null}
                      <AvatarFallback className="bg-violet-800 text-white text-xs">
                        {seller.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white truncate">{seller.name}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="flex items-center gap-0.5">
                          <Icon name="Star" size={10} className="text-amber-400 fill-amber-400" />
                          {seller.rating}
                        </span>
                        <span>·</span>
                        <span>{seller.deals} сделок</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-white shrink-0">
                      {seller.price.toLocaleString("ru-RU")} ₽
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Блок покупки */}
            <div className="rounded-2xl bg-[#141414] border border-[#262626] p-5 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">Итого</span>
                <span className="text-3xl font-bold text-white">
                  {chosen.price.toLocaleString("ru-RU")} ₽
                </span>
              </div>

              <div className="space-y-2 mb-5 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Icon name="ShieldCheck" size={13} className="text-green-400" />
                  Защита покупателя активна
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={13} className="text-violet-400" />
                  Моментальная передача после оплаты
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="RotateCcw" size={13} className="text-blue-400" />
                  Возврат при споре
                </div>
              </div>

              {ordered ? (
                <div className="rounded-xl bg-green-500/10 border border-green-500/20 p-4 text-center">
                  <Icon name="CheckCircle" size={24} className="text-green-400 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-400">Заказ оформлен!</p>
                  <p className="text-xs text-gray-500 mt-1">Проверьте историю заказов в профиле</p>
                  <Link to="/profile">
                    <Button size="sm" variant="outline" className="mt-3 rounded-lg border-[#333] text-gray-400 bg-transparent hover:text-white text-xs">
                      Перейти в профиль
                    </Button>
                  </Link>
                </div>
              ) : (
                <Button
                  className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold h-11"
                  onClick={() => setOrdered(true)}
                >
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Купить за {chosen.price.toLocaleString("ru-RU")} ₽
                </Button>
              )}

              <div className="mt-4 flex items-center justify-center gap-1 text-xs text-gray-600">
                <Icon name="Lock" size={11} />
                Оплата защищена платформой
              </div>
            </div>
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
