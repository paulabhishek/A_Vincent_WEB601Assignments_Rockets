import { HoverAffectDirective } from './hover-affect.directive';
import any = jasmine.any;

describe('HoverAffectDirective', () => {
  it('should create an instance',
    () => {
      // @ts-ignore
      const directive = new HoverAffectDirective();
      expect(directive).toBeTruthy();
    });
});
