import { Action } from '@ngrx/store'
import { Jackpot } from '../../entity/jackpots.entity'

export enum JackpotActionTypes {
  // Synchronous Actions: Handled by Reducers
  UpsertJackpot = '[Jackpot] Upsert Jackpot',
  UpsertJackpots = '[Jackpot] Upsert Jackpots',
  RemoveJackpot = '[Jackpot] Remove Jackpot',
  RemoveJackpots = '[Jackpot] Remove Jackpots',
  ClearJackpots = '[Jackpot] Clear Jackpots',
  // Asynchronous Actions: Handled by Effects
  LoadJackpots = '[Jackpot] Load Jackpots',
  CreateJackpot = '[Jackpot] Create Jackpot',
  CreateJackpots = '[Jackpot] Create Jackpots',
  UpdateJackpot = '[Jackpot] Update Jackpot',
  UpdateJackpots = '[Jackpot] Update Jackpots',
  DeleteJackpot = '[Jackpot] Delete Jackpot',
  DeleteJackpots = '[Jackpot] Delete Jackpots'
}

// Synchronous Actions: Handled by Reducers
export class UpsertJackpot implements Action {
  readonly type = JackpotActionTypes.UpsertJackpot
  constructor(public payload: { jackpot: Jackpot }) { }
}

export class UpsertJackpots implements Action {
  readonly type = JackpotActionTypes.UpsertJackpots
  constructor(public payload: { jackpots: Jackpot[] }) { }
}

export class RemoveJackpot implements Action {
  readonly type = JackpotActionTypes.RemoveJackpot
  constructor(public payload: { id: string }) { }
}

export class RemoveJackpots implements Action {
  readonly type = JackpotActionTypes.RemoveJackpots
  constructor(public payload: { ids: string[] }) { }
}

export class ClearJackpots implements Action {
  readonly type = JackpotActionTypes.ClearJackpots
}

// Asynchronous Actions: Handled by Effects
export class LoadJackpots implements Action {
  readonly type = JackpotActionTypes.LoadJackpots
}

export class CreateJackpot implements Action {
  readonly type = JackpotActionTypes.CreateJackpot
  constructor(public payload: { jackpot: Jackpot }) { }
}

export class CreateJackpots implements Action {
  readonly type = JackpotActionTypes.CreateJackpots
  constructor(public payload: { jackpots: Jackpot[] }) { }
}

export class UpdateJackpot implements Action {
  readonly type = JackpotActionTypes.UpdateJackpot
  constructor(public payload: { jackpot: Jackpot }) { }
}

export class UpdateJackpots implements Action {
  readonly type = JackpotActionTypes.UpdateJackpots
  constructor(public payload: { jackpots: Jackpot[] }) { }
}

export class DeleteJackpot implements Action {
  readonly type = JackpotActionTypes.DeleteJackpot
  constructor(public payload: { jackpot: Jackpot }) { }
}

export class DeleteJackpots implements Action {
  readonly type = JackpotActionTypes.DeleteJackpots
  constructor(public payload: { jackpots: Jackpot[] }) { }
}

export type JackpotActions =
  UpsertJackpot
  | UpsertJackpots
  | RemoveJackpot
  | RemoveJackpots
  | ClearJackpots
  | LoadJackpots
  | CreateJackpot
  | CreateJackpots
  | UpdateJackpot
  | UpdateJackpots
  | DeleteJackpot
  | DeleteJackpots
