// worker-configuration.d.ts
export {};

declare interface Env {
  // Declare aqui as variáveis de ambiente que você usa no worker
  MY_SECRET?: string;
  SOME_KEY?: string;
}
