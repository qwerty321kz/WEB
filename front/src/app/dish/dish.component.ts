import {Component, Input, OnInit} from '@angular/core';
import {IDish, IMenu} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
dishes: IDish[] = [];




//   @Input() dishes: IDish[];
//   public menuId = '2';

  constructor(private providerService: ProviderService,
              private route: ActivatedRoute) { }

  getDishes(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.providerService.getDishes(id).subscribe(dishes => this.dishes = dishes );
  }


  ngOnInit(): void {
    this.getDishes();
  }

}
