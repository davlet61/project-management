import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Int,
} from '@nestjs/graphql';
import { Client } from './models/client.model';
import { ClientsService } from './clients.service';

@Resolver((of) => Client)
export class ClientsResolver {
  constructor(private clientsService: ClientsService) {}

  @Query((returns) => Client)
  async client(@Args('id', { type: () => Int }) id: number) {
    return this.clientsService.findOneById(id);
  }

  @Query((returns) => [Client])
  async clients() {
    return this.clientsService.findAll();
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
