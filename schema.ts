
/**
 * Supported users
 */
export type User = (
  'developer' |
  'administrator' |
  'operator' |
  'robot' |
  'randomreader' |
  'anonymous'
);

/**
 * Supported numbers
 *
 * @minimum -1
 * @maximum 2048
 * @multipleOf 1
 */
export type UserChoiceNumber = number;

/**
 * Supported words
 *
 * @maxLength 8
 * @pattern ^[a-z][a-z0-9]*$
 */
export type UserChoiceWord = string;

/**
 * Supported user choices
 */
export type UserChoice = UserChoiceNumber | UserChoiceWord;

/**
 * Settings file
 */
export interface Settings {
  /**
   * Just assume it's true
   */
  whatever: true,

  /**
   * What type of user are...
   */
  you: User,

  /**
   * Pick a list up to 5 numbers or any word
   *
   * @maxItems 5
   */
  want?: UserChoice[]
}

// For more information about supported TSDoc tags among JSON Schema specs, see:
// https://github.com/vega/ts-json-schema-generator/blob/v1.1.2/src/AnnotationsReader/BasicAnnotationsReader.ts
