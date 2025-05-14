import { parse } from 'valibot';
import type { CreateExperimentContextType } from './CreateExperimentContext';
import { contextDataSchema } from './CreateExperimentContext';

const key = 'createExperimentContextData';

export function getContextDataFromLocalStorage(): CreateExperimentContextType['data'] | null {
  const localStorageItem = localStorage.getItem(key);
  if (localStorageItem) {
    try {
      const contextData = parse(contextDataSchema, JSON.parse(localStorageItem));
      return contextData;
    } catch (error) {
      console.warn(`Error parsing ${key} from local storage:`, error);
    }
  }
  return null;
}

export function setContextDataToLocalStorage(data: CreateExperimentContextType['data']) {
  localStorage.setItem(key, JSON.stringify(data));
}
