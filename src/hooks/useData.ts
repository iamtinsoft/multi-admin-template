
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/services/api-client";
import { type AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";


const useData = <T>(
    endpoint: string,
    requestConfig?: AxiosRequestConfig,
    deps?: any[]
) => {
    const [data, setData] = useState<T[] | any>([]);
    const [initialData, setInitialData] = useState<T[]>([]);
    //const [appData, setAppData] = useState<T>();
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(
        () => {
            const controller = new AbortController();

            setLoading(true);
            apiClient
                .get<T[]>(endpoint, {
                    signal: controller.signal,
                    ...requestConfig,
                })
                .then((res) => {
                    const { data } = res;

                    //const params = requestConfig?.params;
                    //const { property, search } = params;
                    //setAppData(data)
                    setData(data);
                    setInitialData(data);
                    setLoading(false);
                    // setTimeout(() => {

                    // }, 1000);
                })
                .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message);
                    setLoading(false);
                });

            return () => controller.abort();
        },
        deps ? [...deps] : []
    );

    return { data, error, isLoading, initialData };
};

export default useData;