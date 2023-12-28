import { PokemonDetail, PokemonResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query<
      PokemonResponse,
      { offset: number; limit: number }
    >({
      query: (params) =>
        `pokemon?offset=${params.offset}&limit=${params.limit}`,
    }),
    getPokemonByName: builder.query<PokemonDetail, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonQuery } = pokemonApi;
