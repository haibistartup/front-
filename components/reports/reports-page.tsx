import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart, PieChart } from "lucide-react"

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Relatórios</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-purple-500" />
              Vendas por Período
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500">Gráfico de vendas por período</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <PieChart className="h-5 w-5 mr-2 text-blue-500" />
              Produtos Mais Vendidos
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500">Gráfico de produtos mais vendidos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChart className="h-5 w-5 mr-2 text-green-500" />
              Desempenho de Entregas
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500">Gráfico de desempenho de entregas</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumo Financeiro</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-500">Faturamento Total</p>
                <p className="text-2xl font-bold">R$ 24.567,00</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-500">Ticket Médio</p>
                <p className="text-2xl font-bold">R$ 89,50</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-500">Total de Pedidos</p>
                <p className="text-2xl font-bold">274</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
