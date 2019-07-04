describe("FizzBuzz Tests", function(){
    describe("FizzBuzz", function(){
       it("should return fizzbuzz", function(){
          expect(fizzBuzz(15)).toBe("FizzBuzz"); 
       }); 
       
    });
    describe("Fizz", function(){
       it("should return Fizz", function(){
          expect(fizzBuzz(12)).toBe("Fizz"); 
       }); 
    });
    describe("Buzz",function(){
       it("should return Buzz", function(){
          expect(fizzBuzz(20)).toBe("Buzz"); 
       }); 
    });
    describe("not divisible", function(){
       it("should return the number", function(){
          expect(fizzBuzz(17)).toBe(17); 
       }); 
    });
})