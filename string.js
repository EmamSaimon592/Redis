const client = require("./client");

async function init() {
  await client.set("msg:3", "My name is Emam saimon");

  // 10 sec por ei message ta auto delete hoi jabe 👇
  // await client.expire("msg:3", 10);   

  const result = await client.get("msg:3");
  console.log("RESULT===>", result);
  
}
init();