import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";

//vai trabalhar as rotas
ReactDOM.render(
                <BrowserRouter>
                    <App />
                </BrowserRouter>,
                document.getElementById('root'));