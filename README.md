# My First Web Server Using NodeJS
- This project is the construction of a static web server that renders HTML files and connects a server to a port
- The server works fine, and the type of JS used to make this was the CommonJS and not the Module one

### What Actually Is a Web Server?
- A web server is a computer program that processes, stores, renders and website files and information to users on the internet, by following a specific set of instructions, like any other program. 
- It works as a combo of 2 things:
    - a physical computer that hosts the ports and website components, such as the HTML, CSS, and JS files 
    - the software, the program that knows how to get those files and information and send it to the browser through the port, which is what this server does
- The process consists of requests and responses, and everything through the moment when you type an URL on your browser:
    1. Request: the browser (client) sends a request via the internet to the server's IP address using the HTTP protocol (hypertext transfer protocol)
    2. Search: the web server gets the request and searches for the specific file, that in this case, is in the disk. It all happens through the [fs.readfile()] function. The search step is an asynchronous disk read, because when the server receives the request, it asks the OS to find in a specific path of the dist a set of data, that in this case is index.html
    3. Response: the server sends the data from the file read back to the browser
    4. Result: the browser sets up all the data and assembles the files into a website. In this case, there is only a paragraph element of HTML that is rendered in a plain white screen

## How To Run The Server:
**In order to run the server, it is required to:**
- Have Node, Git, and a Terminal installed in the computer
    - Installation link for Node (Windows, Linux and Others): [Download NodeJS](https://nodejs.org/en/download)
    - Installation link for Git (Windows, Linux and Others): [Download Git](https://git-scm.com/)
- Once you have all of those requirements, you need to clone this repository into your computer, using the terminal, by typing: *git clone https://github.com/BelaBelial/MyServerNumber1.git*
- Now that you have the repo in your PC, remain on the terminal, move to the directory of it, and type: *node server.js*
- You should see in the terminal, that the chosen port is running. 
- So got to your browser and type the following URL: *localhost:3000*
- Once you did that, you should have the server running and rendering just a tiny little bit of HTML in the page you're in

## Technologies Used:
- Node and NPM were used to run JS out of the browser, in version 22.17.1 (Node) and 10.9.2 (NPM)
- JS was the main language used to build the server, in the CommmonJS version, and within it, 2 main libraries were used, and those are:
    - fs: is the module responsible for file management, its actual name is File System
    - http: is the node module that provides many functions such as, create HTTP servers and make requests
- IDE: Neovim Version 11.4
