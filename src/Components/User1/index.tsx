import React, {useState, FC, useContext, FormEvent, ChangeEvent} from 'react';
import { UserContext, context } from '../../Store';
import {Box, Input, Button} from '@material-ui/core'
import '../style.scss';

const User1:FC = () => {
    const {msgList, setMsgList} = useContext(UserContext);
    const [term, setTerm] = useState<string>('');
    const changeMessage = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setTerm(e.target.value)
    }
    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let date = new Date();
        const newItem = {
            message: term,
            user: 1,
            id: msgList.length+1,
            time: ` ${`${date.getHours()}`.length > 1 ? date.getHours(): `0${date.getHours()}`}:${`${date.getMinutes()}`.length > 1 ? date.getMinutes():`0${date.getMinutes()}`}`
        };
        term.length >= 1 ? setMsgList(msgList.concat(newItem)) : console.log("empty message");
        setTerm('');
    }
    return (
        <div className='user-page'>
            <div className='message-box'>
                {msgList.map((msg:any) => (
                    <Box className= {msg.user == 1 ? 'message-row message-row_user1' : 'message-row message-row_user2'} key={msg.id}>
                        {msg.user == 1 ? <sup>{msg.time}</sup> : null} 
                        <span>{msg.message}</span>
                        {msg.user == 1 ? null : <sup>{msg.time}</sup>} 
                    </Box>
                ))}
            </div>
            <form onSubmit={(e) => sendMessage(e)}>
                <Box width='100%' flexDirection="column" display='flex'>
                    <Input onChange={(e) => changeMessage(e)} className='msg-input' value={term} placeholder='enter message' color='primary'/>
                    <Button disabled={term.length >= 1 ? false : true} 
                            variant="contained" 
                            color="primary" 
                            type='submit'>
                                Send
                    </Button>
                </Box>
            </form>    
        </div>
            
    );
}

export default User1;