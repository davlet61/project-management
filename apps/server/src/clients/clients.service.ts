import { Injectable } from '@nestjs/common';
import { Client } from './models/client.model';
import { clients } from 'data';

@Injectable()
export class ClientsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  // async create(data: NewRecipeInput): Promise<Client> {
  //   return {} as any;
  // }

  async findOneById(id: number): Promise<Client> {
    return clients.find((client) => id === client.id);
  }

  async findAll(): Promise<Client[]> {
    return clients as Client[];
  }

  async remove(id: number): Promise<boolean> {
    clients.filter((client) => id !== client.id);
    return true;
  }
}
