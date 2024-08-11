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
    login: builder.mutation({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    resendSms: builder.mutation({
      query: (body) => ({
        url: "/auth/resend",
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
    }),
    verifyOtp: builder.mutation({
      query: (body) => ({
        url: "/auth/verify",
        method: "POST",
        body,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useResendSmsMutation, useVerifyOtpMutation } = authApi;
