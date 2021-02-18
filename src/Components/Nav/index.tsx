import React, {FC} from 'react'
import {Box, Button, ButtonGroup} from '@material-ui/core'
import { useHistory, useLocation  } from "react-router-dom";

const Nav: FC = () => {
    const history = useHistory();
    const location = useLocation();

    const redirectUser = (path:string) => {
        history.push(path)
    }    
  
    return (
        <div>
            <Box display='flex' mt={1} mb={1} justifyContent='space-between'>
                <ButtonGroup fullWidth={true} aria-label="contained primary button group">
                    <Button onClick={() => redirectUser('/user1')}
                            // disabled={location.pathname == '/user1' ? true : false} 
                            className='user-btns' 
                            fullWidth={true} 
                            variant="contained"
                            color={location.pathname == '/user1' ? 'secondary' : 'default'} 
                            >
                        User 1  
                    </Button>
                    <Button onClick={() => redirectUser('/user2')}
                            // disabled={location.pathname == '/user2' ? true : false} 
                            className='user-btns' 
                            fullWidth={true} 
                            variant="contained" 
                            color={location.pathname == '/user2' ? 'secondary' : 'default'}
                            >
                        User 2  
                    </Button>
                </ButtonGroup>
            </Box>
        </div>
    )
}

export default Nav;