import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const Import = (props) => {
    // fill out this component

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
      
    
    return (
        <div>
            <Container>
                <p>Import Component</p>
                <Button variant='contianed' color='primary' onClick={props.fetchMakes}>Import</Button>
                {/* <TableContainer> */}
                    <Table className="table" size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Id</TableCell>
                                <TableCell align="right">Make)</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.makes.map((make) => (
                                <TableRow key={make.id}>
                                    <TableCell align="right">{make.MakeId}</TableCell>
                                    <TableCell align="right">{make.MakeName}</TableCell>
                                    <TableCell align="right">
                                    <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                        >
                                        <MoreVertIcon />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                            style: {
                                                maxHeight: ITEM_HEIGHT * 4.5,
                                                width: '20ch',
                                            },
                                            }}
                                        >
                                            <MenuItem  onClick={props.deleteMake}>
                                                Delete
                                            </MenuItem>
                                            ))}
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                {/* </TableContainer> */}
            </Container>
        </div>
    )
}

export default Import;