import { MyNgIfDirective } from './my-ng-if.directive';

describe('CustomDirective', () => {
  it('should create an instance', () => {
    const directive = new MyNgIfDirective();
    expect(directive).toBeTruthy();
  });
});
