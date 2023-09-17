import http from 'http'
import {promises as fs} from 'fs'

if (process.argv.length < 3) {
    throw new Error("Numero de argumentos invalido")
}
const PORT = process.env.PORT ?? 5555
const dir = process.argv[2]


const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/':
          res.writeHead(200, {'Content-Type': 'text/html'});
          const htmlData = await lerArquivo('index.html')
          res.write(htmlData); //read the file & write the data content
          res.end();
          break;
        
        case '/style.css':
          res.writeHead(200, {'Content-Type': 'text/css'});
          const cssData = await lerArquivo('style.css')
          res.write(cssData); //read the file & write the data content
          res.end();
          break;   
        
        case '/index.js':
          res.writeHead(200, {'Content-Type': 'text/plain'});
          const jsData = await lerArquivo('index.js');
          res.write(jsData); //read the file & write the data content
          res.end();
          break;  
    
        default:
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write('error'); //read the file & write the data content
          res.end();
          break;
       } 
})
server.listen(PORT, () => {
    console.log(`servidor iniciado na porta ${PORT}`)
});


async function lerArquivo(fileName){
    const filepath = `${dir}/${fileName}`
    try {
        return await fs.readFile(filepath, 'utf8');
    }
    catch (err) {
        console.log(err);
    }
}