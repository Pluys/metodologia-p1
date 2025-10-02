import { RISK } from "../../models/TYPES";
import { User } from "../../models/user";

export class usersF {
  private users: Map<string, User> = new Map();

  constructor() {
    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    // Usuarios por defecto
    const defaultUsers: User[] = [
      new User(
        "demo_user",
        "demo_user",
        "demo@example.com",
        "demo-key-123",
        10000.0,
        RISK.MEDIUM
      ),
      new User(
        "admin_user",
        "admin_user",
        "admin@example.com",
        "admin-key-456",
        50000.0,
        RISK.HIGH
      ),
      new User(
        "trader_user",
        "trader_user",
        "trader@example.com",
        "trader-key-789",
        25000.0,
        RISK.LOW
      ),
    ];

    defaultUsers.forEach((user) => this.users.set(user.id, user));
  }

  // Métodos para usuarios
  getUserByApiKey(apiKey: string): User | undefined {
    return Array.from(this.users.values()).find(
      (user) => user.apiKey === apiKey
    );
  }

  getUserById(id: string): User | undefined {
    return this.users.get(id);
  }

  getAllUsers(): User[] {
    return [...this.users.values()];
  }

  updateUser(user: User): void {
    this.users.set(user.id, user);
  }
}
