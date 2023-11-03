import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppLogger {
  constructor(private readonly logger: Logger) {}

  error(message: any, context: string) {
    this.logger.error(message);
  }

  warn(message: any, context: string) {
    this.logger.warn(message);
  }

  log(message: any) {
    this.logger.log(message);
  }

  debug(message: any) {
    this.logger.debug(message,);
  }

  verbose(message: any, context: string) {
    this.logger.verbose(message);
  }
}