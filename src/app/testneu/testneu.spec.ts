import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testneu } from './testneu';

describe('Testneu', () => {
  let component: Testneu;
  let fixture: ComponentFixture<Testneu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testneu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testneu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
