import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jackpot } from '../../entity/jackpots.entity';


@Injectable()
export class MockJackpotsNetwork {

    constructor(private http: HttpClient) {
        
    }
        

    readList(): Observable<any[]> {
        return this.http.get<any[]>('http://stage.whgstage.com/front-end-test/jackpots.php')
    }

    createList(entities: Jackpot[]): Observable<Jackpot[]> {
        return undefined;
    }

    updateList(entities: Jackpot[]): Observable<Jackpot[]> {
        return undefined;
    }

    deleteList(entities: Jackpot[]): Observable<Jackpot[]> {
        return undefined;
    }

    read(id: string): Observable<Jackpot> {
        return undefined;
    }

    create(entity: Jackpot): Observable<Jackpot> {
        let jackpots: Jackpot = {
            game:"",
            amount:0,
        }
        return of(jackpots)
    }

    update(entity: Jackpot): Observable<Jackpot> {
        return undefined;
    }

    delete(entity: Jackpot): Observable<Jackpot> {
        return undefined;
    }

}
