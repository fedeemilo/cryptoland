import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const crypoApiHeaders = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "f8b2d99ee2msh61829914ea430b7p17594ajsn63c0c352ccd5"
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url, timePeriod = "24h") => ({
    url,
    headers: crypoApiHeaders,
    params: { timePeriod }
});

export const cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        getCryptos: builder.query({
            query: count => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: coinId => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) =>
                createRequest(`/coin/${coinId}/history`, timePeriod)
        }),
        getCryptoExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;
