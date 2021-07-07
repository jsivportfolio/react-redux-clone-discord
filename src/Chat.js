import React, {useEffect, useState} from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelID } from './features/appSlice';
import { selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';

function Chat() {

    const user = useSelector(selectUser);
    const channelID = useSelector(selectChannelID);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (channelID) {
            db.collection('channels').doc(channelID).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            });
        }
    }, [channelID]);

    const functionSendMessage = (e) => {
        e.preventDefault();

        db.collection('channels').doc(channelID).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });
        setInput('');
    };

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}></ChatHeader>

            <div className="chat__messages">
                {messages.map((message) => {
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    >
                    </Message>
                })}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large"></AddCircleIcon>
                <form>
                    <input value={input} disabled={!channelID} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelID}`}></input>
                    <button className="chat__inputButton" type="submit" onClick={functionSendMessage}>Send Message</button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large"></CardGiftcardIcon>
                    <GifIcon fontSize="large"></GifIcon>
                    <EmojiEmotionsIcon fontSize="large"></EmojiEmotionsIcon>
                </div>

            </div>
        </div>
    )
}

export default Chat
