import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, CheckCircle, Clock, RefreshCw } from "lucide-react"

export function Dashboard() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">Painel de Controle</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
        <Card>
          <CardHeader className="pb-1 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium text-gray-500">Não Entregues</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Package className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500 mr-2" />
              <span className="text-lg sm:text-2xl font-bold">9</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium text-gray-500">Concluídos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2" />
              <span className="text-lg sm:text-2xl font-bold">9</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium text-gray-500">Tempo Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2" />
              <span className="text-lg sm:text-2xl font-bold">41 min</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-1 sm:pb-2">
            <CardTitle className="text-xs sm:text-sm font-medium text-gray-500">Atualizar</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500 mr-2" />
              <button className="text-xs sm:text-sm text-purple-500 font-medium">Atualizar</button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <h2 className="text-base sm:text-lg font-medium mb-2 sm:mb-4">Bem-vindo ao Gestor de Pedidos</h2>
        <p className="text-sm text-gray-600">
          Use o menu lateral para navegar entre as diferentes seções do sistema. Acesse a página de Pedidos para
          gerenciar os pedidos ativos.
        </p>
      </div>
    </div>
  )
}
