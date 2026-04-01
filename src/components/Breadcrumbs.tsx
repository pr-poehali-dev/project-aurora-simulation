import { Link } from "react-router-dom"
import Icon from "@/components/ui/icon"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-6 flex-wrap">
      <Link to="/" className="hover:text-gray-300 transition-colors flex items-center gap-1">
        <Icon name="Home" size={13} />
        <span>Главная</span>
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <Icon name="ChevronRight" size={13} className="text-gray-700" />
          {item.href && i < items.length - 1 ? (
            <Link to={item.href} className="hover:text-gray-300 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
