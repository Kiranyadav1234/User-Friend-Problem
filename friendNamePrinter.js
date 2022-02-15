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
    let friends=[];
    let flag=false;
    
    dataOfUser.forEach(data => {
        if(data.name===userName)
        {
            //console.log(data.friends);
            data.friends.forEach((friend)=>{
                friends.push(friend.name);


            })
            flag=true;
            

        }
    
    })
    if(!flag)
    {
        console.log('user does not exist');
        return;
    }
    console.log(friends);
   }
printFriendName('Barton Mckee');
module.exports=printFriendName;