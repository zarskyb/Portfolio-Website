import { useState } from "react";
import "./GettingResume.scss"

const GettingResume = () => {
    
    const [style, setStyle] = useState(false);
    const [show, setShow] = useState(false);

    const shakeVendingMachine = () => {
        setStyle(true);
        setTimeout(() => {
            setStyle(false);
            setShow(true);
        }, 2000);
    }
    
    const downloadResume = () => {
        const pdfUrl = "Baz's Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "MichaelBazarskyResume.pdf"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div className="gettingResume">
            <div className={`${style ? "vendingMachine": ""}`} onClick={shakeVendingMachine}>
                <img id="vendingMachineImage" src="/gdp-homehighlight-vendor.svg"/>
            </div>
            {show &&
                <button className="downloadButton" onClick={downloadResume}>
                    Download Resume
                </button>
            }
            
        </div>
        
    )
}

export default GettingResume;