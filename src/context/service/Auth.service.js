import { apiSlice } from "./api.service";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),


  }),

});

export const { useRegisterMutation } = authApi;
