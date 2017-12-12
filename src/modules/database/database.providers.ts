import * as mongoose from 'mongoose';
import { environment } from '../../environment';

export const databaseProviders = [
    {
        provide: 'DbConnectionToken',
        useFactory: async () => {
            (mongoose as any).Promise = global.Promise;
            return await mongoose.connect(environment.mongo, {
                useMongoClient: true,
            });
        },
    },
];
