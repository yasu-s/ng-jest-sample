import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let appService: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        { provide: AppService, useValue: { } }
      ]
    });

    component  = TestBed.get(AppComponent);
    appService = TestBed.get(AppService);
  });

  it('should create', () => {
    // verify
    expect(component).toBeDefined();
  });

  it('title', () => {
    // verify
    expect(component.title).toBe('ng-jest-sample');
  });

  describe('ngOnInit', () => {
    it('ok', () => {
      // exercise
      component.ngOnInit();

      // verify
      expect(component.title).toBe('ng-jest-sample-2');
    });
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
