

const printFriendName=require('../userFriendNamePrinter');

describe('printFriendName function',()=>
{
    it('should check console.log method ',()=>{
      const spy=jest.spyOn(console,'log');
     printFriendName('Barton Mckee');
      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('should check the output printed by console',()=>{
      const spy=jest.spyOn(console,'log');
      printFriendName('Barton Mckee');
      //in order to check the value printed by console.
      expect(spy).toHaveBeenCalledWith( [
        { id: 0, name: 'Cooper Kinney' },
        { id: 1, name: 'Lenore Jefferson' },
        { id: 2, name: 'Krystal Sheppard' }
      ]);
    });
    it('should throw error if a number is given as input',()=>{
      expect(()=>printFriendName(123)).toThrow('Invalid Input');

    });
    it('should throw error if an array is given as input',()=>{
      expect(()=>printFriendName([1,2,3])).toThrow('Invalid Input');

    });
      
     

})