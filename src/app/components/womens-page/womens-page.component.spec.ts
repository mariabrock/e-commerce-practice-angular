import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomensPageComponent } from './womens-page.component';

describe('WomensPageComponent', () => {
  let component: WomensPageComponent;
  let fixture: ComponentFixture<WomensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomensPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
