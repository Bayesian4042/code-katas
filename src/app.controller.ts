import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { max } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('highest-number')
  getHighestNumber(numbers: number[]): number {
    const maxNumber = Math.max(...numbers);
    return maxNumber;
  }

  fizzBuzz(number: number): any[] {
    if (number == 0 || number < 0) {
      return []
    }
    const arr: any[] = []
    for (let i = 1; i <= number; i++) {
      if (this.isNumberDivisibleByThreeAndFive(i)) {
        arr.push("FizzBuzz")
      }
      else if (this.isNumberDivisibleByFive(i)) {
        arr.push("Buzz")
      }
      else if (this.isNumberDivisibleByThree(i)) {
        arr.push("Fizz")
      } else {
        arr.push(i)
      }
    }
    return arr;
  }

  isNumberDivisibleByThree(number: number) {
    if (number % 3 == 0) return true
    return false
  }

  isNumberDivisibleByFive(number: number) {
    if (number % 5 == 0) return true
    return false
  }

  isNumberDivisibleByThreeAndFive(number: number) {
    if ((number % 5 == 0) && (number % 3 == 0)) return true
    return false
  }
}
