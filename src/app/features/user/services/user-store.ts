import {computed, Injectable, signal} from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  // Signal privé qui stocke la liste complète
  private usersSignal = signal<User[]>([]);

  // Exposition publique en lecture seule
  users = computed(() => this.usersSignal());
  userCount = computed(() => this.usersSignal().length);

  // Actions CRUD
  setUsers(users: User[]): void {
    this.usersSignal.set(users);
  }

  addUser(user: User): void {
    this.usersSignal.update(users => [...users, user]);
  }

  updateUser(updated: User): void {
    this.usersSignal.update(users =>
      users.map(u => (u.id === updated.id ? updated : u))
    );
  }

  removeUser(id: string): void {
    this.usersSignal.update(users => users.filter(u => u.id !== id));
  }

  clear(): void {
    this.usersSignal.set([]);
  }
}
