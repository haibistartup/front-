"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { OrderType } from "@/data/mock-orders"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface EditOrderModalProps {
  isOpen: boolean
  onClose: () => void
  order: OrderType
  onSave: (order: OrderType) => void
}

export function EditOrderModal({ isOpen, onClose, order, onSave }: EditOrderModalProps) {
  const [formData, setFormData] = useState<OrderType>({ ...order })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      status: value as any,
    }))
  }

  const handleItemChange = (itemId: string, field: string, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.map((item) => (item.id === itemId ? { ...item, [field]: value } : item)),
      // Recalcular o preço total
      totalPrice: prev.items.reduce((sum, item) => {
        if (item.id === itemId) {
          const price = field === "price" ? Number(value) : item.price
          const quantity = field === "quantity" ? Number(value) : item.quantity
          return sum + price * quantity
        }
        return sum + item.price * item.quantity
      }, 0),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Editar Pedido #{order.orderNumber}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="customerName">Nome do Cliente</Label>
              <Input id="customerName" name="customerName" value={formData.customerName} onChange={handleChange} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select value={formData.status} onValueChange={handleStatusChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pendente">Pendente</SelectItem>
                  <SelectItem value="aprovado">Aprovado</SelectItem>
                  <SelectItem value="em_producao">Em Produção</SelectItem>
                  <SelectItem value="feito">Feito</SelectItem>
                  <SelectItem value="enviado">Enviado</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <Label>Itens do Pedido</Label>
            <div className="border rounded-md divide-y">
              {formData.items.map((item, index) => (
                <div key={item.id} className="p-3">
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div>
                      <Label htmlFor={`item-name-${index}`} className="text-xs">
                        Nome
                      </Label>
                      <Input
                        id={`item-name-${index}`}
                        value={item.name}
                        onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor={`item-price-${index}`} className="text-xs">
                          Preço (R$)
                        </Label>
                        <Input
                          id={`item-price-${index}`}
                          type="number"
                          step="0.01"
                          value={item.price}
                          onChange={(e) => handleItemChange(item.id, "price", Number(e.target.value))}
                          className="h-8 text-sm"
                        />
                      </div>
                      <div>
                        <Label htmlFor={`item-quantity-${index}`} className="text-xs">
                          Qtd
                        </Label>
                        <Input
                          id={`item-quantity-${index}`}
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(item.id, "quantity", Number(e.target.value))}
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-right text-sm font-medium">Total: R$ {formData.totalPrice.toFixed(2)}</div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Observações</Label>
            <Textarea id="notes" name="notes" value={formData.notes || ""} onChange={handleChange} rows={3} />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Salvar Alterações</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
