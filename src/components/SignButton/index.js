import React from 'react';
import { Button } from './styled';

import AccountCircle from '@material-ui/icons/AccountCircle';

function SignButton () {
    return (
        <div>
            <Button>
                <AccountCircle />
                <div/>
                FAZER LOGIN
            </Button>
        </div>
    );
};

export default SignButton;