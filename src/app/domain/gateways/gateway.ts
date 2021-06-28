import { Observable } from 'rxjs'

export abstract class Gateway<E> {
  
  abstract readList(): Observable<E[]>
  abstract read(id: string): Observable<E>
  abstract create(entity: E): Observable<E>
  abstract createList(entity: E[]): Observable<E[]>
  abstract update(entity: E): Observable<E>
  abstract updateList(entity: E[]): Observable<E[]>
  abstract delete(entity: E): Observable<E>
  abstract deleteList(entity: E[]): Observable<E[]>
}
