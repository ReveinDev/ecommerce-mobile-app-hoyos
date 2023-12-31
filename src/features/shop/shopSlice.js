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
  },
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
      state.gamesFilteredByCategory = state.gamesData.filter(game => game.genero === state.categorySelected);
    },
    setGameIdSelected: (state, action) => {
      state.gameIdSelected = action.payload;
    },
  },
});

export const { setCategorySelected, setGameIdSelected } = shopSlice.actions;

export default shopSlice.reducer;