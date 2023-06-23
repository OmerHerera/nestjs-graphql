import { Injectable } from '@nestjs/common';
import { Emoji } from '../graphql.schema';
import emojis from './data-by-emoji.json';
import emojisAnimated from './data-by-emoji-animated.json'

@Injectable()
export class EmojisService {
  private readonly emojis: Array<Emoji > = emojis;
  private readonly emojisAnimated: Array<Emoji > = emojisAnimated;
  
  findOneById(code: string): Emoji {
    return this.emojis.find(emoji => emoji.code === code);
  }
  
  updateEmoji(code: string, char: string): Emoji {
    const emoji: Emoji = this.emojis.find(emoji => emoji.code === code);
    console.log(`Emoji to update: ${code} with : ${char}`);
    emoji.char = char;
    return emoji;
  }
  findOneByIdAnimated(code: string): Emoji {
    return this.emojisAnimated.find(emojiAnimated => emojiAnimated.code === code);
  }
}