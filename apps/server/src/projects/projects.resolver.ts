import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { Project } from './models/project.model';
import { ProjectsService } from './projects.service';

@Resolver((of) => Project)
export class ProjectsResolver {
  constructor(private ProjectsService: ProjectsService) {}

  @Query((returns) => Project)
  async project(@Args('id', { type: () => Int }) id: number) {
    return this.ProjectsService.findUnique({ id });
  }

  @Query((returns) => Project)
  async projectByClient(
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    return this.ProjectsService.findUnique({ id: clientId });
  }

  @Query((returns) => [Project])
  async projects() {
    return this.ProjectsService.findMany({});
  }

  // @ResolveField()
  // async posts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postsService.findAll({ authorId: id });
  // }
}
