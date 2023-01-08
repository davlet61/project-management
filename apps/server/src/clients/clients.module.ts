import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ClientsResolver } from './clients.resolver';
import { ClientsService } from './clients.service';

@Module({
  providers: [ClientsResolver, ClientsService, PrismaService],
})
export class ClientsModule {}
