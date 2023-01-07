import { Injectable } from '@nestjs/common';
import { Project } from './models/project.model';
import { projects } from 'data';

@Injectable()
export class ProjectsService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  // async create(data: NewRecipeInput): Promise<Project> {
  //   return {} as any;
  // }

  async findOneById(id: number): Promise<Project> {
    return projects.find((project) => id === project.id);
  }

  async findOneByClientId(clientId: number): Promise<Project> {
    return projects.find((project) => clientId === project.clientId);
  }

  async findAll(): Promise<Project[]> {
    return projects as Project[];
  }

  async remove(id: number): Promise<boolean> {
    projects.filter((project) => id !== project.id);
    return true;
  }
}
