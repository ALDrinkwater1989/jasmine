function whatCanIDrink(age){
    
    if(age< 0){
        return "Sorry. I can't tell what drin because that age is incorrect";
    }else if(age < 14){
        return "drink toddy";
    }else if(age < 18){
        return "drink coke";
    }else if(age <21){
        return "drink beer";
    }else if (age < 130){
        return "drink whisky";
    }else{
        return "Sorry. I can't tell what drin because that age is incorrect";
    }

    
}