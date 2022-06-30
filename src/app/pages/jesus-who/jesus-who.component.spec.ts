import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesusWhoComponent } from './jesus-who.component';

describe('JesusWhoComponent', () => {
  let component: JesusWhoComponent;
  let fixture: ComponentFixture<JesusWhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JesusWhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JesusWhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
