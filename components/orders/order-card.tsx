"use client"

import { useState } from "react"
import { Clock, Edit, MapPin, MoreVertical, Package, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { OrderType } from "@/data/mock-orders"
import type { OrderStatus } from "@/components/orders/orders-page"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { EditOrderModal } from "@/components/orders/edit-order-modal"

interface OrderCardProps {
  order: OrderType
  onStatusChange: (orderId: string, status: OrderStatus) => void
}

export function OrderCard({ order, onStatusChange }: OrderCardProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pendente":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "aprovado":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "em_producao":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "feito":
        return "bg-green-100 text-green-800 border-green-200"
      case "enviado":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pendente":
        return "Pendente"
      case "aprovado":
        return "Aprovado"
      case "em_producao":
        return "Em Produção"
      case "feito":
        return "Feito"
      case "enviado":
        return "Enviado"
      default:
        return status
    }
  }

  const getNextStatus = (currentStatus: OrderStatus): OrderStatus => {
    switch (currentStatus) {
      case "pendente":
        return "aprovado"
      case "aprovado":
        return "em_producao"
      case "em_producao":
        return "feito"
      case "feito":
        return "enviado"
      default:
        return currentStatus
    }
  }

  const getActionButtonLabel = (status: OrderStatus) => {
    switch (status) {
      case "pendente":
        return "Aceitar"
      case "aprovado":
        return "Preparar"
      case "em_producao":
        return "Finalizar"
      case "feito":
        return "Enviar"
      case "enviado":
        return "Entregue"
      default:
        return "Próximo"
    }
  }

  return (
    <>
      <Card className="shadow-sm hover:shadow-md transition-shadow">
        <CardContent className="p-3 sm:p-4">
          <div className="flex justify-between items-start mb-2 sm:mb-3">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="font-medium text-xs sm:text-sm">#{order.orderNumber}</span>
                <Badge variant="outline" className={`${getStatusColor(order.status)} text-xs`}>
                  {getStatusLabel(order.status)}
                </Badge>
              </div>
              <div className="flex items-center text-gray-500 text-xs">
                <Clock className="h-3 w-3 mr-1" />
                <span>{order.timeInfo}</span>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 sm:h-8 sm:w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setIsEditModalOpen(true)}>
                  <Edit className="h-4 w-4 mr-2" />
                  Editar Pedido
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onStatusChange(order.id, getNextStatus(order.status))}>
                  Alterar Status
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
            <div className="flex items-start gap-1.5 sm:gap-2">
              <User className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 mt-0.5" />
              <div>
                <p className="text-xs sm:text-sm font-medium">{order.customerName}</p>
              </div>
            </div>

            <div className="flex items-start gap-1.5 sm:gap-2">
              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 mt-0.5" />
              <p className="text-xs sm:text-sm text-gray-600">{order.address}</p>
            </div>

            <div className="flex items-start gap-1.5 sm:gap-2">
              <Package className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 mt-0.5" />
              <div className="w-full">
                <div className="space-y-1">
                  {order.items.map((item, index) => (
                    <div key={item.id} className="flex justify-between text-xs sm:text-sm">
                      <span>
                        <span className="font-bold text-orange-600">{item.quantity}x</span> {item.name}
                      </span>
                      <span className="text-gray-500">R$ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-2 pt-1 border-t border-gray-100">
                  <p className="text-xs sm:text-sm font-medium">Total</p>
                  <p className="text-xs sm:text-sm font-medium">R$ {order.totalPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>

            {order.notes && (
              <div className="bg-gray-50 p-1.5 sm:p-2 rounded text-xs sm:text-sm text-gray-600">
                <p className="font-medium text-xs text-gray-500 mb-0.5 sm:mb-1">Observações:</p>
                <p className="text-xs">{order.notes}</p>
              </div>
            )}
          </div>

          {order.status !== "enviado" && (
            <Button
              className="w-full bg-orange-600 hover:bg-orange-700 text-xs sm:text-sm py-1 sm:py-2 h-auto"
              onClick={() => onStatusChange(order.id, getNextStatus(order.status))}
            >
              {getActionButtonLabel(order.status)}
            </Button>
          )}

          {order.status === "enviado" && (
            <Button
              variant="outline"
              className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 text-xs sm:text-sm py-1 sm:py-2 h-auto"
            >
              Entregue
            </Button>
          )}
        </CardContent>
      </Card>

      <EditOrderModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        order={order}
        onSave={(updatedOrder) => {
          console.log("Pedido atualizado:", updatedOrder)
          setIsEditModalOpen(false)
        }}
      />
    </>
  )
}
