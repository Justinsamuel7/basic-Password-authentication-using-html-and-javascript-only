
let usernamepass_details=[
  {
    username:'justin',
    password:'123'
  },
  {
    username:'ronaldo',
    password:'456'
  },
  {
    username:'fede',
    password:'789'
  }
]

function checking(){
  let uninp = document.getElementById('usernameinp').value
  let passinp = document.getElementById('passwordinp').value

  let tempind=usernamepass_details.findIndex((element)=>element['username'] == uninp);

  
  if(tempind > -1){
    
    if(usernamepass_details[tempind]['username']===uninp && usernamepass_details[tempind]['password']===passinp)
    {
      console.log('login')
    }
    else
    {
    console.log('invalid password')
    }
    
  }
  else{
    console.log('invalid username')
  }
}