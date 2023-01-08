import { Injectable } from '@nestjs/common';
import { Prisma, Project } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Client } from './models/client.model';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  // async create(data: NewRecipeInput): Promise<Client> {
  //   return {} as any;
  // }

  async findUnique(
    ClientWhereUniqueInput: Prisma.ClientWhereUniqueInput,
  ): Promise<Client | null> {
    return this.prisma.client.findUnique({
      where: ClientWhereUniqueInput,
    });
  }

  async findProjects(
    where: Prisma.ProjectWhereInput,
  ): Promise<Project[] | null> {
    return this.prisma.project.findMany({
      where,
    });
  }

  async findMany(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ClientWhereUniqueInput;
    where?: Prisma.ClientWhereInput;
    orderBy?: Prisma.ClientOrderByWithRelationInput;
  }): Promise<Client[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.client.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async delete(
    ClientWhereUniqueInput: Prisma.ClientWhereUniqueInput,
  ): Promise<Client | null> {
    return this.prisma.client.delete({
      where: ClientWhereUniqueInput,
    });
  }
}
