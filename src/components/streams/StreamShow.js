import React from 'react';
import { connect } from 'react-redux';
import { callFetchStream } from '../../actions';

class StreamShow extends React.Component {
	componentDidMount() {
		this.props.callFetchStream(this.props.match.params.id);
	};

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>;
		}

		const { title, description } = this.props.stream;

		return (
			<div className="ui">
				<h2>
					{title}
				</h2>
				{description}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	}
};

export default connect(
	mapStateToProps,
	{ callFetchStream }
)(StreamShow);