// worker-configuration.d.ts
export {};

declare interface Env {
  // Declare aqui os bindings que você usa no seu Worker com Hono
  // Por exemplo:
  MY_SECRET: string;
  DB_URL: string;
  KV_NAMESPACE?: KVNamespace; // se estiver usando armazenamento KV
}
