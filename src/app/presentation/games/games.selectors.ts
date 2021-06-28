import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectAllGames, selectGameEntities, State } from './games.reducer'

export const getGameFeature = createFeatureSelector<State>('game')
export const getAllGames = createSelector(getGameFeature, selectAllGames)
export const getGameEntities = createSelector(getGameFeature, selectGameEntities)
export const getGamesLoaded = createSelector(getGameFeature, (state) => state.loaded)
export const getGamesLoading = createSelector(getGameFeature, (state) => state.loading)
export const getGameSorting = createSelector(getGameFeature, (state) => state.sorting)
