import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CsrfMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // Disable CSRF protection
    delete req.csrfToken;
    next();
  }
}
