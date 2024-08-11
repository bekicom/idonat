import {apiSlice}  from "./api.service"

export const adminApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
      // Sign in as admin: POST - /signin/admin
      signInAdmin: builder.mutation({
        query: (body) => ({
          url: "/auth/register",
          method: "POST",
          body,
        }),
      }),
  
      // Get all admins: GET - /get/admin
      getAdmin: builder.query({
        query: () => "/get/admin",
      }),
    }),
  });
  
  export const { useSignIn, useGetAdminQuery } = adminApi;

  