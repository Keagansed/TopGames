import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'

import { GamesNetwork } from '../../domain/gateways/network/games.network'
import {
  CreateGame,
  CreateGames, DeleteGame, DeleteGames,
  LoadGames, RemoveGame, RemoveGames,
  UpdateGame, UpdateGames,
  UpsertGames,
  GameActionTypes,
  UpsertGame,
} from './games.actions'
import { Game } from '../../entity/games.entity'

@Injectable()
export class GameEffects {

  constructor(private actions$: Actions, private network: GamesNetwork) {}

  @Effect()
  loadGames$ = this.actions$.pipe(
    ofType(GameActionTypes.LoadGames),
    switchMap((action: LoadGames) => this.network.readList().pipe(
      map((games: Game[]) => new UpsertGames({ games: games })),
      catchError(error => {
        return of({
          type: '[Error] Load Games',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createGame$ = this.actions$.pipe(
    ofType(GameActionTypes.CreateGame),
    switchMap((action: CreateGame) => this.network.create(action.payload.game).pipe(
      map((game: Game) => new UpsertGame({ game: game })),
      catchError(error => {
        return of({
          type: '[Error] Create Game',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createGames$ = this.actions$.pipe(
    ofType(GameActionTypes.CreateGames),
    switchMap((action: CreateGames) => this.network.createList(action.payload.games).pipe(
      map((games: Game[]) => new UpsertGames({ games: games })),
      catchError(error => {
        return of({
          type: '[Error] Create Games',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateGame$ = this.actions$.pipe(
    ofType(GameActionTypes.UpdateGame),
    switchMap((action: UpdateGame) => this.network.update(action.payload.game).pipe(
      map((game: Game) => new UpsertGame({ game: game })),
      catchError(error => {
        return of({
          type: '[Error] Update Game',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateGames$ = this.actions$.pipe(
    ofType(GameActionTypes.UpdateGames),
    switchMap((action: UpdateGames) => this.network.updateList(action.payload.games).pipe(
      map((games: Game[]) => new UpsertGames({ games: games })),
      catchError(error => {
        return of({
          type: '[Error] Update Games',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteGame$ = this.actions$.pipe(
    ofType(GameActionTypes.DeleteGame),
    switchMap((action: DeleteGame) => this.network.delete(action.payload.game).pipe(
      map((game: Game) => new RemoveGame({ id: game.id })),
      catchError(error => {
        return of({
          type: '[Error] Delete Game',
          payload: error
        })
      })
    ))
  )

  @Effect()
  deleteGames$ = this.actions$.pipe(
    ofType(GameActionTypes.DeleteGames),
    switchMap((action: DeleteGames) => this.network.deleteList(action.payload.games).pipe(
      map((games: Game[]) => new RemoveGames({ ids: games.map(game => game.id) })),
      catchError(error => {
        return of({
          type: '[Error] Delete Games',
          payload: error
        })
      })
    ))
  )
}
