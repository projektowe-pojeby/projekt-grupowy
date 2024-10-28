import { z } from 'zod';
import { coordinates } from '../../../schemas/coordinates';

export const createPostDtoSchema = z.object({
    description: z.string().max(2048, {
        message: 'Description can be at most 2048 characters long.',
    }),
    latitude: z
        .number({ coerce: true })
        .max(90, {
            message: 'Latitude must be between -90 and 90.',
        })
        .min(-90, {
            message: 'Latitude must be between -90 and 90.',
        }),
    longitude: z
        .number({ coerce: true })
        .max(180, {
            message: 'Longitude must be between -180 and 180.',
        })
        .min(-180, {
            message: 'Longitude must be between -180 and 180.',
        }),
});

export type CreatePostDto = z.infer<typeof createPostDtoSchema>;
