document.getElementById('btnsubmit').addEventListener('click',async function (e) {
  e.preventDefault();
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  let user = { firstName: fname, lastName: lname }
  await db.collection('users').add(user);
  location.reload();
});

const userlist=document.getElementById('user-list');
//get users
db.collection("users")
.get()
.then((snapshot)=>{
  //console.log(snapshot)
  snapshot.docs.forEach((userDocument)=>{
 //   console.log(userDocument)
    let userItem=document.createElement('li');
    userItem.innerHTML=userDocument.data().firstName+" "+userDocument.data().lastName;
    userlist.appendChild(userItem);
  });
})