let sl1,sl2,sl3,sl4;
let containerArr = [];
let count = 0;

let platform = document.getElementById("slide_platform");
let createPlat = document.createElement("div");
    createPlat.setAttribute("id","div1");
    platform.appendChild(createPlat);

let createManuover = document.createElement("div");
    createManuover .setAttribute("id","div2");
    platform.appendChild(createManuover);
let reverseBtn = document.createElement("button");
    reverseBtn.setAttribute("id","rbtn");
    createManuover.appendChild(reverseBtn);
    reverseBtn.innerText = " << ";

let forwardBtn = document.createElement("button");
    forwardBtn.setAttribute("id","fbtn");
    createManuover.appendChild(forwardBtn);
    forwardBtn.innerText = " >> ";

    sl1 = `  <h3>Details:</h3>
                 <p>
                 For this assignment you are going to build a simple quick "serverless" 
                 project on either AWS Lambda or Google Cloud Functions (your choice).
                 </p>
                 
    `;
    sl2 = `   <h3>Getting Started on Serverless CLI with AWS Lambda by Creating a New Function</h3>
                <p>To get started with serverless computing, you will need an AWS account, NPM, 
                   and the Serverless Framework CLI.Using the terminal, follow the steps below to get
                   started:
                </p>
   <pre>
     # Step 0. Make a new folder and navigate into it mkdir serverless && cd serverless
     # Step 1. Install serverless globally npm install serverless -g
     # Step 2. Create a serverless function serverless create --template hello-world               
     # Step 3. deploy to cloud provider serverless deploy              
     # Your function is deployed!
         http://xyz.amazonaws.com/hello-world
    </pre>        
    `;
    sl3 = `    <div id="mpeg">
               <video width="96%" controls >
               <source src="../vedio/pro4_final.mp4" type="video/mp4">
               Your browser does not support HTML5 video.
               </video>
               </div>
           `;

createPlat.innerHTML = sl1;
containerArr = [sl1,sl2,sl3,sl4];
function sliderF(xx) {
    //
    //containerArr = [sl1,sl2,sl3,sl4];
    createPlat.innerHTML = containerArr[xx];
}
function sliderR(xx) {
    //xx--;
    //containerArr = [sl1,sl2,sl3,sl4];
    createPlat.innerHTML = containerArr[xx];
}
forwardBtn.addEventListener("click",forward);

function forward() {
    count++;
    alert(count);
   sliderF(count);
}
reverseBtn.addEventListener("click",reverse);
function reverse() {
    count--;
    alert(count);
    sliderR(count);
}