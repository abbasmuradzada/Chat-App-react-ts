import React, {FC} from 'react'
import {Box, Button} from '@material-ui/core'
import { useHistory, useLocation  } from "react-router-dom";

const Nav: FC = () => {
    const history = useHistory();
    const location = useLocation();

    const redirectUser = (path:string) => {
        history.push(path)
    }    
  
    return (
        <div>
            <Box display='flex' mb={1} justifyContent='space-between'>
                <Box width='48%'>
                    <Button onClick={() => redirectUser('/user1')}
                            disabled={location.pathname == '/user1' ? true : false} 
                            className='user-btns' 
                            fullWidth={true} 
                            variant="contained" 
                            color="secondary">
                        User 1  
                    </Button>
                </Box>
                <Box width='48%'>
                    <Button onClick={() => redirectUser('/user2')}
                            disabled={location.pathname == '/user2' ? true : false} 
                            className='user-btns' 
                            fullWidth={true} 
                            variant="contained" 
                            color="secondary">
                        User 2  
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Nav;