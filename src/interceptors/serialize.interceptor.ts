import { UseInterceptors, NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { plainToClass } from "class-transformer";

interface ClassConstructor {
    new (...args: any[]): {}
}

export function Serialize(dto: ClassConstructor) {
    return UseInterceptors(new SerializeInterceptor(dto))
}
export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: any) {}

    intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
        // Run before the request i shandled by the request handler

        return handler.handle().pipe(
            map((data: any) => {
                // Run somthing before the response is sent out
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true
                })
            })
        )
    }
}