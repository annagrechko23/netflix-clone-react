import { useEffect, useState } from "react";
import PlanCard from "../components/PlanCard"
import usePlans from "../hooks/usePlans"
import axios from "axios";
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import useSubscription from "../hooks/useSubscription";
import { Navigate } from "react-router-dom";
export default function PlansPage() {
    const [{ data: subscription, loading: subscriptionLoading }, fetchSubscription] = useSubscription()

    const { user } = useSelector(
        (state: RootState) => state.user.value
    );
    const createSession = async (email: string, priceId: string) => {
        const response = await axios.post("http://localhost:8080/sub/session", {
            email,
            priceId
        });
        const { url } = response.data;
        window.location.href = url
        return response
    }
    const handleClick = () => {
        if (user && selectedSession) {
            createSession(user?.email, selectedSession)

        }
    }
    useEffect(() => {
        fetchSubscription()
    }, [])
    const { loading, data } = usePlans();
    const [selectedSession, setSelectedSession] = useState<null | string>(null)
    if (loading || subscriptionLoading) return <div>....Loading</div>
    if (subscription) {
        return <Navigate to="/plans/manage" />
    }
    return (
        <div className="flex items-center h-screen justify-cneter">
            <div className="w-[600px]">
                <h1 className="font-semibold text-3xl">Choose a plan that works for you</h1>
                <div className="flex mt-4">
                    {data && data.map(plan => <PlanCard plan={plan} key={plan.id} selectedSession={selectedSession} setSelectedSession={setSelectedSession} />
                    )}

                </div>
                <button onClick={handleClick} disabled={!selectedSession} className="bg-red-400 rounded p-3 text-white px-10 mt-3 w-full">Purchase</button>
            </div>
        </div>
    )
}

