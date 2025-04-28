import {
  boolean,
  maxValue,
  minValue,
  object,
  parse,
  picklist,
  pipe,
  string,
  transform,
  url
} from 'valibot';

const environmentSchema = object({
  MODE: picklist(['development', 'production', 'test']),
  DEV: boolean(),
  PROD: boolean(),
  ATI_API_BASE_URL: pipe(string(), url()),
  ATI_HTTP_REQUEST_TIMEOUT: pipe(
    string(),
    transform(input => parseInt(input, 10)),
    minValue(1),
    maxValue(1000 * 60)
  )
});

export default parse(environmentSchema, import.meta.env);
