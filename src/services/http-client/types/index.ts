export interface RedisConnectionOptions {
  username: string;
  password: string;
  socket: {
    host: string;
    port: number;
  };
}
