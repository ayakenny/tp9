import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecoratorComponentComponent } from './input-decorator-component.component';

describe('InputDecoratorComponentComponent', () => {
  let component: InputDecoratorComponentComponent;
  let fixture: ComponentFixture<InputDecoratorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDecoratorComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDecoratorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});