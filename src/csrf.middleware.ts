import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class CsrfMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // Exclude /graphql route from CSRF protection
    if (req.originalUrl === '/graphql') {
      return next();
    }

    // Disable CSRF protection for other routes
    delete req.csrfToken;
    next();
  }
}
