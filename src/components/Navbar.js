import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
/**
 * @api {get} /Navbar.js Navbar Component
 * @apiName Navbar
 * @apiGroup Components
 * @apiSuccessExample Success-Response:
 * <div>
 *	<AppBar position="static">
 *		<Toolbar>
 *			<Typography variant="title" color="inherit">
 *				HELLO MOTO
 *			</Typography>
 *		</Toolbar>
 *	</AppBar>
 *	</div>
 *
 */
const Navbar = () =>{
	return(
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="title" color="inherit">
						HELLO MOTO
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Navbar;