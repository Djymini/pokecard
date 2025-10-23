import {inject, Injectable} from '@angular/core';
import {UserApi} from './user-api';
import {UserStore} from './user-store';
import {CreateUser} from '../models/create-user.model';
import {User} from '../models/user.model';
import {UserRules} from '../domains/user.rules';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  private userApi = inject(UserApi);
  private userStore = inject(UserStore);

  async createUser(userData: CreateUser): Promise<User> {
    // 1. Validation métier
    UserRules.validate(userData);

    // 2. Appel API → persistance
    const user = await this.userApi.createUser(userData);

    // 3. Store → mise en cache local
    this.userStore.addUser(user);

    return user;
  }
}
