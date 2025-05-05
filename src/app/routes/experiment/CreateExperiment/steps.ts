const steps = ['parameters', 'objectives', 'constraints', 'batches', 'summary'] as const;
export type Step = (typeof steps)[number];

export default steps;
