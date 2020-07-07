import React from 'react'
import { ComposedChart , XAxis, YAxis, CartesianGrid, Tooltip, Area, Legend, Bar, Line, BarChart }  from 'recharts'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles({
    countryplot: {
        marginTop: '60px',
    },
    provinceplot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})


export const ProvincialDataPlot = ({countryStats}) => {
    const classes = useStyles()
    if (countryStats.length === 0){
        return null
    }
     return (
         <div className={classes.provinceplot}>
            <Typography variant={'h3'}>{`${countryStats[0].country}'s provincial Data for Covid-19`}</Typography>
            <ComposedChart width={1000} height={500} data={countryStats}>
            <XAxis dataKey="province" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="recovered" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="confirmed" stroke="black" barSize={25} fill="#413ea0" />
            <Line type="monotone" dataKey="deaths" stroke="#ff7300" />
            </ComposedChart>
        </div>
     )
}


export const CountryDataPlot = ({countryTotal}) => {
    const data = [countryTotal]
    const classes = useStyles()

    return (
        <BarChart width={700} height={500} data={data} className={classes.countryplot}>
            <XAxis dataKey="location" stroke="black" />
            <YAxis stroke="black" minTickGap={5}/>
            <Legend height={0}/>
            <Bar dataKey="confirmed" name="Cases Confirmed" stroke="#999" fill="#0000ff" label={{ position: 'top', fill: 'black' }} />
            <Bar dataKey="deaths" name="Deaths" fill="#ff0000" stroke="#999" label={{ position: 'top', fill: 'black' }} />
            <Bar dataKey="recovered" name="Recovered" fill="#00ff00" stroke="#999" label={{ position: 'top', fill: 'black' }} />
        </BarChart>
    )
}