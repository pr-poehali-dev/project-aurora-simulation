import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

type Mode = "login" | "register"
type Role = "buyer" | "seller"

export default function Auth() {
  const [mode, setMode] = useState<Mode>("login")
  const [role, setRole] = useState<Role>("buyer")
  const [showPassword, setShowPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  })

  const isLogin = mode === "login"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30 mx-auto mb-5">
            <Icon name="CheckCircle" size={30} className="text-violet-400" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">
            {isLogin ? "Добро пожаловать!" : "Аккаунт создан!"}
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            {isLogin
              ? "Вы успешно вошли в систему."
              : "Регистрация прошла успешно. Можете начинать торговлю!"}
          </p>
          <Link to="/profile">
            <Button className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white">
              Перейти в личный кабинет
            </Button>
          </Link>
          <Link to="/catalog" className="block mt-3 text-sm text-gray-500 hover:text-gray-300 transition-colors">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      {/* Шапка */}
      <header className="flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <GameMarketLogo />
          <span className="text-lg font-semibold text-white">
            GameMarket<sup className="text-xs">™</sup>
          </span>
        </Link>
        <Link to="/catalog" className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1">
          <Icon name="ArrowLeft" size={14} />
          Каталог
        </Link>
      </header>

      {/* Форма */}
      <div className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">
          {/* Переключатель режима */}
          <div className="flex rounded-xl bg-[#141414] border border-[#262626] p-1 mb-6">
            <button
              onClick={() => setMode("login")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                isLogin ? "bg-[#262626] text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Вход
            </button>
            <button
              onClick={() => setMode("register")}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                !isLogin ? "bg-[#262626] text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Регистрация
            </button>
          </div>

          <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6">
            <h1 className="text-xl font-bold text-white mb-1">
              {isLogin ? "Войти в аккаунт" : "Создать аккаунт"}
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              {isLogin
                ? "Введите данные, чтобы продолжить"
                : "Заполните форму — займёт меньше минуты"}
            </p>

            {/* Выбор роли (только при регистрации) */}
            {!isLogin && (
              <div className="mb-5">
                <p className="text-xs font-medium text-gray-500 mb-2">Я регистрируюсь как</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setRole("buyer")}
                    className={`flex flex-col items-center gap-2 rounded-xl p-4 border transition-all ${
                      role === "buyer"
                        ? "border-violet-500/50 bg-violet-500/5 text-white"
                        : "border-[#262626] bg-[#1a1a1a] text-gray-500 hover:border-[#333] hover:text-gray-300"
                    }`}
                  >
                    <Icon name="ShoppingBag" size={22} className={role === "buyer" ? "text-violet-400" : ""} />
                    <div className="text-center">
                      <p className="text-sm font-medium">Покупатель</p>
                      <p className="text-xs text-gray-600 mt-0.5">Покупаю товары</p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("seller")}
                    className={`flex flex-col items-center gap-2 rounded-xl p-4 border transition-all ${
                      role === "seller"
                        ? "border-violet-500/50 bg-violet-500/5 text-white"
                        : "border-[#262626] bg-[#1a1a1a] text-gray-500 hover:border-[#333] hover:text-gray-300"
                    }`}
                  >
                    <Icon name="Tag" size={22} className={role === "seller" ? "text-violet-400" : ""} />
                    <div className="text-center">
                      <p className="text-sm font-medium">Продавец</p>
                      <p className="text-xs text-gray-600 mt-0.5">Продаю товары</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Имя пользователя — только регистрация */}
              {!isLogin && (
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Имя пользователя
                  </label>
                  <div className="relative">
                    <Icon name="User" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="text"
                      placeholder="ProGamer_Alex"
                      value={form.username}
                      onChange={(e) => setForm({ ...form, username: e.target.value })}
                      required
                      className="w-full rounded-xl bg-[#1a1a1a] border border-[#262626] pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5">
                  Email
                </label>
                <div className="relative">
                  <Icon name="Mail" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full rounded-xl bg-[#1a1a1a] border border-[#262626] pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                  />
                </div>
              </div>

              {/* Пароль */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-gray-400">Пароль</label>
                  {isLogin && (
                    <button type="button" className="text-xs text-violet-400 hover:text-violet-300 transition-colors">
                      Забыли пароль?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Icon name="Lock" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    className="w-full rounded-xl bg-[#1a1a1a] border border-[#262626] pl-9 pr-10 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                  >
                    <Icon name={showPassword ? "EyeOff" : "Eye"} size={15} />
                  </button>
                </div>
              </div>

              {/* Подтверждение пароля — только регистрация */}
              {!isLogin && (
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1.5">
                    Подтвердите пароль
                  </label>
                  <div className="relative">
                    <Icon name="Lock" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.confirm}
                      onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                      required
                      className="w-full rounded-xl bg-[#1a1a1a] border border-[#262626] pl-9 pr-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Согласие — только регистрация */}
              {!isLogin && (
                <label className="flex items-start gap-3 cursor-pointer">
                  <div
                    onClick={() => setForm({ ...form, agree: !form.agree })}
                    className={`mt-0.5 h-4 w-4 shrink-0 rounded border transition-colors flex items-center justify-center ${
                      form.agree ? "bg-violet-600 border-violet-600" : "border-[#444] bg-[#1a1a1a]"
                    }`}
                  >
                    {form.agree && <Icon name="Check" size={10} className="text-white" />}
                  </div>
                  <span className="text-xs text-gray-500 leading-relaxed">
                    Я принимаю{" "}
                    <a href="#" className="text-violet-400 hover:text-violet-300">условия использования</a>{" "}
                    и{" "}
                    <a href="#" className="text-violet-400 hover:text-violet-300">политику конфиденциальности</a>
                  </span>
                </label>
              )}

              <Button
                type="submit"
                className="w-full rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold h-11 mt-2"
              >
                {isLogin ? "Войти" : `Зарегистрироваться как ${role === "buyer" ? "покупатель" : "продавец"}`}
              </Button>
            </form>

            {/* Разделитель */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-[#262626]" />
              <span className="text-xs text-gray-600">или</span>
              <div className="flex-1 h-px bg-[#262626]" />
            </div>

            {/* Социальный вход */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Steam", icon: "Gamepad2" },
                { label: "Google", icon: "Globe" },
              ].map((provider) => (
                <button
                  key={provider.label}
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#262626] bg-[#1a1a1a] px-4 py-2.5 text-sm text-gray-400 hover:border-[#333] hover:text-white transition-colors"
                >
                  <Icon name={provider.icon} size={15} />
                  {provider.label}
                </button>
              ))}
            </div>
          </div>

          {/* Переключение */}
          <p className="text-center text-sm text-gray-600 mt-5">
            {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
            <button
              onClick={() => setMode(isLogin ? "register" : "login")}
              className="text-violet-400 hover:text-violet-300 transition-colors font-medium"
            >
              {isLogin ? "Зарегистрироваться" : "Войти"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

function GameMarketLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="13" rx="3" fill="#8B5CF6" opacity="0.3" />
      <rect x="2" y="7" width="20" height="13" rx="3" stroke="#8B5CF6" strokeWidth="1.5" />
      <path d="M8 13.5H12M10 11.5V15.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="15.5" cy="12.5" r="1" fill="#8B5CF6" />
      <circle cx="17.5" cy="14.5" r="1" fill="#8B5CF6" />
      <path d="M7 4L12 2L17 4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
