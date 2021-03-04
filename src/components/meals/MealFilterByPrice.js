import {FormControl, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";
import React from "react";

const MealFilterByPrice = ({handleChange}) => {
    return (
        <>
            <FormControl className="filter-by-price">
                <h3>Sort by prices</h3>
                <RadioGroup onChange={(event)=>handleChange(event)}>
                    <FormControlLabel value="low" control={<Radio/>} label="1 - 20 $"/>
                    <FormControlLabel value="medium" control={<Radio/>} label="21 - 50 $"/>
                    <FormControlLabel value="high" control={<Radio/>} label="51 - 100 $"/>
                </RadioGroup>
            </FormControl>
        </>
    )
}
export default MealFilterByPrice;