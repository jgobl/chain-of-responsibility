import { MiddlewareFunc, PipelineContext, RequestDelegate } from "./middleware";

export class PipelineBuilder
{
    middlewareFuncs: MiddlewareFunc[]  = [];

    use(middlewareFunc:  MiddlewareFunc): void {

      this.middlewareFuncs.push(middlewareFunc);

    }

    build(): RequestDelegate {        
        let func = this.compose(this.middlewareFuncs);
        return func;
    }    

    private compose (middlewareFuncs: MiddlewareFunc[]) {

      return async function (context: PipelineContext): Promise<void> {
        // last called middleware #
        let index = -1;
        return dispatch(0);
        async function dispatch (i: number): Promise<void> {
          if (i <= index) { 
            throw new Error('next() called multiple times');
          }
    
          index = i;
          let fn = middlewareFuncs[i];
          if (i === middlewareFuncs.length){
           return;
          }
    
          await fn(context, () => dispatch(i + 1));
        }
      }
    }

}