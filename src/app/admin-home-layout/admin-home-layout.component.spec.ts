import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHomeLayoutComponent } from './admin-home-layout.component';

describe('AdminHomeLayoutComponent', () => {
  let component: AdminHomeLayoutComponent;
  let fixture: ComponentFixture<AdminHomeLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHomeLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
