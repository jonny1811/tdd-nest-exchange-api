import { BadRequestException, Injectable } from '@nestjs/common';

export class CurrenciesService {
  async getCurrency(currency: string): Promise<any> {}
}

@Injectable()
export class ExchangeService {
  constructor(private currenciesServices: CurrenciesService) {}
  async convertAmount({ from, to, amount }): Promise<any> {
    if (!from || !to || !amount) {
      throw new BadRequestException();
    }

    const currencyFrom = this.currenciesServices.getCurrency(from);
    const currencyTo = this.currenciesServices.getCurrency(to);
  }
}
