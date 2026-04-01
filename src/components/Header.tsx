import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <GameMarketLogo />
        <span className="text-lg font-semibold text-white">
          GameMarket<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link to="/catalog" className="text-sm text-gray-300 hover:text-white transition-colors">
          Каталог
        </Link>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1">
          Категории <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Продавцам
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Тарифы
        </a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
          Поддержка
        </a>
      </nav>

      <div className="flex items-center gap-3">
        <Link to="/profile">
          <Button
            variant="outline"
            className="rounded-full border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300 bg-transparent"
          >
            Войти / Регистрация
          </Button>
        </Link>
      </div>
    </header>
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