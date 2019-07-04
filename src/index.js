import React, {useReducer, useState} from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import {stateContext, dispatchContext} from './GlobalContext';
import TextField from '@material-ui/core/TextField';


function reducer(state, action){

    switch( action.type){

        case 'setField':{
            return {...state, [action.fieldName] : action.fieldValue}
        }
        case 'nextStep':{
            return {...state, formStep: state.formStep+1 }
        }
        case 'prevStep':{
            return {...state, formStep: state.formStep-1 }
        }
        default:{
            return state;
        }

    }


}




const App = (props)=>{

    const initialState = {
        name: '',
        surname: '',
        occupation: '',
        bio: '',
        city: '',
        formStep: 1
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);


    const {name, surname, formStep} = state;


    console.log(formStep);
            
                 
        switch(formStep){ 
            
            case 1:{
            return (
                <stateContext.Provider value={state}>
                    <dispatchContext.Provider value={dispatch}>        
                        <div className='container'>
                            <TextField
                                id="standard-search"
                                label="Your name"
                                type="search"
                                margin="normal"
                                value={name}
                                onChange={(e)=>{ dispatch({type: 'setField', fieldName: 'name', fieldValue: e.target.value})  }}
                            />
                            <TextField
                                id="standard-search2"
                                label="Your surname"
                                type="search"
                                margin="normal"
                                value={surname}
                                onChange={(e)=>{ dispatch({type: 'setField', fieldName: 'surname', fieldValue: e.target.value})  }}
                            />
                            
                            <Button variant="contained" color="primary">
                                Next
                            </Button>
                        </div>
        
                    </dispatchContext.Provider>
            </stateContext.Provider>
                
            )
        }
    }
}




ReactDOM.render(<App />, document.getElementById('root'));



