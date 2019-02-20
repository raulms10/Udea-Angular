import { NewFeaturesModule } from './new-features.module';

describe('NewFeaturesModule', () => {
  let newFeaturesModule: NewFeaturesModule;

  beforeEach(() => {
    newFeaturesModule = new NewFeaturesModule();
  });

  it('should create an instance', () => {
    expect(newFeaturesModule).toBeTruthy();
  });
});
