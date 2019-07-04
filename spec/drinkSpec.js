describe("Drink", function() {
   describe("Age Test", function(){
       it("should retun Sorry. I can’t tell what drink because that age is incorrect!", function(){
          expect(whatCanIDrink(-1)).toBe("Sorry. I can't tell what drin because that age is incorrect"); 
       });
       it("should return Drink toddy", function(){
           expect(whatCanIDrink(13)).toBe("drink toddy");
       });
       it("should return Drink coke", function(){
           expect(whatCanIDrink(17)).toBe("drink coke");
       });
       it("should return drink beer", function(){
          expect(whatCanIDrink(20)).toBe("drink beer"); 
       });
       it("should return drink whisky", function(){
           expect(whatCanIDrink(100)).toBe("drink whisky");
       });
       it("should return Sorry. I can’t tell what drink because that age is incorrect!", function(){
        expect(whatCanIDrink(140)).toBe("Sorry. I can't tell what drin because that age is incorrect");   
       });
       
   });
   
    
});