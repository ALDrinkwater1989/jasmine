describe("Calculator", function(){
    
    var calcd
   describe("addition tests", function(){
    it("should return 42", function(){
        expect(addition(20,22)).toBe(42);
    });  
    it("should return 26", function(){
        expect(addition(7,19)).toBe(26);
    });
    it("should return error", function(){
       spyOn(window, "alert");
       addition("hitchhikers", "guide");
       expect(window.alert).toHaveBeenCalledWith("error!");
    });
   });
});

describe("Calculator", function() {
    describe("Addition function", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });
    });
});