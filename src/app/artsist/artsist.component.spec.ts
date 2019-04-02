import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsistComponent } from './artsist.component';

describe('ArtsistComponent', () => {
  let component: ArtsistComponent;
  let fixture: ComponentFixture<ArtsistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
