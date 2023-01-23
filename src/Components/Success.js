import React from "react";
import '../Styles/Success.css'
import Nav from "./Nav";

export default function Success(){
    
    return (
        <div className="success-container">
            
            <div class="card">
            <div className="correct">
            <i class="checkmark">✓</i>
            </div>
            <h1>Success</h1> 
            <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
            </div>
        </div>
    )
}

