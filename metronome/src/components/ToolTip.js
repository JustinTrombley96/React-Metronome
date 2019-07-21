import React from 'react';
import { Tooltip, Button } from 'shards-react';
import '../styling/ToolTip.css';

export default class TooltipButton extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = { open: false };
	}

	toggle() {
		this.setState({
			open : !this.state.open,
		});
	}

	render() {
		return (
			<div>
				<Button id='TooltipButton' className="mr-2">What is this?</Button>
				<Tooltip placement="right" open={this.state.open} target='#TooltipButton' toggle={this.toggle}>
          Welcome to my metronome! A metronome is a device used by musicians that marks time at a selected rate by giving a regular tick.
        </Tooltip>
			</div>
		);
	}
}
