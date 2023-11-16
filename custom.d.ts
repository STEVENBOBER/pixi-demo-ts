declare namespace NodeJS {
  interface Require {
    context(path: string, recursive: boolean, pattern: RegExp): any;
  }
}
