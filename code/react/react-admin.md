

## showNotification 

```js
import { connect } from 'react-redux';
import { showNotification } from 'react-admin';

const MyButton = connect(undefined, { showNotification })(props => (
    <button
        onClick={() => {
            props.showNotification("xxx");
            // return false;
        }}
    >
        Click -----
    </button>
))
```