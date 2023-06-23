import { Args, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { EmojisService } from "./emoji.service";

@Resolver('Emoji')
export class EmojisResolver {
  constructor(
    private emojisService: EmojisService,
  ) {}

  @Query('emoji')
  async emoji(@Args('code') code: string) {
    return this.emojisService.findOneById(code);
  }

  @Mutation()
  async updateEmoji(@Args('code') code: string, @Args('char') newChar: string) {
    return this.emojisService.updateEmoji(code, newChar);
  }
}