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
        <div className="servicesWrapper">
            
            <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id soluta tenetur cumque reiciendis totam quos commodi voluptatem debitis odit quod corrupti excepturi modi eum asperiores veniam culpa, ad accusamus illum?
            </p>
            <div className="gettingResume">
                <span>Click Me To Get My Resume!</span>
                <div id="glow"></div>
                <div className={`${style ? "vendingMachine": ""}`} onClick={shakeVendingMachine}>
                <img id="vendingMachineImage" src="/gdp-homehighlight-vendor.svg"/>
            </div>
            {show &&
                <button className="downloadButton" onClick={downloadResume}>
                    <span className="buttonText">Download Resume</span>
                    <div className="fillContainer"></div>
                </button>
            }
            </div>

        </div>
    )
}

export default GettingResume;