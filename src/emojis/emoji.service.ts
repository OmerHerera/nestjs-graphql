import { Injectable } from '@nestjs/common';
import { Emoji } from '../graphql.schema';
import emojis from './data-by-emoji.json';

@Injectable()
export class EmojisService {
  private readonly emojis: Array<Emoji > = emojis;
  
  findOneById(code: string): Emoji {
    return this.emojis.find(emoji => emoji.code === code);
  }
  
  updateEmoji(code: string, char: string): Emoji {
    const emoji: Emoji = this.emojis.find(emoji => emoji.code === code);
    console.log(`Emoji to update: ${code} with : ${char}`);
    emoji.char = char;
    return emoji;
  }
}