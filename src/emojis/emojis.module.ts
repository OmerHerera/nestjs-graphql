import { Module } from '@nestjs/common';
import { EmojisService } from './emoji.service';
import { EmojisResolver } from './emojis.resolver';
import {EmojiCollectionResolver} from './emojiUnion.resolver'

@Module({
  imports: [
  ],
  providers: [
    EmojisService,
    EmojisResolver,
    EmojiCollectionResolver
  ],
})
export class EmojisModule {}