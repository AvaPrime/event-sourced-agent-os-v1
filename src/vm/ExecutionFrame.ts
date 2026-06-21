import { ProjectionState, DomainEvent, ExecutionContext, TraceEntry } from '../skill/types';

export interface RuntimeEnvironment {
  queryProjection(name: string, args?: any): Promise<any>;
  emitEvent(event: DomainEvent): void;
  callTool(name: string, args: any): Promise<any>;
  callSkill(skillId: string, event: DomainEvent): Promise<any>;
}

export interface StackFrame {
  skillId: string;
  instructionPointer: number;
}

export interface ExecutionFrame {
  projectionState: ProjectionState;
  event: DomainEvent;
  context: ExecutionContext;
  environment: RuntimeEnvironment;

  variables: Record<string, any>;
  stack: any[];
  callStack: StackFrame[];

  emittedEvents: DomainEvent[];
  trace: TraceEntry[];

  instructionPointer: number;
  advancePointer: boolean;
  halted: boolean;
} 