import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurridosComponent } from './concurridos.component';

describe('ConcurridosComponent', () => {
  let component: ConcurridosComponent;
  let fixture: ComponentFixture<ConcurridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcurridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcurridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
