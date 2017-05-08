import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

RouterModule.forRoot([
	{
		path:'heroes',
		component:HeroesComponent
	}
])
@Component({
 	selector: 'my-heroes',
  	templateUrl: './heroes.component.html',
  	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];
	constructor(private heroService: HeroService){ }

	ngOnInit():void{
		this.getHeroes();
	}

	getHeroes(): void{
		this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void{
		this.selectedHero = hero;
	}
}