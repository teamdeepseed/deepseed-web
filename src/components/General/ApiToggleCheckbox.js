import React from 'react';

const ApiToggleCheckbox = (props) => {
  return (
    <div className="row" style={{ marginBottom: '2em' }}>
      <div className="col-12 text-center">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            checked={props.checked}
            onChange={props.onChange}
          />
          Tick to use live APIs
        </label>
      </div>
    </div>
  )
}

export default ApiToggleCheckbox;