import React, {useState, FC, useContext, FormEvent, ChangeEvent} from 'react';
import { UserContext, context, msjObj } from '../../Store';
import {Box, Input, Button, InputLabel } from '@material-ui/core'
import '../style.scss';

const User2:FC = () => {
    const {msgList, setMsgList} = useContext(UserContext);
    const [term, setTerm] = useState<string>('');
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTerm(e.target.value)
    }
    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newItem = {
            message: term,
            user: 2,
            id: msgList.length+1,
        };
        term.length >= 1 ? setMsgList(msgList.concat(newItem)) : alert('Bosh Mesaj Gondermek Olmaz')
        setTerm('');
    }
    return (
        <div className='user-page'>
            <div className='message-box'>
                {msgList.map((msg:any) => (
                    <Box className= {msg.user == 2 ? 'message-row message-row_user1' : 'message-row message-row_user2'} key={msg.id}>
                        {msg.message}
                    </Box>
                ))}
            </div>
            <form onSubmit={(e) => sendMessage(e)}>
                <Box width='100%' flexDirection="column" display='flex'>
                    <Input onChange={(e) => changeMessage(e)} className='msg-input' value={term} placeholder='enter message' color='primary'/>
                    <Button variant="contained" color="primary" type='submit'>Send</Button>
                </Box>
            </form>    
        </div>
            
    );
}

export default User2;