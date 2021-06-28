import { Action } from '@ngrx/store'
import { Game } from '../../entity/games.entity'

export enum GameActionTypes {
  // Synchronous Actions: Handled by Reducers
  UpsertGame = '[Game] Upsert Game',
  UpsertGames = '[Game] Upsert Games',
  RemoveGame = '[Game] Remove Game',
  RemoveGames = '[Game] Remove Games',
  ClearGames = '[Game] Clear Games',
  // Asynchronous Actions: Handled by Effects
  LoadGames = '[Game] Load Games',
  CreateGame = '[Game] Create Game',
  CreateGames = '[Game] Create Games',
  UpdateGame = '[Game] Update Game',
  UpdateGames = '[Game] Update Games',
  DeleteGame = '[Game] Delete Game',
  DeleteGames = '[Game] Delete Games'
}

// Synchronous Actions: Handled by Reducers
export class UpsertGame implements Action {
  readonly type = GameActionTypes.UpsertGame
  constructor(public payload: { game: Game }) { }
}

export class UpsertGames implements Action {
  readonly type = GameActionTypes.UpsertGames
  constructor(public payload: { games: Game[] }) { }
}

export class RemoveGame implements Action {
  readonly type = GameActionTypes.RemoveGame
  constructor(public payload: { id: string }) { }
}

export class RemoveGames implements Action {
  readonly type = GameActionTypes.RemoveGames
  constructor(public payload: { ids: string[] }) { }
}

export class ClearGames implements Action {
  readonly type = GameActionTypes.ClearGames
}

// Asynchronous Actions: Handled by Effects
export class LoadGames implements Action {
  readonly type = GameActionTypes.LoadGames
}

export class CreateGame implements Action {
  readonly type = GameActionTypes.CreateGame
  constructor(public payload: { game: Game }) { }
}

export class CreateGames implements Action {
  readonly type = GameActionTypes.CreateGames
  constructor(public payload: { games: Game[] }) { }
}

export class UpdateGame implements Action {
  readonly type = GameActionTypes.UpdateGame
  constructor(public payload: { game: Game }) { }
}

export class UpdateGames implements Action {
  readonly type = GameActionTypes.UpdateGames
  constructor(public payload: { games: Game[] }) { }
}

export class DeleteGame implements Action {
  readonly type = GameActionTypes.DeleteGame
  constructor(public payload: { game: Game }) { }
}

export class DeleteGames implements Action {
  readonly type = GameActionTypes.DeleteGames
  constructor(public payload: { games: Game[] }) { }
}

export type GameActions =
  UpsertGame
  | UpsertGames
  | RemoveGame
  | RemoveGames
  | ClearGames
  | LoadGames
  | CreateGame
  | CreateGames
  | UpdateGame
  | UpdateGames
  | DeleteGame
  | DeleteGames
