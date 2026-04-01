import { Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const plans = [
  {
    id: "starter",
    name: "Стартовый",
    desc: "Для тех, кто только начинает",
    price: 0,
    priceNote: "Бесплатно навсегда",
    commission: "5%",
    color: "border-[#262626]",
    highlight: false,
    features: [
      { text: "До 5 активных объявлений", ok: true },
      { text: "Вывод от 500 ₽", ok: true },
      { text: "Защита покупателя", ok: true },
      { text: "Базовая поддержка", ok: true },
      { text: "Приоритет в поиске", ok: false },
      { text: "Значок «Проверен»", ok: false },
      { text: "Персональный менеджер", ok: false },
    ],
    cta: "Начать бесплатно",
    ctaLink: "/auth",
  },
  {
    id: "pro",
    name: "Про",
    desc: "Для активных продавцов",
    price: 490,
    priceNote: "в месяц",
    commission: "2%",
    color: "border-violet-500/50",
    highlight: true,
    badge: "Популярный",
    features: [
      { text: "До 50 активных объявлений", ok: true },
      { text: "Вывод от 100 ₽", ok: true },
      { text: "Защита покупателя", ok: true },
      { text: "Приоритетная поддержка", ok: true },
      { text: "Приоритет в поиске", ok: true },
      { text: "Значок «Проверен»", ok: true },
      { text: "Персональный менеджер", ok: false },
    ],
    cta: "Подключить Про",
    ctaLink: "/auth",
  },
  {
    id: "business",
    name: "Бизнес",
    desc: "Для крупных торговцев",
    price: 1990,
    priceNote: "в месяц",
    commission: "1%",
    color: "border-[#262626]",
    highlight: false,
    features: [
      { text: "Неограниченные объявления", ok: true },
      { text: "Мгновенный вывод без лимита", ok: true },
      { text: "Защита покупателя", ok: true },
      { text: "Поддержка 24/7", ok: true },
      { text: "Топ в поиске и каталоге", ok: true },
      { text: "Значок «Официальный продавец»", ok: true },
      { text: "Персональный менеджер", ok: true },
    ],
    cta: "Подключить Бизнес",
    ctaLink: "/auth",
  },
]

const faq = [
  { q: "Можно ли сменить тариф?", a: "Да, в любое время. При переходе на более высокий тариф доплачивается разница за оставшиеся дни месяца." },
  { q: "Что входит в комиссию?", a: "Комиссия списывается с каждой успешной сделки. Включает платёжную защиту, эскроу и гарантию платформы." },
  { q: "Есть ли бесплатный период для Про и Бизнес?", a: "Да, для новых продавцов доступен пробный период 7 дней на тарифе Про без оплаты." },
  { q: "Как происходит оплата подписки?", a: "Банковской картой или с кошелька платформы. Подписка продлевается автоматически, отмена — в любой момент." },
]

export default function Pricing() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 pt-14 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Простые тарифы</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Начните бесплатно и переходите на следующий уровень по мере роста продаж
        </p>
      </section>

      {/* Тарифные карточки */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl bg-[#141414] border p-6 flex flex-col ${plan.color} ${
                plan.highlight ? "ring-1 ring-violet-500/30" : ""
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-violet-600 text-white">
                  {plan.badge}
                </span>
              )}

              <div className="mb-5">
                <p className="text-xs text-gray-500 mb-1">{plan.desc}</p>
                <h2 className="text-xl font-bold text-white">{plan.name}</h2>
              </div>

              <div className="mb-5">
                <div className="flex items-end gap-2">
                  {plan.price === 0 ? (
                    <span className="text-3xl font-bold text-white">0 ₽</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-white">{plan.price.toLocaleString("ru-RU")} ₽</span>
                    </>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{plan.priceNote}</p>
              </div>

              <div className="rounded-xl bg-[#1a1a1a] border border-[#262626] px-4 py-3 mb-5 flex items-center justify-between">
                <span className="text-xs text-gray-500">Комиссия с продажи</span>
                <span className="text-sm font-bold text-white">{plan.commission}</span>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2.5">
                    <Icon
                      name={f.ok ? "Check" : "X"}
                      size={14}
                      className={f.ok ? "text-green-400 shrink-0" : "text-gray-700 shrink-0"}
                    />
                    <span className={`text-sm ${f.ok ? "text-gray-300" : "text-gray-600"}`}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <Link to={plan.ctaLink}>
                <Button
                  className={`w-full rounded-xl h-10 text-sm font-medium ${
                    plan.highlight
                      ? "bg-violet-600 hover:bg-violet-700 text-white"
                      : "bg-[#1f1f1f] hover:bg-[#2a2a2a] text-gray-300 hover:text-white border border-[#333]"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Все тарифы включают базовую защиту сделок. НДС включён в стоимость.
        </p>
      </section>

      {/* Сравнение для покупателей */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20">
            <Icon name="ShoppingBag" size={24} className="text-violet-400" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-base font-semibold text-white mb-1">Для покупателей — бесплатно</h3>
            <p className="text-sm text-gray-500">Регистрация, просмотр каталога, покупки и защита сделок — полностью бесплатны для покупателей. Комиссию платит только продавец.</p>
          </div>
          <Link to="/auth" className="shrink-0">
            <Button className="rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm px-5 h-10">
              Зарегистрироваться
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-10">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Вопросы о тарифах</h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
              <p className="text-sm font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-[#1a1a1a]">
        От редких скинов до игровой валюты —{" "}
        <span className="font-medium text-white">все цифровые товары на одной платформе.</span>
      </footer>
    </main>
  )
}
