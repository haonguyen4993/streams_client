import React from 'react';
import { connect } from 'react-redux';
import { callCreateStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.callCreateStream(formValues);
	}

	render() {
		return (
			<div>
				<h3>Create a Stream</h3>
				<StreamForm onSubmit={this.onSubmit}/>
			</div>
		);
	};
}

export default connect(
	null,
	{ callCreateStream }
)(StreamCreate);