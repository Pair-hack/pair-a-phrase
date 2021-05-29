import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const LogoutButton = () => {
  const classes = useStyles();
  const handleClick = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  }

  return (
    <div>
       <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<ExitToAppIcon />}
        onClick={handleClick}
      >
        Logout
      </Button>
    </div>
  )

}

export default LogoutButton;