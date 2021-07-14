import { MiddlewareFunc, RequestDelegate, ComposerFunc } from "./middleware";

export class PipelineBuilder
{
    composers: ComposerFunc[]  = [];

    use(middlewareFunc:  MiddlewareFunc): void {

        this.useInternal(next => {

            return (context) => {
                var simpleNext = () => next(context);
                return middlewareFunc(context, simpleNext);
            }
        })
    }

    build(): RequestDelegate {
        
        let app: RequestDelegate = async context => { console.log("you have reached the end my friend")};
        for (var i = this.composers?.length - 1; i >= 0; i--) {
            app = this.composers[i](app);
        }

        return app;

    }

    private useInternal(composerFunc: ComposerFunc): void{

        this.composers?.push(composerFunc);
    }

}