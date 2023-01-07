import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Client {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  phone?: string;
}
