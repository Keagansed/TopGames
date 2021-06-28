import { ActionReducerMap } from '@ngrx/store'
import * as fromGames from './games/games.reducer'
import * as fromJackpots from './jackpots/jackpots.reducer'
import { GameEffects } from './games/games.effects'
import { JackpotEffects } from './jackpots/jackpots.effects'

export interface AppState {
  game: fromGames.State;
  jackpot: fromJackpots.State;
}

export const reducers: ActionReducerMap<AppState> = {
  game: fromGames.reducer,
  jackpot: fromJackpots.reducer,
};

export const effects: any = [
  GameEffects,
  JackpotEffects,
]
