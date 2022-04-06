import React, {useId} from 'react';

function NameFields() {
    const id = useId();
    const id2 = useId();
    console.log(id)
    console.log(id2)
    return (
      <div>
        <label htmlFor={id + '-firstName'}>First Name</label>
        <div>
          <input id={id + '-firstName'} type="text" />
        </div>
        <label htmlFor={id + '-lastName'}>Last Name</label>
        <div>
          <input id={id + '-lastName'} type="text" />
        </div>
      </div>
    );
  };

export default NameFields;