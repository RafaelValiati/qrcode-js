import chalk from "chalk";
import handle from "./handle.js";


async function createPassword(){
    console.log(chalk.green("password"))
    const passwrod = await handle()
    console.log(passwrod)
}


export default createPassword