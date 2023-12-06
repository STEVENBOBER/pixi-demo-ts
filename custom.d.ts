// This extension to the Require interface is for the purpose 
// of adding a context method to the require function in Node.js. 

declare namespace NodeJS {
  interface Require {
    context(path: string, recursive: boolean, pattern: RegExp): any;
  }
}

