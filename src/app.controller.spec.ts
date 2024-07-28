import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  // get the highest number
  describe('getHighestNumber', () => {
    it('should return the highest number', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(appController.getHighestNumber(numbers)).toBe(5);
    })
  });

  // input is number, we need to return a list starts with 1 and ends with the input number. if number is divisible by 3, replace it with 'Fizz', if number is divisible by 5, replace it with 'Buzz', if number is divisible by 3 and 5, replace it with 'FizzBuzz'
  describe('fizzBuzz', () => {
    it('should return a list of numbers', () => {
      const number = 0;
      expect(appController.fizzBuzz(number)).toEqual([]);
    })

    it('should return a list of numbers', () => {
      const number = 16;
      expect(appController.fizzBuzz(number)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16]);
    })

    it('should return a list of numbers', () => {
      const number = -1;
      expect(appController.fizzBuzz(number)).toEqual([]);
    })
  })
});
