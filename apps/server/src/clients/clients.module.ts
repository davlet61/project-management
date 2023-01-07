import { Module } from '@nestjs/common';
import { ClientsResolver } from './clients.resolver';
import { ClientsService } from './clients.service';

@Module({
  providers: [ClientsResolver, ClientsService],
})
export class ClientsModule {}
