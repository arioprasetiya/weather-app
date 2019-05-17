import React from "react";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';

class Form extends React.Component{
    render() {
        return(
            <form onSubmit={this.props.getWeather} noValidate autoComplete="off">
                <TextField type="text" name="city" placeholder="City..."/>
                <TextField type="text" name="country" placeholder="Country..."/>
                <Button type="submit" variant="contained" color="primary">Get Weather</Button>

            </form>
        )
    }
}

export default Form;