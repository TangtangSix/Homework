
import { HeroService } from '../../hero.service';
import { Hero } from '../../hero';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})
export class HeroAddComponent implements OnInit {
  hero:Hero;
  heroForm: FormGroup;
  options: FormGroup;
  constructor(
    //private router: Router,
    private heroService: HeroService,
    private formBuilder: FormBuilder,
    //private sharedService: SharedService,
    private location: Location,) { 
  }

  ngOnInit() {
    this.hero={
      id:HeroService.number,
      name:'',
      top:true
    }
    this.heroForm = this.formBuilder.group({
      id: [this.hero.id, Validators.required],
      name: ['', [Validators.required, Validators.minLength(1)]],
      top: [true],
      s:['true']
    });
  }
  onFormSubmit() {
    // heroForm.value即上面构建的Hero对象
    //this.heroService.addHero(this.heroForm.value);
     this.add(this.heroForm.get('name').value,this.heroForm.get('top').value)
  }
  add(name: string, top: boolean): void {
    this.heroService.addHero({name, top } as Hero)
    .subscribe(() => this.goBack());
    alert("保存成功")
  }

  goBack(): void {
    this.location.back();
  }
}
