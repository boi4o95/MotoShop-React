import React, {Component}   from 'react'
import { withRouter } from 'react-router-dom'

function withFormManager(Form, model, submitter) {
    return class FormManager extends Component {
        constructor (props) {
            super(props)
            this.state = {
                error: '',
                ...model.defaultState
            }
        }

        hendleChange = ev => {
            let fildName = ev.target.name
            let fildValue = ev.target.value
            this.setState({ [fildName] : fildValue })
        }
    
        hendleSubmit = ev => {
            ev.preventDefault()
    
            let error = model.validate(this.state)

            if (error) {
                return this.setState({ error })
            }

            submitter.send(this.state)
                .then(submitter.success)
                .catch(submitter.fail)
        }
    
        render = () => 
            <Form 
                hendleChange={this.hendleChange}
                hendleSubmit={this.hendleSubmit}
                {...this.state} />
    }
}

export default withFormManager