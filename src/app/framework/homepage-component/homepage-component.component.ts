import { Component, OnInit } from "@angular/core"
import { NavigationEnd, Router } from "@angular/router"
import { select, Store } from "@ngrx/store"
import { interval, Observable, Subscription } from "rxjs"
import { Game } from "src/app/entity/games.entity"
import { Jackpot } from "src/app/entity/jackpots.entity"
import { AppState } from "src/app/presentation"
import { LoadGames } from "src/app/presentation/games/games.actions"
import { getAllGames } from "src/app/presentation/games/games.selectors"
import { LoadJackpots } from "src/app/presentation/jackpots/jackpots.actions"
import { getAllJackpots } from "src/app/presentation/jackpots/jackpots.selectors"

@Component({
  selector: 'app-homepage-component',
  templateUrl: './homepage-component.component.html',
  styleUrls: ['./homepage-component.component.scss']
})
export class HomepageComponentComponent implements OnInit {
  games$: Observable<Game[]>
  jackpots$: Observable<Jackpot[]>
  games: Game[]
  showPlay: Map<string,boolean> = new Map()
  jackpots: Map<string,number> = new Map()
  URL: string = ""
  subscription: Subscription

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new LoadGames())
    
    // Update jackpot on load
    this.store.dispatch(new LoadJackpots())
    // Update jackpot every 10 seconds
    setInterval(()=> { 
      this.store.dispatch(new LoadJackpots())
    }, 10 * 1000);

    // Select all jackpots
    this.jackpots$ = this.store.pipe(select (getAllJackpots))
    this.jackpots$.subscribe((jackpots) => {
      jackpots.forEach((jackpot) => {
        this.jackpots.set(jackpot.game,jackpot.amount)
      })
    })

    // Select all games 
    this.games$ = this.store.pipe(select (getAllGames))
    this.games$.subscribe((games) => {
      this.games = games
      games.forEach((game) => {
        this.showPlay.set(game.id,false)
      })
    })

    // Get the current URL from the location and use it in HTML to determine filter
    this.URL = this.router.url.substring(this.router.url.indexOf('/') + 1,this.router.url.length)
    this.URL = this.URL.substring(this.URL.indexOf('/') + 1,this.URL.length)
    this.router.events.subscribe((e) => {
      this.store.dispatch(new LoadJackpots())
        this.URL = this.router.url.substring(this.router.url.indexOf('/') + 1,this.router.url.length)
        this.URL = this.URL.substring(this.URL.indexOf('/') + 1,this.URL.length)
    });
  }

  // Checks to see if the filter is empty (show message that there are no games under this category)
  public isEmpty(): boolean {
    if (this.games !== undefined) {
      return (this.games).filter((game) => {return game.categories.includes(this.URL)}).length === 0
    }
    else {
      return false
    } 
  }

  
}