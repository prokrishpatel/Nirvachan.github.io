function validate()
    {
        var u = document.getElementById("uname");
        var p = document.getElementById("pass");

        if(u.value.trim() == "" || p.value.trim()== "")
        { 
            alert("Please fill all details")
            console.log(u);
            return false;
        }
        else if((u.value.trim() != "12102325" || p.value.trim() != "Gurukul@8031"))
        {
            alert("Wrong Credential");
            return false;
        }
        else{
            alert("Successful Login");
            true;
        }
        
    }