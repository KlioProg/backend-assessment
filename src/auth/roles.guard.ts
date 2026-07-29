import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '@prisma/client';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Look for the @Roles() tag on the route
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    // If there is no @Roles() tag, let them through
    if (!requiredRoles) {
      return true;
    }

    // Get the user data that our JwtStrategy attached to the request
    const { user } = context.switchToHttp().getRequest();
    
    // Check if the user's role is in the list of allowed roles
    return requiredRoles.includes(user.role);
  }
}