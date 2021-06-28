import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { JackpotActions, JackpotActionTypes } from './jackpots.actions'
import { Jackpot } from '../../entity/jackpots.entity'

export interface State extends EntityState<Jackpot> {
  // add additional state properties if necessary
  loaded: boolean,
  loading: boolean,
  sorting: boolean,
}

export const adapter: EntityAdapter<Jackpot> = createEntityAdapter<Jackpot>({
  selectId: (jackpot: Jackpot) => jackpot.game,
  sortComparer: null
})


export const initialState: State = adapter.getInitialState({
  // add additional initial state properties if necessary
  loaded: false,
  loading: false,
  sorting: false,
})

export function reducer(
  state = initialState,
  action: JackpotActions,
): State {
  switch (action.type) {

    case JackpotActionTypes.UpsertJackpot: {
      return adapter.upsertOne(action.payload.jackpot, state)
    }

    case JackpotActionTypes.UpsertJackpots: {
      return adapter.upsertMany(action.payload.jackpots, state)
    }

    case JackpotActionTypes.RemoveJackpot: {
      return adapter.removeOne(action.payload.id, state)
    }

    case JackpotActionTypes.RemoveJackpots: {
      return adapter.removeMany(action.payload.ids, state)
    }

    case JackpotActionTypes.ClearJackpots: {
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

export const selectAllJackpots = selectAll
export const selectJackpotEntities = selectEntities
export const selectJackpotIds = selectIds
export const selectJackpotTotal = selectTotal
