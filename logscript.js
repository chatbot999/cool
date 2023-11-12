function formlogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //------------------------------------------------------------
    var validUsernameRange = /^2203A51[0-9]{3}$/; //for 'A'[Gen CSE]
    var validPasswordRange = /^2203A51[0-9]{3}$/;

    var usea = /^2203a51[0-9]{3}$/; //for 'a'[Gen CSE]
    var passa = /^2203a51[0-9]{3}$/;
    //--------------------------------------------------------------
    var useaiml = /^2203a52[0-9]{3}$/; //for 'a'[CSE AIML]
    var passaiml = /^2203a52[0-9]{3}$/;

    var useaimlA = /^2203A52[0-9]{3}$/; //for 'A'[CSE AIML]
    var passaimlA = /^2203A52[0-9]{3}$/;

    //---------------------------------------------------------------

    var usecyba = /^2203a53[0-9]{3}$/; //for 'a'[CSE cyber]
    var passcyba = /^2203a53[0-9]{3}$/;

    var usecybA = /^2203A53[0-9]{3}$/; //for 'A'[CSE cyber]
    var passcybA = /^2203A53[0-9]{3}$/;

    //---------------------------------------------------------------

    var usedsa = /^2203a54[0-9]{3}$/; //for 'a'[CSE ds]
    var passdsa = /^2203a54[0-9]{3}$/;

    var usedsA = /^2203A54[0-9]{3}$/; //for 'A'[CSE ds]
    var passdsA = /^2203A54[0-9]{3}$/;

    //---------------------------------------------------------------

    //code
    if (username === "" || password === "") {
      alert("Please fill in both usernumber and password fields!");
    }
    //---------------------------------------------------------------
    else if (
      validUsernameRange.test(username) &&
      validPasswordRange.test(password) //gen cse 'A'
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "csegen/home.html";
    } else if (
      usea.test(username) && //gen cse 'a'
      passa.test(password)
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "csegen/home.html";
    }
    //---------------------------------------------------------------
    else if (
      useaiml.test(username) && // cse AIML 'A'
      passaiml.test(password)
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "aiml/home.html";   
    } else if (
      useaimlA.test(username) && // cse AIML 'a'
      passaimlA.test(password)
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "aiml/home.html";
    }

    //---------------------------------------------------------------
    else if (
      usecybA.test(username) && // cse cyb 'A'
      passcybA.test(password)
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "cyber/home.html";
    } else if (
      usecyba.test(username) && // cse cyb 'a'
      passcyba.test(password)
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "cyber/home.html";
    }
    //---------------------------------------------------------------
    else if (
      usedsA.test(username) && // cse ds 'A'
      passdsA.test(password)
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "ds/home.html";
    } else if (
      usedsa.test(username) && // cse ds 'a'
      passdsa.test(password)
    ) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "ds/home.html";
    }
    //---------------------------------------------------------------
    else {
      alert("Invalid Credentials!");
    }
  }

   
  function disableRightClick(e) {
    if (e.button === 2 || e.which === 3) {
      e.preventDefault();
      return false;
    }
  }

  
  document.addEventListener("contextmenu", disableRightClick);