import z from 'zod';

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'El título debe ser una cadena de caracteres',
    required_error: 'El título es requerido'
  }),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  director: z.string(),
  duration: z.number().int().positive(),
  rate: z.number().min(0).max(10).default(5),
  poster: z.string().url({
    message: 'La URL del poster no es válida'
  }),
  genre: z.array(z.enum(['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Horror', 'Thriller', 'Musical', 'Sci-Fi', 'Biography']),
    {
      required_error: 'El género es requerido',
      invalid_type_error: 'El género debe ser una lista de enum género'
    })
});

export const validateMovie = (object) => {
  return movieSchema.safeParse(object);
};

export const validatePartialMovie = (object) => {
  return movieSchema.partial().safeParse(object);
};
