import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightWordsComponent } from './sight-words.component';

describe('SightWordsComponent', () => {
  let component: SightWordsComponent;
  let fixture: ComponentFixture<SightWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightWordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
