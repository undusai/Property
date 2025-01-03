import { Component, Input } from '@angular/core';
import { HouseLocation } from '../model';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-house-loc',
  standalone: true,
  imports: [HouseLocComponent, CommonModule, RouterModule],
  templateUrl: './house-loc.component.html',
  styleUrl: './house-loc.component.css'
})
export class HouseLocComponent {

  @Input() housingLocation !: HouseLocation

}
