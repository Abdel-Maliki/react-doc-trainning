function Mailbox(props) {
    const unreadMessages = props.unreadMessages;

    return <div>
        <h1>Bonjour !</h1>
        {unreadMessages && unreadMessages.length > 0 && <h2>Vous avez {unreadMessages.length} message(s) non-lu(s)</h2>}
    </div>
}

export default function ConditionalRendering(props) {
    const messages = ['React', 'Re: React', 'Re:Re: React'];
    return <Mailbox unreadMessages={messages}/>
}
