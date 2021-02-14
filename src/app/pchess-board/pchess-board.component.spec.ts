import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PchessBoardComponent } from './pchess-board.component';

describe('PchessBoardComponent', () => {
  let component: PchessBoardComponent;
  let fixture: ComponentFixture<PchessBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PchessBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PchessBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
