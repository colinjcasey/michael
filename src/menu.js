import * as React from 'react';
import { Menu, MenuItem, View } from '@aws-amplify/ui-react';


function ControlledExample() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenChange = (open) => {
    setIsOpen(open);
    // Do something else
  };

  const styles = {
    navBar: {
      position: "fixed",
      bottom: "0px",
      left: "20px !important",
      width: "100%",
      background: "rgb(81, 79, 98)",
      display: "flex",
      justifyContent: "space-around",
      padding: "20px 0 13.5px",
    },

    navLink: {
      color: "white",
      textDecoration: "none",
    },
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <View style={{ position: "fixed", bottom: "0px", width: "100%", hieght: "2em" }}>
 
      <div
        style={styles.navBar}
        isOpen={isOpen}
        onOpenChange={handleOpenChange}
        width="3rem"
        maxWidth="4rem"
      >
        <div
          style={styles.navLink}
          onClick={() => {
            closeMenu();
            alert('Download');
          }}
        >
          Blockchain
        </div>
        
        <div
          style={styles.navLink}
          onClick={() => {
            closeMenu();
            alert('Create a Copy');
          }}
        >
          Home
        </div>
        <div
          style={styles.navLink}
          onClick={() => {
            closeMenu();
            alert('Mark as Draft');
          }}
        >
          Chat
        </div>
      </div>
    </View>
  );
}

export default ControlledExample;
