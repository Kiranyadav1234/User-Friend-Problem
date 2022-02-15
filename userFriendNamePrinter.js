const dataOfUser=require("./dataOfUser.json");
const printFriendName=(userName)=>{
    let flag=false;
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
            flag=true;

        }
    
    })
    if(!flag)
    {
        throw new Error('User does not exist');
    }

}
 //printFriendName('Barton Mckee');

module.exports=printFriendName;