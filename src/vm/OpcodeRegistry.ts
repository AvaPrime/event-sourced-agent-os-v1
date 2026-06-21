import { Opcode } from '../skill/types';
import { OpcodeHandler } from './OpcodeHandler';

export class OpcodeRegistry {
  private handlers = new Map<Opcode, OpcodeHandler>();

  register(opcode: Opcode, handler: OpcodeHandler): void {
    if (this.handlers.has(opcode)) {
      throw new Error(`Handler already registered for opcode: ${opcode}`);
    }
    this.handlers.set(opcode, handler);
  }

  get(opcode: Opcode): OpcodeHandler | undefined {
    return this.handlers.get(opcode);
  }

  has(opcode: Opcode): boolean {
    return this.handlers.has(opcode);
  }
} 