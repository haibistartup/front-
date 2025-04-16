"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = async (username: string, password: string) => {
    setLoading(true)
    setError("")

    try {
      // Simulação de autenticação - em produção, isso seria uma chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Credenciais de exemplo para teste
      if (username === "admin" && password === "admin") {
        // Armazenar informação de login (em produção, usaria tokens JWT)
        localStorage.setItem("isLoggedIn", "true")
        router.push("/")
      } else {
        setError("Usuário ou senha inválidos")
      }
    } catch (err) {
      setError("Ocorreu um erro ao tentar fazer login")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <LoginForm onLogin={handleLogin} loading={loading} error={error} />
    </div>
  )
}
