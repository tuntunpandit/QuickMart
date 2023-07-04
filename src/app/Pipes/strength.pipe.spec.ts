import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe = new StrengthPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should display weak if character length is less than 5', () => {
    expect(pipe.transform('test')).toEqual('Weak');
  });
  it('should display strong if character length is grteater than 5 and less than 10', () => {
    expect(pipe.transform('grteater')).toEqual('Strong');
  });
  it('should display strongest if character length is greater than 10', () => {
    expect(pipe.transform('abcdefghijklm')).toEqual('Strongest');
  });
});
