import { apiSlice } from "./api.service";

export const topDonationsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTopDonations: builder.query({
            query: () => "/donation/top"
        }),
    }),
});

export const { useGetTopDonations } = topDonationsApi;
