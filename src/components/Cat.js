import { useGetCat } from "../useGetCat";

export const Cat = () => {
    const { data, refetchData} = useGetCat();

    return(
        <div>
            <button onClick={refetchData}> refetch Data</button>
            <h1> {data?.fact} </h1>
        </div>
    );
};