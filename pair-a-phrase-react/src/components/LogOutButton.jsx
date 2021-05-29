import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



const LogoutButton = () => {

  return (
    <div>
       <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
    </div>
  )

}

export default LogoutButton;