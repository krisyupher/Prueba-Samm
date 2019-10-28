import React from 'react';

const Mantenimiento = ({children}) => {
  return (
    <React.Fragment>
      <div className="s12 m12 l12 col colorSamm">
        <div className="row">
          <div className="s4 m4 l6 push-l1 col title white-text">
            <h5>
              creación plan de mantenimiento</h5>
          </div>
        </div>
      </div>
      {children}
    </React.Fragment>
  )
}
export default Mantenimiento 