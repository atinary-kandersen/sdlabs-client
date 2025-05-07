import styles from './ExperimentDetailsHeader.module.css';

const ExperimentDetailsHeader = ({ name }: { name: string }) => {
  return (
    <div className="wa-stack wa-gap-xl">
      <div className="wa-flank:end">
        <div className="wa-cluster">
          {/* <wa-icon name="flask" variant="regular" style={{ color: 'var(--wa-color-brand-fill-loud)', fontSize: 25 }} /> */}
          <img src="https:enterprise.atinary.com/sdlabs/assets/images/dashboard/campaigns.png" className={styles.icon} />
          <h3 className={styles.heading}>{name}</h3>
        </div>
        <div>
          <wa-button variant="brand" style={{ minWidth: 250, maxWidth: 300, height: '3rem' }} pill>
            Run optimization
          </wa-button>
        </div>
      </div>
    </div>
  );

  //  return (
  //    <div className="wa-cluster">
  //      <div style={{ flex: 1 }} className="wa-cluster">
  //        <img src="https:enterprise.atinary.com/sdlabs/assets/images/dashboard/campaigns.png" className={styles.icon} />
  //        <h2 className={styles.heading}>{name}</h2>
  //      </div>
  //      <div style={{ flex: 1, justifyContent: 'center' }} className="wa-cluster">
  //        <PageNav>
  //          <NavLink to="" end>
  //            Home
  //          </NavLink>
  //          <NavLink to="insights">Insights</NavLink>
  //          <NavLink to="history">History</NavLink>
  //          <wa-dropdown>
  //            <wa-button
  //              appearance="plain"
  //              slot="trigger"
  //              caret
  //              data-active={configurationNav !== null}
  //              className={classNames({ active: configurationNav !== null })}
  //              style={{ minWidth: 160 }}
  //            >
  //              <span style={{ textTransform: 'capitalize' }}>{configurationNav ?? 'Configuration'}</span>
  //            </wa-button>
  //            <wa-menu onwa-select={onSelectConfigurationNav}>
  //              {configurationNavPaths.map(path => (
  //                <wa-menu-item key={path} value={path}>
  //                  {path.charAt(0).toUpperCase() + path.slice(1)}
  //                </wa-menu-item>
  //              ))}
  //            </wa-menu>
  //          </wa-dropdown>
  //        </PageNav>
  //      </div>
  //      <div style={{ flex: 1, justifyContent: 'flex-end' }} className="wa-cluster">
  //        <wa-button variant="brand" style={{ minWidth: 250, maxWidth: 300, height: '3rem' }} pill>
  //          Run next optimization
  //        </wa-button>
  //      </div>
  {
    /* <div className="wa-stack wa-gap-m"> */
  }
  {
    /* <div className="wa-stack wa-gap-2xl">
             <div className="wa-gap-xl" style={{ opacity: 0.5, whiteSpace: 'nowrap' }}>
               <div className="wa-gap-xs">
                 <wa-icon name="bullseye"></wa-icon>
                 <span className="wa-heading-xs">FalconGPBO</span>
               </div>
               <div className="wa-gap-xs">
                 <wa-icon name="gauge"></wa-icon>
                 <span className="wa-heading-xs">High</span>
               </div>
               <div className="wa-gap-xs">
                 <wa-icon name="chalkboard"></wa-icon>
                 <span className="wa-heading-xs">Generic reaction</span>
               </div>
               <div className="wa-gap-xs">
                 <wa-icon name="vials"></wa-icon>
                 <span className="wa-heading-xs">10 batches</span>
               </div>
             </div>
           </div> */
  }
  {
    /* </div> */
  }
  {
    /* <div>
           <div className="wa-gap-xl wa-align-items-center">
             <ExperimentStatusIndicator />

             <div className="wa-gap-xs" style={{ opacity: 0.5 }}>
               <wa-icon name="clock" variant="regular"></wa-icon>
               <span className="wa-heading-xs" style={{ whiteSpace: 'nowrap' }}>
                 Today, 10:32
               </span>
             </div>
             <wa-icon-button name="cog" className={styles.settingsButton}></wa-icon-button>
           </div>
         </div> */
  }
  //  </div>
  //  );
};

export default ExperimentDetailsHeader;
