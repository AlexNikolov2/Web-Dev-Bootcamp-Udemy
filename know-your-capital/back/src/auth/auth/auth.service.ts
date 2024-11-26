import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core/injector/lazy-module-loader/lazy-module-loader';

@Injectable()
export class AuthService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}
}
