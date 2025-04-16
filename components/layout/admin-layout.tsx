"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { useMediaQuery } from "@/hooks/use-media-query"

interface AdminLayoutProps {
  children: React.ReactNode
  activePage: string
  setActivePage: (page: string) => void
}

export function AdminLayout({ children, activePage, setActivePage }: AdminLayoutProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile)

  // Atualiza o estado do sidebar quando o tamanho da tela muda
  useEffect(() => {
    setSidebarOpen(!isMobile)
  }, [isMobile])

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activePage={activePage} setActivePage={setActivePage} isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div
        className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "ml-0 md:ml-16"
        }`}
      >
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-50">{children}</main>
      </div>
    </div>
  )
}
