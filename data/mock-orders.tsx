import type { OrderStatus } from "@/components/orders/orders-page"

export interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  notes?: string
}

export interface OrderType {
  id: string
  orderNumber: string
  customerName: string
  address: string
  items: OrderItem[]
  totalPrice: number
  status: OrderStatus
  timeInfo: string
  notes?: string
}

export const mockOrders: OrderType[] = [
  {
    id: "1",
    orderNumber: "18-1B4Z27",
    customerName: "Vilma",
    address: "Rua das Flores, 123",
    items: [
      { id: "item1", name: "Hambúrguer Clássico", price: 17.5, quantity: 2 },
      { id: "item2", name: "Batata Frita Grande", price: 12.9, quantity: 1 },
      { id: "item3", name: "Refrigerante 500ml", price: 7.5, quantity: 1 },
    ],
    totalPrice: 55.4,
    status: "pendente",
    timeInfo: "poucos segundos",
    notes: "Sem cebola nos hambúrgueres, por favor.",
  },
  {
    id: "2",
    orderNumber: "17-6NBR25",
    customerName: "Cláudia",
    address: "Av. Principal, 456",
    items: [{ id: "item4", name: "Pizza Grande", price: 58.9, quantity: 1 }],
    totalPrice: 58.9,
    status: "aprovado",
    timeInfo: "3 minutos",
    notes: "Metade calabresa, metade marguerita.",
  },
  {
    id: "3",
    orderNumber: "13-HFH8LL",
    customerName: "Jackson",
    address: "Rua dos Pinheiros, 789",
    items: [
      { id: "item5", name: "Taco de Carne", price: 10.99, quantity: 2 },
      { id: "item6", name: "Taco Vegetariano", price: 10.99, quantity: 1 },
    ],
    totalPrice: 32.97,
    status: "em_producao",
    timeInfo: "24 minutos",
  },
  {
    id: "4",
    orderNumber: "10-1DDYW4",
    customerName: "Daniele",
    address: "Alameda Santos, 1001",
    items: [{ id: "item7", name: "Salada Caesar", price: 31.5, quantity: 2 }],
    totalPrice: 63.0,
    status: "feito",
    timeInfo: "49 minutos",
  },
  {
    id: "5",
    orderNumber: "11-O3EQWT",
    customerName: "Marcos",
    address: "Rua Augusta, 2500",
    items: [{ id: "item8", name: "Sushi Combo", price: 85.25, quantity: 1 }],
    totalPrice: 85.25,
    status: "enviado",
    timeInfo: "44 minutos",
  },
  {
    id: "6",
    orderNumber: "16-167JKD",
    customerName: "Juliana",
    address: "Rua Oscar Freire, 300",
    items: [
      { id: "item9", name: "Poke Bowl Salmão", price: 28.5, quantity: 1 },
      { id: "item10", name: "Poke Bowl Atum", price: 27.9, quantity: 1 },
    ],
    totalPrice: 56.4,
    status: "em_producao",
    timeInfo: "17 minutos",
    notes: "Sem pimenta.",
  },
  {
    id: "7",
    orderNumber: "19-T967KJ",
    customerName: "Jane",
    address: "Rua Consolação, 1500",
    items: [{ id: "item11", name: "Sanduíche Vegano", price: 25.9, quantity: 1 }],
    totalPrice: 25.9,
    status: "pendente",
    timeInfo: "poucos segundos",
  },
  {
    id: "8",
    orderNumber: "12-M2H4DP",
    customerName: "Roberto",
    address: "Av. Paulista, 900",
    items: [{ id: "item12", name: "Açaí 300ml", price: 12.0, quantity: 4 }],
    totalPrice: 48.0,
    status: "feito",
    timeInfo: "42 minutos",
    notes: "Com granola extra e banana.",
  },
]
