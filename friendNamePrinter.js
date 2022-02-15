const dataOfUser=require("./dataOfUser.json");
const printFriendName=(userName)=>{
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
printFriendName('Kiran');