import { Args, Query, Resolver, Int } from '@nestjs/graphql';
import { Project } from './models/project.model';
import { ProjectsService } from './projects.service';

@Resolver(() => Project)
export class ProjectsResolver {
  constructor(private projectsService: ProjectsService) {}

  @Query(() => Project)
  async project(@Args('id', { type: () => Int }) id: number) {
    return this.projectsService.findUnique({ id });
  }

  @Query(() => Project)
  async projectByClient(
    @Args('clientId', { type: () => Int }) clientId: number,
  ) {
    return this.projectsService.findUnique({ id: clientId });
  }

  @Query(() => [Project])
  async projects() {
    return this.projectsService.findMany({});
  }
}
