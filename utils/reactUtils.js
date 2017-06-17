import React from 'react'

function childrebWithProps(children, props) {
	return React.Children.map(props.children,
			child => React.cloneElement(child, {...props}))
}

export { childrebWithProps }