
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

export abstract class IQuery {
    abstract emoji(code: string): Nullable<Emoji> | Promise<Nullable<Emoji>>;
}

export abstract class IMutation {
    abstract updateEmoji(code: string, char: string): Nullable<Emoji> | Promise<Nullable<Emoji>>;
}

type Nullable<T> = T | null;
