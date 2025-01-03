import { Component, inject } from '@angular/core';
import { HouseLocComponent } from '../house-loc/house-loc.component';
import { HouseLocation } from '../model';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HouseLocComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  housingLocationList : HouseLocation[] = [];
  housingService: HousingService = inject(HousingService)
  filteredLoactionList : HouseLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then(
      (
        housingLocationList : HouseLocation[]) => {
        this.housingLocationList = housingLocationList
        this.filteredLoactionList = housingLocationList
      });
  
  }

  filterResults(text: string) {
    if(!text) this.filteredLoactionList = this.housingLocationList;

    this.filteredLoactionList = this.housingLocationList.filter( 
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()) 
    );
  }


}
