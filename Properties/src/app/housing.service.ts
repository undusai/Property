import { Injectable } from '@angular/core';
import { HouseLocComponent } from './house-loc/house-loc.component';
import { HouseLocation } from './model';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations(): Promise<HouseLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<HouseLocation | undefined> {
   const data = await fetch(`${this.url}/${id}`);
   return await data.json() ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log( firstName, lastName, email)
  }
}
