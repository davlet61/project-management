import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Project {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  clientId?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  status?: string;
}
