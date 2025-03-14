document.getElementById('btncopy').addEventListener('click', async () => {
    const output = document.getElementById('output'); // Ensure this element exists
    const pass = output ? output.value : ''; // Check if output exists before accessing value
    
    if (pass) {
        try {
            await navigator.clipboard.writeText(pass); // Corrected 'navigator.clipboard'
            alert("Password copied to clipboard");
        } catch (err) {
            console.error("Failed to copy:", err);
            alert("Failed to copy password");
        }
    } else {
        alert("There is no password to copy");
    }
});
const passwordLength = document.querySelector('#length');
const numbers = document.querySelector('#number');
const capital = document.querySelector('#capital');
const small = document.querySelector('#small');
const symbols = document.querySelector('#symbols');
const form = document.querySelector('#frm');
const btn =document.getElementById("submit")

function generateRandomChar( min,max){
    const limit = (max-min)+1;
     return String.fromCharCode(Math.floor(Math.random()*limit)+min);

}
function capitalValue(){
    return generateRandomChar(65,90);
}
function smallValue(){
    return generateRandomChar(97,122);
}
function numbersValue(){
    return generateRandomChar(48,57);
}
function symbolsValue(){
    const symbols="~!#$%^&*()_+}{:<>?|.,/;'\[]-=`"
    return symbols[Math.floor(Math.random()*symbols.length)];
}


const functionArray=[
{
    element:numbers,
    fun:numbersValue
},
{
    element:capital,
    fun:capitalValue
},
{
    element:small,
    fun:smallValue
},
{
    element:symbols,
    fun:symbolsValue
},
                   ];


    btn.addEventListener('click',(e)=>{
        e.preventDefault();
    

    const limit = passwordLength.value;
     let generatePassword = "";
const funArray =  functionArray.filter(({element})=>element.checked);

for( let i =0;i<limit;i++){
    const index=Math.floor(Math.random()*funArray.length);
    const letter = funArray[index].fun();
    generatePassword+=letter;
}
output.value = generatePassword;
    
    });