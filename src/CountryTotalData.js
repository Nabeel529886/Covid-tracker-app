import React from 'react'
import { Grid, Icon, makeStyles, Typography } from '@material-ui/core'
import CountUp from 'react-countup'
import { CountryDataPlot } from './DataPlots'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        textAlign: 'center',
    },
    data: {
        backgroundColor: "white",
        padding: theme.spacing(3),
        fontSize: "30px",
    },
    figures: {
        fontWeight: "bold",
    },
    dataDate: {
        color: "#777",
    },
    location: {
        letterSpacing: "5px",
        marginTop: "4px",
    }
}))


const CountryTotalData = ({countryTotal, countryFlagURL}) => {
    const classes = useStyles()
    return (
        <div>
        <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item lg={6} md={6} xs={12} className={classes.root}>
                    {countryTotal.location === "Global"?(
                        null
                    ): <img src={countryFlagURL} alt={`${countryTotal.location} flag`} style={{width: '250px', height: '150px', marginTop: "5px",}} />}
                    <Typography variant="h3" className={classes.location}>{countryTotal.location.toUpperCase()}</Typography>
                    <p className={classes.dataDate}><b>Last Reported: </b>{new Date(countryTotal.lastReported).toDateString()}</p>
                    <p className={classes.dataDate}><b>Last Checked: </b>{new Date(countryTotal.lastChecked).toDateString()}</p>
                    <p className={classes.data} style={{ color: "#0000ff", borderBottom: "5px solid #0000ff", backgroundColor: "rgba(0,0,255,0.1)" }}>Confirmed: <CountUp className={classes.figures} end={countryTotal.confirmed} duration={'0.5s'} separator=","></CountUp></p>
                    <p className={classes.data} style={{ color: "#ff0000", borderBottom: "5px solid #ff0000", backgroundColor: "rgba(255,0,0,0.1)" }}>Deaths: <CountUp className={classes.figures} end={countryTotal.deaths} duration={'0.5s'} separator=","></CountUp></p>
                    <p className={classes.data} style={{ color: "#00ff00", borderBottom: "5px solid #00ff00", backgroundColor: "rgba(0,255,0,0.1)" }}>Recovered: <CountUp className={classes.figures} end={countryTotal.recovered} duration={'0.5s'} separator=","></CountUp></p>
                     

                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <CountryDataPlot countryTotal={countryTotal} />
                </Grid>
        </Grid>
        </div>
    )
}

export default CountryTotalData