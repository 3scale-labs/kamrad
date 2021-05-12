import * as React from "react"

interface Props {
	userName: string
}

export const Greeter = ({userName}: Props) => (
	<p>Hello {userName}!</p>
)
