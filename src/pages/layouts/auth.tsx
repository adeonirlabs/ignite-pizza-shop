import { Pizza } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between border-r-2 border-foreground/5 bg-muted p-10">
        <header className="flex items-center gap-3 text-foreground">
          <Pizza className="size-5" />
          <span className="text-xl font-semibold">Pizza Shop</span>
        </header>
        <footer className="text-xs text-muted-foreground">
          Painel do parceiro &copy; Pizza Shop - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center p-10">
        <Outlet />
      </div>
    </div>
  )
}
