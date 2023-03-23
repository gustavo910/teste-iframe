import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Pega a referência do iframe
    const iframe = document.getElementById("iframe");

    console.log(iframe)

    // Define o conteúdo do iframe com os valores dos inputs
  
  //const usernameIframe = iframe.contentDocument.getElementById("username");
  //const passwordIframe = iframe.contentDocument.getElementById("password");
  var elmnt = iframe.contentWindow.document.getElementsByTagName("H1");
  elmnt.style.display = "none";
  //console.log(usernameIframe.value,'elemento')
  //usernameIframe.value = username;
  //passwordIframe.value = password;
   iframe.contentDocument.getElementById("kc-form").submit();
  
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Logar</button>
      <iframe 
      id="iframe" 
      width="400px" 
      height="200px" 
        src="http://localhost:8080/realms/myrealm/protocol/openid-connect/auth?client_id=myclient&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=7887db8a-b42c-4711-86fe-6af08313fe83&response_mode=fragment&response_type=code&scope=openid&nonce=4fda2749-551f-492c-8d84-287bda4f4564"
  onError={(e) => console.log(e)}

      />
    </div>
  );
}

export default App;