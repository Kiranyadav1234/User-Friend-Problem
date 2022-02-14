const dataOfUser=require("./dataOfUser.json");
const printFriendName=(userName)=>{
    if(typeof(userName)==='number')
    {
        throw new Error('Invalid Input');
    }
    if(Array.isArray(userName))
    {
        throw new Error('Invalid Input');
    }
    dataOfUser.forEach(data => {
        if(data.name===userName)
        {
            console.log(data.friends);

        }
    
    })

}
 //printFriendName('Barton Mckee');

module.exports=printFriendName;