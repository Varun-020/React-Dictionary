import { TextField,ThemeProvider,createTheme,MenuItem} from '@material-ui/core';
import React from 'react'
import './Header.css';
import categories from "../../data/category";

function Header({category,setCategory,setMeanings,word,setWord,lightMode}) {
    const darkTheme = createTheme({
        palette: {
          primary: {
            main: lightMode ? "#000" : "#fff",
          },
          type: lightMode ? "light" : "dark",
        },
      });
    const handleChange=(language)=>{
        setCategory(language);
        setWord("");
        setMeanings([]);
    };

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Search a word" value={word}
                    onChange={(e)=>setWord(e.target.value)}
                    className="search" />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Language"
                        value={category}
                        onChange={(e)=>handleChange(e.target.value)}
                        className="select"
                    >
                        {categories.map((option)=>(
                            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                        ))}
                        
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
