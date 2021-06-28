import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from '../../entity/games.entity';


@Injectable()
export class MockGamesNetwork {

    constructor(private http: HttpClient) { }

    readList(): Observable<Game[]> {
        return this.http.get<Game[]>('http://stage.whgstage.com/front-end-test/games.php')
    }

    createList(entities: Game[]): Observable<Game[]> {
        return undefined;
    }

    updateList(entities: Game[]): Observable<Game[]> {
        return undefined;
    }

    deleteList(entities: Game[]): Observable<Game[]> {
        return undefined;
    }

    read(id: string): Observable<Game> {
        return undefined;
    }

    create(entity: Game): Observable<Game> {
        let games: Game = {
            categories:[],
            name: "",
            image: "",
            id: "",
        }
        return of(games)
    }

    update(entity: Game): Observable<Game> {
        return undefined;
    }

    delete(entity: Game): Observable<Game> {
        return undefined;
    }

}
