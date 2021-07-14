
export class PipelineContext {
  status?: string
}

export interface MiddlewareFunc {
  (ctx: PipelineContext, next: () => Promise<void>): Promise<void>;
}

export interface RequestDelegate {
  (ctx: PipelineContext) : Promise<void>
}

export interface ComposerFunc {
  (func: RequestDelegate): RequestDelegate
}