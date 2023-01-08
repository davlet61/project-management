import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ClientsResolver } from './clients.resolver';
import { ClientsService } from './clients.service';

@Module({
  imports: [PrismaModule],
  providers: [ClientsResolver, ClientsService],
})
export class ClientsModule {}
