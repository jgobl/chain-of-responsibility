import { PipelineContext } from "./middleware";
//import { PipelineBuilder } from "./pipelineBuilder";
import { PipelineBuilder } from "./pipelineBuilderRecursive";


const pipelineBuilder = new PipelineBuilder();

pipelineBuilder.use(async (ctx, next) => {
    console.log('started middleware1');
    await next();
    console.log('finsihed middleware 1');
});

pipelineBuilder.use(async (ctx, next) => {
    console.log('started middleware 2');
    await next();
    console.log('finsihed middleware 2');
});

pipelineBuilder.use(async (ctx, next) => {
    console.log('started middleware3');
    await next();
    console.log('finsihed middleware 3');
});

var pipeline = pipelineBuilder.build();

pipeline(new PipelineContext()).then(() => console.log("finished"));
