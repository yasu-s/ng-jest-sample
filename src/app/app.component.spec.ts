import { TestBed, async, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AppService, useValue: { } }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture    = TestBed.createComponent(AppComponent);
    component  = fixture.componentInstance;
    appService = TestBed.get(AppService);
    fixture.detectChanges();
  });

  it('should create', () => {
    // verify
    expect(component).toBeDefined();
  });

  it('title', () => {
    // verify
    expect(component.title).toBe('ng-jest-sample');
  });

  describe('onClick', () => {
    it('ok', fakeAsync(() => {
      // setup
      appService.get = jasmine.createSpy().and.returnValue(of({ memo: 'aaaa' }));

      // exercise
      component.onClick();
      tick();

      // verify
      expect(appService.get).toHaveBeenCalled();
      expect(component.message).toBe('aaaa');
    }));
  });
});
