export interface Storage<Type> {
  set(value: Type): void;
  get(): Type | null;
  empty(): void;
}

class LocalStorage implements Storage<string> {
  constructor(private key: string) {}
  empty(): void {
    throw new Error("Method not implemented.");
  }

  get(): string | null {
    const value = localStorage.getItem(this.key);

    if (!value) {
      return null;
    }

    return JSON.parse(value);
  }

  set(value: string): void {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
}

export default LocalStorage;
