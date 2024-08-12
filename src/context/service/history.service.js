import { apiSlice } from "./api.service";

export const donationsHistoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getHistory: builder.query({
            query: () => "/donation/history",
        }),
        getHistoryWithMsg: builder.query({
            query: () => "/donation/history/with/message",
        }),
    }),
});

export const { useGetHistory, useGetHistoryWithMsg } = donationsHistoryApi;