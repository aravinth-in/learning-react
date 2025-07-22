import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useGetCat = () => {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    });

    if(isError){
        return <h1> Unable to get the data </h1>
    }

    if(isLoading){
        return <h1> Loading... </h1>
    }

    const refetchData = () => {
        alert("Data refetched");
        refetch();
    };

    return { data, refetchData, isLoading};
}