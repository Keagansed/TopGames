import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";

export interface Jackpot {
    game: string
    amount: number
}

