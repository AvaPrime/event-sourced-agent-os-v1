import { DomainEvent, ExecutionFrame } from '../skill/types';

export class Runtime {
  constructor(private frame: ExecutionFrame) {}

  push(value: unknown): void {
    this.frame.stack.push(value);
  }

  pop(): unknown {
    if (this.frame.stack.length === 0) {
      throw new Error('StackUnderflowError');
    }
    return this.frame.stack.pop();
  }

  jump(target: number): void {
    this.frame.instructionPointer = target;
    this.frame.advancePointer = false;
  }

  emitEvent(event: Partial<DomainEvent>): void {
    const fullEvent: DomainEvent = {
      type: event.type!,
      aggregateId: this.frame.event.aggregateId,
      payload: event.payload || {},
      correlationId: this.frame.context.correlationId,
      causationId: this.frame.event.sequenceId?.toString(),
      timestamp: this.now(),
    };

    this.frame.emittedEvents.push(fullEvent);
    this.frame.environment.emitEvent(fullEvent);
  }

  now(): string {
    return new Date().toISOString();
  }
} 