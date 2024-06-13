import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import AxiosSecure from "../AxiosSecure/AxiosSecure";

const useAdmin = () => {
    const { user } = useAuth();
  const AxiosSecureData = AxiosSecure()
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await AxiosSecureData.get(`/users/admin/${user.email}`);
            
            return res.data?.admin;
        }
    })
    return [isAdmin]
};

export default useAdmin;