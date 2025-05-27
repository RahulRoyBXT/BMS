import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


export const PublicRoute = ({ children }: { children: React.ReactNode }) => {

    const { user, loading } = useAuth()
    if (loading) return <p>Loading...</p>

    if (user) return <Navigate to='/' replace />

    return <>{children}</>
}