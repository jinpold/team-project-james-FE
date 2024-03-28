'use client';
import CompanyColumns from "@/app/organisms/columns/company-columns";
import CompanyRows from "@/app/organisms/rows/company-rows";
import { table } from "console";
const SERVER = 'http://localhost:8080'


export default function compannies() { 
    
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
            </thead>
             <tbody>
                {CompanyRows().map((v, i) => (<CompanyColumns key={i} company={v.company} contact={v.contact} country={v.country} />))}
            </tbody>
        </table>
    );
}