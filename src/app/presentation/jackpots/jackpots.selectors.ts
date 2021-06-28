import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectAllJackpots, selectJackpotEntities, State } from './jackpots.reducer'

export const getJackpotFeature = createFeatureSelector<State>('jackpot')
export const getAllJackpots = createSelector(getJackpotFeature, selectAllJackpots)
export const getJackpotEntities = createSelector(getJackpotFeature, selectJackpotEntities)
export const getJackpotsLoaded = createSelector(getJackpotFeature, (state) => state.loaded)
export const getJackpotsLoading = createSelector(getJackpotFeature, (state) => state.loading)
export const getJackpotSorting = createSelector(getJackpotFeature, (state) => state.sorting)
