"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  toggleSidebar: () => void
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" className="mr-2" onClick={toggleSidebar} aria-label="Toggle menu">
          <Menu className="h-5 w-5" />
        </Button>
        <span className="text-lg font-medium text-gray-800 hidden md:inline-block">Gestor de Pedidos - Haibi</span>
      </div>
      {/* Badge "Aberto Pedido 19:00" e ícone de sino removidos */}
    </header>
  )
}
