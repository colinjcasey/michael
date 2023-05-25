import * as React from 'react';
import { Menu, MenuItem, View } from '@aws-amplify/ui-react';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';

function ControlledExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const drawerRef = React.useRef(null);

  const handleOpenChange = (open) => {
    setIsOpen(open);
  };

  const styles = {
    navBar: {
      position: "fixed",
      bottom: "20px",
      left: "20px",
      width: "100%",
      background: "#282727",
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0",
    },
    navLink: {
      color: "white",
      textDecoration: "none",
    },
    drawerPaper: "my-drawer-paper", 
  };

  const closeMenu = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 300); // Delay in milliseconds
  };

  const handleMenuItemClick = (action) => {
    closeMenu();
    alert(action);
  };

  const handleDownloadClick = () => {
    alert("Download");
  };

  const handleMenuClose = (event) => {
    event.stopPropagation();
  };

  return (
    <View style={{ position: "fixed", bottom: "15px", left: "20px", width: "100%" }}>
      <Menu
        style={styles.navBar}
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        width="3rem"
        maxWidth="4rem"
        onClose={handleMenuClose} // Prevent the menu from closing when clicking outside
      >
        <MenuItem
          style={styles.navLink}
          onClick={() => {
            closeMenu();
            setIsOpen(true);
          }}
        >
          Menu
        </MenuItem>
      </Menu>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={closeMenu}
        classes={{ paper: styles.drawerPaper }}
        ref={drawerRef} // Assign the ref to the Drawer component
      >
        <List>
          <ListItem
            button
            onClick={handleDownloadClick} // Use a function for onClick
          >
            <ListItemText primary="Download" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleMenuItemClick('Create a Copy')}
          >
            <ListItemText primary="Create a Copy" />
          </ListItem>
          <ListItem
            button
            onClick={() => handleMenuItemClick('Mark as Draft')}
          >
            <ListItemText primary="Mark as Draft" />
          </ListItem>
        </List>
      </Drawer>
    </View>
  );
}

export default ControlledExample;
