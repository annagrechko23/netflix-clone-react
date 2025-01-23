import { useEffect } from "react"
import useSubscription from "../hooks/useSubscription"
import { Navigate } from "react-router-dom"

export default function PlansManagePage() {
    const [{ data, loading, error }, fetchSubscription] = useSubscription()
    useEffect(() => {
        fetchSubscription()
    }, [])

    if (loading) return <div>Loading</div>

    if (!loading && !error && !data) {
        return <Navigate to="/plans" />
    }
    return <div>Manage</div>
}