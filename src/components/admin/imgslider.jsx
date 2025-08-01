import React from 'react'
import Cookies from "js-cookie";
const imgslider = () => {

    
      React.useEffect(() => {
        const fetchIMGData = async () => {
          try {
            const response = await fetch('https://srgpc-colage.onrender.com/get/681ce87762146338255866f7');
            const result = await response.json();
        document.getElementById('fi').value=result?.first_img
        document.getElementById('si').value=result?.secande_img
        document.getElementById('ti').value=result?.therd_img
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchIMGData();
        
      }, []);
      function hendelchange(e){
        e.target.value=e.target.value}
  return (
    <div>
    <div className="main">
        <h2>slider img</h2>
    <div className="formd">
      <form id="form">
        <label>first img:
        <input id='fi' type="text" onChange={hendelchange} />
</label>
        <label>secande img:
        <input id='si' type="text" onChange={hendelchange} /></label>
        <label>therd img:
        <input id='ti'type="text" onChange={hendelchange} /></label>
        <button id='login' type="submit" onClick={async (e) => {
              e.preventDefault();
              const fi = document.getElementById('fi').value;
              const si = document.getElementById('si').value;
              const ti = document.getElementById('ti').value;
              const cookieValue = Cookies.get("auth");
              try {
                const response = await fetch('https://srgpc-colage.onrender.com/updateIMG/681ce87762146338255866f7', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ fi:fi,si:si,ti:ti,auth:cookieValue })
                });
                if (response.ok) {
                  window.location.reload();
                }
              } catch (error) {
                console.error('Error updating:', error);
              }
            }}>update</button>
      </form>
    </div>
    </div>
    </div>
  )
}

export default imgslider
