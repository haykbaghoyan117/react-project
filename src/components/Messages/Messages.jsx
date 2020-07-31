import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';
import Message from './Message/Message';
import MessageItem from './MessageItem/MessageItem';
import s from './Messages.module.css';

const Messages = (props) => {
    let state = props.store.getState().messagesPage;

    let dialogsElements = state.dialogsData.map(d => <MessageItem name={d.name} id={d.id} />);
    let messagesElements = state.messagesData.map(m => <Message message = {m.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Messages;