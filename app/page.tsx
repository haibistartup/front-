"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/layout/admin-layout"
import { Dashboard } from "@/components/dashboard/dashboard"
import { OrdersPage } from "@/components/orders/orders-page"
import { ReportsPage } from "@/components/reports/reports-page"

export default function Home() {
  const [activePage, setActivePage] = useState<string>("inicio")
  const router = useRouter()

  useEffect(() => {
    // Verificar se o usuário está logado
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (!isLoggedIn) {
      router.push("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    router.push("/login")
  }

  const renderContent = () => {
    switch (activePage) {
      case "inicio":
        return <Dashboard />
      case "pedidos":
        return <OrdersPage />
      case "relatorios":
        return <ReportsPage />
      case "sair":
        handleLogout()
        return null
      default:
        return <Dashboard />
    }
  }

  return (
    <AdminLayout activePage={activePage} setActivePage={setActivePage}>
      {renderContent()}
    </AdminLayout>
  )
}
