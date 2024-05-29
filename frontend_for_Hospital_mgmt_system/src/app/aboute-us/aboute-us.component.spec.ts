import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouteUsComponent } from './aboute-us.component';

describe('AbouteUsComponent', () => {
  let component: AbouteUsComponent;
  let fixture: ComponentFixture<AbouteUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbouteUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbouteUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
