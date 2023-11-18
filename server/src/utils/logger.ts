// logger.ts
class Logger {
  info(...params: unknown[]): void {
    if (process.env.NODE_ENV !== "test") {
      console.log(...params);
    }
  }

  error(...params: unknown[]): void {
    if (process.env.NODE_ENV !== "test") {
      console.error(...params);
    }
  }
}

const logger = new Logger();

export default logger;
