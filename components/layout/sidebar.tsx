"use client"

import Image from "next/image"
import { Home, Package, BarChart3, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activePage: string
  setActivePage: (page: string) => void
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function Sidebar({ activePage, setActivePage, isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    { id: "inicio", label: "Início", icon: Home },
    { id: "pedidos", label: "Pedidos", icon: Package },
    { id: "relatorios", label: "Relatórios", icon: BarChart3 },
    { id: "sair", label: "Sair", icon: LogOut },
  ]

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 flex flex-col bg-orange-600 text-white transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "-translate-x-full md:translate-x-0 md:w-16",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-orange-500">
        {isOpen ? (
          <div className="flex items-center">
            <Image src="/images/haibilogowhite.png" alt="Haibi Logo" width={32} height={32} className="mr-2" />
            <h1 className="text-xl font-bold">Haibi</h1>
          </div>
        ) : (
          <div className="hidden md:flex md:justify-center md:w-full">
            <Image src="/images/haibilogowhite.png" alt="Haibi Logo" width={24} height={24} />
          </div>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start text-white hover:bg-orange-500",
                  activePage === item.id && "bg-orange-700",
                  !isOpen && "md:justify-center md:px-2",
                )}
                onClick={() => {
                  setActivePage(item.id)
                  if (window.innerWidth < 768) setIsOpen(false)
                }}
              >
                <item.icon className={`h-5 w-5 ${isOpen ? "mr-2" : ""}`} />
                <span className={cn("transition-opacity duration-200", !isOpen && "md:hidden")}>{item.label}</span>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-orange-500">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="font-medium">A</span>
          </div>
          <div className={cn("ml-3 transition-opacity duration-200", !isOpen && "md:hidden")}>
            <p className="text-sm font-medium">Admin</p>
            <p className="text-xs text-orange-200">admin@haibi.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
