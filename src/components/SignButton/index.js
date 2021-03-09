import React from 'react';
import { Button } from './styled';

import AccountCircle from '@material-ui/icons/AccountCircle';

function SignButton () {
    return (
        <div>
            <Button>
                <AccountCircle />
                fazer login
            </Button>
        </div>
    );
};

export default SignButton;