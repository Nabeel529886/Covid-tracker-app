import React, { useState, useEffect } from 'react'
import { FormControl, NativeSelect,  InputLabel } from '@material-ui/core'
import { fetchCountries } from './fetchdata'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }

}))



const CountryDropDown = ({nameCountry}) => {
    let [fetchedCountries, setFetchedCountries] = useState([])

    const classes = useStyles()

    useEffect(() => {
        const countryFetch = async () => {
            setFetchedCountries(await fetchCountries())
        }
        countryFetch()
    }, [setFetchedCountries])


    return (
        // <FormControl>
        //     <NativeSelect defaultValue="" onChange={(e) => nameCountry(e.target.value)} className={classes.root}>
        //     <option value="" className={classes.dropdownOptions}>Global</option>
        //     {fetchedCountries.map(country => (
        //         <option key={country.id} value={country.name} className={classes.dropdownOptions}>{country.name}</option>
        //     ))}
        //     </NativeSelect>
        // </FormControl>

<FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor="country-native-label-placeholder">
          Select The Country Name
        </InputLabel>
        <NativeSelect
          onChange={(e) => nameCountry(e.target.value)}
          inputProps={{
            name: 'country',
            id: 'country-native-label-placeholder',
          }}
        >
            <option value="" className={classes.dropdownOptions}>Global</option>
            {fetchedCountries.map(country => (
                <option key={country.id} value={country.name} className={classes.dropdownOptions}>{country.name}</option>
            ))}

        </NativeSelect>
      </FormControl>
    )
}

export default CountryDropDown