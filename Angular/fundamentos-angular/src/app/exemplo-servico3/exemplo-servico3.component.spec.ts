import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploServico3Component } from './exemplo-servico3.component';

describe('ExemploServico3Component', () => {
  let component: ExemploServico3Component;
  let fixture: ComponentFixture<ExemploServico3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExemploServico3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploServico3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
