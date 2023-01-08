import {
  Args,
  Query,
  Resolver,
  Int,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Client } from './models/client.model';
import { ClientsService } from './clients.service';
import { Project } from 'src/projects/models/project.model';

@Resolver(() => Client)
export class ClientsResolver {
  constructor(private clientsService: ClientsService) {}

  @Query(() => Client)
  async client(@Args('id', { type: () => Int }) id: number) {
    return this.clientsService.findUnique({ id });
  }

  @Query(() => [Client])
  async clients() {
    return this.clientsService.findMany({});
  }

  @ResolveField(() => [Project])
  async projects(@Parent() client: Client) {
    const { id } = client;
    return this.clientsService.findProjects({ clientId: id });
  }
}
