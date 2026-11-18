import fs from 'fs';
export function loadTestData(path : string){
    const data = fs.readFileSync(path,'utf-8');
    return JSON.parse(data);
    }

