"use client"

import { Button } from "@/components/ui/button"
import type { OrderStatus } from "@/components/orders/orders-page"
import { cn } from "@/lib/utils"

interface OrdersFilterProps {
  selectedStatus: OrderStatus
  onStatusChange: (status: OrderStatus) => void
}

export function OrdersFilter({ selectedStatus, onStatusChange }: OrdersFilterProps) {
  const statusOptions = [
    { value: "todos", label: "Todos" },
    { value: "pendente", label: "Pendente" },
    { value: "aprovado", label: "Aprovado" },
    { value: "em_producao", label: "Em Producao" },
    { value: "feito", label: "Feito" },
    { value: "enviado", label: "Enviado" },
  ]

  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {statusOptions.map((option) => (
          <Button
            key={option.value}
            variant={selectedStatus === option.value ? "default" : "outline"}
            className={cn(
              "text-xs sm:text-sm h-8 px-2 sm:px-3",
              selectedStatus === option.value && "bg-orange-600 hover:bg-orange-700",
            )}
            onClick={() => onStatusChange(option.value as OrderStatus)}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
