import { useState } from "react";
import "./linkShorten.scss";

const LinkShorten = () => {

    const [response, setResponse] = useState('');

    const apiUrl = 'http://localhost:5000/api/url/shorten';

    // const responseMessage = document.getElementById('response-message');

    const handleSubmit = (event) => {
        
        event.preventDefault();

        const shortenForm = document.getElementById('shortenUrlForm');

        const formData = new FormData(shortenForm);
        
        const value = Object.fromEntries(formData.entries());

        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(value),
        };

        fetch(apiUrl, requestOptions).then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            } 

            return response.json();
        }).then(data => {
            setResponse(data.shortUrl);
        })
        .catch(error => {
            console.error('Error:', error);
        })
    }

    return(
        <div>
            <form id="shortenUrlForm" onSubmit={handleSubmit}>
                <input type= "text" name="longUrl" placeholder="Url to shorten"/>
                <button type="submit">Submit</button>
            </form>
            <div id="response-message">{response}</div>
        </div>
    );
}

export default LinkShorten;