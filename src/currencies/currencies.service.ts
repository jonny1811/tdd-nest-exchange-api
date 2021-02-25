import { Injectable, InternalServerErrorException } from '@nestjs/common';

export class CurrenciesRepository {
  async getCurrency(currency: string): Promise<any> {};
}

@Injectable()
export class CurrenciesService {
  constructor(private curreciesRepository: CurrenciesRepository) {}

  async getCurrency(currency: string): Promise<any> {
    try {
      await this.curreciesRepository.getCurrency(currency);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
