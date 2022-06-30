import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnityPleaseComponent } from './unity-please.component';

describe('UnityPleaseComponent', () => {
  let component: UnityPleaseComponent;
  let fixture: ComponentFixture<UnityPleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnityPleaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnityPleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
