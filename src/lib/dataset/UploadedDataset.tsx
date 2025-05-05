export default function UploadedDataset() {
  return (
    <wa-callout variant="success" size="small">
      <wa-icon slot="icon" name="circle-check" variant="regular"></wa-icon>
      <div className="wa-flank:end">
        <div className="wa-cluster">
          <div>File_g3y669.xml</div>
          <wa-badge variant="success" appearance="filled">
            Ready
          </wa-badge>
        </div>
        <div className="wa-cluster wa-gap-xs">
          <wa-button appearance="filled" variant="brand" size="small">
            Create experiment
          </wa-button>
          <wa-button appearance="filled" variant="brand" size="small">
            Analytics
          </wa-button>
        </div>
      </div>
    </wa-callout>
  );
  // return (
  //   <div className={styles.box}>
  //     <div className="wa-flank:end">
  //       <div className="wa-cluster">
  //         <div>File_g3y669.xml</div>
  //         <wa-badge variant="success" appearance="filled">
  //           Ready
  //         </wa-badge>
  //       </div>
  //       <div className="wa-cluster wa-gap-xs">
  //         <wa-button appearance="filled" variant="brand" size="small">
  //           Create experiment
  //         </wa-button>
  //         <wa-button appearance="filled" variant="brand" size="small">
  //           Analytics
  //         </wa-button>
  //       </div>
  //     </div>
  //   </div>
  // );
}
