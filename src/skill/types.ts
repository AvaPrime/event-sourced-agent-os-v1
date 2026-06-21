export interface DomainEvent {
  type: string;
  aggregateId: string;
  payload: Record<string, any>;
  sequenceId?: number;
  timestamp?: string;
  correlationId?: string;
  causationId?: string;
}

export interface ProjectionState {
  [key: string]: any;
}

export interface ExecutionContext {
  agentId: string;
  correlationId: string;
  causationId?: string;
  timestamp: string;
}

export interface VMResult {
  emittedEvents: DomainEvent[];
  trace: TraceEntry[];
  halted: boolean;
  returnValue?: any;
  error?: string;
}

export interface TraceEntry {
  timestamp: string;
  skillId: string;
  opcode: Opcode;
  args: any;
  stackBefore: any[];
  stackAfter: any[];
  variablesBefore: Record<string, any>;
  variablesAfter: Record<string, any>;
}

export interface Instruction {
  opcode: Opcode;
  args: unknown[];
}

export enum Opcode {
  PUSH = 'PUSH',
  POP = 'POP',
  LOAD_VAR = 'LOAD_VAR',
  STORE_VAR = 'STORE_VAR',
  COMPARE = 'COMPARE',
  JUMP = 'JUMP',
  JUMP_IF = 'JUMP_IF',
  READ_STATE = 'READ_STATE',
  QUERY_PROJECTION = 'QUERY_PROJECTION',
  EMIT_EVENT = 'EMIT_EVENT',
  CALL_TOOL = 'CALL_TOOL',
  CALL_SKILL = 'CALL_SKILL',
  NOOP = 'NOOP',
  RETURN = 'RETURN',
}

export enum ComparisonOperator {
  EQ = 'EQ',
  NEQ = 'NEQ',
  GT = 'GT',
  GTE = 'GTE',
  LT = 'LT',
  LTE = 'LTE',
}

export interface SkillProgram {
  skillId: string;
  version: string;
  programHash?: string;
  instructions: Instruction[];
}

export interface Skill {
  id: string;
  version: string;
  compile(): SkillProgram;
}

export interface TraceEntry {
  timestamp: string;
  skillId: string;
  opcode: Opcode;
  args: any;
  stackBefore: any[];
  stackAfter: any[];
  variablesBefore: Record<string, any>;
  variablesAfter: Record<string, any>;
} 