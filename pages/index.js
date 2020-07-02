import React, { memo } from "react";
import "../styles/index.scss";
import fetch from 'isomorphic-unfetch';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', completed: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();


    // console.info('A name was submitted: ' + this.state.value);
    const email = this.state.value;
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
    }).then(() => {
      this.setState(() => ({ completed: true }));
    })


  }

  // shouldComponentUpdate(state) {
  //   console.info(state);
  //   return true;
  // }

  componentDidUpdate() {
    if (this.state.completed) {
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }

  render() {
    return (

      <div id="index" className="centered animated fadeIn">
        <h1>Bystro Analyze</h1>
        <div className='subtitle-1' style={{ marginBottom: 40 }}>Simplified genomic workflows</div>
        {
          this.state.completed === false ?

            <form onSubmit={this.handleSubmit} style={{display:'flex',flexDirection:'column'}}>
              <h4 className='animated fadeInUp faster' style={{ width: '100%' }}>

                <input onSubmit={this.handleSubmit} type='email' placeholder='Enter an email to learn more' onChange={this.handleChange} style={{ fontWeight: 300, borderRadius: 0 }}></input>
              </h4>
              <button type='submit' className='icon-button' style={{alignSelf: 'center', justifySelf:'center', marginTop: '20px'}}><i className="material-icons">
email
</i></button>
            </form>
            :
            <i className='material-icons' style={{ color: 'green',alignSelf: 'center', justifySelf:'center', marginTop: '20px' }}>circle_check</i>
        }
      </div >
    );
  }
}

export default Form;
