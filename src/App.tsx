import React, {Component} from 'react';
import './App.css';


export type NotificationType = 'success' | 'warning' | 'error'

interface IProps {

}

interface INotification {
    id: Number,
    title: String,
    type: NotificationType
}

interface IState {
    notifications: Array<INotification>
}

const Notification = (props: any) => {
    return <div className={'notification' + props.className}>{props.text}</div>
};

class App extends Component <IProps, IState> {
    state: IState = {
        notifications: []
    };

    addNotification = (type: NotificationType, title: String) => {
        const noti = {id: (new Date().getTime()), title: title, type: 'success' as NotificationType};
        this.setState({
            notifications: [...this.state.notifications, noti]
        });
        // setTimeout(()=> {
        //     this.setState({
        //
        //     });
        // },3000)
    };

    successClick = () => {
        this.addNotification('success', 'Yes')
    };

    warningClick = () => {
        this.addNotification('warning', 'Mmm')
    };

    errorClick = () => {
        this.addNotification('error', 'Nooo!')
    };

    render() {
        let element = this.state.notifications.map(n => {
            return <Notification key={n.id} text={n.title} className={n.type}/>
        });
        return (
            <div className='App'>
                <button onClick={this.successClick}>Success</button>
                <button onClick={this.warningClick}>Warning</button>
                <button onClick={this.errorClick}>Error</button>
                <div className='notification-block'>
                    {element}
                </div>
            </div>
        )
    }
}

export default App