import Link from "next/link";
interface IArticle{ // 엔티티 -> 최우선으로 작성 (선언부)
 company: string,
 contact: string,
 country: string
}

const Article = (props:any) => { //props가 IArticle의 인스턴스가 됨.
 return (
        <tr>
        <td>{props.company}</td>
        <td>{props.contact}</td>
        <td>{props.country}</td>
        </tr>);
}
export default function Companies() { 

const Companies = [// 자료구조 ArrayList<>() -> 자바의 data임

{company : "Alfreds Futterkiste", contact : "Maria Anders", country : "Germany"},
{company : "Centro comercial Moctezuma", contact : "Francisco Chang", country : "Mexico"},
{company : "Ernst Handel", contact : "Roland Mendel", country : "Austria"},
{company : "Island Trading", contact : "Helen Bennett", country : "UK"},
{company : "Laughing Bacchus Winecellars", contact : "Yoshi Tannamuri", country : "Canada"},
{company : "Magazzini Alimentari Riuniti", contact : "Giovanni Rovelli", country : "Italy"},

]

const companiesList = Companies.map((v,i) => // v = Article의 엔티티
(<Article key ={i} company={v.company} contact={v.contact} country={v.country}/>))
return ( // 스키마 부분
        <div>
        <table>
        <thead>    
        <tr>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        </tr>
        </thead>
        <tbody>     
        {companiesList}
        </tbody>
        </table>
        </div> 
        );
}