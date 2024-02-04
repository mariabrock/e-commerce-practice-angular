import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensPageComponent } from './mens-page.component';

describe('MensPageComponent', () => {
  let component: MensPageComponent;
  let fixture: ComponentFixture<MensPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MensPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
