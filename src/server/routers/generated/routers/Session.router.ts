/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { SessionSchema } from '../schemas/Session.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(SessionSchema.aggregate).query(({ ctx, input }) => db(ctx).session.aggregate(input)),

        create: procedure.input(SessionSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).session.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(SessionSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).session.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(SessionSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).session.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(SessionSchema.findFirst).query(({ ctx, input }) => db(ctx).session.findFirst(input)),

        findFirstOrThrow: procedure.input(SessionSchema.findFirst).query(({ ctx, input }) => db(ctx).session.findFirstOrThrow(input)),

        findMany: procedure.input(SessionSchema.findMany).query(({ ctx, input }) => db(ctx).session.findMany(input)),

        findUnique: procedure.input(SessionSchema.findUnique).query(({ ctx, input }) => db(ctx).session.findUnique(input)),

        findUniqueOrThrow: procedure.input(SessionSchema.findUnique).query(({ ctx, input }) => db(ctx).session.findUniqueOrThrow(input)),

        groupBy: procedure.input(SessionSchema.groupBy).query(({ ctx, input }) => db(ctx).session.groupBy(input)),

        updateMany: procedure.input(SessionSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).session.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(SessionSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).session.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(SessionSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).session.upsert(input);
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
