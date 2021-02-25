import { BadRequestException, Injectable } from '@nestjs/common';
import { ExchangeInput } from './types/exchange-input.types';
import { ExchangeOutput } from './types/exchange.type';

export class CurrenciesService {
  async getCurrency(currency: string): Promise<any> {}
}

@Injectable()
export class ExchangeService {
  constructor(private currenciesServices: CurrenciesService) {}
  async convertAmount({ from, to, amount }: ExchangeInput): Promise<ExchangeOutput> {
    if (!from || !to || !amount) {
      throw new BadRequestException();
    }

    try {
      const currencyFrom = await this.currenciesServices.getCurrency(from);
      const currencyTo = await this.currenciesServices.getCurrency(to);

      return { amount: (currencyFrom.value / currencyTo.value) * amount };
    } catch (error) {
      throw new Error(error);
    }
  }
}
