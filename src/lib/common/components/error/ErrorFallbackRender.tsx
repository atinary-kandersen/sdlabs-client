import styles from './ErrorFallbackRender.module.css';

/**
 * https://www.npmjs.com/package/react-error-boundary
 */
function ErrorFallbackRender({ error }: { error: Error }) {
  return (
    <div role="alert" className={styles.container}>
      <h3 style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
        <wa-icon name="bug" style={{ fontSize: '4rem', color: '#ccc', marginRight: '1rem' }}></wa-icon>
        <del>{error.name}</del>
      </h3>

      <pre className={styles.pre}>{error.message}</pre>
    </div>
  );
}

// function UpfetchValidationErrorRender({ error }: { error: ValidationError }) {
//   return (
//     <>
//       <mark>up-fetch schema validation error</mark>
//       <CodeRender code={error.issues} />
//     </>
//   );
// }

// function CodeRender({ code }: { code: unknown }) {
//   return (
//     <pre className={styles.pre}>
//       <code>{JSON.stringify(code, null, 2)}</code>
//     </pre>
//   );
// }

export default ErrorFallbackRender;
