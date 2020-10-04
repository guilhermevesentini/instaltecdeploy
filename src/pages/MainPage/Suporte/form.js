import React, { Component } from 'react'

export default class form extends Component {
    
    constructor(props) {
        super(props);
        this.state = { feedback: '', name: 'Guilherme', email: 'guilhermerv10@gmail.com' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      
    }  

    render() {
        return (
            <form>
                <div className="col-sm-6">
                    {/* text input */}
                    <div className="form-group">
                        <label>Nome</label>
                        <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        placeholder="Digite seu Nome..." 
                        onChange ={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Digite seu email..." 
                        onChange ={this.handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Area de texto</label>
                        <textarea 
                        id="test-mailing"
                        name="test-mailing"
                        className="form-control"
                        value= {this.state.feedback}
                        placeholder="Descreva aqui o seu problema..." 
                        onChange ={this.handleChange}
                        />
                    </div>
                    <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
                </div>
            </form>

        )
    }

    handleChange(event) {
        this.setState({feedback: event.target.value})
      }
    
    handleSubmit (event) {
    const templateId = 'template_dOeKNkE7';
    
    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
    
    sendFeedback (templateId, variables) {
    window.emailjs.send(
        'gmail', templateId,
        variables
        ).then(res => {
        console.log('Email successfully sent!')
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    
}


