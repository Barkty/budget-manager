import { UseInterceptors, NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        // Run before the request i shandled by the request handler

        console.log('Running before request: ', context)

        return next.handle().pipe(
            map((data: any) => {
                // Run somthing before the response is sent out
                console.log('Running before response: ', data)
            })
        )
    }
}