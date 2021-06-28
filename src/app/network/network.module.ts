import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesNetwork } from '../domain/gateways/network/games.network';
import { JackpotsNetwork } from '../domain/gateways/network/jackpots.network';
import { MockGamesNetwork } from './mock/mock.games.network';
import { MockJackpotsNetwork } from './mock/mock.jackpots.network';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
})
export class NetworkModule {
  static forEnvironment(development: boolean): ModuleWithProviders {
    return {
      ngModule: NetworkModule,
      providers: [
          { provide: GamesNetwork, useClass: MockGamesNetwork },
          { provide: JackpotsNetwork, useClass: MockJackpotsNetwork },
        ]
    }
  }
}
