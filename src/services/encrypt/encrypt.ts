import { hash, verify } from "@ts-rex/bcrypt";

export class Encrypt {
  static salt = 10;

  static hash(data: string) {
    return hash(data);
  }

  static compare(data: string, encrypted: string) {
    return verify(data, encrypted);
  }
}