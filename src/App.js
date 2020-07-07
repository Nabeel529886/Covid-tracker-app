import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import CountryDropDown from './CountryDropDown'
import { fetchTotalData, fetchStatsData, fetchCountryFlags } from './fetchdata'
import CountryTotalData from './CountryTotalData'
import ProgressCircle from './ProgressCircle'
import { ProvincialDataPlot } from './DataPlots'


class App extends React.Component{
  state = {
    countryTotal: {},
    loading: true,
    countryName: "",
    errorMessage: "",
    dataStatus: true,
    countryStats: [],
    countryFlag: "",
  }

  async componentDidMount(){
        let {response: {data: {data}}} = await fetchTotalData(this.state.countryName)
        this.setState({countryTotal: data})
        this.setState({loading: false})
    }

  async componentDidUpdate(prevProps, prevState){
    if (prevState.countryName !== this.state.countryName){
      this.setState({loading: true})
      let response = await fetchTotalData(this.state.countryName)
      if (!response.status){
        this.setState({errorMessage: response.response})
        this.setState({dataStatus: false})
        this.setState({loading: false})
      }else{
        let {response: {data: {data}}} = response
        let {data: {data: {covid19Stats}}} = await fetchStatsData(this.state.countryName)
        let {data: [{flag}]}= await fetchCountryFlags(this.state.countryName)
        this.setState({countryFlag: flag})
        if (covid19Stats.length === 1){
         this.setState({countryStats: []})
       }else{
         this.setState({countryStats: covid19Stats})
       }
        this.setState({dataStatus: true})
        this.setState({countryTotal: data})
        this.setState({loading: false})
      }
    }
  }

  getCountryName = (name) => {
    this.setState({countryName: name})
  }


  render(){
    let countryTotal = this.state.countryTotal
    if (!this.state.dataStatus){
      return (
        <Grid container justify="center" alignItems="center" direction="column">
          <Typography variant={'h1'}>Covid-19 Tracker App</Typography>
          <CountryDropDown nameCountry={this.getCountryName} />
          {this.state.loading? (
            <ProgressCircle /> 
          ): (
            <h2>{this.state.errorMessage}</h2>
          )}
        </Grid>
      )
    }
    return (
      <div>
        <Grid container justify="center" alignItems='center' direction="column">
        <Typography variant={'h3'} >Covid-19 Tracker App</Typography>
        <Grid item xs={12}>
          <CountryDropDown nameCountry={this.getCountryName}/>
        </Grid>
        </Grid>
        <div>
        {this.state.loading? (
          <ProgressCircle />
        ): (
          <div>
            <CountryTotalData countryTotal={countryTotal} countryFlagURL={this.state.countryFlag}/>
            <ProvincialDataPlot countryStats={this.state.countryStats} />
          </div>
        )}
      </div>
      </div>
    )
  }
}

export default App