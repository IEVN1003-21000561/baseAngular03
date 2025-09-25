import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cinepolis } from './cinepolis';

describe('Cinepolis', () => {
  let component: Cinepolis;
  let fixture: ComponentFixture<Cinepolis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Cinepolis]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cinepolis);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
