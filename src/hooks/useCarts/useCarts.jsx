import { useQuery } from "@tanstack/react-query";
import AxiosSecure from "../AxiosSecure/AxiosSecure";
import useAuth from "../useAuth/useAuth";

const useCarts = () => {
    const AxiosSecureData = AxiosSecure();
    const {user} = useAuth()
    const {refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await AxiosSecureData.get(`/carts?email=${user.email}`)
            return res.data
        }
    });
return [cart,refetch]
};

export default useCarts;