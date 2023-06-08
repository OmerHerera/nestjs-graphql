import { Module } from '@nestjs/common';
import { EmojisService } from './emoji.service';
import { EmojisResolver } from './emojis.resolver';

@Module({
  imports: [
  ],
  providers: [
    EmojisService,
    EmojisResolver,
  ],
})
export class EmojisModule {}