/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import { VerificationTokenSchema } from '../schemas/VerificationToken.schema';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        aggregate: procedure.input(VerificationTokenSchema.aggregate).query(({ ctx, input }) => db(ctx).verificationToken.aggregate(input)),

        create: procedure.input(VerificationTokenSchema.create).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).verificationToken.create(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        deleteMany: procedure.input(VerificationTokenSchema.deleteMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).verificationToken.deleteMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        delete: procedure.input(VerificationTokenSchema.delete).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).verificationToken.delete(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        findFirst: procedure.input(VerificationTokenSchema.findFirst).query(({ ctx, input }) => db(ctx).verificationToken.findFirst(input)),

        findFirstOrThrow: procedure.input(VerificationTokenSchema.findFirst).query(({ ctx, input }) => db(ctx).verificationToken.findFirstOrThrow(input)),

        findMany: procedure.input(VerificationTokenSchema.findMany).query(({ ctx, input }) => db(ctx).verificationToken.findMany(input)),

        findUnique: procedure.input(VerificationTokenSchema.findUnique).query(({ ctx, input }) => db(ctx).verificationToken.findUnique(input)),

        findUniqueOrThrow: procedure.input(VerificationTokenSchema.findUnique).query(({ ctx, input }) => db(ctx).verificationToken.findUniqueOrThrow(input)),

        groupBy: procedure.input(VerificationTokenSchema.groupBy).query(({ ctx, input }) => db(ctx).verificationToken.groupBy(input)),

        updateMany: procedure.input(VerificationTokenSchema.updateMany).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).verificationToken.updateMany(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        update: procedure.input(VerificationTokenSchema.update).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).verificationToken.update(input);
            } catch (err: any) {
                if (err.code === 'P2004' && err.meta?.reason === 'RESULT_NOT_READABLE') {
                    // unable to readback data
                    return undefined;
                } else {
                    throw err;
                }
            }
        }),

        upsert: procedure.input(VerificationTokenSchema.upsert).mutation(async ({ ctx, input }) => {
            try {
                return await db(ctx).verificationToken.upsert(input);
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
