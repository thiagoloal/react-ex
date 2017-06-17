import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
	<Family lastName='Silva'>
		<Member name='Guilheme'/>
		<Member name='Julia'/>
		<Member name='Rapha'/>
	</Family>
, document.getElementById('app'))

