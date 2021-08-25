const prenom  = "Agnes";
        const nom     = "Ingabire";

        console.log("Bonjour " + prenom + ' '+ nom + ' !');

        //OPERATEURS
        // - "+" addition
        // - "-" subtraction
        // - "*" multiplication
        // - "/" division
        // - "%" modulo <=> 5/2 =2,45343 restant 1
        // - "**" exponentielle 5**2=25

            let nombreUn = 8, nombreDeux = 4, result;
            result = (nombreUn + nombreDeux) * 9 ;
            result += 5; //108 +5
            console.log(result);

            //Boite de dialogue qui demande  une formation a l'utilisateur 

            const age  = prompt("Entrez votre age :");
            alert("Bonjour , vous avez " + age + " ans.");

            // FUNCTION

            function direBonjour() {
               alert ("Bonjour toi"); 
            }
            direBonjour()