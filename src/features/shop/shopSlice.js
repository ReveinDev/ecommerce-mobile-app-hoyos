import { createSlice } from "@reduxjs/toolkit";
import games from "../../data/games.json";
import categories from "../../data/categorias.json";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categorySelected: "",
    gameIdSelected: 0,
    gamesData: games,
    categoriesData: categories,
    gamesFilteredByCategory: [],
    gameSelected: {},
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
      state.gamesFilteredByCategory = state.gamesData.filter(
        (game) => game.genero === state.categorySelected
      );
    },
    setGameIdSelected: (state, action) => {
      state.gameIdSelected = action.payload;
    },
    setGameSelected: (state, action) => {
      state.gameSelected = state.gamesData.find(
        (game) => game.id === action.payload
      );
    },
  },
});

export const { setCategorySelected, setGameIdSelected, setGameSelected } =
  shopSlice.actions;

export default shopSlice.reducer;
