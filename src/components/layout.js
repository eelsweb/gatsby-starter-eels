/** @format */

import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

import SiteMetadata from '../components/site-metadata'

const Container = styled.div`
	margin: 0 auto;
	max-width: 700px;
`

class DefaultLayout extends React.Component {
	render() {
		const {children, location} = this.props
		return (
			<>
				<SiteMetadata pathname={location.pathname} />
				<Container>
					<Link to="/">
						<h3>Hey You</h3>
					</Link>
					{children}
				</Container>
			</>
		)
	}
}

export default DefaultLayout
