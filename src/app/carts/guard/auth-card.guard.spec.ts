import { TestBed } from '@angular/core/testing';

import { AuthCardGuard } from './auth-card.guard';

describe('AuthCardGuard', () => {
  let guard: AuthCardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthCardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
