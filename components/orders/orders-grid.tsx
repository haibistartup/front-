import { OrderCard } from "@/components/orders/order-card"
import type { OrderType } from "@/data/mock-orders"
import type { OrderStatus } from "@/components/orders/orders-page"

interface OrdersGridProps {
  orders: OrderType[]
  onStatusChange: (orderId: string, status: OrderStatus) => void
}

export function OrdersGrid({ orders, onStatusChange }: OrdersGridProps) {
  // Agrupar pedidos por status
  const pendingOrders = orders.filter((order) => order.status === "pendente")
  const approvedOrders = orders.filter((order) => order.status === "aprovado")
  const inProductionOrders = orders.filter((order) => order.status === "em_producao")
  const doneOrders = orders.filter((order) => order.status === "feito")
  const shippedOrders = orders.filter((order) => order.status === "enviado")

  const renderOrderColumn = (title: string, count: number, color: string, orders: OrderType[]) => (
    <div className="flex-1 min-w-[250px] md:min-w-[280px]">
      <div className={`flex items-center gap-2 mb-3`}>
        <div className={`w-3 h-3 rounded-full ${color}`}></div>
        <h3 className="font-medium text-sm md:text-base">{title}</h3>
        <span className="text-xs md:text-sm text-gray-500">({count})</span>
      </div>
      <div className="space-y-3 md:space-y-4">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} onStatusChange={onStatusChange} />
        ))}
      </div>
    </div>
  )

  return (
    <div className="overflow-x-auto pb-4 -mx-2 px-2">
      <div className="flex gap-3 md:gap-4 min-w-max">
        {renderOrderColumn("Pendente", pendingOrders.length, "bg-orange-500", pendingOrders)}
        {renderOrderColumn("Aprovado", approvedOrders.length, "bg-blue-500", approvedOrders)}
        {renderOrderColumn("Em Produção", inProductionOrders.length, "bg-orange-500", inProductionOrders)}
        {renderOrderColumn("Feito", doneOrders.length, "bg-green-500", doneOrders)}
        {renderOrderColumn("Enviado", shippedOrders.length, "bg-gray-500", shippedOrders)}
      </div>
    </div>
  )
}
