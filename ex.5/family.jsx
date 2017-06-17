import React from 'react'
import {childrebWithProps} from '../utils/reactUtils'

export default props => (
	<div>
		<h1>Familia</h1>
		{ childrebWithProps(props.children, props)}
	</div>

)