import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

function ProtectedRoute({ children }) {
  const { logged } = useAuth()

  if (!logged) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
