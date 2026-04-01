import { Link } from "react-router-dom"
import { Header } from "@/components/Header"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const steps = [
  { num: "01", title: "Зарегистрируйтесь", desc: "Создайте аккаунт продавца за 1 минуту. Нужен только email и придумать никнейм.", icon: "UserPlus" },
  { num: "02", title: "Разместите товар", desc: "Заполните карточку товара: название, игра, цена, описание. Публикация мгновенная.", icon: "Tag" },
  { num: "03", title: "Получите заказ", desc: "Покупатель оплачивает — деньги замораживаются на платформе до передачи товара.", icon: "ShoppingBag" },
  { num: "04", title: "Передайте товар", desc: "Передайте цифровой товар покупателю любым удобным способом в игре.", icon: "Send" },
  { num: "05", title: "Получите деньги", desc: "После подтверждения получения деньги переводятся на ваш кошелёк. Вывод — от 5 минут.", icon: "Wallet" },
]

const advantages = [
  { title: "Мгновенный вывод", desc: "Деньги на кошельке сразу после сделки. Вывод на карту за 5–30 минут.", icon: "Zap", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
  { title: "Защита от мошенников", desc: "Эскроу-система: платёж заморожен до подтверждения получения товара покупателем.", icon: "ShieldCheck", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  { title: "Тысячи покупателей", desc: "Аудитория растёт каждый день. Ваши объявления видят игроки со всей России.", icon: "Users", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { title: "Простое управление", desc: "Личный кабинет продавца: история сделок, статистика просмотров, управление объявлениями.", icon: "LayoutDashboard", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  { title: "Низкая комиссия", desc: "Комиссия от 2% — одна из самых низких на рынке. Больше зарабатываете с каждой сделки.", icon: "TrendingDown", color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
  { title: "Рейтинг и доверие", desc: "Рейтинг продавца и отзывы покупателей помогают продавать быстрее и дороже.", icon: "Star", color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
]

const faq = [
  { q: "Что можно продавать?", a: "Скины, внутриигровую валюту, игровые аккаунты, ключи активации, редкие предметы и другие цифровые товары." },
  { q: "Как быстро выводятся деньги?", a: "На банковскую карту — от 5 до 30 минут. Минимальная сумма вывода — 100 ₽." },
  { q: "Какова комиссия платформы?", a: "2% от суммы сделки для новых продавцов. При росте оборота комиссия снижается — подробнее на странице Тарифы." },
  { q: "Что если покупатель не подтверждает получение?", a: "Через 48 часов деньги автоматически переходят продавцу, если покупатель не открыл спор." },
]

export default function Sellers() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header />

      <div className="max-w-5xl mx-auto px-4 md:px-8 pt-6">
        <Breadcrumbs items={[{ label: "Продавцам" }]} />
      </div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 pt-8 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] py-1.5 px-3 text-xs mb-6">
          <span className="rounded-full bg-violet-500/20 px-2 py-0.5 font-medium text-violet-400">ПРОДАВЦАМ</span>
          <span className="text-gray-400">Зарабатывайте на игровых товарах</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
          Продавайте игровые товары<br />
          <span className="text-violet-400">безопасно и без хлопот</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Размещайте скины, валюту и аккаунты — тысячи покупателей ждут. Комиссия от 2%, вывод за 5 минут.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/auth">
            <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white px-7 h-11">
              Начать продавать <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </Link>
          <Link to="/pricing">
            <Button variant="outline" className="rounded-full border-[#333] bg-transparent text-gray-300 hover:text-white hover:border-[#444] h-11 px-7">
              Посмотреть тарифы
            </Button>
          </Link>
        </div>
      </section>

      {/* Как это работает */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Как начать продавать</h2>
        <div className="relative">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-[#262626]" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#141414] border border-[#262626] mb-4 relative z-10">
                  <Icon name={step.icon} size={24} className="text-violet-400" />
                </div>
                <span className="text-xs font-bold text-violet-500 mb-1">{step.num}</span>
                <p className="text-sm font-semibold text-white mb-2">{step.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-2">Почему продавцы выбирают нас</h2>
        <p className="text-gray-500 text-center text-sm mb-10">Всё что нужно для успешной торговли — в одном месте</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((a) => (
            <div key={a.title} className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border mb-4 ${a.color}`}>
                <Icon name={a.icon} size={18} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{a.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Частые вопросы</h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl bg-[#141414] border border-[#262626] p-5">
              <p className="text-sm font-semibold text-white mb-2">{item.q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-12 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-violet-900/40 to-[#141414] border border-violet-500/20 p-10">
          <h2 className="text-2xl font-bold text-white mb-3">Готовы начать?</h2>
          <p className="text-gray-400 mb-6 text-sm">Регистрация бесплатная. Первые 10 сделок — без комиссии.</p>
          <Link to="/auth">
            <Button className="rounded-full bg-violet-600 hover:bg-violet-700 text-white px-8 h-11">
              Создать аккаунт продавца
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-[#1a1a1a]">
        От редких скинов до игровой валюты —{" "}
        <span className="font-medium text-white">все цифровые товары на одной платформе.</span>
      </footer>
    </main>
  )
}