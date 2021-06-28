import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { GameActions, GameActionTypes } from './games.actions'
import { Game } from '../../entity/games.entity'

export interface State extends EntityState<Game> {
  // add additional state properties if necessary
  loaded: boolean,
  loading: boolean,
  sorting: boolean,
}

export const adapter: EntityAdapter<Game> = createEntityAdapter<Game>()

export const initialState: State = adapter.getInitialState({
  // add additional initial state properties if necessary
  loaded: false,
  loading: false,
  sorting: false,
})

export function reducer(
  state = initialState,
  action: GameActions,
): State {
  switch (action.type) {

    case GameActionTypes.UpsertGame: {
      return adapter.upsertOne(action.payload.game, state)
    }

    case GameActionTypes.UpsertGames: {
      return adapter.upsertMany(action.payload.games, state)
    }

    case GameActionTypes.RemoveGame: {
      return adapter.removeOne(action.payload.id, state)
    }

    case GameActionTypes.RemoveGames: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case GameActionTypes.ClearGames: {
      return adapter.removeAll(state)
    }

    default: {
      return state
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()

export const selectAllGames = selectAll
export const selectGameEntities = selectEntities
export const selectGameIds = selectIds
export const selectGameTotal = selectTotal
