import React from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
} from "shards-react"
import TooltipButton from "./ToolTip";

export default function BasicCard() {
    return (
        <Card style={{ maxWidth: "400px"}}>
            <CardHeader>Card Header</CardHeader>
            <CardImg src="https://cdn.pixabay.com/photo/2010/12/13/10/11/box-2451_960_720.jpg" width="200" />
            <CardBody>
                <CardTitle>Metronome</CardTitle>
                <p>Paragraph</p>
                <TooltipButton />
            </CardBody>
            {/* <CardFooter>Card Footer</CardFooter> */}
        </Card>
    )
}