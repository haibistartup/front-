"use client"

import { useState } from "react"
import { OrdersFilter } from "@/components/orders/orders-filter"
import { OrdersGrid } from "@/components/orders/orders-grid"
import { type OrderType, mockOrders } from "@/data/mock-orders"

export type OrderStatus = "pendente" | "aprovado" | "em_producao" | "feito" | "enviado" | "todos"

export function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>("todos")
  const [orders, setOrders] = useState<OrderType[]>(mockOrders)

  const filteredOrders = selectedStatus === "todos" ? orders : orders.filter((order) => order.status === selectedStatus)

  const handleStatusChange = (status: OrderStatus) => {
    setSelectedStatus(status)
  }

  const handleOrderStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders(orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  return (
    <div className="space-y-3 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">Gerenciamento de Pedidos</h1>

      <OrdersFilter selectedStatus={selectedStatus} onStatusChange={handleStatusChange} />

      <OrdersGrid orders={filteredOrders} onStatusChange={handleOrderStatusChange} />
    </div>
  )
}
