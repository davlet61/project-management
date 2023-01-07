import { Module } from '@nestjs/common';
import { ProjectsResolver } from './projects.resolver';
import { ProjectsService } from './projects.service';

@Module({
  providers: [ProjectsResolver, ProjectsService],
})
export class ProjectsModule {}
