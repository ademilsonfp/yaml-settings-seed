
export type User = (
  'developer' |
  'administrator' |
  'operator'
);

/**
 * @minimum -1
 * @maximum 2048
 * @multipleOf 1
 */
export type UserChoiceNumber = number;

/**
 * @maxLength 8
 */
export type UserChoiceWord = string;

export type UserChoice = UserChoiceNumber | UserChoiceWord;

export interface Settings {
  whatever: true,
  you: User,

  /**
   * Pick a list up to 5 numbers between -1 and 2048
   *
   * @maxItems 5
   */
  want?: UserChoice[]
};
