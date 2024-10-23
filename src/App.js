import React, { useState } from 'react';
import './App.css'; // Regular CSS file for global styles
import styles from './App.module.css'; // Module CSS file for scoped styles
import Display from './components/Display';
import ButtonsContainer from './components/ButtonsContainer';

function App() {
  <!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3965682993678422');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=3965682993678422&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      // Clear the display
      setCalVal("");
    } else if (buttonText === "=") {
      // Evaluate the expression
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === ".") {
      // Handle decimal point
      const lastNumberSegment = calVal.split(/[\+\-\*\/]/).pop(); // Get the last number segment
      if (!lastNumberSegment.includes(".")) {
        setCalVal((calVal) => calVal + buttonText); // Append decimal point if not already present
      }
    } else {
      // Append the clicked button's text to the current value
      setCalVal((calVal) => calVal + buttonText);
    }
  };

  return (
    <>
      <div className="outer-div">
        <h1>Calculator App</h1>
        <div className={styles.calculator}>
          <Display displayValue={calVal} />
          <ButtonsContainer onButtonClick={onButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
