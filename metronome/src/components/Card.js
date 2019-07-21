import React from 'react';
import { Card, CardTitle, CardImg, CardBody } from 'shards-react';

import TooltipButton from './ToolTip';
import Metronome from './Metronome';

export default function BasicCard() {
	return (
		<Card style={{ maxWidth: '400px',  }}>
			<CardImg src='https://cdn.pixabay.com/photo/2010/12/13/10/11/box-2451_960_720.jpg' width='400' height="530px" />
			<CardBody>
				<CardTitle>Metronome</CardTitle>
				<Metronome />
				<TooltipButton />
			</CardBody>
			{/* <CardFooter>Card Footer</CardFooter> */}
		</Card>
	);
}
