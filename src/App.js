import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from './actions/PageActions';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: ''
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		const { createUser } = this.props.pageActions;

		const firstName =  this.refs.firstName.value;
		const lastName = this.refs.lastName.value;

		createUser(firstName, lastName);

		this.setState({
			firstName,
			lastName
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.user.status === 'success') {
			document.querySelectorAll('.form__field').forEach(function (item) {
				item.value = ''
			});
		}
	}

	render() {
		const { disabled, responseMessage } = this.props.user;
		const isDisabled = disabled ? 'disabled' : '';

		return (
			<form className='form' onSubmit={ this.handleSubmit.bind(this) } >
				<div className='form__wrapper'>
					<input type='text' placeholder='Фамилия' className='form__field' ref='firstName'  />
					<input type='text' placeholder='Имя' className='form__field' ref='lastName' />
					<button className={ disabled ? 'button button_disabled' : 'button'} type='submit' disabled={ isDisabled } >
						<span className='button__text'>{ isDisabled ? 'Отправляется' : 'Отправить' }</span>
						<i className={disabled ? 'button__spinner button__spinner_active' : 'button__spinner'}></i>
					</button>
				</div>
				<p className='form__text'>{ responseMessage }</p>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
