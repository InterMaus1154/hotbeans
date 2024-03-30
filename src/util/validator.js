


export class Validator{
    static validateForm(firstName, lastName, email, dateOfBirth, minAge){
        let isFormValid = true;
        const currentDate = new Date();
        const dbo = new Date(dateOfBirth);

        if(firstName.trim().length === 0){
            isFormValid = false;
        }

        if(lastName.trim().length === 0){
            isFormValid = false;
        }

        if(!isEmailValid(email)){
            isFormValid = false;
        }
        
        if(currentDate.getFullYear() - dbo.getFullYear() < minAge){
            isFormValid = false;
        }
        

        function isEmailValid(email){
            return email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        }

        return isFormValid;
    }

    
}