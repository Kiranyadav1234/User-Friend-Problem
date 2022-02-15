const dataOfUser=require("./dataOfUser.json");
const printFriendName=(userName)=>{
    let flag=false;
    let friends=[];
    
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
    console.log(friends);
   

}
printFriendName('Tisha Ryan');