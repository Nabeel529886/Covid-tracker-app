import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    provinceStyle: {
        padding: "10px",
        marginRight: '8px',  
        marginBottom: '10px',
    },
})


const CountryStatsData = ({countryStats}) => {

    const classes = useStyles()

    if (countryStats.length <= 1){
        return null
    }
    return (
        <Grid container justify='center' alignItems="center" direction="row">
            <Grid item xs={12}>
                <Typography variant={'h3'} style={{ textAlign: "center", margin: '20px 0px'}}>Provincial Covid-19 Data</Typography>
            </Grid>
            {countryStats.map(stats => (
                <Grid item lg={3} xs={12} sm={6} md={4} key={stats.keyId}>
                    <Paper elevation={3} className={classes.provinceStyle}>
                        <h3 style={{ textAlign: 'center', }}>{stats.province}</h3>
                        <p><b>Confirmed:</b> {stats.confirmed}</p>
                        <p><b>Deaths:</b> {stats.deaths}</p>
                        <p><b>Recovered:</b> {stats.recovered}</p>
                        <p><b>Last Update:</b> {new Date(stats.lastUpdate).toDateString()}</p>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    )
}

export default CountryStatsData