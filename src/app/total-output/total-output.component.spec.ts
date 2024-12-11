import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalOutputComponent } from './total-output.component';

describe('TotalOutputComponent', () => {
  let component: TotalOutputComponent;
  let fixture: ComponentFixture<TotalOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
