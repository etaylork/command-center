import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    color: '#ffbd59',
    fontSize: '1.25rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
    whiteSpace: 'nowrap',
  },
});

const LogoFull = () => {
  const classes = useStyles();
  return <span className={classes.text}>Command Center</span>;
};

export default LogoFull;
