import { array, object, string } from 'valibot';

export const experimentSchema = object({
  id: string(),
  name: string()
});

export const experimentsSchema = array(experimentSchema);
