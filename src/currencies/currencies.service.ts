import { BadRequestException, Injectable } from '@nestjs/common';
import { Currencies } from './currencies.entity';
import { CurrenciesRepository } from './currencies.repository';
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

  async deleteCurrency(currency: string): Promise<void> {
    return await this.curreciesRepository.deleteCurrency(currency);
  }
}
