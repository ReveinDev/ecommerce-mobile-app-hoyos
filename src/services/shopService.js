import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebase/database";

export const shopService = createApi({
  reducerPath: "shopService",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => "games.json",
    }),
    getCategorias: builder.query({
      query: () => "categorias.json",
    }),
    getGamesByCategory: builder.query({
      query: (genero) => `games.json?orderBy="genero"&equalTo="${genero}"`,
    }),
    postOrder: builder.mutation({
      query: ({ ...order }) => ({
        url: "orders.json",
        method: "POST",
        body: order,
      }),
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetCategoriasQuery,
  useGetGamesByCategoryQuery,
  usePostOrderMutation,
} = shopService;
