import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';

export class Currencies {
  currency: string;
  value: number;
}
export class CurrenciesRepository {
  async getCurrency(currency: string): Promise<Currencies> {
    return new Currencies();
  }

  async createCurrency({ currency, value }): Promise<Currencies> {
    return new Currencies();
  }

  async updateCurrency({ currency, value }): Promise<Currencies> {
    return new Currencies();
  }
}

@Injectable()
export class CurrenciesService {
  constructor(private curreciesRepository: CurrenciesRepository) {}

  async getCurrency(currency: string): Promise<Currencies> {
    return await this.curreciesRepository.getCurrency(currency);
  }

  async createCurrency({ currency, value }): Promise<Currencies> {
    if (value <= 0) {
      throw new BadRequestException('The value must be greater zero');
    }
    return await this.curreciesRepository.createCurrency({ currency, value });
  }

  async updateCurrency({ currency, value }): Promise<Currencies> {
    if (value <= 0) {
      throw new BadRequestException('The value must be greater zero');
    }
    return await this.curreciesRepository.updateCurrency({ currency, value });
  }
}
