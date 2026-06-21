import { Instruction } from '../skill/types';
import { ExecutionFrame } from './ExecutionFrame';
import { Runtime } from './Runtime';

export interface OpcodeHandler {
  execute(
    instruction: Instruction,
    frame: ExecutionFrame,
    runtime: Runtime
  ): void | Promise<void>;
}

export abstract class BaseOpcodeHandler implements OpcodeHandler {
  abstract execute(
    instruction: Instruction,
    frame: ExecutionFrame,
    runtime: Runtime
  ): void | Promise<void>;
} 