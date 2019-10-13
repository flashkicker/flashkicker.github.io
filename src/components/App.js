import React, { Component } from "react"
import { Router, Route } from "react-router-dom"
import { Menu } from "semantic-ui-react"

class App extends Component {
	render() {
		return (
			<div className="ui container" style={{ height: "90vh" }}>
				<Menu secondary pointing fluid widths={4} size={"large"}>
					<Menu.Item link>Work Experience</Menu.Item>
					<Menu.Item link>Projects</Menu.Item>
					<Menu.Item link>Skills</Menu.Item>
					<Menu.Item link>Education</Menu.Item>
				</Menu>
				<div className="ui middle aligned grid" style={{ height: "100%" }}>
					<div className="six wide column">
						<div className="ui center aligned basic segment">
							<h1>Ujjval Kumaria</h1>
							<div className="ui divider" />
							<p>Corvallis, OR 🌧️</p>
							<p>
								I am a full-stack developer, which means if you give me one more
								task my stack will overflow
							</p>
                            {/* <Menu>

                            </Menu> */}
						</div>
					</div>
					<div className="ten wide column">
						<div className="ui segment">RIGHT</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
