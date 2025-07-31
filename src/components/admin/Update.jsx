import React from 'react'
import Cookies from "js-cookie";
const update = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/get/681b3293e2a0f672db8f34d5');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="formd">
        <form id="form">
          <h2>Update</h2>
          <input 
            type="text" 
            placeholder="Description" 
            id="updateInput"
          />
          <input 
            type="text" 
            placeholder="href/link" 
            id="hrefInput"
          />
          <button 
            id="login" 
            type="submit" 
            onClick={async (e) => {
              e.preventDefault();
              const updateText = document.getElementById('updateInput').value;
              const hrefText = document.getElementById('hrefInput').value;
              try {
                const cookieValue = Cookies.get("auth");
                const response = await fetch('http://localhost:5000/update/681b3293e2a0f672db8f34d5', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ update: updateText ,href:hrefText, auth:cookieValue})
                });
                if (response.ok) {
                  window.location.reload();
                }
              } catch (error) {
                console.error('Error updating:', error);
              }
            }}
          >
            Update
          </button>
        </form>
      </div>
      <div>
       <h2>Update-</h2><div id="lineup">
       <h5>href/link-<p>{data?.href}</p></h5><br/>
       <h5>Description-<p>{data?.update}</p></h5></div>
      </div>
    </div>

  )
}

export default update