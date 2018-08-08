import requester from '../infrastructure/requester'
import observer from '../infrastructure/observer';


export default {
    login: {
        send: data => requester.post('user', 'login', 'basic', data),
        success: function (res) {
            observer.trigger(observer.events.notification, { type: "success", message: "Login successful." })
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('authtoken', res._kmd.authtoken)

            if (res._kmd.roles) {
                sessionStorage.setItem('Roles', res._kmd.roles)
            }

            window.location = '/'
            //this.props.history.push('/')
        },
        fail: res => {
            observer.trigger(observer.events.notification, { type: "error", message: res.responseJSON.description })
        }
    },
    register: {
        send: data => requester.post('user', '', 'basic', data),
        success: function (res) {
            observer.trigger(observer.events.notification, { type: "success", message: "Register successful ." })
            sessionStorage.setItem('username', res.username)
            sessionStorage.setItem('authtoken', res._kmd.authtoken)
            
            window.location = '/'
            //this.props.history.push('/')
        },
        fail: res => {
            observer.trigger(observer.events.notification, { type: "error", message: res.responseJSON.description })
        }
    }
}