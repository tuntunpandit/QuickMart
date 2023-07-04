import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call extendSearch function', async () => {
    spyOn(component, 'extendSearch');
    let searchIcon =
      fixture.debugElement.nativeElement.querySelector('.search-icon');
    searchIcon.click();

    fixture.whenStable().then(() => {
      expect(component.extendSearch).toHaveBeenCalled();
    });
  });

  it('should add active class when extnedSearch function runs', async () => {
    component.extendSearch();
    fixture.detectChanges();
    const searchBox =
      fixture.debugElement.nativeElement.querySelector('.search-box');
    expect(searchBox.classList).toContain('active');
  });

  it('should call closeSearch function', async () => {
    spyOn(component, 'closeSearch');
    let close = fixture.debugElement.nativeElement.querySelector('.close-icon');
    close.click();
    fixture.whenStable().then(() => {
      expect(component.closeSearch).toHaveBeenCalled();
    });
  });

  it('should remove active class from search-box when clicked on closeSearch function', async () => {
    component.closeSearch();
    fixture.detectChanges();
    const searchBox =
      fixture.debugElement.nativeElement.querySelector('.search-box');
    expect(searchBox.classList).not.toContain('active');
  });
});
