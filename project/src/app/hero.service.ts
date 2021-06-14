
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Hero } from './hero';
import * as $ from 'jquery'
import { MdbCardBodyComponent } from 'angular-bootstrap-md';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // 请留意修改为你自己的URL
  private header: HttpHeaders;

  private heroesUrl = 'api/heroes';
  public static number: number = 17;
  httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  // 注入了HttpClient服务
  constructor(private http: HttpClient) { }
  // 获取所有英雄
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }
  // 获取指定id的英雄
  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`);
  }
  // 获取所有的顶级英雄
  getTopHeroes(): Observable<Hero[]> {
    // 请参考Deployd的API文档
    return this.http.get<Hero[]>(`${this.heroesUrl}?top=true`);
  }
  // 添加一个英雄
  addHero(hero: Hero): Observable<Hero> {
    hero.id = HeroService.number;
    HeroService.number += 1;
    return this.http.post<Hero>(this.heroesUrl, hero);
  }
  // 删除一个英雄
  deleteHero(id: number): Observable<any> {
    return this.http.delete(`${this.heroesUrl}/${id}`);
  }
  // 更新一个英雄
  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(this.heroesUrl, hero);
  }
  //查找一个英雄
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
  }
  fun() {
			var		userName:'user';
			var		password:'123456';
      let param={
        userName:'user',
        password:'123456'
      }
      // var url='http://localhost:8080/Bridge/HeroServlet';
      this.http.post('https://127.0.0.1:8080/Bridge/LoginServlet',this.httpOptions,{params:param}).subscribe(data=>{
        alert(data)
      })  

  }
}
