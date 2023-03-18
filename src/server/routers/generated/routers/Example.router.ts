/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { ExampleSchema } from '../schemas/Example.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(ExampleSchema.aggregate).query(({ ctx, input }) => db(ctx).example.aggregate(input)),

        create: procedure.input(ExampleSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).example.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(ExampleSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).example.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(ExampleSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).example.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(ExampleSchema.findFirst).query(({ ctx, input }) => db(ctx).example.findFirst(input)),

        findFirstOrThrow: procedure.input(ExampleSchema.findFirst).query(({ ctx, input }) => db(ctx).example.findFirstOrThrow(input)),

        findMany: procedure.input(ExampleSchema.findMany).query(({ ctx, input }) => db(ctx).example.findMany(input)),

        findUnique: procedure.input(ExampleSchema.findUnique).query(({ ctx, input }) => db(ctx).example.findUnique(input)),

        findUniqueOrThrow: procedure.input(ExampleSchema.findUnique).query(({ ctx, input }) => db(ctx).example.findUniqueOrThrow(input)),

        groupBy: procedure.input(ExampleSchema.groupBy).query(({ ctx, input }) => db(ctx).example.groupBy(input)),

        updateMany: procedure.input(ExampleSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).example.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(ExampleSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).example.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(ExampleSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).example.upsert(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

    }
    );
}
