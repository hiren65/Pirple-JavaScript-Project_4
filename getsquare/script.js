let sl1,sl2,sl3,sl4,sl5;
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
                 project on AWS Lambda.
                 </p>
                 <ul class="list1">
                    <li>Sign up for AWS Account</li>
                    <li>Create Our First Lambda Function</li>
                    <li>Test and run it</li>
                    <li>Build a simple function that accepts one number, and returns (or calls back) 
                        the square of that number. Make sure your function is set up according to the 
                        standards for the service you chose.
                    </li>
                    <li> Deploy your Lambda/GFC function live</li>
                    <li>Download the command-line toolkit for the service 
                        you chose so that you can interact with your cloud function.
                    </li>
                    <li>Invoke the cloud function 5 times (with different numbers) to 
                         ensure it's working properly. 
                    </li>
                 </ul>
                 
    `;
    sl2 = `
            <h2>Sign up for AWS Account</h2>
            <ul class="list1">
                <li>Link for aws sign up <a href="https://aws.amazon.com/resources/create-account/">
                    <span>https://aws.amazon.com/resources/create-account/</span></a> 
                </li>
                <li>After Opening Account go to AWS Services. Select your region at top right side</li>
                <li>Lanbda Services (run code without thinking server)</li>
                <li>Select blue print</li>
                <li>Configure function and add Name, Description and runtime Node.js</li>
                <li>Important thing is handler name should getSquare as function name </li>
                <li>In role name select create "New Role from templates"</li>
                <li>Serverless Framework</li>
                <li><img id="serverPtImg" src="../screenshot/serverlessPoints.PNG" alt="serverless points"></li>
            </ul>
    `;


    sl3 = `
            <h2>Serverless</h2>
            <ul class="list1">
                <li><img id="serverlessInstall" src="../screenshot/serverlessInstall.PNG" alt="severless installation"></li>
            </ul>
    `;

sl4 = `   <h3>Getting Started on Serverless CLI with AWS Lambda by Creating a New Function</h3>
                <p>To get started with serverless computing, you will need an AWS account, NPM, 
                   and the Serverless Framework CLI.Using the terminal, follow the steps below to get
                   started:
                </p>
   <pre>
     # Step 0. Make a new folder and navigate into it mkdir serverless && cd serverless
     # Step 1. Install serverless globally npm install serverless -g
     # Step 2. Create a serverless function : serverless create --template getSquare               
     # Step 3. deploy to cloud provider serverless deploy              
     # Your function is deployed!   
    </pre>  
    <h2>GetSquare Function</h2>   
    <p>
       As the name implies, in the function argument is number and it returns square of number.
       As after step 2 of createing template function getsquare you modify
       By modifying handler.js and serverless.yaml and then deploying it via CLI.
    </p>   
    <p>
        The current directory structure should look like this:
        <pre>
            serverless
              - handler.js
              - serverless.yml
        </pre>
    </p>
    <p>
        <h3>Update Handler.js</h3>
            Using your favorite text editor, open handler.js. This is where the core logic is. You will see:
        <pre>
     console.log('Loading function');
    
    module.exports.getSquare = async (event, context) => {
      //console.log('Received event:', JSON.stringify(event, null, 2));
    
      console.log(\`Value\`, event.key1);
      // console.log('value2 =', event.key2);
      //console.log('value3 =', event.key3);
    
      //return event.key1;  // Echo back the first key value
      let mynum = parseInt(event.key1);
      return   "Value square " + pp(mynum);
    
      // throw new Error('Something went wrong');
    };
    let pp = function (num){
      return num*num;
    };
        </pre>
    </p>
    <h3>Update Serverless.yml</h3>
    Open serverless.yml. This is the config file. In the function block, please copy and paste :
    <pre>
        service: getsquare # NOTE: update this with your service name

        # You can pin your service to only deploy with a specific Serverless version
        # Check out our docs for more details
        # frameworkVersion: "=X.X.X"
        
        provider:
          name: aws
          runtime: nodejs8.10
          profile: serverless-admin
          region: ap-southeast-2
        functions:
          getSquare:
            handler: handler.getSquare  
    </pre>
    
    
    `;


    sl5 = `    
      <h2>Deploy Function</h2>
      <pre>
            /////////////set up service serverless ////////////////
            serverless config credentials --provider aws --key xxx --secret yyy --profile severless-admin
            ///Access Key and Secret Key (Privete Key) can found in AWS user account
            #Deploy Function
            $ sls deploy -v
            #Then invoke the function:
            ///or with payload as argument to function///////////////////////
            $ serverless invoke local --function getSquare --data '{"key1":19}'
                  
      </pre>      
      <h2>Five times excution screen cast </h2>
               <div id="mpeg">
               <video width="96%" controls >
               <source src="../vedio/pro4_final.mp4" type="video/mp4">
               Your browser does not support HTML5 video.
               </video>
               </div>
           `;

createPlat.innerHTML = sl1;
containerArr = [sl1,sl2,sl3,sl4,sl5];
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
    //alert(count);
   sliderF(count);
}
reverseBtn.addEventListener("click",reverse);
function reverse() {
    count--;
    //alert(count);
    sliderR(count);
}