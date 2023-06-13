// emojiUnion.resolver.ts
import { Resolver, Query, ResolveField, Parent, Args } from '@nestjs/graphql';
import { Emoji, EmojiAnimated } from './../graphql.schema';
import { EmojisService } from './emoji.service';

@Resolver('EmojiCollection')
export class EmojiCollectionResolver {
  constructor(
    private emojisService: EmojisService,
  ) {}
  // Query that returns a list of emojis items
  @Query('emojiItems')
  async getEmojiItems(@Args('code') code: string): Promise<(Emoji | EmojiAnimated)[]> {
    let emojis = this.emojisService.findOneById(code);
    let emojisAnimated = this.emojisService.findOneByIdAnimated(code);

    return [emojis, emojisAnimated];
  }

  // Resolve the `__resolveType` field on the `Emoji` union type
  @ResolveField('__resolveType')
  resolveType(@Parent() emoji: Emoji | EmojiAnimated): string {
    if ('animated' in emoji) {
      return 'EmojiAnimated';
    } 
    else  {
      return 'Emoji';
    }
  }
}