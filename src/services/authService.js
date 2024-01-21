import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api_key, base_auth_url } from "../firebase/database";

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({ baseUrl: base_auth_url }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ ...userData }) => ({
        url: `accounts:signUp?key=${api_key}`,
        method: "POST",
        body: userData,
      }),
    }),
    signIn: builder.mutation({
      query: ({ ...userData }) => ({
        url: `accounts:signInWithPassword?key=${api_key}`,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authService;
