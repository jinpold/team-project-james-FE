'use client';

import { table } from "console";

const SERVER = 'http://localhost:8080'

interface IArticle {     // 엔티티. 최우선으로 작성
    company: string;
    contact: string;
    country: string;
};

const Article = (props: IArticle) => {      // props가 IArticle의 인스턴스가 됨, 엔티티
    return (
        <tr>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>);
};

export default function articles() {   // 자바의 자료구조 ArrayList<>()
    const articles = [
        { company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany" },
        { company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico" },
        { company: "Ernst Handel", contact: "Roland Mendel", country: "Austria" },
        { company: "Island Trading", contact: "Helen Bennett", country: "UK" },
        { company: "Laughing Bacchus Winecellars", contact: "Yoshi Tannamuri", country: "Canada" },
        { company: "Magazzini Alimentari Riuniti", contact: "Giovanni Rovelli", country: "Italy" }
    ]
    const articleList = articles.map((v, i) =>   // v = Article의 엔티티
        (<Article key={i} company={v.company} contact={v.contact} country={v.country} />));
    return ( // 스키마 부분
        <table>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                {articleList}
            </thead>
        </table>
    );
}