import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { catchError, map, switchMap } from 'rxjs/operators'
import { of } from 'rxjs/internal/observable/of'

import { JackpotsNetwork } from '../../domain/gateways/network/jackpots.network'
import {
  CreateJackpot,
  CreateJackpots, DeleteJackpot, DeleteJackpots,
  LoadJackpots, RemoveJackpot, RemoveJackpots,
  UpdateJackpot, UpdateJackpots,
  UpsertJackpots,
  JackpotActionTypes,
  UpsertJackpot,
} from './jackpots.actions'
import { Jackpot } from '../../entity/jackpots.entity'

@Injectable()
export class JackpotEffects {

  constructor(private actions$: Actions, private network: JackpotsNetwork) {}

  @Effect()
  loadJackpots$ = this.actions$.pipe(
    ofType(JackpotActionTypes.LoadJackpots),
    switchMap((action: LoadJackpots) => this.network.readList().pipe(
      map((jackpots: any[]) => new UpsertJackpots({ jackpots: jackpots })),
      catchError(error => {
        return of({
          type: '[Error] Load Jackpots',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createJackpot$ = this.actions$.pipe(
    ofType(JackpotActionTypes.CreateJackpot),
    switchMap((action: CreateJackpot) => this.network.create(action.payload.jackpot).pipe(
      map((jackpot: Jackpot) => new UpsertJackpot({ jackpot: jackpot })),
      catchError(error => {
        return of({
          type: '[Error] Create Jackpot',
          payload: error
        })
      })
    ))
  )

  @Effect()
  createJackpots$ = this.actions$.pipe(
    ofType(JackpotActionTypes.CreateJackpots),
    switchMap((action: CreateJackpots) => this.network.createList(action.payload.jackpots).pipe(
      map((jackpots: Jackpot[]) => new UpsertJackpots({ jackpots: jackpots })),
      catchError(error => {
        return of({
          type: '[Error] Create Jackpots',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateJackpot$ = this.actions$.pipe(
    ofType(JackpotActionTypes.UpdateJackpot),
    switchMap((action: UpdateJackpot) => this.network.update(action.payload.jackpot).pipe(
      map((jackpot: Jackpot) => new UpsertJackpot({ jackpot: jackpot })),
      catchError(error => {
        return of({
          type: '[Error] Update Jackpot',
          payload: error
        })
      })
    ))
  )

  @Effect()
  updateJackpots$ = this.actions$.pipe(
    ofType(JackpotActionTypes.UpdateJackpots),
    switchMap((action: UpdateJackpots) => this.network.updateList(action.payload.jackpots).pipe(
      map((jackpots: Jackpot[]) => new UpsertJackpots({ jackpots: jackpots })),
      catchError(error => {
        return of({
          type: '[Error] Update Jackpots',
          payload: error
        })
      })
    ))
  )

  // @Effect()
  // deleteJackpot$ = this.actions$.pipe(
  //   ofType(JackpotActionTypes.DeleteJackpot),
  //   switchMap((action: DeleteJackpot) => this.network.delete(action.payload.jackpot).pipe(
  //     map((jackpot: Jackpot) => new RemoveJackpot({ id: jackpot.id })),
  //     catchError(error => {
  //       return of({
  //         type: '[Error] Delete Jackpot',
  //         payload: error
  //       })
  //     })
  //   ))
  // )

  // @Effect()
  // deleteJackpots$ = this.actions$.pipe(
  //   ofType(JackpotActionTypes.DeleteJackpots),
  //   switchMap((action: DeleteJackpots) => this.network.deleteList(action.payload.jackpots).pipe(
  //     map((jackpots: Jackpot[]) => new RemoveJackpots({ ids: jackpots.map(jackpot => jackpot.ids) })),
  //     catchError(error => {
  //       return of({
  //         type: '[Error] Delete Jackpots',
  //         payload: error
  //       })
  //     })
  //   ))
  // )
}
