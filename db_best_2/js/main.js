function findTopBlog(messages){
  console.log("source array", messages);
  let arr = {};
  let resultArr = {};
  let name;
  messages.forEach(el=>{
    name = `${el.user.firstName}_${el.user.lastName}`;
    if(name in arr){
      arr[name]++;
    }else{
      arr[name] = 1;
    }
  })
  for(let key in arr){
    if(arr[key] >= 5){
      resultArr[key] = arr[key];
    }
  }
  console.log(" converted array ", arr);
  console.log(" result array ", resultArr);
}

findTopBlog(users_messages);