import { useState } from "react"
import { Header } from "@/components/Header"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const categories = [
  { id: "all", label: "Все вопросы" },
  { id: "orders", label: "Заказы и сделки" },
  { id: "payments", label: "Оплата и вывод" },
  { id: "account", label: "Аккаунт" },
  { id: "disputes", label: "Споры" },
]

const faqItems = [
  { cat: "orders", q: "Как оформить заказ?", a: "Найдите товар в каталоге, выберите продавца и нажмите «Купить». Деньги заморозятся на платформе до передачи товара." },
  { cat: "orders", q: "Что делать, если продавец не передаёт товар?", a: "Откройте спор в разделе «История заказов» → «Подробнее». Администрация рассмотрит в течение 24 часов." },
  { cat: "orders", q: "Как подтвердить получение товара?", a: "В личном кабинете в разделе «История заказов» найдите нужный заказ и нажмите «Подтвердить получение»." },
  { cat: "payments", q: "Как пополнить кошелёк?", a: "Перейдите в «Профиль» → «Кошелёк» → «Пополнить». Принимаем карты Visa, Mastercard, МИР и СБП." },
  { cat: "payments", q: "Как вывести деньги?", a: "В разделе «Кошелёк» нажмите «Вывести». Минимум 100 ₽ (Про и Бизнес) или 500 ₽ (Стартовый). Срок — 5–30 минут." },
  { cat: "payments", q: "Какие комиссии при выводе?", a: "Вывод на карту — без комиссии. Вывод через СБП — бесплатно. Комиссия платится только при сделке (зависит от тарифа)." },
  { cat: "account", q: "Как сменить пароль?", a: "Профиль → Настройки → поле «Пароль» → Изменить. На email придёт письмо с подтверждением." },
  { cat: "account", q: "Как получить значок «Проверен»?", a: "Значок «Проверен» выдаётся продавцам на тарифе Про и выше автоматически после верификации аккаунта." },
  { cat: "disputes", q: "Как открыть спор?", a: "В «Истории заказов» выберите нужный заказ → «Открыть спор». Укажите причину и прикрепите доказательства." },
  { cat: "disputes", q: "Сколько рассматривается спор?", a: "Стандартный срок — 24–48 часов. В сложных случаях до 7 рабочих дней. Вас уведомят о решении по email." },
]

const channels = [
  { icon: "MessageCircle", title: "Чат поддержки", desc: "Ответим в течение 15 минут", action: "Написать в чат", available: true },
  { icon: "Mail", title: "Email", desc: "support@gamemarket.ru", action: "Отправить письмо", available: true },
  { icon: "Phone", title: "Телефон", desc: "+7 (800) 123-45-67 (бесплатно)", action: "Позвонить", available: false },
]

export default function Support() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const filtered = faqItems.filter(f => activeCategory === "all" || f.cat === activeCategory)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 pt-14 pb-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 border border-violet-500/20 mx-auto mb-5">
          <Icon name="HeadphonesIcon" size={28} className="text-violet-400" fallback="Headphones" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Центр поддержки</h1>
        <p className="text-gray-400">Найдите ответ на вопрос или напишите нам — поможем разобраться</p>
      </section>

      {/* Каналы поддержки */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {channels.map((ch) => (
            <div key={ch.title} className="rounded-2xl bg-[#141414] border border-[#262626] p-5 flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 mb-4">
                <Icon name={ch.icon} size={20} className="text-violet-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{ch.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{ch.desc}</p>
              <Button
                size="sm"
                className={`rounded-xl text-xs h-8 px-4 w-full ${
                  ch.available
                    ? "bg-violet-600 hover:bg-violet-700 text-white"
                    : "bg-[#1f1f1f] text-gray-600 cursor-not-allowed border border-[#2a2a2a]"
                }`}
                disabled={!ch.available}
              >
                {ch.action}
                {!ch.available && <span className="ml-2 text-[10px] opacity-60">Скоро</span>}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pb-14 grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* FAQ */}
        <div className="lg:col-span-3">
          <h2 className="text-xl font-bold text-white mb-5">Часто задаваемые вопросы</h2>

          {/* Категории */}
          <div className="flex flex-wrap gap-2 mb-5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenIndex(null) }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-violet-600 text-white"
                    : "bg-[#141414] border border-[#262626] text-gray-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {filtered.map((item, i) => (
              <div key={i} className="rounded-xl bg-[#141414] border border-[#262626] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-3.5 text-left"
                >
                  <span className="text-sm font-medium text-white pr-4">{item.q}</span>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    className={`text-gray-500 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="px-4 pb-4 text-sm text-gray-400 leading-relaxed border-t border-[#1f1f1f] pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Форма обращения */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-5">Написать в поддержку</h2>

          {sent ? (
            <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/20 mx-auto mb-4">
                <Icon name="CheckCircle" size={26} className="text-green-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Обращение отправлено!</h3>
              <p className="text-sm text-gray-500">Ответим на {form.email} в течение 15 минут.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }) }}
                className="mt-4 text-xs text-violet-400 hover:text-violet-300 transition-colors"
              >
                Отправить ещё одно
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true) }}
              className="rounded-2xl bg-[#141414] border border-[#262626] p-5 space-y-4"
            >
              {[
                { field: "name", label: "Ваше имя", placeholder: "ProGamer_Alex", type: "text", icon: "User" },
                { field: "email", label: "Email", placeholder: "you@example.com", type: "email", icon: "Mail" },
                { field: "subject", label: "Тема обращения", placeholder: "Не получил товар", type: "text", icon: "Tag" },
              ].map(({ field, label, placeholder, type, icon }) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">{label}</label>
                  <div className="relative">
                    <Icon name={icon} size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      required
                      className="w-full rounded-xl bg-[#1a1a1a] border border-[#262626] pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">Описание проблемы</label>
                <textarea
                  placeholder="Опишите подробно, что произошло..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full rounded-xl bg-[#1a1a1a] border border-[#262626] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors resize-none"
                />
              </div>

              <Button type="submit" className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white h-10 text-sm">
                <Icon name="Send" size={14} className="mr-2" />
                Отправить обращение
              </Button>
            </form>
          )}
        </div>
      </div>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-[#1a1a1a]">
        От редких скинов до игровой валюты —{" "}
        <span className="font-medium text-white">все цифровые товары на одной платформе.</span>
      </footer>
    </main>
  )
}
