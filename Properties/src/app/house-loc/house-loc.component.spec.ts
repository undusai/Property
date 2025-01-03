import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseLocComponent } from './house-loc.component';

describe('HouseLocComponent', () => {
  let component: HouseLocComponent;
  let fixture: ComponentFixture<HouseLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseLocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
