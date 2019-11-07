import { async, TestBed } from '@angular/core/testing';
import { TestlibModule } from './testlib.module';

describe('TestlibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestlibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TestlibModule).toBeDefined();
  });
});
