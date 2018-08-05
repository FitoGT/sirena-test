define({ "api": [
  {
    "type": "get",
    "url": "/App.js",
    "title": "App Component",
    "name": "App",
    "group": "Components",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "mails",
            "optional": false,
            "field": "json",
            "description": "<p>../json/data.json.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  <BrowserRouter>\n  <Fragment>\n    <div>\n    <Navbar />\n    <Grid container>\n      <Grid item lg style={divStyle}>\n     <SimpleList cont={this.state.sent.length}/>\n    </Grid>\n    <Grid item sm > \n     <Route  path =\"/mails\" render={\n      props => <Mailslist {...props} mails={mails}/>\n      }  />\n     <Route path=\"/compose\" component={Compose} />\n     <Route  path =\"/sent\" render={\n      props => <SentMailList {...props} sent={this.state.sent}/>\n      }  />\n    </Grid>\n    </Grid>\n    <ComposeButton/>\n    </div>\n  </Fragment>\n</BrowserRouter>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/App.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/Compose.js",
    "title": "Compose Component",
    "name": "Compose",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div className={classes.root}>\n <TextField\n     id=\"to\"\n     className={classNames(classes.margin, classes.textField)}\n     InputProps={{\n       startAdornment: <InputAdornment position=\"start\">To</InputAdornment>,\n     }}\n   />\n   <TextField\n     id=\"subject\"\n     className={classNames(classes.margin, classes.textField)}\n     InputProps={{\n       startAdornment: <InputAdornment position=\"start\">Subject</InputAdornment>,\n     }}\n   />\n   <FormControl fullWidth className={classes.margin}>\n     <InputLabel htmlFor=\"adornment-amount\">Message</InputLabel>\n     <Input\n       id=\"message\"\n     />\n   <SendButton/>\n   </FormControl>\n </div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/Compose.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/ComposeButton.js",
    "title": "ComposeButton Component",
    "name": "ComposeButton",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div>\n   <Link to=\"/compose\">\n     <Button variant=\"fab\" color=\"primary\" aria-label=\"Add\" className={classes.button}>\n       <AddIcon />\n     </Button>\n   </Link>\n </div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/ComposeButton.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/Login.js",
    "title": "Login Component",
    "name": "Login",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div>\n   <MuiThemeProvider>\n     <div>\n     <AppBar\n        title=\"Login\"\n      />\n      <TextField\n        id=\"username\"\n        hintText=\"Enter your Email\"\n        floatingLabelText=\"Email\"\n        />\n      <br/>\n        <TextField\n          id=\"password\"\n          type=\"password\"\n          hintText=\"Enter your Password\"\n          floatingLabelText=\"Password\"\n          />\n        <br/>\n        <RaisedButton label=\"Submit\" primary={true} style={style} onClick={() => this.logIn()}/>\n    </div>\n    </MuiThemeProvider>\n </div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/Login.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/Mails.js",
    "title": "Mails Component",
    "name": "Mails",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<Fragment>\n <div style={{marginTop: 10}} >\n   <Card >\n     <CardContent>\n       <Typography color=\"textSecondary\">\n        Subject: {props.subject}\n       </Typography>\n       <Typography variant=\"headline\" component=\"h2\">\n         {props.message}\n       </Typography>\n       <Typography  color=\"textSecondary\">\n         From : {props.firstName} {props.lastName}\n       </Typography>\n       <Typography component=\"p\">\n         {props.email}\n       </Typography>\n     </CardContent>\n     <CardActions>\n     </CardActions>\n   </Card>\n </div>\n </Fragment>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/Mails.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/Mailslist.js",
    "title": "Mailslist Component",
    "name": "Mailslist",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<Fragment>\n        <Paper className={classes.root}>\n          <div className={classes.tableWrapper}>\n            <Table className={classes.table}>\n              <TableBody>\n                {mails.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(mail => {\n                  return (\n                    <TableRow  key={mail.id} >\n                      <TableCell component=\"th\" scope=\"row\" >\n                        <Link to={`${this.props.match.url}/${mail.id}`}>{mail.firstName}</Link>\n                      </TableCell>\n                      <TableCell >\n                        <Link to={`${this.props.match.url}/${mail.id}`}>{mail.subject}</Link>\n                      </TableCell>\n                    </TableRow>\n                  );\n                })}\n                {emptyRows > 0 && (\n                  <TableRow style={{ height: 48 * emptyRows }}>\n                    <TableCell colSpan={6} />\n                  </TableRow>\n                )}\n              </TableBody>\n              <TableFooter>\n              <TablePagination\n                    colSpan={3}\n                    count={mails.length}\n                    rowsPerPage={rowsPerPage}\n                    page={page}\n                    onChangePage={this.handleChangePage}\n                    onChangeRowsPerPage={this.handleChangeRowsPerPage}\n                    ActionsComponent={TablePaginationActions}\n                  /> \n              </TableFooter>\n            </Table>\n          </div>\n       </Paper>\n        <Route  path={`${this.props.match.url}/:mailsId`} render={\n          ({match}) => <Mails {...mails.find(mail => mail.id == match.params.mailsId)}/>\n        }/>\n      </Fragment>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/Mailslist.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/Navbar.js",
    "title": "Navbar Component",
    "name": "Navbar",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div>\n\t<AppBar position=\"static\">\n\t\t<Toolbar>\n\t\t\t<Typography variant=\"title\" color=\"inherit\">\n\t\t\t\tHELLO MOTO\n\t\t\t</Typography>\n\t\t</Toolbar>\n\t</AppBar>\n\t</div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/Navbar.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/SendButton.js",
    "title": "SendButton Component",
    "name": "SendButton",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div>\n   <Button onClick={()=>this.sendMail()} variant=\"contained\" color=\"primary\" className={classes.button}>\n    Send\n    <Icon className={classes.rightIcon}></Icon>\n  </Button>\n</div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/SendButton.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/SendMailList.js",
    "title": "SendMailList Component",
    "name": "SendMailList",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div className=\"MuiPaper-root-9 MuiPaper-elevation2-13 MuiPaper-rounded-10 Mailslist-root-417\">\n    <Table >\n        <TableBody>\n          <TableRow  key={i} >\n            <TableCell component=\"th\" scope=\"row\" >\n              {object.to}\n            </TableCell>\n            <TableCell >\n              {object.subject}\n            </TableCell>\n          </TableRow>\n        </TableBody>\n    </Table>\n  </div>",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "If",
            "description": "<p>no emails were sent.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "<div>\n  <Card >\n    <CardContent>\n      <Typography variant=\"headline\" component=\"h2\">\n        No emails sent\n      </Typography>\n    </CardContent>\n    <CardActions>\n    </CardActions>\n </Card>\n</div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/SentMailList.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/SimpleList.js",
    "title": "SimpleList Component",
    "name": "SimpleList",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div className={classes.root}>\n    <List component=\"nav\">\n      <Link to=\"/mails\">\n        <ListItem button>\n          <ListItemIcon>\n            <InboxIcon />\n          </ListItemIcon>\n          <ListItemText primary=\"Inbox\" />\n        </ListItem>\n      </Link>\n      <Link to=\"/compose\">\n        <ListItem button>\n          <ListItemIcon>\n            <DraftsIcon />\n          </ListItemIcon>\n          <ListItemText primary=\"Drafts\" />\n        </ListItem>\n      </Link>\n      <Link id=\"sent\" to=\"/sent\">\n        <ListItem button>\n           <ListItemIcon>\n             <SendIcon />\n           </ListItemIcon>\n           <ListItemText inset primary={\"Sent Mail (\"+props.cont+\")\"} />\n        </ListItem>\n      </Link>\n    </List>\n  </div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/SimpleList.js",
    "groupTitle": "Components"
  },
  {
    "type": "get",
    "url": "/TablePaginationActions.js",
    "title": "TablePaginationActions Component",
    "name": "TablePaginationActions",
    "group": "Components",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<div className={classes.root}>\n      <IconButton\n        onClick={this.handleFirstPageButtonClick}\n        disabled={page === 0}\n        aria-label=\"First Page\"\n      >\n        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}\n      </IconButton>\n      <IconButton\n        onClick={this.handleBackButtonClick}\n        disabled={page === 0}\n        aria-label=\"Previous Page\"\n      >\n        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}\n      </IconButton>\n      <IconButton\n        onClick={this.handleNextButtonClick}\n        disabled={page >= Math.ceil(count / rowsPerPage) - 1}\n        aria-label=\"Next Page\"\n      >\n        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}\n      </IconButton>\n      <IconButton\n        onClick={this.handleLastPageButtonClick}\n        disabled={page >= Math.ceil(count / rowsPerPage) - 1}\n        aria-label=\"Last Page\"\n      >\n        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}\n      </IconButton>\n    </div>",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "mail/src/components/TablePaginationActions.js",
    "groupTitle": "Components"
  }
] });
