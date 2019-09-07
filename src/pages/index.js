/** @format */

import React from 'react'
import Layout from '../components/layout'

class IndexRoute extends React.Component {
	render() {
		console.log(this.props.location)
		return (
			<Layout location={this.props.location}>
				<h1>There She Is</h1>
				<div></div>
			</Layout>
		)
	}
}
export default IndexRoute
