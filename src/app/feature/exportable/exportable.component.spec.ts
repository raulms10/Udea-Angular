import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportableComponent } from './exportable.component';

describe('ExportableComponent', () => {
  let component: ExportableComponent;
  let fixture: ComponentFixture<ExportableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
