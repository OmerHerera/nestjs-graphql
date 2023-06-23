
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Emoji {
    code: string;
    char: string;
    name: string;
    category: string;
    group: string;
    subgroup: string;
}

export class EmojiAnimated {
    code: string;
    char: string;
    name: string;
    category: string;
    group: string;
    subgroup: string;
    animated: boolean;
    documentation: string;
}

export abstract class IQuery {
    abstract emoji(code: string): Nullable<Emoji> | Promise<Nullable<Emoji>>;

    abstract emojiItems(code: string): Nullable<EmojiCollection[]> | Promise<Nullable<EmojiCollection[]>>;
}

export abstract class IMutation {
    abstract updateEmoji(code: string, char: string): Nullable<Emoji> | Promise<Nullable<Emoji>>;
}

export type EmojiCollection = Emoji | EmojiAnimated;
type Nullable<T> = T | null;
