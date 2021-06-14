
import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../../hero';
import { HeroService } from '../../hero.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  displayedColumns: string[] = ['id', 'name', 'top', 'operation'];
  dataSource: MatTableDataSource<Hero>; // 表格数据源
  @ViewChild(MatPaginator, { static: true })  // 分页器
  paginator: MatPaginator;

  constructor(private heroService: HeroService
  ) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(result => {
      // 返回的对象result中包括loading, error, 以及 data，其中data中有后台定义好的名称如getAllHeroes的数组
      this.heroes = result;
      this.dataSource = new MatTableDataSource<Hero>(this.heroes);
      this.dataSource.paginator = this.paginator;
    })
  }

  getAllHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  delete(id: number): void {
    this.heroService.fun();
    if(confirm("确定删除id为"+id+"的英雄?")){
      this.heroService.deleteHero(id)
      .subscribe(() => {
        this.heroes = this.heroes.filter(h => h.id !== id);
        this.dataSource = new MatTableDataSource<Hero>(this.heroes);
        this.dataSource.paginator = this.paginator;
      });
    alert("删除成功")
    }
  }
}
