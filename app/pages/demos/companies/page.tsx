'use client';
import CompaniesColumns from "@/app/component/columns/companies-columns";
import CompaniesRows from "@/app/component/rows/companies-rows";
const SERVER = 'http://localhost:8080'

export default function articles() {
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
                {CompaniesRows().map((v, i) =>
                    (<CompaniesColumns key={i} company={v.company} contact={v.contact} country={v.country} />))}
            </tbody>
        </table>
    );
}