import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGalleryComponent } from './result-gallery.component';

describe('ResultGalleryComponent', () => {
  let component: ResultGalleryComponent;
  let fixture: ComponentFixture<ResultGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
